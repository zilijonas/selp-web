import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-20 md:py-32 bg-[#E9FEF5]">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#35C998]/20 text-[#186B52] border-[#35C998]/30"
            >
              Stay in the loop
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Get health tips and updates
            </h2>
            <p className="text-xl text-gray-600">
              Find out when we launch our app and get early access to the beta.
              Subscribe to receive the latest health insights, app updates, and
              wellness tips directly in your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-[#186B52]/20 focus:border-[#186B52]"
            />
            <Button className="bg-[#186B52] hover:bg-[#2A8E72] px-8">
              Subscribe
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
