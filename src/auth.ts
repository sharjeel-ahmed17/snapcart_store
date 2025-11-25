import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./lib/db";
import User from "./models/user.model";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        try {
          await connectDb();
          const email = credentials.email;
          const password = credentials.password as string;
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("user does not exists");
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            throw new Error("incorrect password");
          }
          return {
            id: user._id,
            email: user.Email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          throw new Error("login failed");
        }
      },
    }),
    Google({}),
  ],
  callbacks: {
    // user data in user data
    jwt({ token, user }) {
      if (user) {
        token.id = user.id.toString();
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }

      return token;
    },
    session({ session, token }) {
     
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session
    },
    
  },
  pages : {
    signIn : "/login",
    error : "/login"
  },
  session : {
    strategy : "jwt",
    maxAge : 10 * 24 * 60 * 60 * 1000
  },
  secret : process.env.AUTH_SECRET
});
