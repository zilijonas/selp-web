import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ConsentManager from "@/components/ConsentManager";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SELP - Self help. Your family doctor in your pocket.",
  description:
    "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket.",
  keywords:
    "health, self-assessment, medical, symptoms, healthcare, wellness, self-help, AI health, 3D body model, pain assessment",
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
    title: "SELP - Self help. Your family doctor in your pocket.",
    description:
      "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket.",
    images: [
      {
        url: "/og-image.webp",
        width: 1640,
        height: 720,
        alt: "SELP - Self help. Your family doctor in your pocket.",
        type: "image/webp",
      },
      {
        url: "/og-image.png",
        width: 1640,
        height: 720,
        alt: "SELP - Self help. Your family doctor in your pocket.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@selp",
    creator: "@selp",
    title: "SELP - Self help. Your family doctor in your pocket.",
    description:
      "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket.",
    images: [
      {
        url: "/og-image.webp",
        width: 1640,
        height: 720,
        alt: "SELP - Self help. Your family doctor in your pocket.",
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
        <GoogleAnalytics gaId="G-Y019WXTZ3R" />
      </body>
    </html>
  );
}
