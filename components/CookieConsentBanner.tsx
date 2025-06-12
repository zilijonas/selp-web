"use client";

import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

export function resetCookieConsent() {
  try {
    // Remove existing consent cookies
    Cookies.remove("cookie-consent");
    Cookies.remove("cookie-consent-timestamp");

    // Reset Google Analytics consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
      });
    }

    // Dispatch a custom event to show the banner
    window.dispatchEvent(new Event("showCookieBanner"));
  } catch (error) {
    console.error("Failed to reset cookie consent:", error);
  }
}

export default function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setMounted(true);

    // Check if user has already made a choice
    const existingConsent = Cookies.get("cookie-consent");
    if (!existingConsent) {
      setShowBanner(true);
    } else {
      // Apply existing consent settings to Google Analytics
      const hasConsent = existingConsent === "accepted";
      updateGoogleAnalyticsConsent(hasConsent);
    }

    // Listen for the custom event to show the banner
    const handleShowBanner = () => setShowBanner(true);
    window.addEventListener("showCookieBanner", handleShowBanner);

    return () => {
      window.removeEventListener("showCookieBanner", handleShowBanner);
    };
  }, []);

  const updateGoogleAnalyticsConsent = (hasConsent: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      try {
        // Update consent according to Google's consent mode v2
        // This should be called immediately when user makes a choice
        window.gtag("consent", "update", {
          ad_storage: hasConsent ? "granted" : "denied",
          ad_user_data: hasConsent ? "granted" : "denied",
          ad_personalization: hasConsent ? "granted" : "denied",
          analytics_storage: hasConsent ? "granted" : "denied",
          functionality_storage: hasConsent ? "granted" : "denied",
          personalization_storage: hasConsent ? "granted" : "denied",
          // security_storage is always granted as it's essential for security
        });

        // Send page view if consent is granted
        if (hasConsent) {
          window.gtag("event", "page_view", {
            page_title: document.title,
            page_location: window.location.href,
          });
        }

        // Optional: Send an event to track consent updates
        window.gtag("event", "consent_update", {
          consent_status: hasConsent ? "granted" : "denied",
          timestamp: new Date().toISOString(),
          event_category: "Privacy",
          event_label: "Cookie Consent Banner",
        });
      } catch (error) {
        console.warn("Failed to update Google consent:", error);
      }
    }
  };

  const handleAccept = () => {
    try {
      // Update Google Analytics consent FIRST - this is critical for advanced consent mode
      updateGoogleAnalyticsConsent(true);

      // Then save consent choice with enhanced cookie settings
      Cookies.set("cookie-consent", "accepted", {
        expires: 365,
        sameSite: "lax",
        secure: window.location.protocol === "https:",
        path: "/",
      });

      // Store timestamp for consent record keeping
      Cookies.set("cookie-consent-timestamp", new Date().toISOString(), {
        expires: 365,
        sameSite: "lax",
        secure: window.location.protocol === "https:",
        path: "/",
      });

      // Hide banner
      setShowBanner(false);
    } catch (error) {
      console.error("Failed to save consent:", error);
    }
  };

  const handleDecline = () => {
    try {
      // Update Google Analytics consent FIRST
      updateGoogleAnalyticsConsent(false);

      // Save consent choice with enhanced cookie settings
      Cookies.set("cookie-consent", "declined", {
        expires: 365,
        sameSite: "lax",
        secure: window.location.protocol === "https:",
        path: "/",
      });

      // Store timestamp for consent record keeping
      Cookies.set("cookie-consent-timestamp", new Date().toISOString(), {
        expires: 365,
        sameSite: "lax",
        secure: window.location.protocol === "https:",
        path: "/",
      });

      // Hide banner
      setShowBanner(false);
    } catch (error) {
      console.error("Failed to save consent:", error);
    }
  };

  // Don't render anything until component is mounted to avoid hydration issues
  if (!mounted || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card text-card-foreground text-sm border-t border-border shadow-lg p-5 flex flex-wrap items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-sm text-muted-foreground mb-2">
          🍪 <strong>Cookie Preferences</strong>
        </p>
        <div className="text-xs text-muted-foreground space-y-2">
          <p>
            We use cookies to enhance your experience on SELP. Here's what each
            option means:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>
              <strong>Accept All:</strong> Enables analytics to help us improve
              our service and provide personalized content. This includes Google
              Analytics for understanding how you use our site.
            </li>
            <li>
              <strong>Decline:</strong> Only essential cookies will be used.
              You'll still have full access to SELP, but we won't collect
              analytics data to improve your experience.
            </li>
          </ul>
          <p>
            You can change your preferences anytime in our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
              title="SELP Privacy Policy - Learn About Our Cookie Usage and Data Protection"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDecline}
          className="text-xs"
          aria-label="Decline all cookies"
        >
          Decline
        </Button>
        <Button
          size="sm"
          onClick={handleAccept}
          className="bg-primary hover:bg-primary/90 text-xs"
          aria-label="Accept all cookies"
        >
          Accept All
        </Button>
      </div>
    </div>
  );
}
