import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { getVerificationTokenByEmail } from "@/lib/auth/tokens/fetch";

export const generateVerificationToken = async (email) => {
  const token = uuidv4();
  const maxAge = new Date(new Date().getTime() + (3600 * 1) * 1000); // 1 hour

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({ where: { id: existingToken.id } });
  }

  const verificationToken = await db.users_verification_tokens.create({
    data: {
      email,
      token,
      expires: maxAge,
    }
  });

  return verificationToken;
};