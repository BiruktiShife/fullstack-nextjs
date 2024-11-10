import User from "@/model/user";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    CredentialProvider({
      id: "credentials",
      name: "Credentials",

      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Incorrect credentials.");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  // pages: {
  //   error: "dashboard/login",
  // },
});

export { handler as POST, handler as GET };
