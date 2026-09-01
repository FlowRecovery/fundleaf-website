"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const featureItems = [
  {
    label: "Grant Intelligence",
    href: "/grant-intelligence",
    icon: "/grant_intelligence.svg",
    description: "Discover relevant UK grant opportunities matched to your organisation.",
  },
  {
    label: "Grant Manager",
    href: "/grant-manager",
    icon: "/grant_manager.svg",
    description: "Track every application from submission to award in one place.",
  },
  {
    label: "Fundraising CRM",
    href: "/funding-crm",
    icon: "/fundraising_CRM.svg",
    description: "Manage funders, contacts and relationships alongside your pipeline.",
  },
  {
    label: "Applications",
    href: "/applications",
    icon: "/applications.svg",
    description: "Access Fundleaf on iOS, Android and desktop.",
  },
  {
    label: "Report Maker",
    href: "/report-maker",
    icon: "/report_maker.svg",
    description: "Generate funder reports and impact summaries in minutes.",
  },
  {
    label: "Integrations",
    href: "/integrations",
    icon: "/integrations.svg",
    description: "Connect Fundleaf to your existing CRM and accounting tools.",
  },
];

const whyItems = [
  { label: "About", href: "/about" },
  { label: "For charities", href: "/for-charities" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
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
      if (e.key === "Tab") {
        const nav = navRef.current;
        if (!nav) return;
        const focusable = nav.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
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
            ref={navRef}
            className={`header-nav ${mobileOpen ? "header-nav--open" : ""}`}
            aria-label="Main"
          >
            {mobileOpen && (
              <div
                className="header-backdrop"
                onClick={closeAll}
                aria-hidden="true"
              />
            )}
            <div className="nav-dropdown" ref={(el) => { dropdownRefs.current.features = el; }}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={openDropdown === "features"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("features")}
              >
                Features
                <svg className={`nav-chevron ${openDropdown === "features" ? "nav-chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openDropdown === "features" && (
                <div className="nav-dropdown-menu nav-dropdown-menu--features" role="menu">
                  {featureItems.map((item) => (
                    <Link key={item.href} href={item.href} className="nav-dropdown-card" role="menuitem" onClick={closeAll}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="nav-dropdown-icon"
                        aria-hidden="true"
                      />
                      <div className="nav-dropdown-card-text">
                        <span className="nav-dropdown-card-title">{item.label}</span>
                        <span className="nav-dropdown-card-desc">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="header-link" onClick={closeAll}>
              Pricing
            </Link>
            <Link href="/resources" className="header-link" onClick={closeAll}>
              Resources
            </Link>

            <div className="nav-dropdown" ref={(el) => { dropdownRefs.current.why = el; }}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={openDropdown === "why"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("why")}
              >
                Why FundLeaf
                <svg className={`nav-chevron ${openDropdown === "why" ? "nav-chevron--open" : ""}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openDropdown === "why" && (
                <div className="nav-dropdown-menu" role="menu">
                  {whyItems.map((item) => (
                    <Link key={item.href} href={item.href} className="nav-dropdown-item" role="menuitem" onClick={closeAll}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="header-actions">
              <a href="https://app.fundleaf.co.uk/login" className="header-signin" onClick={closeAll}>
                Sign In
              </a>
              <a href="https://app.fundleaf.co.uk/login" className="button-primary" onClick={closeAll}>
                Get Started for Free
              </a>
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
