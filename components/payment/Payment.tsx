"use client";
import React, { use, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutPage } from "./CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { redirect, useSearchParams } from "next/navigation";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const Payment = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  useEffect(() => {
    console.log("plan:", plan);

    if (plan === "Free Tier") {
      redirect("/dashboard");
    }
  }, [plan]);

  const amount = 49;
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
};
