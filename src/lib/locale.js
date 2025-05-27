'use server';

import { cookies } from "next/headers";

export async function getUserLocale() {
  return (await cookies()).get('locale')?.value || 'ro';
}

export async function setUserLocale(locale) {
  (await cookies()).set('locale', locale);
}