"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ConsentManager() {
  const [mounted, setMounted] = useState(false);
  const [consentState, setConsentState] = useState("denied");

  useEffect(() => {
    setMounted(true);

    // Check existing consent after mount to avoid hydration mismatch
    const existingConsent = Cookies.get("cookie-consent");
    setConsentState(existingConsent === "accepted" ? "granted" : "denied");
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <Script
      id="google-consent-mode"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent state before GoogleAnalytics loads
          gtag('consent', 'default', {
            'ad_storage': '${consentState}',
            'ad_user_data': '${consentState}',
            'ad_personalization': '${consentState}',
            'analytics_storage': '${consentState}',
            'wait_for_update': 2000
          });
        `,
      }}
    />
  );
}
