import NextAuth from "next-auth";
import IntercomProvider from "@/lib/intercom_provider";

const authOptions = {
  providers: [
    IntercomProvider({
      clientId: process.env.NEXT_PUBLIC_INTERCOM_CLIENT_ID!,
      clientSecret: process.env.INTERCOM_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.providerAccountId = token.providerAccountId as string;
      return session;
    },
  },
  pages: {
    signIn: "/onboarding",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
