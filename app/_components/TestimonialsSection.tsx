import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import MobileCarousel from "@/components/ui/mobile-carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote:
        "As an avid runner, SELP helped me identify what was causing my knee pain during training. I adjusted my routine based on the insights and avoided what could've been a serious injury!",
      authorName: "Alex Rivera",
      authorTitle: "Accountant",
    },
    {
      rating: 5,
      quote:
        "Standing all day at the salon was causing me serious back pain. SELP pinpointed the issue and suggested exercises that actually worked. Saved me unnecessary doctor visits!",
      authorName: "Jamie Wilson",
      authorTitle: "Hair Stylist",
    },
    {
      rating: 5,
      quote:
        "Between classes and staying active, I'm always worried about minor aches. SELP helps me understand what's serious and what's not. The 3D model makes it so easy to show exactly where I feel discomfort.",
      authorName: "Taylor Kim",
      authorTitle: "Graduate Student",
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
