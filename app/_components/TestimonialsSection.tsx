import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import MobileCarousel from "@/components/ui/mobile-carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote:
        "SELP has revolutionized how I monitor my health. The 3D body model is so intuitive and the AI analysis feels like having a doctor in my pocket.",
      authorName: "Sarah Johnson",
      authorTitle: "Healthcare Worker",
    },
    {
      rating: 5,
      quote:
        "As a physician, I'm impressed by the accuracy and thoughtfulness of SELP's dynamic questionnaire. The AI-powered analysis provides valuable insights for patient education.",
      authorName: "Dr. Michael Chen",
      authorTitle: "Family Physician",
    },
    {
      rating: 5,
      quote:
        "The app helped me understand my symptoms better before visiting my doctor. The privacy-first approach gives me confidence in sharing my health data.",
      authorName: "Emily Rodriguez",
      authorTitle: "Teacher",
    },
  ];

  return (
    <SectionContainer id="testimonials">
      <SectionHeader
        badge="Testimonials"
        title="Trusted by thousands"
        description="See what users and healthcare professionals have to say about SELP."
      />

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
          />
        ))}
      </div>

      {/* Mobile Carousel Layout */}
      <MobileCarousel>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
            className="h-full"
          />
        ))}
      </MobileCarousel>
    </SectionContainer>
  );
}
