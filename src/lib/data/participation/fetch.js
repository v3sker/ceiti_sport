'use server';

import {db} from "@/lib/db";

export async function fetchParticipations(filters) {
  try {
    const data = await db.athlete_competition.findMany({
      include: {
        competition: true,
        athlete: true
      },
      where: {
        competition: {
          level: filters.level ? filters.level : undefined,
        }
      }
    });

    return data.map(item => {
      delete item.athlete.height;
      delete item.athlete.weight;
      return item
    })
  } catch (err) {
    console.error('[fetchParticipations] error: ', err.message);
    return { error: err.message };
  }
}