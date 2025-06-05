"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface NewsletterFormData {
  email: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    email: string;
    subscribedAt: string;
  };
}

export default function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        "https://api.selp.life/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Successfully subscribed to newsletter!",
        });
        reset(); // Clear the form
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className={`border-[#186B52]/20 focus:border-[#186B52] ${
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
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#186B52] hover:bg-[#2A8E72] px-8 disabled:opacity-50"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
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

          <p className="text-sm text-gray-500">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
