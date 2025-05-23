import { db } from "@/lib/db";
import NextAuth from "next-auth";
import { getUserById } from "@/lib/user/fetch";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      const existingUser = await getUserById(user.id);

      // Fallback to prevent unattended access
      if (!existingUser || !existingUser.email_verified) return false;

      return user;
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.name) {
        session.user.name = token.name;
      }

      if (session.user && token.surname) {
        session.user.surname = token.surname;
      }

      if (session.user && token.role) {
        session.user.role = token.role;
      }

      if (session.user && token.email) {
        session.user.email = token.email;
      }

      if (session.user && token.emailVerified) {
        session.user.emailVerified = token.email_verified;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      // Inject user data from DB into JWT -> session
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.id = existingUser.id;
      token.name = existingUser.name;
      token.surname = existingUser.surname;
      token.role = existingUser.user_role;
      token.email = existingUser.email;
      token.emailVerified = existingUser.email_verified;

      return token;
    },
  },
  ...authConfig
})