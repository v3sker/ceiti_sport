import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email) => {
  try {
    return await db.users_verification_tokens.findFirst({ where: { email } })
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token) => {
  try {
    return await db.users_verification_tokens.findFirst({ where: { token } })
  } catch {
    return null;
  }
};