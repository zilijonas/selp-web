import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function ContentSection({
  title,
  children,
  className,
  titleClassName,
  titleLevel = "h2",
}: ContentSectionProps) {
  const TitleTag = titleLevel;

  const titleSizeClasses = {
    h1: "text-3xl font-bold tracking-tight",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
    h4: "text-lg font-medium",
    h5: "text-base font-medium",
    h6: "text-sm font-medium",
  };

  return (
    <section className={cn("space-y-4", className)}>
      {title && (
        <TitleTag
          className={cn(
            titleSizeClasses[titleLevel],
            "text-foreground mb-4",
            titleClassName
          )}
        >
          {title}
        </TitleTag>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
