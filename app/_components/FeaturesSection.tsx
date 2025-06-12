import { Shield, Smartphone, Brain, Stethoscope } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import MobileCarousel from "@/components/ui/mobile-carousel";

export default function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "3D Human Model Navigation",
      description:
        "Touch and explore any part of the body with pinpoint precision. Zoom, rotate, and tap on the exact body region where you feel discomfort.",
    },
    {
      icon: Brain,
      title: "Dynamic Health Questionnaire",
      description:
        "Personalized follow-up questions based on body part and severity. Real-time progress indicator shows how much you've completed.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data is encrypted and processed securely. Only you see your results. We never share your personal information with third parties.",
    },
    {
      icon: Stethoscope,
      title: "AI-Based Symptom Analysis",
      description:
        "Advanced AI models analyze your input to assess severity, detect possible conditions, and generate health guidance in plain language.",
    },
  ];

  return (
    <SectionContainer id="features" className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: features.map((feature, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: feature.title,
                description: feature.description,
              },
            })),
          }),
        }}
      />
      <SectionHeader
        badge="Features"
        title="Smart Self-Help for Your Body"
        description="Selp combines advanced AI models with an intuitive 3D interface to empower you to understand, track, and respond to bodily discomfort."
      />

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Mobile Carousel Layout */}
      <MobileCarousel>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="h-full"
          />
        ))}
      </MobileCarousel>
    </SectionContainer>
  );
}
