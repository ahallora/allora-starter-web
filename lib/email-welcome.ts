import nodemailer from "nodemailer";
import { render } from "@react-email/render";

import { emailContent, EmailType } from "@/components/email/email-wrapper";
import WelcomeEmail from "@/emails/welcome";
import { Prisma } from "@prisma/client";
import { db } from "./db";

async function sendWelcomeEmail({
  email,
  name,
  flags = {},
}: {
  email: string;
  name: string;
  flags: any;
}) {
  const from = process.env.SMTP_FROM;
  const server = process.env.EMAIL_SERVER;
  const transporter = nodemailer.createTransport(server);

  const flagJson = flags as Prisma.JsonObject;

  if (!flagJson?.welcomeEmail) {
    const welcomeBody = WelcomeEmail({ name });
    const welcomeOptions = {
      from,
      to: email,
      subject: emailContent[EmailType.welcome].title(),
      html: render(welcomeBody),
      text: render(welcomeBody, { plainText: true }),
    };

    await Promise.all([
      db.user.update({
        where: {
          email,
        },
        data: {
          flags: {
            ...flagJson,
            welcomeEmail: true,
          },
        },
      }),
      transporter.sendMail(welcomeOptions),
    ]);
  }
}

export default sendWelcomeEmail;
