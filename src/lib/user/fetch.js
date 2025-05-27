import { db } from '@/lib/db';

export async function getUserByEmail(email) {
  try { 
    if (!email) throw new Error('Email is required');

    return await db.users.findUnique({ where: { email } });
   } catch (err) {
    console.error('[getUserByEmail] error: ', err);
    return null;
  }
}

export async function getUserById(id) {
  try { 
    if (!id) throw new Error('ID is required');

    return await db.users.findUnique({ where: { id: parseInt(id) } });
   } catch (err) {
    console.error(`[getUserById] error: ${err.message}`);
    return null;
  }
}