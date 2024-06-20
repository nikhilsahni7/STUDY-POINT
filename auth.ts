// auth.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/../db/index";
import authConfig from "./auth.config";

const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  secret: process.env.NEXTAUTH_SECRET,
});

export { auth, handlers, signIn, signOut };
