import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  maxWidth?: "2xl" | "3xl" | "4xl" | "5xl";
}

export default function SectionHeader({
  badge,
  title,
  description,
  className,
  maxWidth = "4xl",
}: SectionHeaderProps) {
  const maxWidthClasses = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  };

  return (
    <div
      className={cn(
        "text-center space-y-4 mb-16 mx-auto",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {badge && (
        <Badge
          variant="secondary"
          className="w-fit mx-auto bg-primary/20 text-primary border-primary/30"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
