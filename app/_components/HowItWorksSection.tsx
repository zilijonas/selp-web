import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import StepCard from "@/components/StepCard";

export default function HowItWorksSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Pick Pain Location",
      description:
        "Tap and hold the painful area. <br /> Hold until the pain gauge matches your pain (1-5).",
      imageSrc: "/screens/screen-1.webp",
      imageAlt: "Step 1: Select body part",
      placeholderSrc: "/screens/screen-1-placeholder.webp",
    },
    {
      stepNumber: 2,
      title: "Answer Questions",
      description: "Respond to personalized questions about your symptoms",
      imageSrc: "/screens/screen-2.webp",
      imageAlt: "Step 2: Answer questions",
      placeholderSrc: "/screens/screen-2-placeholder.webp",
    },
    {
      stepNumber: 3,
      title: "Get Insights",
      description: "Receive personalized health insights and recommendations",
      imageSrc: "/screens/screen-3.webp",
      imageAlt: "Step 3: Get insights",
      placeholderSrc: "/screens/screen-3-placeholder.webp",
    },
  ];

  return (
    <SectionContainer id="how-it-works">
      <SectionHeader
        badge="How It Works"
        title="Three simple steps to better health insights"
      />

      <div className="grid gap-12 md:grid-cols-3 items-start max-w-5xl mx-auto">
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
            imageAlt={step.imageAlt}
            placeholderSrc={step.placeholderSrc}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
