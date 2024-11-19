import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

const prisma  = new PrismaClient();
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
})