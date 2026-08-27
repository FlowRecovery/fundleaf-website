import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Track every funding application from submission to award. Built for organisations that need clarity across their pipeline.",
};

const workflowFeatures = [
  {
    title: "Track the whole process",
    description:
      "Follow every application from first submission through to decision and payment. See exactly where each one stands at any time.",
    bullets: [
      "Track the application from submission to outcome",
      "See all applications in one place",
      "Monitor deadlines and follow-up dates",
    ],
  },
  {
    title: "Configured for you",
    description:
      "Set up your own application criteria, stages and templates. Fundleaf adapts to the way your organisation works, not the other way around.",
    bullets: [
      "Define your own review stages",
      "Create reusable application templates",
      "Manage agreements and documentation",
    ],
  },
  {
    title: "Get clear insights",
    description:
      "Pull reports on the status of your applications and get reliable data on outcomes, amounts awarded and pipeline health.",
    bullets: [
      "Real-time status reporting",
      "Track awarded amounts and outcomes",
      "Share insights with your board",
    ],
  },
];

const capabilities = [
  {
    title: "Pipeline visibility",
    description:
      "See your entire application pipeline at a glance. Understand what is in progress, what is awaiting decision and what has been secured.",
  },
  {
    title: "Document management",
    description:
      "Attach supporting documents, proposals and correspondence directly to each application. Everything lives in one place.",
  },
  {
    title: "Deadline tracking",
    description:
      "Set reminders for submission deadlines, review dates and reporting requirements. Never miss a critical date again.",
  },
  {
    title: "Team collaboration",
    description:
      "Assign team members to applications, leave internal notes and track who reviewed what and when.",
  },
  {
    title: "Eligibility checks",
    description:
      "Define eligibility criteria and flag applications that meet or miss your requirements before they enter your pipeline.",
  },
  {
    title: "Outcome recording",
    description:
      "Record decisions, awarded amounts and conditions. Build a clear history of every application and its result.",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <section className="feature-hero">
        <div className="feature-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Applications
          </p>
          <h1>
            Every application, clearly&nbsp;tracked.
          </h1>
          <p className="feature-hero-sub">
            Follow funding applications from first submission to final decision.
            Fundleaf gives your team a single view of every application in your
            pipeline.
          </p>
          <div className="feature-hero-actions">
            <Link href="#" className="button-primary">
              Start finding funding
            </Link>
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

      <section className="feature-workflow section" aria-labelledby="workflow-heading">
        <div className="feature-workflow-inner">
          <h2 id="workflow-heading">Built around your process</h2>
          <p className="feature-workflow-sub">
            Every organisation handles applications differently. Fundleaf
            gives you the structure to manage yours with confidence.
          </p>
          <div className="feature-workflow-cards">
            {workflowFeatures.map((f) => (
              <div key={f.title} className="feature-workflow-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                <ul>
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
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
            <h2 id="cap-heading">What you can do with Fundleaf</h2>
            <p>
              From the first application you track to the hundredth decision,
              Fundleaf scales with your organisation.
            </p>
          </div>
          <div className="feature-capability-cards">
            {capabilities.map((c) => (
              <div key={c.title} className="feature-capability-card">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
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
            <Link href="#" className="button-primary">
              Start finding funding
            </Link>
            <Link href="/pricing" className="button-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
