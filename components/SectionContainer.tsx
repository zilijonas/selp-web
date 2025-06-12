import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: "default" | "muted";
}

export default function SectionContainer({
  id,
  className,
  children,
  background = "default",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        background === "muted" && "bg-background",
        className
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}
