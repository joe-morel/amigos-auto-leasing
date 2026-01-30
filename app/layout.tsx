import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amigos Auto Leasing | Coming Soon",
  description:
    "Skip the dealership stress — let the experts handle it. At Amigos Auto Leasing, we make driving your next car smoother, faster, and smarter.",
  // generator: 'v0.app',
  icons: {
    // icon: [
    //   {
    //     url: '/icon-light-32x32.png',
    //     media: '(prefers-color-scheme: light)',
    //   },
    //   {
    //     url: '/icon-dark-32x32.png',
    //     media: '(prefers-color-scheme: dark)',
    //   },
    //   {
    //     url: '/icon.svg',
    //     type: 'image/svg+xml',
    //   },
    // ],
    apple: "/amigoslogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
