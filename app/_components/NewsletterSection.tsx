"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  CheckCircle,
  AlertCircle,
  Shield,
  Ban,
  LogOut,
} from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import { useNewsletterSubscription } from "../_hooks/useNewsletterSubscription";

export default function NewsletterSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
    submitStatus,
    onSubmit,
  } = useNewsletterSubscription();

  return (
    <SectionContainer id="newsletter" background="muted">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <SectionHeader
          badge="Join the Waitlist"
          title="Be the first to access your family doctor in your pocket"
          description="Find out when we launch our app and get early access to the beta. Subscribe to receive the latest health insights, app updates, and wellness tips directly in your inbox."
          maxWidth="2xl"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className={`border-primary/30 focus:border-primary ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 px-8 disabled:opacity-50"
            >
              {isSubmitting ? "Subscribing..." : "Get Early Access"}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Status Messages */}
          {submitStatus && (
            <div
              className={`flex items-center justify-center gap-2 text-sm ${
                submitStatus.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              {submitStatus.message}
            </div>
          )}
        </form>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>GDPR Compliant</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <div className="flex items-center gap-2">
              <Ban className="h-4 w-4 text-primary" />
              <span>No Spam</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <div className="flex items-center gap-2">
              <LogOut className="h-4 w-4 text-primary" />
              <span>Unsubscribe Anytime</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Privacy-first design. No spam, unsubscribe at any time. We respect
          your privacy.
        </p>
      </div>
    </SectionContainer>
  );
}
