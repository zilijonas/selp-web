import { cookies } from "next/headers";

export async function hasAnalyticsConsent(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const consent = cookieStore.get("cookie-consent");
    return consent?.value === "accepted";
  } catch {
    // If we can't access cookies (client-side), return false by default
    return false;
  }
}

export async function getConsentStatus(): Promise<
  "accepted" | "declined" | null
> {
  try {
    const cookieStore = await cookies();
    const consent = cookieStore.get("cookie-consent");
    return consent?.value as "accepted" | "declined" | null;
  } catch {
    return null;
  }
}
