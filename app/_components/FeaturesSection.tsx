import { Shield, Smartphone, Brain, Stethoscope } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

export default function FeaturesSection() {
  return (
    <SectionContainer id="features" className="relative">
      <SectionHeader
        badge="Features"
        title="Smart Self-Help for Your Body"
        description="Selp combines advanced AI models with an intuitive 3D interface to empower you to understand, track, and respond to bodily discomfort."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <FeatureCard
          icon={Smartphone}
          title="3D Human Model Navigation"
          description="Touch and explore any part of the body with pinpoint precision. Zoom, rotate, and tap on the exact body region where you feel discomfort."
        />

        <FeatureCard
          icon={Brain}
          title="Dynamic Health Questionnaire"
          description="Personalized follow-up questions based on body part and severity. Real-time progress indicator shows how much you've completed."
        />

        <FeatureCard
          icon={Shield}
          title="Privacy First"
          description="Your data is encrypted and processed securely. Only you see your results. We never share your personal information with third parties."
        />

        <FeatureCard
          icon={Stethoscope}
          title="AI-Based Symptom Analysis"
          description="Advanced AI models analyze your input to assess severity, detect possible conditions, and generate health guidance in plain language."
        />
      </div>
    </SectionContainer>
  );
}
