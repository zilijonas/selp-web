import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - SELP",
  description:
    "Learn how SELP protects your privacy and handles your health data with our privacy-first design approach.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 md:px-6 py-20">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: {new Date("2025-06-11").toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Cookie Usage
              </h2>
              <p>
                SELP uses cookies and similar technologies to enhance your
                browsing experience and provide our services. Here's how we use
                cookies:
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                Essential Cookies
              </h3>
              <p>
                These cookies are necessary for the website to function and
                cannot be switched off. They include cookies that remember your
                cookie preferences and enable core website functionality.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                Analytics Cookies
              </h3>
              <p>
                With your consent, we use Google Analytics to understand how
                visitors interact with our website. This helps us improve our
                services and user experience. These cookies collect information
                such as:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Pages visited and time spent on each page</li>
                <li>How you arrived at our site</li>
                <li>Device and browser information</li>
                <li>General location information (country/city level)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Your Consent Choices
              </h2>
              <p>You have control over cookie usage on our website:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Accept All:</strong> Allows all cookies including
                  analytics
                </li>
                <li>
                  <strong>Decline:</strong> Only essential cookies are used
                </li>
                <li>
                  You can change your preferences at any time by clicking the
                  cookie banner when it appears or by clearing your browser
                  cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Protection
              </h2>
              <p>
                We are committed to protecting your privacy and comply with
                applicable data protection laws including GDPR, CCPA, and other
                privacy regulations. We never sell your personal information to
                third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Newsletter Data
              </h2>
              <p>
                When you subscribe to our newsletter, we collect and store your
                email address to send you updates about SELP. You can
                unsubscribe at any time using the link provided in our emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us at{" "}
                <a
                  href="mailto:lijonas.it@gmail.com"
                  className="text-primary hover:underline"
                >
                  lijonas.it@gmail.com
                </a>
                .
              </p>
            </section>

            <div className="mt-8 pt-6 border-t">
              <Link href="/" className="text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
