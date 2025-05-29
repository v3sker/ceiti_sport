'use server';

import { db } from "@/lib/db";
import { NewAthleteSchema } from "@/lib/schema/athlete";

export async function createAthlete(values) {
  try {
    const validatedData = await NewAthleteSchema.validate(values);
    if (!validatedData) throw new Error('Validation failed');

    const birthdate = new Date(`${validatedData.birthdate.year}-${validatedData.birthdate.month}-${validatedData.birthdate.day}`)

    await db.athlete.create({
      data: {
        name: validatedData.name,
        surname: validatedData.surname,
        gender: validatedData.gender,
        birthdate,
        height: validatedData.height === "" ? undefined : validatedData.height,
        weight: validatedData.weight === "" ? undefined : validatedData.weight,
        users_athlete_created_byTousers: {
          connect: { id: 1 }
        },
        sport: {
          connect: { name: validatedData.sport }
        },
        users_athlete_updated_byTousers: {
          connect: { id: 1 }
        }
      }
    })

    return { success: true }
  } catch (err) {
    console.error('[createAthlete] error: ', err);
    return { error: err.message }
  }
}