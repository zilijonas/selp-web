import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#E9FEF5]">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-[#35C998]/20 text-[#186B52] border-[#35C998]/30"
          >
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Three simple steps to better health insights
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 items-center max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="relative mx-auto w-fit">
              <Image
                src="/selp-screenshot-1.png"
                alt="Step 1: Select body part"
                width={250}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#186B52] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Select Body Part
            </h3>
            <p className="text-gray-600">
              Tap on the area of your body you want to assess
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative mx-auto w-fit">
              <Image
                src="/selp-screenshot-2.png"
                alt="Step 2: Answer questions"
                width={250}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#186B52] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Answer Questions
            </h3>
            <p className="text-gray-600">
              Respond to personalized questions about your symptoms
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative mx-auto w-fit">
              <Image
                src="/selp-screenshot-3.png"
                alt="Step 3: Get insights"
                width={250}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#186B52] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Get Insights
            </h3>
            <p className="text-gray-600">
              Receive personalized health insights and recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
