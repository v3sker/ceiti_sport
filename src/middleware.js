import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import {
  AUTH_ROUTES,
  API_AUTH_PREFIX,
  DEFAULT_LOGIN_REDIRECT
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);

  // Always grant access to API and public routes
  if (isApiAuthRoute) {
    return null;
  }

  // If a logged-in user is accessing an auth route, redirect to the DEFAULT_LOGIN_REDIRECT
  // Else always grant access to auth routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return null;
  }

  // If not logged-in and route is not a public route - redirect to log-in
  if (!isLoggedIn && !(isApiAuthRoute || isAuthRoute)) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  // If logged in and route is root - redirect to /dashboard/athlete
  if (isLoggedIn && nextUrl.pathname === '/') {
    return Response.redirect(new URL("/dashboard/athlete", nextUrl));
  }

  // Grant access in all other cases
  return null;
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ]
}

