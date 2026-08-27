import Link from "next/link";
import Image from "next/image";
import NavDropdown from "./nav-dropdown";

const featureItems = [
  { label: "Fundraising CRM", href: "/features/fundraising-crm" },
  { label: "Applications", href: "/features/applications" },
];

const companyItems = [
  { label: "GDPR & Security", href: "/security" },
];

export default function Header() {
  return (
    <header className="site-header">
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
        <div className="header-nav">
          <nav aria-label="Main">
            <NavDropdown label="Features" items={featureItems} />
            <Link href="/funding-database" className="header-link">
              Funding Database
            </Link>
            <Link href="/pricing" className="header-link">
              Pricing
            </Link>
            <NavDropdown label="Company" items={companyItems} />
          </nav>
          <Link href="#" className="header-cta">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
