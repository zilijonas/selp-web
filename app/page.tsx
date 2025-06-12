import Header from "@/components/Header";
import HeroSection from "@/app/_components/HeroSection";
import FeaturesSection from "@/app/_components/FeaturesSection";
import HowItWorksSection from "@/app/_components/HowItWorksSection";
import TestimonialsSection from "@/app/_components/TestimonialsSection";
import NewsletterSection from "@/app/_components/NewsletterSection";
import CTASection from "@/app/_components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CTASection />
      <Footer />
    </div>
  );
}
