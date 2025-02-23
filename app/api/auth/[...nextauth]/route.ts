import NextAuth from "next-auth";
import IntercomProvider from "@/lib/intercom_provider";

const handler = NextAuth({
  providers: [
    IntercomProvider({
      clientId: process.env.INTERCOM_CLIENT_ID!,
      clientSecret: process.env.INTERCOM_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Save the access token to the token object
      if (account) {
        token.accessToken = account.access_token;
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken as string;
      session.providerAccountId = token.providerAccountId as string;
      return session;
    },
  },
  pages: {
    signIn: "/onboarding",
  },
});

export { handler as GET, handler as POST };
