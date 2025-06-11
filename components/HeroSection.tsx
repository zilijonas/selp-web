import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
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
                Health Insights
                <span className="text-primary"> Made Simple</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                Tap a body part, answer smart, personalized questions, and get
                insights that feel like talking to your family doctor. SELP
                makes health self-assessment intuitive and accessible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="#newsletter">
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

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground flex-wrap gap-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free to download</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Privacy-first design</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Doctor-approved</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="grid grid-cols-1 gap-4 max-w-3xl">
              <div className="flex justify-center">
                <Image
                  src="/screens/screens.webp"
                  alt="SELP App - Body Selection"
                  width={2552}
                  height={2841}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
