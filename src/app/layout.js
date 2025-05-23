import { getLocale } from "next-intl/server";
import { SessionProvider } from "next-auth/react"; 
import { NextIntlClientProvider } from "next-intl";

import { Toaster } from "react-hot-toast";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "Sport",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  
  return (
    <html lang={locale}>
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
