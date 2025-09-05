import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

export const metadata: Metadata = {
  title: {
    default: 'VintagePoultry',
    template: '%s | VintagePoultry',
  },
  description: 'Premium quality poultry, farm-fresh eggs, and organic meats. Delivered fast. Trusted by chefs and vendors.',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>

          <Header />
          <main>{children}</main>
          <Footer />

        </UserProvider>
      </body>
    </html>
  )
};