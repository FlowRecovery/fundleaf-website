import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fundraising CRM",
  description:
    "Collect grants, funds and donors in one easy to manage location. The fundraising CRM built for organisations that need focus.",
};

const features = [
  {
    title: "Everything in one place",
    description:
      "Import funding data from anywhere and see it in one view. From spreadsheets to integrations, FundLeaf gives you a clear picture of everything happening across your organisation.",
  },
  {
    title: "Grant tracking",
    description:
      "Track every grant application from first discovery through to award and reporting. Never lose sight of deadlines, requirements or outcomes.",
  },
  {
    title: "Donor management",
    description:
      "Keep detailed records of donors, funders and sponsors. Track giving history, preferences and communication in a single place.",
  },
  {
    title: "Pipeline visibility",
    description:
      "See your entire funding pipeline at a glance. Understand what's in progress, what's awaiting decision and what's been secured.",
  },
  {
    title: "Contact management",
    description:
      "Manage relationships with funders, donors, partners and stakeholders. Store communications, notes and key dates against every contact.",
  },
  {
    title: "Reporting and dashboards",
    description:
      "Generate reports that show funding performance, pipeline health and team activity. Share insights with your board and stakeholders.",
  },
];

const capabilities = [
  "Track grants, donations, sponsorships and partnerships",
  "Import data from spreadsheets and existing tools",
  "Set reminders for deadlines and follow-ups",
  "Attach documents and supporting files",
  "Tag and categorise opportunities by type, status or funder",
  "Export data for reporting and compliance",
];

export default function FundraisingCrmPage() {
  return (
    <>
      <section className="feature-hero">
        <div className="feature-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Fundraising CRM
          </p>
          <h1>
            Grants, funds and donors&nbsp;&ndash; all in one&nbsp;place.
          </h1>
          <p className="feature-hero-sub">
            Stop juggling spreadsheets and scattered tools. FundLeaf gives your
            team a single, clear view of every funding relationship and
            opportunity.
          </p>
          <div className="feature-hero-actions">
        <a href="https://app.fundleaf.co.uk/login" className="button-primary">
          Start finding funding
        </a>
            <Link href="/pricing" className="button-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-product section" aria-label="Product demonstration">
        <div className="feature-product-inner">
          <div className="feature-product-window">
            <p className="feature-product-placeholder">
              Product UI coming soon
            </p>
          </div>
        </div>
      </section>

      <section className="feature-grid section" aria-labelledby="features-heading">
        <div className="feature-grid-inner">
          <h2 id="features-heading">Built for how you actually work</h2>
          <p className="feature-grid-sub">
            FundLeaf covers the essentials without the bloat. Every feature is
            designed to help your team spend less time on admin and more time
            securing funding.
          </p>
          <div className="feature-cards">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-capabilities section" aria-labelledby="cap-heading">
        <div className="feature-capabilities-inner">
          <div className="feature-capabilities-copy">
            <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
              Capabilities
            </p>
            <h2 id="cap-heading">What you can do with FundLeaf</h2>
            <p>
              From the first grant you track to the hundredth donor record,
              FundLeaf scales with your organisation.
            </p>
          </div>
          <ul className="feature-capabilities-list">
            {capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
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
        <a href="https://app.fundleaf.co.uk/login" className="button-primary">
          Start finding funding
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
