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
          
          // Set default consent state to denied for EEA regions (GDPR compliance)
          // This must be called before any config commands for advanced consent mode
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied', 
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 2000,
            // EEA/GDPR regions - require explicit consent
            'region': ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH']
          });
          
          // For non-EEA regions, allow analytics by default while still respecting user choice for ads
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied', 
            'ad_personalization': 'denied',
            'analytics_storage': 'granted',
            'functionality_storage': 'granted',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'region': ['US', 'CA', 'AU', 'NZ', 'JP', 'KR', 'SG', 'MY', 'TH', 'VN', 'ID', 'PH', 'IN', 'BR', 'MX', 'AR', 'CL', 'CO', 'PE', 'ZA', 'EG', 'MA', 'TN', 'KE', 'NG', 'GH', 'UG', 'TZ', 'ET', 'RW', 'ZM', 'ZW', 'BW', 'MW', 'MZ', 'AO', 'CM', 'SN', 'CI', 'BF', 'ML', 'NE', 'TD', 'CF', 'GA', 'GQ', 'ST', 'CV']
          });
          
          // Enable ads data redaction for privacy compliance when ad_storage is denied
          gtag('set', 'ads_data_redaction', true);
          
          // Enable URL passthrough for cookieless measurement
          gtag('set', 'url_passthrough', true);
          
          // Set developer ID for advanced consent mode tracking
          gtag('set', 'developer_id.dMDhkMT', true);
          
          // Debug logging in development
          if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
            console.log('✅ Google Consent Mode v2 initialized');
            console.log('📊 Advanced consent mode active');
            console.log('🔒 Default consent set to denied for privacy compliance');
          }
        `,
      }}
    />
  );
}
