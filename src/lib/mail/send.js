"use server";

import { Resend } from "resend";
import VerificationMail from "@/components/mail/VerificationMail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (fullName, email, token) => {
  const emailConfirmationLink = `${process.env.APP_URL}/auth/new-verification?token=${token}`

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