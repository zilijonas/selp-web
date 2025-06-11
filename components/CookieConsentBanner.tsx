"use client";

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
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
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    setMounted(true);

    // Check existing consent
    const existingConsent = Cookies.get("cookie-consent");
    if (existingConsent) {
      const consentValue = existingConsent === "accepted";
      setHasConsent(consentValue);
      updateGoogleAnalyticsConsent(consentValue);
    }
  }, []);

  const updateGoogleAnalyticsConsent = (hasConsent: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      // Update consent using existing gtag function
      window.gtag("consent", "update", {
        analytics_storage: hasConsent ? "granted" : "denied",
        ad_storage: hasConsent ? "granted" : "denied",
        ad_user_data: hasConsent ? "granted" : "denied",
        ad_personalization: hasConsent ? "granted" : "denied",
      });
    }
  };

  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted", {
      expires: 365,
      sameSite: "lax",
    });
    setHasConsent(true);
    updateGoogleAnalyticsConsent(true);
  };

  const handleDecline = () => {
    Cookies.set("cookie-consent", "declined", {
      expires: 365,
      sameSite: "lax",
    });
    setHasConsent(false);
    updateGoogleAnalyticsConsent(false);
  };

  // Don't render anything until component is mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  // Don't show banner if user has already made a choice
  if (hasConsent !== null) {
    return null;
  }

  return (
    <CookieConsent
      location="bottom"
      cookieName="cookie-consent-banner-shown"
      containerClasses="fixed bottom-0 left-0 right-0 z-50 bg-card text-card-foreground text-sm border-t border-border shadow-lg p-5 flex flex-wrap items-center justify-between gap-4"
      contentClasses="flex-1 m-0"
      buttonWrapperClasses="flex gap-3 flex-wrap"
      disableStyles={true}
      enableDeclineButton={true}
      flipButtons={false}
      buttonText=""
      declineButtonText=""
      onAccept={handleAccept}
      onDecline={handleDecline}
      expires={0} // Don't use this cookie for tracking, we use our own
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">
            🍪 <strong>We use cookies to enhance your experience</strong>
          </p>
          <p className="text-xs text-muted-foreground">
            We use cookies and similar technologies to improve your browsing
            experience, analyze website traffic, and provide personalized
            content. By clicking "Accept All", you consent to our use of
            cookies.{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
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
    </CookieConsent>
  );
}
