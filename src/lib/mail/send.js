"use server";

import { Resend } from "resend";
import VerificationMail from "@/components/mail/VerificationMail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (fullName, email, token) => {
  const appUrl = process.env.ON_DEV ? 'http://localhost:3000' : process.env.APP_URL
  const emailConfirmationLink = `${appUrl}/auth/mail-verification?token=${token}`

  try {
    await resend.emails.send({
      from: 'CEITI Sport <no-reply@v3.md>',
      to: [email],
      subject: 'CEITI Sport | Email Verification',
      react:
        <VerificationMail
          fullName={fullName}
          emailConfirmationLink={emailConfirmationLink}
        />,
    })
  } catch (error) {
    console.error(error);
  }
}