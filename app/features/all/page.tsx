import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything FundLeaf gives your team to find, track and secure funding. From grant discovery to reporting, built for UK charities.",
};

const features = [
  {
    icon: "/grant_intelligence.svg",
    title: "Grant Intelligence",
    href: "/grant-intelligence",
    description:
      "Discover relevant UK grant opportunities matched to your organisation. Search trusts, foundations, lottery distributors and statutory funders in one place.",
  },
  {
    icon: "/grant_manager.svg",
    title: "Grant Manager",
    href: "/grant-manager",
    description:
      "Track every application from submission to award. See exactly where each one stands at any time.",
  },
  {
    icon: "/fundraising_CRM.svg",
    title: "Fundraising CRM",
    href: "/funding-crm",
    description:
      "Manage funders, contacts and relationships alongside your pipeline. Keep detailed records of every interaction.",
  },
  {
    icon: "/applications.svg",
    title: "Applications",
    href: "/applications",
    description:
      "Access FundLeaf on iOS, Android and desktop. Your funding pipeline, wherever you are.",
  },
  {
    icon: "/report_maker.svg",
    title: "Report Maker",
    href: "/report-maker",
    description:
      "Generate funder reports and impact summaries in minutes. Pull data from your pipeline without manual spreadsheets.",
  },
  {
    icon: "/integrations.svg",
    title: "Integrations",
    href: "/integrations",
    description:
      "Connect FundLeaf to your existing CRM, finance tools and calendar. The systems you already use, working together.",
  },
];

const categories = [
  {
    title: "Discovery",
    description:
      "Find the right funding before anyone else. FundLeaf scans UK grant opportunities and shows you the ones that match your organisation.",
    items: [
      "Eligibility matching",
      "Saved searches and alerts",
      "Deadline tracking",
      "Funder profiles",
    ],
  },
  {
    title: "Management",
    description:
      "Track every application from first submission to final decision. Never lose sight of a deadline or a funder relationship.",
    items: [
      "Application pipeline",
      "Funder relationship management",
      "Contact records",
      "Document attachments",
    ],
  },
  {
    title: "Reporting",
    description:
      "Generate reports that show funding performance, pipeline health and team activity. Share insights with your board and stakeholders.",
    items: [
      "Pipeline dashboards",
      "Grant reporting calendar",
      "Outcome tracking",
      "Export and import",
    ],
  },
  {
    title: "Team",
    description:
      "Work together without the overhead. Assign team members, leave notes and keep everyone aligned on what matters.",
    items: [
      "Team permissions",
      "Internal notes",
      "Activity history",
      "User roles",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="feature-hero">
        <div className="feature-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Features
          </p>
          <h1>
            Everything your team needs to&nbsp;secure&nbsp;funding.
          </h1>
          <p className="feature-hero-sub">
            From discovery to award, FundLeaf gives your team clarity on every
            funding opportunity, application and deadline.
          </p>
          <div className="feature-hero-actions">
            <a
              href="https://app.fundleaf.co.uk/login"
              className="button-primary"
            >
              Get started for free
            </a>
            <Link href="/pricing" className="button-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="features-all-grid section" aria-labelledby="all-features-heading">
        <div className="features-all-inner">
          <h2 id="all-features-heading" className="sr-only">All features</h2>
          <div className="features-all-cards">
            {features.map((f) => (
              <Link key={f.href} href={f.href} className="features-all-card">
                <Image
                  src={f.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="features-all-icon"
                  aria-hidden="true"
                />
                <div className="features-all-card-text">
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="features-categories section" aria-labelledby="cat-heading">
        <div className="features-categories-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            By workflow
          </p>
          <h2 id="cat-heading">Built for every stage of funding</h2>
          <p className="features-categories-sub">
            FundLeaf covers the full journey from first discovery through to
            award and reporting.
          </p>
          <div className="features-categories-grid">
            {categories.map((cat) => (
              <div key={cat.title} className="features-category-card">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-cta section" aria-labelledby="cta-heading">
        <div className="feature-cta-inner">
          <h2 id="cta-heading">Ready to get organised?</h2>
          <p>
            Start with the free plan or get in touch to find the right fit for
            your team.
          </p>
          <div className="feature-cta-btns">
            <a
              href="https://app.fundleaf.co.uk/login"
              className="button-primary"
            >
              Get started for free
            </a>
            <Link href="/pricing" className="button-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
