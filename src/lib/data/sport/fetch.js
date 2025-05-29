'use server';

import { db } from '@/lib/db';

export async function fetchSports() {
  try {
    return await db.sport.findMany();
  } catch (err) {
    console.error('[fetchSports] error: ', err.message);
    return { error: err.message };
  }
}