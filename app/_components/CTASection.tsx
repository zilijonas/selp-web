"use client";

import SectionContainer from "@/components/SectionContainer";
import ComingSoonDialog from "@/components/ComingSoonDialog";
import SectionHeader from "@/components/SectionHeader";

export default function CTASection() {
  return (
    <SectionContainer id="cta">
      <div className="space-y-8 max-w-3xl mx-auto text-center">
        <SectionHeader
          badge="Coming Soon to Your Device"
          title="Stop guessing what's wrong. Start understanding your body."
          description="Selp helps you take the first step toward better health—right from your pocket. Understand your symptoms without needing medical knowledge."
          maxWidth="3xl"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ComingSoonDialog triggerText="Download for iOS" />
          <ComingSoonDialog triggerText="Download for Android" />
        </div>
        <p className="text-sm text-muted-foreground">
          Privacy-first • Accessible anytime • Backed by AI, built for humans
        </p>
      </div>
    </SectionContainer>
  );
}
