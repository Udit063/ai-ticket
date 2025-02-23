import { DefaultSession } from "next-auth";
interface CustomUser extends DefaultSession["user"] {
  id: string; // Add the id property
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    providerAccountId?: string;
    user: CustomUser;
  }

  interface JWT {
    accessToken?: string;
    providerAccountId?: string;
  }
}
