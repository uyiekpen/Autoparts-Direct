import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Mono, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Autoparts Direct - Get Auto Parts Fast in Nigeria",
  description:
    "Find the right auto parts quickly anywhere in Nigeria using SMS and AI technology. Instant assistance for all your automotive needs.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} `}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
