import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <nav>
        <a href="/">{'[LOGO]'}</a>
        <a href="/policies/terms">Terms of Use</a>
        <a href="/policies/privacy">Privacy Policy</a>
      </nav>
      <body className="min-h-full flex flex-col">{children}</body>
      <footer>
        <p>This will be a footer.</p>
      </footer>
    </html>
  );
}
