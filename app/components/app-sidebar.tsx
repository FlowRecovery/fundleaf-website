"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Overview", href: "/dashboard", icon: "overview" },
  { label: "Funding", href: "/dashboard/funding", icon: "funding" },
  { label: "Pipeline", href: "/dashboard/pipeline", icon: "pipeline" },
  { label: "Applications", href: "/dashboard/applications", icon: "applications" },
  { label: "Organisation", href: "/dashboard/organisation", icon: "organisation" },
  { label: "Saved", href: "/dashboard/saved", icon: "saved" },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
] as const;

const ICONS: Record<string, React.JSX.Element> = {
  overview: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  funding: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  pipeline: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="5" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="8" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  applications: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 2h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6h6M6 9h6M6 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  organisation: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1L2 5v12h14V5L9 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 17v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  saved: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 2h10a1 1 0 011 1v13l-6-3-6 3V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.3 3.3l1.4 1.4M13.3 13.3l1.4 1.4M14.7 3.3l-1.4 1.4M4.7 13.3l-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function AppSidebar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <aside className="app-sidebar" role="navigation" aria-label="Dashboard">
      <div className="app-sidebar-logo">
        <Link href="/dashboard" className="app-sidebar-wordmark">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="var(--fl-olive)" />
            <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="var(--fl-white)" strokeWidth="1.5" fill="none" />
          </svg>
          <span>Fundleaf</span>
        </Link>
      </div>
      <nav className="app-sidebar-nav">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`app-sidebar-link ${isActive(item.href) ? "app-sidebar-link--active" : ""}`}
          >
            {ICONS[item.icon]}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="app-sidebar-footer">
        <Link href="/" className="app-sidebar-link">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 9l7-7 7 7M4 8v7a1 1 0 001 1h8a1 1 0 001-1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back to site</span>
        </Link>
      </div>
    </aside>
  );
}
