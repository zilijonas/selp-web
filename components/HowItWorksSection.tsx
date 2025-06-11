import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-primary/20 text-primary border-primary/30"
          >
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Three simple steps to better health insights
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 items-start max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="relative mx-auto w-fit">
              <Image
                src="/screens/screen-1.webp"
                alt="Step 1: Select body part"
                width={250}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/screens/screen-1-placeholder.webp"
                className="w-full h-auto"
              />
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Pick Pain Location
            </h3>
            <p className="text-muted-foreground">
              Tap and hold the painful area. <br /> Hold until the pain gauge
              matches your pain (1-5).
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative mx-auto w-fit">
              <Image
                src="/screens/screen-2.webp"
                alt="Step 2: Answer questions"
                width={250}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/screens/screen-2-placeholder.webp"
                className="w-full h-auto"
              />
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Answer Questions
            </h3>
            <p className="text-muted-foreground">
              Respond to personalized questions about your symptoms
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative mx-auto w-fit">
              <Image
                src="/screens/screen-3.webp"
                alt="Step 3: Get insights"
                width={250}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="/screens/screen-3-placeholder.webp"
                className="w-full h-auto"
              />
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Get Insights
            </h3>
            <p className="text-muted-foreground">
              Receive personalized health insights and recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
