import Image from "next/image";
import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  placeholderSrc: string;
  className?: string;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt,
  placeholderSrc,
  className,
}: StepCardProps) {
  const isMobileStep = className?.includes("mobile-step");

  return (
    <div className={cn("text-center space-y-4", className)}>
      <div className="relative mx-auto w-fit">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={250}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL={placeholderSrc}
          className={cn(
            "w-full h-auto",
            isMobileStep ? "max-w-[250px] sm:max-w-[250px]" : "max-w-[250px]"
          )}
          title={`Step ${stepNumber}: ${title} - ${imageAlt}`}
        />
        {!isMobileStep && (
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            {stepNumber}
          </div>
        )}
      </div>
      <h3 className="text-xl pt-4 font-semibold text-foreground">{title}</h3>
      <p
        className="text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
