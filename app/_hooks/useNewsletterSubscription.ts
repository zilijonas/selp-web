import { useState } from "react";
import { useForm } from "react-hook-form";

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
  isSubmitting: boolean;
  submitStatus: {
    type: "success" | "error" | null;
    message: string;
  };
  form: {
    register: any;
    handleSubmit: any;
    errors: any;
    reset: () => void;
  };
  onSubmit: (data: NewsletterFormData) => Promise<void>;
}

export function useNewsletterSubscription(): UseNewsletterSubscriptionReturn {
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
        reset();
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
    isSubmitting,
    submitStatus,
    form: {
      register,
      handleSubmit,
      errors,
      reset,
    },
    onSubmit,
  };
}
