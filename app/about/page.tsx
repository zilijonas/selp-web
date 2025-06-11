import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, Shield, Lightbulb, Globe, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About SELP - Your Personal Health Assistant",
  description:
    "Learn about SELP's mission to make healthcare accessible, our privacy-first approach, and how we're revolutionizing self-health assessment with AI technology.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 md:px-6 py-20">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
              About SELP
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to make healthcare more accessible,
              understandable, and personal. SELP empowers you to take the first
              step toward better health—right from your pocket.
            </p>
          </div>

          {/* Mission Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To democratize healthcare by providing intelligent,
                privacy-first tools that help people understand their bodies and
                make informed decisions about their health.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-lg p-8">
              <blockquote className="text-lg italic text-center text-foreground">
                "Healthcare should be accessible to everyone, everywhere. SELP
                bridges the gap between feeling unwell and understanding what
                your body is telling you."
              </blockquote>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SELP combines cutting-edge AI technology with an intuitive 3D
                interface to provide personalized health insights that are easy
                to understand.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    Interactive 3D Body Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Point to exactly where you feel discomfort on our detailed
                    3D human model. No medical terminology required—just tap
                    where it hurts.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    AI-Powered Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our advanced AI analyzes your symptoms, medical history, and
                    lifestyle factors to provide personalized health insights in
                    plain language.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    Privacy-First Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your health data is encrypted and never shared. We believe
                    privacy is a fundamental right, especially when it comes to
                    your health information.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    Personalized Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive tailored recommendations for supplements, exercises,
                    lifestyle changes, and when to consult healthcare
                    professionals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why SELP Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Why SELP?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Accessible Healthcare
                  </h3>
                  <p className="text-muted-foreground">
                    Healthcare accessibility is a global challenge. SELP
                    provides immediate, intelligent health guidance regardless
                    of location, time, or healthcare system barriers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Empowering Individuals
                  </h3>
                  <p className="text-muted-foreground">
                    We believe everyone should have the tools to understand
                    their body and make informed health decisions. SELP puts
                    medical-grade analysis in your hands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Human-Centered Technology
                  </h3>
                  <p className="text-muted-foreground">
                    Technology should serve humanity, not the other way around.
                    SELP combines advanced AI with intuitive design to make
                    health insights accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section className="space-y-6">
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
                concerns, and never delay seeking professional medical care
                based on information from SELP.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about SELP or want to learn more about our mission?
              We'd love to hear from you.
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:lijonas.it@gmail.com"
                  className="text-primary hover:underline"
                >
                  lijonas.it@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Location:</strong> Vilnius, Lithuania
              </p>
            </div>
          </section>

          <div className="text-center pt-8 border-t">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
