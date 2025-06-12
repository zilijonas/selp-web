import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import FeatureList from "@/components/FeatureList";

export default function HeroSection() {
  const features = [
    "Privacy-first design",
    "AI-powered analysis",
    "Accessible anytime",
  ];

  return (
    <SectionContainer id="hero">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="w-fit mx-auto lg:mx-0 bg-primary/20 text-primary border-primary/30"
            >
              🩺 Your Personal Health Assistant
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Self help.
              <span className="text-primary">
                {" "}
                Family doctor in your pocket.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
              SELP is your self-help health assistant. Tap the body part that
              hurts, answer tailored questions, and get a doctor-level analysis
              — all in your pocket.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="text-lg px-8 bg-primary hover:bg-primary/90"
              asChild
            >
              <Link
                href="#newsletter"
                title="Register for SELP Beta - Get Early Access to AI Health Assistant"
              >
                Register for Beta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white hidden"
            >
              Watch Demo
            </Button>
          </div>

          <FeatureList features={features} />
        </div>

        <div className="relative flex justify-center">
          <div className="grid grid-cols-1 gap-4 max-w-3xl">
            <div className="flex justify-center">
              <Image
                src="/screens/screens.webp"
                alt="SELP App - Tap the body part that hurts"
                width={2552}
                height={2841}
                priority
                placeholder="blur"
                blurDataURL="/screens/screens-placeholder.webp"
                title="SELP App Screenshots - Interactive Body Map for Health Analysis"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
