"use client";

import { useState, useEffect, useRef } from "react";

const CONSENT_KEY = "fl_cookie_consent";

type Category = "necessary" | "analytical" | "marketing";

type ConsentState = Record<Category, boolean>;

const defaultState: ConsentState = {
  necessary: true,
  analytical: false,
  marketing: false,
};

function readConsent(): ConsentState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      necessary: true,
      analytical: !!parsed.analytical,
      marketing: !!parsed.marketing,
    };
  } catch {
    return defaultState;
  }
}

function writeConsent(state: ConsentState) {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ ...state, necessary: true })
  );
  window.dispatchEvent(new Event("storage"));
}

const cookieDeclaration = [
  {
    category: "Necessary",
    cookies: [
      {
        name: "fl_cookie_consent",
        hostname: "fundleaf.co.uk",
        vendor: "Fundleaf",
        expiry: "Persistent",
        description:
          "Stores your cookie consent choices so the banner does not reappear on every page.",
      },
    ],
  },
  {
    category: "Analytical",
    cookies: [
      {
        name: "_ga",
        hostname: "fundleaf.co.uk",
        vendor: "Google LLC",
        expiry: "400 days",
        description:
          "Contains a unique identifier used by Google Analytics to determine that two distinct hits belong to the same user across browsing sessions.",
      },
      {
        name: "_ga_*",
        hostname: "fundleaf.co.uk",
        vendor: "Google LLC",
        expiry: "400 days",
        description:
          "Used by Google Analytics 4 to persist session state.",
      },
    ],
  },
  {
    category: "Marketing",
    cookies: [
      {
        name: "_fbp",
        hostname: "fundleaf.co.uk",
        vendor: "Meta Platforms",
        expiry: "90 days",
        description:
          "Facebook Pixel advertising first-party cookie. Used by Facebook to track visits across websites to deliver advertisement products.",
      },
      {
        name: "_gcl_au",
        hostname: "fundleaf.co.uk",
        vendor: "Google Advertising Products",
        expiry: "90 days",
        description:
          "Used by Google AdSense to understand user interaction with the website by generating analytical data.",
      },
    ],
  },
];

interface CookieSettingsProps {
  open: boolean;
  onClose: () => void;
}

export default function CookieSettings({ open, onClose }: CookieSettingsProps) {
  const [tab, setTab] = useState<"categories" | "declaration">("categories");
  const [state, setState] = useState<ConsentState>(() => readConsent());
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  function handleClose() {
    dialogRef.current?.close();
    onClose();
  }

  function handleBackdrop(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      handleClose();
    }
  }

  function toggleCategory(cat: Category) {
    if (cat === "necessary") return;
    setState((prev) => ({ ...prev, [cat]: !prev[cat] }));
  }

  function allowAll() {
    setState({ necessary: true, analytical: true, marketing: true });
  }

  function denyAll() {
    setState({ necessary: true, analytical: false, marketing: false });
  }

  function save() {
    writeConsent(state);
    handleClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="cookie-modal"
      onClose={handleClose}
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      aria-label="Cookie settings"
    >
      <div className="cookie-modal-content">
        <div className="cookie-modal-header">
          <h2>About cookies on this site</h2>
          <button
            type="button"
            className="cookie-modal-close"
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div className="cookie-modal-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "categories"}
            className={`cookie-tab${tab === "categories" ? " cookie-tab-active" : ""}`}
            onClick={() => setTab("categories")}
          >
            Categories
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "declaration"}
            className={`cookie-tab${tab === "declaration" ? " cookie-tab-active" : ""}`}
            onClick={() => setTab("declaration")}
          >
            Cookie declaration
          </button>
        </div>

        {tab === "categories" && (
          <div className="cookie-modal-body" role="tabpanel">
            <p className="cookie-modal-intro">
              Below you can choose which of Fundleaf&apos;s cookies you are
              happy to allow. You can see a list of cookies in each category
              along with more information about them in the cookie declaration.{" "}
              <a href="https://fundleaf.co.uk/legal/cookies">Learn more</a>
            </p>

            <div className="cookie-modal-actions-top">
              <button
                type="button"
                className="cookie-btn cookie-btn-fill"
                onClick={allowAll}
              >
                Allow all cookies
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn-outline"
                onClick={denyAll}
              >
                Deny all
              </button>
            </div>

            <div className="cookie-categories">
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <span className="cookie-toggle cookie-toggle-on cookie-toggle-disabled">
                    <span className="cookie-toggle-knob" />
                  </span>
                  <h3>Necessary cookies</h3>
                </div>
                <p>
                  Some cookies are required to provide core functionality. The
                  website won&apos;t function properly without these cookies and
                  they are enabled by default and cannot be disabled.
                </p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <button
                    type="button"
                    className={`cookie-toggle${state.analytical ? " cookie-toggle-on" : ""}`}
                    onClick={() => toggleCategory("analytical")}
                    aria-label={`Analytical cookies: ${state.analytical ? "on" : "off"}`}
                    role="switch"
                    aria-checked={state.analytical}
                  >
                    <span className="cookie-toggle-knob" />
                  </button>
                  <h3>Analytical cookies</h3>
                </div>
                <p>
                  Analytical cookies help us improve our website by collecting
                  and reporting information on its usage.
                </p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <button
                    type="button"
                    className={`cookie-toggle${state.marketing ? " cookie-toggle-on" : ""}`}
                    onClick={() => toggleCategory("marketing")}
                    aria-label={`Marketing cookies: ${state.marketing ? "on" : "off"}`}
                    role="switch"
                    aria-checked={state.marketing}
                  >
                    <span className="cookie-toggle-knob" />
                  </button>
                  <h3>Marketing cookies</h3>
                </div>
                <p>
                  Marketing cookies are used to track visitors across websites
                  to allow publishers to display relevant and engaging
                  advertisements.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "declaration" && (
          <div className="cookie-modal-body" role="tabpanel">
            <p className="cookie-modal-intro">
              Below is a list of all of the cookies we use on the Fundleaf
              website.{" "}
              <a href="https://fundleaf.co.uk/legal/cookies">Learn more</a>
            </p>

            {cookieDeclaration.map((group) => (
              <div key={group.category} className="cookie-decl-group">
                <h3>{group.category} cookies</h3>
                <p className="cookie-decl-desc">
                  {group.category === "Necessary" &&
                    "Some cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default and cannot be disabled."}
                  {group.category === "Analytical" &&
                    "Analytical cookies help us improve our website by collecting and reporting information on its usage."}
                  {group.category === "Marketing" &&
                    "Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements."}
                </p>
                <div className="cookie-decl-table-wrap">
                  <table className="cookie-decl-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Hostname</th>
                        <th>Vendor</th>
                        <th>Expiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.cookies.map((c) => (
                        <tr key={c.name}>
                          <td>{c.name}</td>
                          <td>{c.hostname}</td>
                          <td>{c.vendor}</td>
                          <td>{c.expiry}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {group.cookies.map((c) => (
                  <p key={c.name} className="cookie-decl-note">
                    <strong>{c.name}</strong> &ndash; {c.description}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="cookie-modal-footer">
          <button
            type="button"
            className="cookie-btn cookie-btn-fill"
            onClick={save}
          >
            Save settings
          </button>
        </div>
      </div>
    </dialog>
  );
}
