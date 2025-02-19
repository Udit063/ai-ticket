// app/api/intercom/tickets/route.ts
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import axios from "axios";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized - No access token" },
        { status: 401 }
      );
    }

    const response = await axios.get("https://api.intercom.io/conversations", {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Intercom-Version": "2.8",
        Accept: "application/json",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(
      "Error fetching Intercom tickets:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to fetch tickets", details: error.message },
      { status: 500 }
    );
  }
}
