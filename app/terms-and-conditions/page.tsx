import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions - SELP",
  description:
    "Terms and conditions for using SELP - your self-help health assistant. Please read carefully before using our service.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 md:px-6 py-20">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Terms and Conditions
          </h1>

          <div className="text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: {new Date("2025-06-11").toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using SELP ("the Service"), you accept and
                agree to be bound by these Terms and Conditions. If you do not
                agree to abide by the terms, you are not authorized to use or
                access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Medical Disclaimer
              </h2>
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
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  SELP provides health information and symptom analysis for
                  educational and informational purposes only
                </li>
                <li>
                  The Service is not intended to diagnose, treat, cure, or
                  prevent any disease
                </li>
                <li>
                  Never disregard professional medical advice or delay seeking
                  it because of information provided by SELP
                </li>
                <li>
                  In case of medical emergencies, contact emergency services
                  immediately
                </li>
                <li>
                  SELP's AI analysis should not replace consultation with
                  healthcare professionals
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Service Description
              </h2>
              <p>SELP is a self-help health assistant that allows users to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Interact with a 3D human body model to identify areas of
                  discomfort
                </li>
                <li>Answer personalized health questionnaires</li>
                <li>Receive AI-powered symptom analysis and health guidance</li>
                <li>Track symptoms and health data over time</li>
                <li>Access educational health information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. User Responsibilities
              </h2>
              <p>By using SELP, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Provide accurate and truthful information about your health
                  and symptoms
                </li>
                <li>
                  Use the Service for personal, non-commercial purposes only
                </li>
                <li>Not share your account credentials with others</li>
                <li>
                  Not attempt to reverse engineer, hack, or compromise the
                  Service
                </li>
                <li>Not use the Service to provide medical advice to others</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Age Restrictions
              </h2>
              <p>
                SELP is intended for users aged 18 and older. Users between
                13-17 years old may use the Service only with parental consent
                and supervision. We do not knowingly collect personal
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Privacy and Data Protection
              </h2>
              <p>
                Your privacy is important to us. Our collection and use of
                personal information is governed by our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Health data is encrypted and stored securely</li>
                <li>We never sell your personal health information</li>
                <li>You maintain ownership of your health data</li>
                <li>You can request data deletion at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Intellectual Property
              </h2>
              <p>
                The Service, including its original content, features, and
                functionality, is owned by SELP and is protected by
                international copyright, trademark, and other intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Limitation of Liability
              </h2>
              <p>To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  SELP provides the Service "as is" without warranties of any
                  kind
                </li>
                <li>
                  We disclaim all liability for any health outcomes or medical
                  decisions made based on information from the Service
                </li>
                <li>
                  Our total liability to you shall not exceed the amount paid by
                  you for the Service in the 12 months preceding the claim
                </li>
                <li>
                  We are not liable for indirect, incidental, special, or
                  consequential damages
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Service Availability
              </h2>
              <p>
                We strive to maintain high service availability but do not
                guarantee uninterrupted access. The Service may be temporarily
                unavailable due to maintenance, updates, or technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to the
                Service at any time, with or without cause or notice, for
                conduct that we believe violates these Terms or is harmful to
                other users or the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                notify users of any material changes via email or through the
                Service. Your continued use after such modifications constitutes
                acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of Lithuania, without regard to its conflict of law
                provisions. Any disputes arising under these Terms shall be
                subject to the exclusive jurisdiction of the courts of Vilnius,
                Lithuania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at{" "}
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
