import { cn } from "@/lib/utils";

interface ListProps {
  items: React.ReactNode[];
  className?: string;
  variant?: "disc" | "decimal" | "none";
  spacing?: "tight" | "normal" | "loose";
}

export default function List({
  items,
  className,
  variant = "disc",
  spacing = "normal",
}: ListProps) {
  const baseClasses = "pl-6 mt-2";

  const variantClasses = {
    disc: "list-disc",
    decimal: "list-decimal",
    none: "list-none pl-0",
  };

  const spacingClasses = {
    tight: "space-y-0.5",
    normal: "space-y-1",
    loose: "space-y-2",
  };

  const Tag = variant === "decimal" ? "ol" : "ul";

  return (
    <Tag
      className={cn(
        baseClasses,
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Tag>
  );
}
