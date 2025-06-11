"use client";

import Script from "next/script";

export default function ConsentManager() {
  return (
    <Script
      id="google-consent-mode"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent state to denied (GDPR compliance)
          // This must be called before any config commands
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied', 
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 2000,
            // Regional scoping for better compliance
            'region': ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO']
          });
          
          // For non-EEA regions, allow analytics by default while still respecting user choice for ads
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied', 
            'ad_personalization': 'denied',
            'analytics_storage': 'granted',
            'region': ['US', 'CA', 'AU', 'NZ', 'JP', 'KR', 'SG', 'MY', 'TH', 'VN', 'ID', 'PH']
          });
          
          // Enable ads data redaction for privacy compliance
          gtag('set', 'ads_data_redaction', true);
          
          // Enable URL passthrough for cookieless measurement
          gtag('set', 'url_passthrough', true);
        `,
      }}
    />
  );
}
