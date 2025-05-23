'use server';

import {cookies} from 'next/headers';

export async function getUserLocale() {
  return cookies().get('locale')?.value || "ro";
}

export async function setUserLocale(locale) {
  cookies().set('locale', locale);
}