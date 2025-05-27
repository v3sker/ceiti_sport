'use server';

import { db } from '@/lib/db';
import { getUserByEmail } from "@/lib/user/fetch";
import { getVerificationTokenByToken } from "@/lib/auth/tokens/fetch";

export const newVerification = async ( token ) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) return { error: 1 };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: 2 };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: 3 }

  await db.users.update({
    where: { id: existingUser.id },
    data: {
      email_verified: true,
    }
  })

  await db.users_verification_tokens.delete({ where: { id: existingToken.id } });
  return { success: true }
}