"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/lib/schema/auth";
import { getUserByEmail } from "@/lib/user/fetch";
import { sendVerificationEmail } from "@/lib/mail/send";
import { getVerificationTokenByEmail } from "@/lib/auth/tokens/fetch";
import { generateVerificationToken } from "@/lib/auth/tokens/generate";

export async function login(values) {
  try {
    const validatedFields = await LoginSchema.validate(values);
    const { email, password } = validatedFields;

    const existingUserByEmail = await getUserByEmail(email);

    // If user not found
    if (!existingUserByEmail) return { error: "Неверный логин, пароль или T-OTP!" };

    // If email not verified
    if (!existingUserByEmail.email_verified) {
      const currentVerificationToken = await getVerificationTokenByEmail(email);

      if (!currentVerificationToken || currentVerificationToken.expires < new Date()) {
        const newVerificationToken = await generateVerificationToken(email);
        await sendVerificationEmail(existingUserByEmail.name, newVerificationToken.email, newVerificationToken.token);
        return { error: "Email not verified! Sent new verification email." };
      }

      return { error: "Email not verified! Check your inbox." };
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    return { success: 'Авторизация прошла успешно! Перенаправляем..' };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.error(`[SECURITY] incorrect password logging into ${values.email}, timestamp: ${new Date()}`);
          return { error: "Неверный логин, пароль или T-OTP!" }
        }
        case "AccessDenied":
          return { error: `Доступ запрещён системой безопасности! Убедитесь что ваша почта подтверждена.` }
        default:
          console.error('login error: ', error)
          return { error: `Ошибка авторизации. Обратитесь к администратору! Ошибка: ${error.type}` }
      }
    }

    console.error('login error: ', error)
    if (error.inner) {
      return { error: "Ошибка валидации! ", details: error.inner.map(e => e.message) };
    }

    return { error: "Ошибка валидации!" };
  }
}