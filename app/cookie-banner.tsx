"use client";

import { useState } from "react";
import { useSyncExternalStore } from "react";
import CookieSettings from "./cookie-settings";

const CONSENT_KEY = "fl_cookie_consent";

function readConsent(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CONSENT_KEY);
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  if (consent !== null) return null;

  function denyAll() {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, analytical: false, marketing: false })
    );
    window.dispatchEvent(new Event("storage"));
  }

  function allowAll() {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, analytical: true, marketing: true })
    );
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <>
      <div className="cookie-banner" role="region" aria-label="Cookie consent">
        <div className="cookie-banner-inner">
          <div className="cookie-banner-text">
            <h2>About cookies on this site</h2>
            <p>
              Our website uses cookies to distinguish you from other users of
              our website. This helps us to provide you with a good experience
              when you browse our website and also allows us to improve our site.{" "}
              <a href="https://fundleaf.co.uk/legal/cookies">Learn more</a>
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-outline"
              onClick={() => setSettingsOpen(true)}
            >
              Cookie settings
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-fill"
              onClick={denyAll}
            >
              Deny all
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-fill"
              onClick={allowAll}
            >
              Allow all cookies
            </button>
          </div>
        </div>
      </div>
      <CookieSettings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </>
  );
}
