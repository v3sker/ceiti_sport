/**
 * An array of routes that are used for authentication.
 * This routes will redirect logged-in users to the home page.
 */
export const AUTH_ROUTES = [
  "/auth/login",
  "/auth/forgot-password",
  "/auth/mail-verification",
];

/**
 * Route prefix for APIs.
 * Routes that start with this prefix are used for
 * authentication and other purposes.
 */
export const API_AUTH_PREFIX = "/api";

/**
 * The default redirect path after logging-in
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";