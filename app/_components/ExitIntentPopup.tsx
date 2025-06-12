"use client";

import { useExitIntent } from "../_hooks/useExitIntent";
import { useNewsletterSubscription } from "../_hooks/useNewsletterSubscription";
import { X, Mail, Bell } from "lucide-react";

export function ExitIntentPopup() {
  const { showPopup, setShowPopup } = useExitIntent();
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
    submitStatus,
    onSubmit,
  } = useNewsletterSubscription();

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border p-6 rounded-lg shadow-lg max-w-md w-full relative animate-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground">
            Wait! Don't Miss Out
          </h3>
        </div>

        <p className="text-muted-foreground mb-6">
          Get early access to SELP and be the first to know when we launch. Join
          our waitlist for exclusive updates and insights.
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
                Join Waitlist
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

        <p className="text-xs text-muted-foreground mt-4 text-center">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
