import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import ConsentManager from "@/components/ConsentManager";
import { FloatingNewsletterCTA } from "@/app/_components/FloatingNewsletterCTA";
import { ExitIntentPopup } from "./_components/ExitIntentPopup";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SELP - Self help. Your family doctor in your pocket.",
  description:
    "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket. Free AI-powered health assessment tool.",
  keywords:
    "health, self-assessment, medical, symptoms, healthcare, wellness, self-help, AI health, 3D body model, pain assessment, symptom checker, health assistant, medical advice, digital health, telemedicine, health tech, preventive care, health monitoring, personal health, medical symptoms, health analysis, AI doctor, virtual health, health guidance, medical consultation, health tracking, symptom analysis, health management, medical guidance, health technology",
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
      "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket. Free AI-powered health assessment tool.",
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
      "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket. Free AI-powered health assessment tool.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "SELP",
                applicationCategory: "HealthApplication",
                operatingSystem: "iOS, Android",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
                description:
                  "SELP is your self-help health assistant. Tap the body part that hurts, answer tailored questions, and get a doctor-level analysis — all in your pocket.",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  ratingCount: "1000",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is SELP?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SELP is an AI-powered health assistant that helps you understand your symptoms and get personalized health insights. Simply tap where it hurts on our 3D body model, answer some questions, and get a doctor-level analysis.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is SELP free to use?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, SELP is completely free to use. We believe in making healthcare accessible to everyone.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does SELP protect my privacy?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SELP uses a privacy-first design approach. Your health data is encrypted and never shared with third parties. We only use your information to provide you with personalized health insights.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can SELP replace my doctor?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No, SELP is not a replacement for professional medical advice. It's designed to help you understand your symptoms and provide guidance, but you should always consult with healthcare professionals for medical concerns.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "When will SELP be available?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SELP is currently in development. You can register for our beta program to get early access when we launch.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        <CookieConsentBanner />
        <FloatingNewsletterCTA />
        <ExitIntentPopup />
        <GoogleAnalytics gaId="G-Y019WXTZ3R" />
      </body>
    </html>
  );
}
