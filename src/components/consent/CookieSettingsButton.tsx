"use client";

import { OPEN_CONSENT_EVENT } from "@/components/consent/CookieConsent";
import { GA_ID } from "@/lib/site";

export default function CookieSettingsButton({ className }: { className?: string }) {
  if (!GA_ID) return null;

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={`cursor-pointer ${className ?? ""}`}
    >
      Ustawienia cookies
    </button>
  );
}
