import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Cherub',
  description: "Recipes made simple. With an expansive catgeory from around the world. Find what you're craving and make it with easy.",
  twitter: {
    title: 'Cherub',
    description: "Recipes made simple. With an expansive catgeory from around the world. Find what you're craving and make it with easy.",
  }
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="items-center">
          <a href="/">
            <Image
              className="nav-logo"
              alt="Cherub Logo Icon"
              src="/Cherub_Logo.png"
              priority
              unoptimized
            />
          </a>
          <a href="/about">About</a>
          <a href="/policies/terms">Terms of Use</a>
          <a href="/policies/privacy">Privacy Policy</a>
        </nav>
        {children}
        <footer>
          <div className="flex-wrap-row">
            <div className="nav-column">
              <div><a href="/policies/terms">Terms of Use</a></div>
              <div><a href="/policies/privacy">Privacy Policy</a></div>
            </div>
            <div className="nav-column">
              <div><a href="https://tiktok.com">Tiktok</a></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
