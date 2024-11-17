import NextAuth from "next-auth";

export default { handler, signIn, signOut, auth } = NextAuth({
  providers: [],
});
