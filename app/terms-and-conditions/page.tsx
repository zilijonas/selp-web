import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/SectionContainer";
import ContentSection from "@/components/ContentSection";
import ProseContainer from "@/components/ProseContainer";
import List from "@/components/List";

export const metadata: Metadata = {
  title: "Terms and Conditions - SELP",
  description:
    "Terms and conditions for using SELP - your self-help health assistant. Please read carefully before using our service.",
};

export default function TermsAndConditions() {
  const medicalDisclaimerPoints = [
    "SELP provides health information and symptom analysis for educational and informational purposes only",
    "The Service is not intended to diagnose, treat, cure, or prevent any disease",
    "Never disregard professional medical advice or delay seeking it because of information provided by SELP",
    "In case of medical emergencies, contact emergency services immediately",
    "SELP's AI analysis should not replace consultation with healthcare professionals",
  ];

  const serviceFeatures = [
    "Interact with a 3D human body model to identify areas of discomfort",
    "Answer personalized health questionnaires",
    "Receive AI-powered symptom analysis and health guidance",
    "Track symptoms and health data over time",
    "Access educational health information",
  ];

  const userResponsibilities = [
    "Provide accurate and truthful information about your health and symptoms",
    "Use the Service for personal, non-commercial purposes only",
    "Not share your account credentials with others",
    "Not attempt to reverse engineer, hack, or compromise the Service",
    "Not use the Service to provide medical advice to others",
    "Comply with all applicable laws and regulations",
  ];

  const privacyFeatures = [
    "Health data is encrypted and stored securely",
    "We never sell your personal health information",
    "You maintain ownership of your health data",
    "You can request data deletion at any time",
  ];

  const liabilityLimitations = [
    'SELP provides the Service "as is" without warranties of any kind',
    "We disclaim all liability for any health outcomes or medical decisions made based on information from the Service",
    "Our total liability to you shall not exceed the amount paid by you for the Service in the 12 months preceding the claim",
    "We are not liable for indirect, incidental, special, or consequential damages",
  ];

  return (
    <SectionContainer
      title="Terms and Conditions"
      lastUpdated={new Date("2025-06-11")}
      maxWidth="4xl"
    >
      <ProseContainer>
        <ContentSection title="1. Acceptance of Terms">
          <p>
            By accessing and using SELP ("the Service"), you accept and agree to
            be bound by these Terms and Conditions. If you do not agree to abide
            by the terms, you are not authorized to use or access the Service.
          </p>
        </ContentSection>

        <ContentSection title="2. Medical Disclaimer">
          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
            <p className="font-semibold text-destructive mb-2">
              ⚠️ Important Medical Disclaimer
            </p>
            <p className="text-sm">
              SELP is not a substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of qualified
              healthcare providers with any questions you may have regarding
              medical conditions.
            </p>
          </div>
          <List items={medicalDisclaimerPoints} />
        </ContentSection>

        <ContentSection title="3. Service Description">
          <p>SELP is a self-help health assistant that allows users to:</p>
          <List items={serviceFeatures} />
        </ContentSection>

        <ContentSection title="4. User Responsibilities">
          <p>By using SELP, you agree to:</p>
          <List items={userResponsibilities} />
        </ContentSection>

        <ContentSection title="5. Age Restrictions">
          <p>
            SELP is intended for users aged 18 and older. Users between 13-17
            years old may use the Service only with parental consent and
            supervision. We do not knowingly collect personal information from
            children under 13.
          </p>
        </ContentSection>

        <ContentSection title="6. Privacy and Data Protection">
          <p>
            Your privacy is important to us. Our collection and use of personal
            information is governed by our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
              title="SELP Privacy Policy - How We Protect Your Health Data"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
          <List items={privacyFeatures} />
        </ContentSection>

        <ContentSection title="7. Intellectual Property">
          <p>
            The Service, including its original content, features, and
            functionality, is owned by SELP and is protected by international
            copyright, trademark, and other intellectual property laws.
          </p>
        </ContentSection>

        <ContentSection title="8. Limitation of Liability">
          <p>To the fullest extent permitted by law:</p>
          <List items={liabilityLimitations} />
        </ContentSection>

        <ContentSection title="9. Service Availability">
          <p>
            We strive to maintain high service availability but do not guarantee
            uninterrupted access. The Service may be temporarily unavailable due
            to maintenance, updates, or technical issues.
          </p>
        </ContentSection>

        <ContentSection title="10. Termination">
          <p>
            We reserve the right to terminate or suspend your access to the
            Service at any time, with or without cause or notice, for conduct
            that we believe violates these Terms or is harmful to other users or
            the Service.
          </p>
        </ContentSection>

        <ContentSection title="11. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify users of any material changes via email or through the
            Service. Your continued use after such modifications constitutes
            acceptance of the updated Terms.
          </p>
        </ContentSection>

        <ContentSection title="12. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Lithuania, without regard to its conflict of law provisions.
            Any disputes arising under these Terms shall be subject to the
            exclusive jurisdiction of the courts of Vilnius, Lithuania.
          </p>
        </ContentSection>

        <ContentSection title="13. Contact Information">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:lijonas.it@gmail.com"
              className="text-primary hover:underline"
              title="Email SELP Support - Terms of Service Questions and Legal Concerns"
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
