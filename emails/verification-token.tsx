import EmailWrapper, { EmailType } from "../components/email/email-wrapper";
import * as React from "react";

interface Props {
  verificationUrl?: string;
}

export const VerificationTokenEmail = ({ verificationUrl }: Props) => (
  <EmailWrapper
    emailType={EmailType.verification}
    verificationUrl={verificationUrl}
  />
);

export default VerificationTokenEmail;
