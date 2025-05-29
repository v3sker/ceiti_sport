'use server';

import {db} from "@/lib/db";

export async function deleteAthlete(id) {
  try {
    const athlete = await db.athlete.findUnique({where: { id: parseInt(id) }});
    if (!athlete) return { error: 4 };

    await db.athlete.delete({ where: { id: parseInt(id) } });

    return { success: true };
  } catch (err) {
    console.error(`[deleteAthlete] error: ${err.message}`);
    return { error: err.message };
  }
}