import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";


export const metadata: Metadata = {
  title: 'VintagePoultry | Premium Poultry Delivered Fresh',
  description: 'Discover farm-fresh poultry, organic eggs, and premium meats delivered with unmatched quality and speed. Trusted by 500+ happy customers.',
  keywords: ['organic chicken', 'farm fresh eggs', 'premium poultry', 'poultry delivery India', 'pasture raised', 'vintage poultry'],
  openGraph: {
    title: 'VintagePoultry | Premium Poultry Delivered Fresh',
    description: 'Join over 500 happy customers who trust VintagePoultry for high-quality, farm-fresh poultry and eggs.',
    url: 'https://yourdomain.com/',
    siteName: 'VintagePoultry',
    images: [
      {
        url: 'https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg',
        width: 800,
        height: 600,
        alt: 'Free-range chicken from VintagePoultry',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VintagePoultry | Premium Poultry Delivered Fresh',
    description: 'Organic, antibiotic-free poultry and eggs — fresh from our farms to your doorstep.',
    images: ['https://res.cloudinary.com/ddgmru7d1/image/upload/v1756299859/chicken_01_dll8od.jpg'],
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

          <p className="text-center py-1">© 2024 VintagePoultry. All rights reserved.</p>

        </UserProvider>
      </body>
    </html>
  )
};