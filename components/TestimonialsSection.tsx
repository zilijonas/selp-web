import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-[#35C998]/20 text-[#186B52] border-[#35C998]/30"
          >
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Trusted by thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            See what users and healthcare professionals have to say about SELP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#DEB887] text-[#DEB887]"
                  />
                ))}
              </div>
              <CardDescription className="text-gray-600 text-center">
                "SELP has revolutionized how I monitor my health. The questions
                are so intuitive and the insights feel like having a doctor in
                my pocket."
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Sarah Johnson"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Healthcare Worker</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#DEB887] text-[#DEB887]"
                  />
                ))}
              </div>
              <CardDescription className="text-gray-600 text-center">
                "As a physician, I'm impressed by the accuracy and
                thoughtfulness of SELP's assessment process. It's a valuable
                tool for patient education."
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Dr. Michael Chen"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    Dr. Michael Chen
                  </p>
                  <p className="text-sm text-gray-500">Family Physician</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#DEB887] text-[#DEB887]"
                  />
                ))}
              </div>
              <CardDescription className="text-gray-600 text-center">
                "The app helped me identify symptoms I should discuss with my
                doctor. It's user-friendly and gives me confidence in managing
                my health."
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Emily Rodriguez"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
