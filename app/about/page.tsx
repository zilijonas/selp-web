import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/SectionContainer";
import ContentSection from "@/components/ContentSection";
import ProseContainer from "@/components/ProseContainer";
import FeatureCard from "@/components/FeatureCard";
import { Heart, Users, Shield, Lightbulb, Globe, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About SELP - Your Personal Health Assistant",
  description:
    "Learn about SELP's mission to make healthcare accessible, our privacy-first approach, and how we're revolutionizing self-health assessment with AI technology.",
};

export default async function About() {
  const features = [
    {
      icon: Target,
      title: "Interactive 3D Body Model",
      description:
        "Point to exactly where you feel discomfort on our detailed 3D human model. No medical terminology required—just tap where it hurts.",
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Analysis",
      description:
        "Our advanced AI analyzes your symptoms, medical history, and lifestyle factors to provide personalized health insights in plain language.",
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description:
        "Your health data is encrypted and never shared. We believe privacy is a fundamental right, especially when it comes to your health information.",
    },
    {
      icon: Heart,
      title: "Personalized Guidance",
      description:
        "Receive tailored recommendations for supplements, exercises, lifestyle changes, and when to consult healthcare professionals.",
    },
  ];

  const principles = [
    {
      icon: Globe,
      title: "Accessible Healthcare",
      description:
        "Healthcare accessibility is a global challenge. SELP provides immediate, intelligent health guidance regardless of location, time, or healthcare system barriers.",
    },
    {
      icon: Users,
      title: "Empowering Individuals",
      description:
        "We believe everyone should have the tools to understand their body and make informed health decisions. SELP puts medical-grade analysis in your hands.",
    },
    {
      icon: Heart,
      title: "Human-Centered Technology",
      description:
        "Technology should serve humanity, not the other way around. SELP combines advanced AI with intuitive design to make health insights accessible to everyone.",
    },
  ];

  return (
    <SectionContainer
      title="About SELP"
      description="We're on a mission to make healthcare more accessible, understandable, and personal. SELP empowers you to take the first step toward better health—right from your pocket."
      // centerContent
      maxWidth="4xl"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-16">
          <ContentSection title="Our Mission" className="space-y-8">
            <p className="text-lg text-muted-foreground max-w-2xl">
              To democratize healthcare by providing intelligent, privacy-first
              tools that help people understand their bodies and make informed
              decisions about their health.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-8">
              <blockquote className="text-lg italic text-foreground">
                "Healthcare should be accessible to everyone, everywhere. SELP
                bridges the gap between feeling unwell and understanding what
                your body is telling you."
              </blockquote>
            </div>
          </ContentSection>

          <ContentSection title="What We Do" className="space-y-8">
            <p className="text-lg text-muted-foreground max-w-2xl">
              SELP combines cutting-edge AI technology with an intuitive 3D
              interface to provide personalized health insights that are easy to
              understand.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Why SELP?" className="space-y-8">
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <principle.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>

          <div className="space-y-16">
            <ProseContainer>
              <ContentSection className="space-y-6">
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Important Medical Disclaimer
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm">
                    SELP is designed to provide health information and symptom
                    analysis for educational purposes only. It is not intended
                    to replace professional medical advice, diagnosis, or
                    treatment. Always consult with qualified healthcare
                    providers for medical concerns, and never delay seeking
                    professional medical care based on information from SELP.
                  </p>
                </div>
              </ContentSection>

              <ContentSection title="Get in Touch" className="space-y-6">
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Ready to join the health revolution? Have questions about SELP
                  or want to provide feedback? We're here to help.{" "}
                  <a
                    href="mailto:lijonas.it@gmail.com"
                    className="text-primary hover:underline"
                    title="Email SELP Team - Questions, Feedback, and General Inquiries"
                  >
                    Contact us today
                  </a>{" "}
                  and be part of the future of healthcare accessibility.
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:lijonas.it@gmail.com"
                      className="text-primary hover:underline"
                      title="Email SELP Team - Direct Contact for Support and Inquiries"
                    >
                      lijonas.it@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Location:</strong> Vilnius, Lithuania
                  </p>
                </div>
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
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
