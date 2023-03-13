import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    // session({ session, user }) {
    //   if (session.user) {
    //     session.user.id = user.id;
    //   }
    //   return session;
    // },

    // @ts-expect-error
    async session({ session, token, user }) {
      if (!session) return;
      if (!session.user) return;
      const userData = await prisma.user.findUnique({
        where: {
          // @ts-expect-error
          email: session.user.email
        }
      });
      // @ts-expect-error
      session.user.id = userData.id;
      // @ts-expect-error
      session.user.company = userData.company;
      // @ts-expect-error
      session.user.company_type = userData.company_type;
      // @ts-expect-error
      session.user.service_provider = userData.service_provider;
      return session
      // return {
      //   session: {
      //     user: {
      //       id: userData?.id,
      //       venue: userData?.venue,
      //       email: userData?.email
      //     }
      //   }
      // };
      // async session({ session, token, user }) {
      //   // Send properties to the client, like an access_token and user id from a provider.
      //   session.accessToken = token.accessToken
      //   session.user.id = token.id

      //   return session
      // }



    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
