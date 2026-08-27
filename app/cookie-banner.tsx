"use client";

import { useSyncExternalStore } from "react";

const COOKIE_KEY = "fl_cookie_consent";

type Consent = "denied" | "allowed";

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(COOKIE_KEY);
  if (v === "denied" || v === "allowed") return v;
  return null;
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);

  if (consent !== null) return null;

  function handleChoice(value: Consent) {
    localStorage.setItem(COOKIE_KEY, value);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <h2>About cookies on this site</h2>
          <p>
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when you
            browse our website and also allows us to improve our site.{" "}
            <a href="https://fundleaf.co.uk/cookies">Learn more</a>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-outline"
            onClick={() => {
              /* placeholder for future settings panel */
            }}
          >
            Cookie settings
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-fill"
            onClick={() => handleChoice("denied")}
          >
            Deny all
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-fill"
            onClick={() => handleChoice("allowed")}
          >
            Allow all cookies
          </button>
        </div>
      </div>
    </div>
  );
}
