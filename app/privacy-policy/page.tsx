import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/SectionContainer";
import ContentSection from "@/components/ContentSection";
import ProseContainer from "@/components/ProseContainer";
import List from "@/components/List";

export const metadata: Metadata = {
  title: "Privacy Policy - SELP",
  description:
    "Learn how SELP protects your privacy and handles your health data with our privacy-first design approach.",
};

export default function PrivacyPolicy() {
  const analyticsData = [
    "Pages visited and time spent on each page",
    "How you arrived at our site",
    "Device and browser information",
    "General location information (country/city level)",
  ];

  const consentChoices = [
    <>
      <strong>Accept All:</strong> Allows all cookies including analytics
    </>,
    <>
      <strong>Decline:</strong> Only essential cookies are used
    </>,
    "You can change your preferences at any time by clicking the cookie banner when it appears or by clearing your browser cookies",
  ];

  return (
    <SectionContainer
      title="Privacy Policy"
      lastUpdated={new Date("2025-06-11")}
      maxWidth="4xl"
    >
      <ProseContainer>
        <ContentSection title="Cookie Usage">
          <p>
            SELP uses cookies and similar technologies to enhance your browsing
            experience and provide our services. Here's how we use cookies:
          </p>

          <ContentSection title="Essential Cookies" titleLevel="h3">
            <p>
              These cookies are necessary for the website to function and cannot
              be switched off. They include cookies that remember your cookie
              preferences and enable core website functionality.
            </p>
          </ContentSection>

          <ContentSection title="Analytics Cookies" titleLevel="h3">
            <p>
              With your consent, we use Google Analytics to understand how
              visitors interact with our website. This helps us improve our
              services and user experience. These cookies collect information
              such as:
            </p>
            <List items={analyticsData} />
          </ContentSection>
        </ContentSection>

        <ContentSection title="Your Consent Choices">
          <p>You have control over cookie usage on our website:</p>
          <List items={consentChoices} />
        </ContentSection>

        <ContentSection title="Data Protection">
          <p>
            We are committed to protecting your privacy and comply with
            applicable data protection laws including GDPR, CCPA, and other
            privacy regulations. We never sell your personal information to
            third parties.
          </p>
        </ContentSection>

        <ContentSection title="Newsletter Data">
          <p>
            When you subscribe to our newsletter, we collect and store your
            email address to send you updates about SELP. You can unsubscribe at
            any time using the link provided in our emails.
          </p>
        </ContentSection>

        <ContentSection title="Contact Us">
          <p>
            If you have questions about this Privacy Policy or our data
            practices, please contact us at{" "}
            <a
              href="mailto:lijonas.it@gmail.com"
              className="text-primary hover:underline"
              title="Email SELP Support - Privacy Policy Questions and Data Concerns"
            >
              lijonas.it@gmail.com
            </a>
            .
          </p>
        </ContentSection>

        <div className="mt-8 pt-6 border-t">
          <Link
            href="/"
            className="text-primary hover:underline"
            title="Return to SELP Home - AI Health Assistant"
          >
            ← Back to Home
          </Link>
        </div>
      </ProseContainer>
    </SectionContainer>
  );
}
