'use server';

import { db } from "@/lib/db";

export async function fetchAthletes(filters) {
  try {
    let orderBy = {};

    switch (filters.orderBy) {
      case "id":
        orderBy = { id: filters.orderDirection };
        break;
      case "created_at":
        orderBy = { created_at: filters.orderDirection };
        break;
      case "updated_at":
        orderBy = { updated_at: filters.orderDirection };
        break;
      case "gender":
        orderBy = { gender: filters.orderDirection };
        break;
      case "weight":
        orderBy = { weight: filters.orderDirection };
        break;
      case "height":
        orderBy = { height: filters.orderDirection };
        break;
    }

    const athletes = await db.athlete.findMany({
      orderBy,
    });

    return athletes.map((athlete) => ({
      ...athlete,
      weight: athlete.weight?.toNumber?.() ?? null,
      height: athlete.height?.toNumber?.() ?? null,
    }));
  } catch (err) {
    console.error(`[fetchAthletes] error: ${err.message}]`);
    return { error: err.message }
  }
}