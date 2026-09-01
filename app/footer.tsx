import Link from "next/link";
import Image from "next/image";
import WeeklyShortlist from "./components/weekly-shortlist";

const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Grant Intelligence", href: "/funding-database" },
      { label: "Applications", href: "/applications" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "For charities",
    links: [
      { label: "Solo fundraisers", href: "/for-charities#solo" },
      { label: "Small teams", href: "/for-charities#small" },
      { label: "Departments", href: "/for-charities#department" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Guides", href: "/resources" },
      { label: "Templates", href: "/resources" },
      { label: "Funder profiles", href: "/resources" },
      { label: "API docs", href: "/integrations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Security & GDPR", href: "/security" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-shortlist">
          <WeeklyShortlist id="footer-shortlist" />
        </div>

        <div className="footer-columns">
          {footerColumns.map((col) => (
            <div key={col.heading} className="footer-col">
              <h3 className="footer-col-heading">{col.heading}</h3>
              <ul className="footer-col-list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-brand-row">
          <Image
            src="/fundleaf_logo.svg"
            alt="Fundleaf"
            width={100}
            height={57}
            className="footer-logo"
          />
          <p className="footer-positioning">
            Funding, organised. Find the funding to do more good.
          </p>
        </div>

        <div className="footer-legal">
          <span className="footer-legal-text">
            &copy; {new Date().getFullYear()} Fundleaf. Registered in England &amp; Wales.
          </span>
          <div className="footer-legal-links">
            <Link href="/legal/privacy" className="footer-legal-link">Privacy</Link>
            <Link href="/legal/terms" className="footer-legal-link">Terms</Link>
            <button type="button" className="footer-legal-link footer-legal-btn">
              Cookie settings
            </button>
            <Link href="/accessibility" className="footer-legal-link">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
