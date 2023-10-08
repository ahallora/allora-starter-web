import { siteConfig } from "@/config/site";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "";

export enum EmailType {
  "welcome" = "welcome",
  "verification" = "verification",
}

export const emailContent = {
  [EmailType.welcome]: {
    title: () => "Welcome!",
    content: ({ name }: { name?: string }) => (
      <>
        <Text style={text}>
          Hey <strong>{name}</strong>!
        </Text>
        <Text style={text}>
          Welcome to allora-starter-web. A opionated next.js starter template
          built by Anders Holm-Jensen and based on shadcn taxonomy.
        </Text>

        <Button href={baseUrl} style={button}>
          <div
            style={{
              padding: "12px 20px",
            }}
          >
            Start building
          </div>
        </Button>
      </>
    ),
  },
  [EmailType.verification]: {
    title: () => "Sign in",
    content: ({ verificationUrl }: { verificationUrl?: string }) => (
      <>
        <Text style={text}>
          Here is your magic link to sign you into {baseUrl}
        </Text>
        <Text style={text}>
          <i>If you did not request this email you can safely ignore it.</i>
        </Text>
        <Button href={verificationUrl} style={button}>
          <div
            style={{
              padding: "12px 20px",
            }}
          >
            Sign In
          </div>
        </Button>
      </>
    ),
  },
};

export const EmailWrapper = ({
  emailType,
  ...props
}: {
  emailType: keyof typeof EmailType;
  [key: string]: any;
}) => (
  <Html>
    <Head />
    <Preview>{emailContent[emailType].title()}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/apple-touch-icon.png`}
          width={32}
          height={32}
          alt="logo"
        />

        <Text style={title}>{emailContent[emailType].title()}</Text>

        <Section style={section}>
          {emailContent[emailType].content(props)}
        </Section>
        <Text style={links}>
          <Link href={`${baseUrl}/terms`} style={link}>
            Terms of Service
          </Link>{" "}
          ・{" "}
          <Link href={`${baseUrl}/about`} style={link}>
            Contact support
          </Link>
        </Text>

        <Text style={footer}>
          {siteConfig.company} - {siteConfig.address}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailWrapper;

const main = {
  backgroundColor: "#ffffff",
  color: "#0f172a",
  fontFamily:
    "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
};

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "2rem",
  lineHeight: 1.25,
  fontWeight: "bold",
  letterSpacing: "-.05em",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
  fontSize: "0.9rem",
};

const button = {
  fontSize: "0.9rem",
  fontWeight: "500",
  backgroundColor: "#0f172a",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "6px",
  marginTop: 8,
  display: "block",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "0.75rem",
};

const footer = {
  color: "#6a737d",
  fontSize: "0.75rem",
  textAlign: "center" as const,
  marginTop: "60px",
};
