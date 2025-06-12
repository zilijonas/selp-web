"use client";

import { useNewsletterSubscription } from "../_hooks/useNewsletterSubscription";
import { X, Mail, Bell } from "lucide-react";

export function FloatingNewsletterCTA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
    submitStatus,
    onSubmit,
    isVisible,
    closeCTA,
  } = useNewsletterSubscription({
    scrollThreshold: () => {
      // Calculate 50% of the total scrollable height
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      return totalHeight * 0.5;
    },
  });

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-card border border-border p-4 rounded-lg shadow-lg max-w-sm z-50 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Bell className="h-4 w-4 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Stay Updated
          </h3>
        </div>
        <button
          onClick={closeCTA}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Get the release date, latest updates and insights delivered to your
        inbox.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <div className="relative">
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          {errors.email && (
            <p className="text-destructive text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Subscribing..."
          ) : (
            <>
              Subscribe
              <Mail className="h-4 w-4" />
            </>
          )}
        </button>
        {submitStatus && (
          <p
            className={`text-sm ${
              submitStatus.type === "success"
                ? "text-success"
                : "text-destructive"
            }`}
          >
            {submitStatus.message}
          </p>
        )}
      </form>
    </div>
  );
}
