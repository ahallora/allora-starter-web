import EmailWrapper, { EmailType } from "./../components/email/email-wrapper";
import * as React from "react";

interface Props {
  name?: string;
}

export const WelcomeEmail = ({ name }: Props) => (
  <EmailWrapper emailType={EmailType.welcome} name={name} />
);

export default WelcomeEmail;
