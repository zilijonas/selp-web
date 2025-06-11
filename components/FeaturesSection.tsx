import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Smartphone, Brain, Stethoscope } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-primary/20 text-primary border-primary/30"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Your health, simplified
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            SELP combines medical expertise with intuitive design to make health
            self-assessment accessible to everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-foreground text-center">
                Interactive Body Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Simply tap any body part on our 3D model to start your
                personalized health assessment journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-foreground text-center">
                Smart Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                AI-powered questionnaires that adapt based on your responses,
                just like a conversation with your doctor.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-foreground text-center">
                Privacy Protected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Your health data stays private and secure. We never share your
                personal information with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-muted/40 flex items-center justify-center mb-4 mx-auto">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-foreground text-center">
                Doctor-Reviewed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Numerous doctors have confirmed that our questionnaire is
                accurate and can provide legitimate diagnosis as well as
                effective solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
