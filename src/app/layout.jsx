import { getLocale } from "next-intl/server";

import { Toaster } from "react-hot-toast";
import { GeistSans } from "geist/font/sans";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";

export const metadata = {
  title: "Sport",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${GeistSans.className} antialiased min-h-screen`}
      >
        <SessionProvider>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </SessionProvider>

        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
