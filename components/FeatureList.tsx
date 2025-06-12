import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureListProps {
  features: string[];
  className?: string;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

export default function FeatureList({
  features,
  className,
  orientation = "horizontal",
  size = "md",
}: FeatureListProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const orientationClasses = {
    horizontal:
      "flex items-center justify-center lg:justify-start gap-x-8 flex-wrap gap-y-2",
    vertical: "flex flex-col space-y-2",
  };

  return (
    <div
      className={cn(
        orientationClasses[orientation],
        sizeClasses[size],
        "text-muted-foreground",
        className
      )}
    >
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-2">
          <CheckCircle className={cn(iconSizes[size], "text-primary")} />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
