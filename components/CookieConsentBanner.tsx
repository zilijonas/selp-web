"use client";

import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const existingConsent = Cookies.get("cookie-consent");
    if (!existingConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted", {
      expires: 365,
      sameSite: "lax",
    });
    setShowBanner(false);
    // Reload to enable Google Analytics
    window.location.reload();
  };

  const handleDecline = () => {
    Cookies.set("cookie-consent", "declined", {
      expires: 365,
      sameSite: "lax",
    });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <CookieConsent
      location="bottom"
      cookieName="cookie-consent-banner-shown"
      style={{
        background: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
        fontSize: "14px",
        border: "1px solid hsl(var(--border))",
        borderRadius: "8px 8px 0 0",
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.15)",
        padding: "20px",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "space-between",
      }}
      contentStyle={{
        flex: 1,
        margin: 0,
      }}
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
