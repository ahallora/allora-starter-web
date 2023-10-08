import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
// import GoogleProvider from "next-auth/providers/google";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";

import { db } from "@/lib/db";

import { EmailType, emailContent } from "@/components/email/email-wrapper";
import VerificationTokenEmail from "@/emails/verification-token";
import sendWelcomeEmail from "./email-welcome";

export const authOptions: NextAuthOptions = {
  // huh any! I know.
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  adapter: PrismaAdapter(db as any),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    EmailProvider({
      from: process.env.SMTP_FROM,
      server: process.env.EMAIL_SERVER,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const transporter = nodemailer.createTransport(server);

        // 1. Send verification email
        const body = VerificationTokenEmail({ verificationUrl: url });
        const verificationOptions = {
          from,
          to: email,
          subject: emailContent[EmailType.verification].title(),
          html: render(body),
          text: render(body, { plainText: true }),
        };
        await transporter.sendMail(verificationOptions);
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      await sendWelcomeEmail({
        email: dbUser.email || "",
        name: dbUser.name || "",
        flags: dbUser.flags || {},
      });

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};
