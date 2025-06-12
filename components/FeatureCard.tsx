import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-primary",
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 md:hover:scale-105 hover:scale-[1.02]",
        className
      )}
    >
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>
        <CardTitle className="text-foreground text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
}
