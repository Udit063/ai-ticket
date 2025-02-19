import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    providerAccountId?: string;
    user: DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string;
    providerAccountId?: string;
  }
}
