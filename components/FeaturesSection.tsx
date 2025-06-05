import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Smartphone, Brain, Stethoscope } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="w-fit mx-auto bg-[#35C998]/20 text-[#186B52] border-[#35C998]/30"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Your health, simplified
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            SELP combines medical expertise with intuitive design to make health
            self-assessment accessible to everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-[#35C998]/20 flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="h-6 w-6 text-[#186B52]" />
              </div>
              <CardTitle className="text-gray-900 text-center">
                Interactive Body Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Simply tap any body part on our 3D model to start your
                personalized health assessment journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-[#00A877]/20 flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-6 w-6 text-[#186B52]" />
              </div>
              <CardTitle className="text-gray-900 text-center">
                Smart Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                AI-powered questionnaires that adapt based on your responses,
                just like a conversation with your doctor.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-[#2A8E72]/20 flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-[#186B52]" />
              </div>
              <CardTitle className="text-gray-900 text-center">
                Privacy Protected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Your health data stays private and secure. We never share your
                personal information with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-[#DEB887]/20 flex items-center justify-center mb-4 mx-auto">
                <Stethoscope className="h-6 w-6 text-[#186B52]" />
              </div>
              <CardTitle className="text-gray-900 text-center">
                Doctor-Approved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                All assessments are developed and reviewed by licensed
                healthcare professionals for accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
