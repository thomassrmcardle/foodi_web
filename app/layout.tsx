import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Foodi',
  description: "Recipes made simple. With an expansive catgeory from around the world. Find what you're craving and make it with easy.",
  twitter: {
    title: 'Foodi',
    description: "Recipes made simple. With an expansive catgeory from around the world. Find what you're craving and make it with easy.",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
              src="/cherub_logo.png"
              priority
            />
          </a>
          <a href="/policies/terms">Terms of Use</a>
          <a href="/policies/privacy">Privacy Policy</a>
        </nav>
        {children}
        <footer>
          <p>Foodi can be downloaded on the iOS App Store</p>
          <div className="flex-wrap-row">
            <div className="nav-column">
              <div><a href="/policies/terms">Terms of Use</a></div>
              <div><a href="/policies/privacy">Privacy Policy</a></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
