import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  // Use cookies() directly without awaiting
  const supabase = createRouteHandlerClient({ cookies: cookies() });
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL("/onboarding?success=intercom_connected", request.url)
    );
  }

  try {
    // Exchange code for access token
    const tokenResponse = await axios.post(
      "https://api.intercom.io/auth/eagle/token",
      {
        code,
        client_id: process.env.NEXT_PUBLIC_INTERCOM_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_INTERCOM_CLIENT_SECRET,
        redirect_uri: `${
          new URL(request.url).origin
        }/api/auth/intercom/callback`,
        grant_type: "authorization_code",
      }
    );

    const { access_token } = tokenResponse.data;

    if (!access_token) {
      return NextResponse.redirect(
        new URL("/onboarding?success=intercom_connected", request.url)
      );
    }

    // Get current user session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
      return NextResponse.redirect(
        new URL("/login?success=intercom_connected", request.url)
      );
    }

    const { error } = await supabase
      .from("users")
      .update({
        is_intercom_connected: true,
        intercom_token: access_token,
        intercom_connected_at: new Date().toISOString(),
      })
      .eq("id", session.user.id);

    if (error) {
      console.error("Error updating profile:", error);
      return NextResponse.redirect(
        new URL("/onboarding?error=database_error", request.url)
      );
    }

    return NextResponse.redirect(
      new URL("/onboarding?success=intercom_connected", request.url)
    );
  } catch (error) {
    console.error("Intercom OAuth error:", error);
    return NextResponse.redirect(
      new URL("/onboarding?success=intercom_connected", request.url)
    );
  }
}
