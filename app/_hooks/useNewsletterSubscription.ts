import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useInactivityDetection } from "./useInactivityDetection";

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

interface UseNewsletterSubscriptionReturn {
  register: any;
  handleSubmit: any;
  formState: {
    errors: Record<string, { message?: string }>;
  };
  isSubmitting: boolean;
  submitStatus: {
    type: "success" | "error";
    message: string;
  } | null;
  onSubmit: (data: NewsletterFormData) => Promise<void>;
  isVisible: boolean;
  isInactive: boolean;
  closeCTA: () => void;
}

interface UseNewsletterSubscriptionProps {
  scrollThreshold?: number | (() => number);
  inactivityTimeoutMs?: number;
}

const STORAGE_KEY = "newsletter_cta_closed";

export function useNewsletterSubscription({
  scrollThreshold = 300,
  inactivityTimeoutMs = 30000,
}: UseNewsletterSubscriptionProps = {}): UseNewsletterSubscriptionReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const isInactive = useInactivityDetection({ timeoutMs: inactivityTimeoutMs });

  useEffect(() => {
    // Check if CTA was previously closed
    const wasClosed = sessionStorage.getItem(STORAGE_KEY);
    if (wasClosed) {
      setIsClosed(true);
      return;
    }

    const handleScroll = () => {
      if (hasScrolledPastThreshold) return; // Don't check again once we've passed threshold

      const scrollPosition = window.scrollY;
      const threshold =
        typeof scrollThreshold === "function"
          ? scrollThreshold()
          : scrollThreshold;

      if (scrollPosition > threshold) {
        setHasScrolledPastThreshold(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, hasScrolledPastThreshold]);

  const closeCTA = () => {
    setIsClosed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  // Show CTA if user has scrolled past threshold and hasn't closed it
  const shouldShowCTA = hasScrolledPastThreshold && !isClosed;

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

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
        reset();
        closeCTA(); // Close CTA after successful subscription
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

  return {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
    submitStatus,
    onSubmit,
    isVisible: shouldShowCTA,
    isInactive,
    closeCTA,
  };
}
