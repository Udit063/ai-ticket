import { pricingPlans } from "@/constants/pricingPlans";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`⚠️ Webhook signature verification failed:`, err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  const eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        console.log(`Payment received!`);
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`Payment received! Session ID: ${session.id}`);

        const fullSession = await stripe.checkout.sessions.retrieve(
          session.id,
          { expand: ["line_items"] }
        );

        const customerId = fullSession.customer as string;
        const customerEmail = fullSession.customer_details?.email;

        if (!customerEmail) {
          console.error("No customer email found in session");
          return NextResponse.json(
            { error: "No customer email found" },
            { status: 400 }
          );
        }

        const lineItems = fullSession.line_items?.data;
        if (!lineItems || lineItems.length === 0) {
          return NextResponse.json(
            { error: "No line items found" },
            { status: 400 }
          );
        }

        const priceId = lineItems[0].price?.id;
        if (!priceId) {
          return NextResponse.json(
            { error: "No price ID found" },
            { status: 400 }
          );
        }

        const plan = pricingPlans.find((p) => p.priceId === priceId);

        if (!plan) {
          console.error("No matching plan found for price ID:", priceId);
          return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
        }

        const { data: userData, error: userError } = await supabase
          .from("users")
          .select("id")
          .eq("email", customerEmail)
          .single();

        if (userError || !userData) {
          console.error("User not found in auth.users:", userError);
          return NextResponse.json(
            { error: "User not found" },
            { status: 404 }
          );
        }
        console.log("user data", userData);

        const userId = userData.id;

        const { error: updateError } = await supabase
          .from("users")
          .update({
            stripe_customer_id: customerId,
            subscription_status: "active",
            price_id: priceId,
            subscription_end_date: new Date(
              session.expires_at * 1000
            ).toISOString(),
          })
          .eq("id", userId);

        if (updateError) {
          console.error("Failed to update user:", updateError);
          return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
          );
        }

        console.log(
          `Successfully updated subscription status for user: ${customerEmail}`
        );
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = (await stripe.customers.retrieve(
          subscription.customer as string
        )) as Stripe.Customer;

        const customerEmail = customer.email;

        if (!customerEmail) {
          console.error("No customer email found in subscription");
          return NextResponse.json(
            { error: "No customer email found" },
            { status: 400 }
          );
        }

        const { data: userData, error: userError } = await supabase
          .from("auth.users")
          .select("id")
          .eq("email", customerEmail)
          .single();

        if (userError || !userData) {
          console.error("User not found in auth.users:", userError);
          return NextResponse.json(
            { error: "User not found" },
            { status: 404 }
          );
        }

        const userId = userData.id;

        const { error: updateError } = await supabase
          .from("users")
          .update({
            subscription_status: "canceled",
            subscription_end_date: new Date().toISOString(),
          })
          .eq("id", userId);

        if (updateError) {
          console.error("Failed to update user:", updateError);
          return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
          );
        }

        console.log(
          `Successfully updated subscription status for user: ${customerEmail}`
        );
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
