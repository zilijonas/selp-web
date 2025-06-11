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
      // Apply existing consent settings
      updateGoogleAnalyticsConsent(existingConsent === "accepted");
    }
  }, []);

  useEffect(() => {
    // Skip the first render to avoid unnecessary updates
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Update consent when banner is dismissed
    if (!showBanner) {
      const consent = Cookies.get("cookie-consent");
      if (consent) {
        updateGoogleAnalyticsConsent(consent === "accepted");
      }
    }
  }, [showBanner]);

  const updateGoogleAnalyticsConsent = (hasConsent: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: hasConsent ? "granted" : "denied",
        ad_user_data: hasConsent ? "granted" : "denied",
        ad_personalization: hasConsent ? "granted" : "denied",
        analytics_storage: hasConsent ? "granted" : "denied",
      });
    }
  };

  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted", {
      expires: 365,
      sameSite: "lax",
    });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set("cookie-consent", "declined", {
      expires: 365,
      sameSite: "lax",
    });
    setShowBanner(false);
  };

  // Don't render anything until component is mounted to avoid hydration issues
  if (!mounted || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card text-card-foreground text-sm border-t border-border shadow-lg p-5 flex flex-wrap items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-sm text-muted-foreground mb-2">
          🍪 <strong>We use cookies to enhance your experience</strong>
        </p>
        <p className="text-xs text-muted-foreground">
          We use cookies and similar technologies to improve your browsing
          experience, analyze website traffic, and provide personalized content.
          By clicking "Accept All", you consent to our use of cookies.{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Learn more in our Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={handleDecline}
          className="text-xs"
        >
          Decline
        </Button>
        <Button
          size="sm"
          onClick={handleAccept}
          className="bg-primary hover:bg-primary/90 text-xs"
        >
          Accept All
        </Button>
      </div>
    </div>
  );
}
