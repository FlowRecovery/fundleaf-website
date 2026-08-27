"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const productItems = [
  { label: "Funding database", href: "/funding-database" },
  { label: "Applications", href: "/features/applications" },
  { label: "Integrations", href: "/integrations" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeAll]);

  useEffect(() => {
    if (!openDropdown) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openDropdown]);

  function toggleDropdown(name: string) {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        ref={headerRef}
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="header-inner">
          <Link href="/" className="header-brand" aria-label="Fundleaf home">
            <Image
              src="/fundleaf_logo.svg"
              alt="Fundleaf"
              width={120}
              height={68}
              priority
            />
          </Link>

          <nav
            className={`header-nav ${mobileOpen ? "header-nav--open" : ""}`}
            aria-label="Main"
          >
            <div className="nav-dropdown" ref={(el) => { dropdownRefs.current.product = el; }}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={openDropdown === "product"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("product")}
              >
                Product
                <svg className={`nav-chevron ${openDropdown === "product" ? "nav-chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openDropdown === "product" && (
                <div className="nav-dropdown-menu" role="menu">
                  {productItems.map((item) => (
                    <Link key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem" onClick={closeAll}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/for-charities" className="header-link" onClick={closeAll}>
              For charities
            </Link>
            <Link href="/pricing" className="header-link" onClick={closeAll}>
              Pricing
            </Link>
            <Link href="/resources" className="header-link" onClick={closeAll}>
              Resources
            </Link>

            <div className="header-actions">
              <Link href="/signup" className="header-signin" onClick={closeAll}>
                Sign in
              </Link>
              <Link href="/signup" className="header-cta" onClick={closeAll}>
                Start finding funding
              </Link>
            </div>
          </nav>

          <button
            type="button"
            className={`header-burger ${mobileOpen ? "header-burger--open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
}
