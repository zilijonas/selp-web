import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/SectionContainer";
import ContentSection from "@/components/ContentSection";
import ProseContainer from "@/components/ProseContainer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - SELP",
  description:
    "Find answers to common questions about SELP - your AI-powered health assistant. Learn about features, privacy, and how to use the app.",
};

export default function FAQ() {
  const generalQuestions = [
    {
      question: "What is SELP?",
      answer:
        "SELP (short for Self-Help) is an intelligent mobile health companion that helps you understand, track, and respond to bodily discomfort through a fully interactive 3D model and AI-powered analysis. It's like having a family doctor in your pocket.",
    },
    {
      question: "How does SELP work?",
      answer:
        "SELP works in three simple steps: 1) Tap where it hurts on our 3D body model, 2) Answer personalized questions about your symptoms, and 3) Receive AI-powered analysis with potential causes, severity assessment, and personalized recommendations.",
    },
    {
      question: "Is SELP free to use?",
      answer:
        "Yes, SELP is completely free to use. We believe that everyone should have access to basic health guidance and understanding of their symptoms.",
    },
    {
      question: "When will SELP be available?",
      answer:
        "SELP is currently in development and will be released this year. You can sign up for our newsletter to be notified when it launches.",
    },
  ];

  const technicalQuestions = [
    {
      question: "What devices will SELP be available on?",
      answer:
        "SELP will be available for both iOS and Android devices. The app is designed to work smoothly on modern smartphones and tablets.",
    },
    {
      question: "How accurate is SELP's analysis?",
      answer:
        "SELP uses advanced AI models trained on medical data to provide accurate symptom analysis. However, it's important to note that SELP is not a replacement for professional medical advice. Always consult healthcare professionals for serious concerns.",
    },
    {
      question: "Does SELP require an internet connection?",
      answer:
        "Yes, SELP requires an internet connection to provide real-time analysis and updates. This ensures you get the most accurate and up-to-date health insights.",
    },
  ];

  const privacyQuestions = [
    {
      question: "How does SELP protect my privacy?",
      answer:
        "SELP takes privacy seriously. Your health data is encrypted and stored securely. We never share your personal information with third parties, and you maintain full control over your data. You can request data deletion at any time.",
    },
    {
      question: "What information does SELP collect?",
      answer:
        "SELP collects basic personal information (gender, age, height, weight) to improve accuracy, along with symptom data you provide. All data is encrypted and processed securely. We never sell your personal health information.",
    },
    {
      question: "Can I delete my SELP account and data?",
      answer:
        "Yes, you can delete your account and all associated data at any time. We make it easy to maintain control over your personal information.",
    },
  ];

  const medicalQuestions = [
    {
      question: "Can SELP diagnose medical conditions?",
      answer:
        "No, SELP is not a diagnostic tool. It provides health information and symptom analysis for educational purposes only. Always consult healthcare professionals for medical diagnosis and treatment.",
    },
    {
      question: "What kind of recommendations does SELP provide?",
      answer:
        "SELP provides personalized recommendations including potential causes, severity assessment, suggested supplements and foods, gentle exercises or stretches, risk factors, and when to consult healthcare professionals.",
    },
    {
      question: "Is SELP suitable for emergency situations?",
      answer:
        "No, SELP is not designed for emergency situations. If you're experiencing a medical emergency, please call emergency services immediately.",
    },
  ];

  return (
    <SectionContainer
      title="Frequently Asked Questions"
      description="Find answers to common questions about SELP - your AI-powered health assistant."
      maxWidth="4xl"
    >
      <ProseContainer>
        <div className="space-y-12">
          <ContentSection title="General Questions">
            <div className="space-y-6">
              {generalQuestions.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Technical Questions">
            <div className="space-y-6">
              {technicalQuestions.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Privacy & Data">
            <div className="space-y-6">
              {privacyQuestions.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Medical Information">
            <div className="space-y-6">
              {medicalQuestions.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </ContentSection>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Important Medical Disclaimer
            </h3>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              SELP is designed to provide health information and symptom
              analysis for educational purposes only. It is not intended to
              replace professional medical advice, diagnosis, or treatment.
              Always consult with qualified healthcare providers for medical
              concerns, and never delay seeking professional medical care based
              on information from SELP.
            </p>
          </div>

          <ContentSection title="Still Have Questions?">
            <p className="text-muted-foreground">
              Can't find what you're looking for? We're here to help.{" "}
              <a
                href="mailto:lijonas.it@gmail.com"
                className="text-primary hover:underline"
                title="Email SELP Support - Questions and Support"
              >
                Contact us
              </a>{" "}
              and we'll get back to you as soon as possible.
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
        </div>
      </ProseContainer>
    </SectionContainer>
  );
}
