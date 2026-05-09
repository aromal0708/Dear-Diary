import CredentialsProvider from "next-auth/providers/credentials";
import pool from "./db";
import bcrypt from "bcrypt";
import { AuthOptions, Session } from "next-auth";

export const authOptions:AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        if(!credentials){
            throw new Error("No Credentials Provided");
        }
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const [user]: any = await pool.query(
          `select * from users where email= ?`,
          [email],
        );

        if (user.length < 0) {
          throw new Error("User Not Found");
        }
        const isPasswordCorrect = await bcrypt.compare(
          password,
          user[0].password,
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid Password");
        }

        return {
            id:user[0].id,
            email:user[0].email,
            name:user[0].name
        }
      },
    }),
    
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session:{
    strategy:"jwt",
    maxAge: 7 * 24 * 60 * 60, // 
  },
  pages:{
    signIn:'/login'
  },

};
