import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ConsentManager from "@/components/ConsentManager";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SELP - Health Self-Assessment App",
  description:
    "Tap a body part, answer smart, personalized questions, and get insights that feel like talking to your family doctor.",
  keywords: "health, self-assessment, medical, symptoms, healthcare, wellness",
  authors: [{ name: "SELP Team" }],
  creator: "SELP",
  publisher: "SELP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://selp.life"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://selp.life",
    siteName: "SELP",
    title: "SELP - Your Family Doctor In Your Pocket",
    description:
      "Self Help. Your Family Doctor In Your Pocket. Tap a body part, answer smart, personalized questions, and get insights that feel like talking to your family doctor.",
    images: [
      {
        url: "/og-image.webp",
        width: 1640,
        height: 720,
        alt: "SELP - Self Help. Your Family Doctor In Your Pocket.",
        type: "image/webp",
      },
      {
        url: "/og-image.png",
        width: 1640,
        height: 720,
        alt: "SELP - Self Help. Your Family Doctor In Your Pocket.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@selp",
    creator: "@selp",
    title: "SELP - Your Family Doctor In Your Pocket",
    description:
      "Self Help. Your Family Doctor In Your Pocket. Tap a body part, answer smart, personalized questions, and get insights that feel like talking to your family doctor.",
    images: [
      {
        url: "/og-image.webp",
        width: 1640,
        height: 720,
        alt: "SELP - Self Help. Your Family Doctor In Your Pocket.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/selp-icon.svg" type="image/svg+xml" />
        <ConsentManager />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsentBanner />
      </body>
      <GoogleAnalytics gaId="G-Y019WXTZ3R" />
    </html>
  );
}
