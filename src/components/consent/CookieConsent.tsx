"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { GA_ID } from "@/lib/site";

// Decyzja użytkownika jest pamiętana 12 miesięcy (localStorage - niezbędne, nie wymaga zgody).
const STORAGE_KEY = "tolema-consent";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
export const OPEN_CONSENT_EVENT = "tolema:open-consent";
const CHANGE_EVENT = "tolema:consent-change";

type Decision = "granted" | "denied";

function readRaw(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function parseDecision(raw: string): Decision | null {
  try {
    if (!raw) return null;
    const { value, ts } = JSON.parse(raw) as { value: Decision; ts: number };
    if (Date.now() - ts > MAX_AGE_MS) return null;
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveDecision(value: Decision) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() }));
  } catch {
    // brak dostępu do localStorage - baner pojawi się ponownie przy kolejnej wizycie
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function clearGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

export default function CookieConsent() {
  // null na serwerze - baner renderuje się dopiero w przeglądarce, bez błędu hydracji.
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  const decision = raw === null ? null : parseDecision(raw);
  const [reopened, setReopened] = useState(false);
  const open = raw !== null && (decision === null || reopened);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  // Bez identyfikatora GA strona nie używa cookies wymagających zgody - baner zbędny.
  if (!GA_ID) return null;

  const choose = (value: Decision) => {
    const previous = decision;
    saveDecision(value);
    setReopened(false);
    if (value === "denied" && previous === "granted") {
      // Skrypt GA jest już załadowany - usuwamy cookies i przeładowujemy stronę bez niego.
      clearGaCookies();
      location.reload();
    }
  };

  return (
    <>
      {decision === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-[640px] border border-white/20 bg-[#0d0d0d] p-6 text-white md:p-8"
        >
          <h2 id="cookie-title" className="text-lg font-semibold">
            Pliki cookies
          </h2>
          <p id="cookie-desc" className="mt-3 text-sm font-light leading-relaxed text-white/75">
            Za Twoją zgodą używamy Google Analytics, aby sprawdzać, jak odwiedzający korzystają ze
            strony. Zgodę możesz w każdej chwili wycofać w „Ustawieniach cookies” w stopce.
            Szczegóły w{" "}
            <Link href="/polityka-prywatnosci" className="text-[#D4B876] underline underline-offset-2">
              polityce prywatności
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 cursor-pointer border border-white/40 px-6 py-3 text-sm font-light uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
            >
              Odrzucam
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 cursor-pointer border border-white/40 px-6 py-3 text-sm font-light uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
            >
              Akceptuję
            </button>
          </div>
        </div>
      )}
    </>
  );
}
