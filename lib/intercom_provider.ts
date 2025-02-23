import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers/oauth";
import axios from "axios";

interface IntercomProfile {
  type: string;
  id: string;
  email: string;
  name: string;
  email_verified: boolean;
  app: {
    type: string;
    id_code: string;
    name: string;
    created_at: number;
    secure: boolean;
    identity_verification: boolean;
    timezone: string;
    region: string;
  };
  avatar: {
    type: string;
    image_url: string;
  };
  has_inbox_seat: boolean;
}

export default function IntercomProvider<P extends IntercomProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "intercom",
    name: "Intercom",
    type: "oauth",
    authorization: {
      url: "https://app.intercom.com/oauth",
      params: { scope: "read" },
    },
    token: "https://api.intercom.io/auth/eagle/token",
    userinfo: {
      async request({ tokens }) {
        // Check if access_token exists
        if (!tokens.access_token) {
          throw new Error("No access token available");
        }

        const response = await axios.get("https://api.intercom.io/me", {
          headers: {
            Authorization: `Bearer ${tokens.access_token}`,
            "Intercom-Version": "2.8",
            Accept: "application/json",
          },
        });
        return response.data;
      },
    },
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.avatar?.image_url,
      };
    },
    checks: ["state"],
    ...options,
  };
}
