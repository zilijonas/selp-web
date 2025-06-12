"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNewsletterSubscription } from "@/app/_hooks/useNewsletterSubscription";

export default function FloatingNewsletterCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isSubmitting, submitStatus, form, onSubmit } =
    useNewsletterSubscription();
  const { register, handleSubmit, errors } = form;

  useEffect(() => {
    const handleScroll = () => {
      const newsletterSection = document.getElementById("newsletter");
      if (newsletterSection) {
        const rect = newsletterSection.getBoundingClientRect();
        // Show CTA when user scrolls past the newsletter section
        setIsVisible(rect.bottom < 0 && !isDismissed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // Hide the CTA after successful subscription
  useEffect(() => {
    if (submitStatus.type === "success") {
      setIsDismissed(true);
    }
  }, [submitStatus.type]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-background border border-primary/20 shadow-lg rounded-lg p-4 max-w-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-sm">Get Early Access</h3>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className={`text-sm border-primary/30 focus:border-primary ${
                errors.email ? "border-red-500 focus:border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 px-4 disabled:opacity-50"
            >
              {isSubmitting ? "..." : <Mail className="h-4 w-4" />}
            </Button>
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
          {submitStatus.type && (
            <p
              className={`text-xs ${
                submitStatus.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitStatus.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
