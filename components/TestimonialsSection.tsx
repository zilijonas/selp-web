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
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-primary/20 text-primary border-primary/30"
          >
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Trusted by thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            See what users and healthcare professionals have to say about SELP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <CardDescription className="text-muted-foreground text-center">
                "SELP has revolutionized how I monitor my health. The 3D body
                model is so intuitive and the AI analysis feels like having a
                doctor in my pocket."
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center mt-auto">
              <div className="flex items-center space-x-3">
                <Image
                  src="/person.svg?height=40&width=40"
                  alt="Sarah Johnson"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">
                    Healthcare Worker
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <CardDescription className="text-muted-foreground text-center">
                "As a physician, I'm impressed by the accuracy and
                thoughtfulness of SELP's dynamic questionnaire. The AI-powered
                analysis provides valuable insights for patient education."
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center mt-auto">
              <div className="flex items-center space-x-3">
                <Image
                  src="/person.svg?height=40&width=40"
                  alt="Dr. Michael Chen"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    Dr. Michael Chen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Family Physician
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col h-full">
            <CardHeader className="flex-1">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <CardDescription className="text-muted-foreground text-center">
                "The app helped me understand my symptoms better before visiting
                my doctor. The privacy-first approach gives me confidence in
                sharing my health data."
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center mt-auto">
              <div className="flex items-center space-x-3">
                <Image
                  src="/person.svg?height=40&width=40"
                  alt="Emily Rodriguez"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    Emily Rodriguez
                  </p>
                  <p className="text-sm text-muted-foreground">Teacher</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
