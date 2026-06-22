import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "hello@veloura.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Dummy user authentication
        if (credentials?.email === "demo@veloura.com" && credentials?.password === "password123") {
          return { id: "1", name: "Demo User", email: "demo@veloura.com" };
        }
        
        // Return null if user data could not be retrieved
        return null;
      }
    })
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "veloura_fallback_secret_key_12345",
});

export { handler as GET, handler as POST };
