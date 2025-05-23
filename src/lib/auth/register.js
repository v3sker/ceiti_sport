"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/lib/user/fetch";
import { RegisterSchema } from "@/lib/schema/auth";
import { sendVerificationEmail } from "@/lib/mail/send";
import { generateVerificationToken } from "@/lib/auth/tokens/generate";

export async function register(values) {
  try {
    const validatedFields = await RegisterSchema.validate(values);

    const { email, password, name, surname } = validatedFields;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUserByEmail = await getUserByEmail(email);

    if (existingUserByEmail) {
      return { error: "Пользователь с таким email уже существует!" };
    }

    console.log({
      name, surname, email, hashedPassword
    })

    await db.users.create({
      data: {
        name,
        surname,
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(`${name} ${surname}`, verificationToken.email, verificationToken.token);

    return { success: "На указанную почту отправлено письмо для подтверждения регистрации!" }

  } catch (error) {
    console.error(error)

    if (error.inner) {
      return { error: "Ошибка валидации!", details: error.inner.map(e => e.message) };
    }

    return { error: "Ошибка валидации!" };
  }
}