import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  rating: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
  className?: string;
}

export default function TestimonialCard({
  rating,
  quote,
  authorName,
  authorTitle,
  authorImage = "/person.svg?height=40&width=40",
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col h-full",
        className
      )}
    >
      <CardHeader className="flex-1">
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <CardDescription className="text-muted-foreground text-center">
          "{quote}"
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center mt-auto">
        <div className="flex items-center space-x-3">
          <Image
            src={authorImage}
            alt={authorName}
            width={40}
            height={40}
            className="rounded-full"
            title={`${authorName} - ${authorTitle} - SELP User Testimonial`}
          />
          <div>
            <p className="font-semibold text-foreground">{authorName}</p>
            <p className="text-sm text-muted-foreground">{authorTitle}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
