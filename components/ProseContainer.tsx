import { cn } from "@/lib/utils";

interface ProseContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProseContainer({
  children,
  className,
}: ProseContainerProps) {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <div className={cn("text-muted-foreground space-y-6", className)}>
        {children}
      </div>
    </div>
  );
}
