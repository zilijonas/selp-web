"use client";

import SectionContainer from "@/components/SectionContainer";
import ComingSoonDialog from "@/components/ComingSoonDialog";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Shield, Gift, Brain } from "lucide-react";

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
          <ComingSoonDialog triggerText="Download for iOS">
            <Image
              src="/apple.svg"
              alt="Apple Logo"
              width={20}
              height={20}
              className="mr-2"
            />
          </ComingSoonDialog>
          <ComingSoonDialog triggerText="Download for Android">
            <Image
              src="/android.svg"
              alt="Android Logo"
              width={20}
              height={20}
              className="mr-2"
            />
          </ComingSoonDialog>
        </div>
        <div className="text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>Privacy-first</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4 text-primary" />
            <span>Free to use</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            <span>Backed by AI, built for humans</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
