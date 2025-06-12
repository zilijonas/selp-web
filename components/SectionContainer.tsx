import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "muted";
  title?: string;
  titleLevel?: "h1" | "h2" | "h3";
  description?: string;
  lastUpdated?: Date | string;
  centerContent?: boolean;
  maxWidth?: "4xl" | "6xl" | "7xl";
}

export default function SectionContainer({
  id,
  className,
  children,
  background = "default",
  title,
  titleLevel = "h1",
  description,
  lastUpdated,
  centerContent = false,
  maxWidth = "7xl",
}: SectionContainerProps) {
  const TitleTag = titleLevel;

  const titleClasses = cn(
    "font-bold tracking-tight text-foreground mb-8",
    titleLevel === "h1" && "text-3xl sm:text-4xl",
    titleLevel === "h2" && "text-2xl sm:text-3xl",
    titleLevel === "h3" && "text-xl sm:text-2xl",
    centerContent && "text-center"
  );

  const maxWidthClasses = {
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        background === "muted" && "bg-background",
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 md:px-6",
          maxWidthClasses[maxWidth]
        )}
      >
        {(title || description || lastUpdated) && (
          <div className={cn("mb-12", centerContent && "text-center")}>
            {title && <TitleTag className={titleClasses}>{title}</TitleTag>}
            {lastUpdated && (
              <p className="text-sm text-muted-foreground mb-6">
                Last updated:{" "}
                {typeof lastUpdated === "string"
                  ? lastUpdated
                  : lastUpdated.toLocaleDateString()}
              </p>
            )}
            {description && (
              <p
                className={cn(
                  "text-lg text-muted-foreground max-w-3xl",
                  centerContent && "mx-auto"
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
