import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Charities",
  description:
    "FundLeaf works differently depending on the size of your team. Find the setup that fits your charity.",
};

const profiles = [
  {
    id: "solo",
    eyebrow: "You are the fundraising team",
    heading: "One person, everything to do.",
    body: "You cover strategy, applications, donors and events, often part-time. There is no one else to hand a task to, so every missed reminder or forgotten deadline lands on you. FundLeaf takes the organisational weight off your shoulders so you can focus on the work that actually brings money in.",
    bullets: [
      "A weekly shortlist of new opportunities replaces hours of searching across websites, funding directories and email alerts.",
      "The content library holds your governance, history and standard budgets, so every application starts most of the way finished.",
      "Deadline reminders escalate as dates approach, meaning nothing depends on you remembering.",
    ],
  },
  {
    id: "small",
    eyebrow: "A small team sharing the load",
    heading: "Two to five people, one shared pipeline.",
    body: "Fundraising and programmes overlap, and everyone has their own spreadsheet. FundLeaf gives you a single view of what is in progress, who owns it, and whether anyone has already approached the funder you are about to email.",
    bullets: [
      "Shared pipeline visibility means no one duplicates work or double-approaches a funder.",
      "Application ownership is clear: who is drafting, who is reviewing, who is submitting.",
      "Colleagues in other departments can flag opportunities through a simple intake form without needing access to the full system.",
    ],
  },
  {
    id: "department",
    eyebrow: "A department that needs coordination",
    heading: "More people, more structure needed.",
    body: "When fundraising is a team function, you need controls, reporting and clarity about who can do what. FundLeaf gives you the structure without the overhead of a platform that tries to do everything.",
    bullets: [
      "Role-based access means trustees see reports while staff see the pipeline, without stepping on each other.",
      "Reporting to trustees is straightforward: export what you need, in the format they expect.",
      "Success-rate analytics by funder type show where your effort is best spent.",
    ],
  },
];

const comparison = [
  {
    reality: "Spreadsheets you update manually when you remember",
    fundleaf: "A pipeline that updates itself as you move applications forward",
  },
  {
    reality: "A shared inbox where opportunities get buried",
    fundleaf: "A searchable index with filters that surface what matches",
  },
  {
    reality: "A wall calendar someone has to photograph and send around",
    fundleaf: "Reminders that escalate as deadlines approach",
  },
  {
    reality: "Someone's memory of who last spoke to which funder",
    fundleaf: "A record of every interaction, attached to the opportunity",
  },
  {
    reality: "Copy-pasting the same paragraph into a sixth application",
    fundleaf: "A content library that loads your standard text in one click",
  },
];

export default function ForCharitiesPage() {
  return (
    <>
      <section className="fc-hero">
        <div className="fc-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            For charities
          </p>
          <h1>
            FundLeaf works&nbsp;differently depending on the size of&nbsp;your&nbsp;team.
          </h1>
          <p className="fc-hero-sub">
            The buying decision is different when you are one person versus when
            you are a department. This page is organised around that reality.
          </p>
        </div>
      </section>

      {profiles.map((p, i) => (
        <section
          key={p.id}
          className={`fc-profile section ${i % 2 === 0 ? "fc-profile--cream" : "fc-profile--sand"}`}
          aria-labelledby={`profile-${p.id}`}
        >
          <div className="fc-profile-inner">
            <div className="fc-profile-copy">
              <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
                {p.eyebrow}
              </p>
              <h2 id={`profile-${p.id}`}>{p.heading}</h2>
              <p className="fc-profile-body">{p.body}</p>
            </div>
            <div className="fc-profile-bullets">
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="fc-does-not section" aria-labelledby="does-not-heading">
        <div className="fc-does-not-inner">
          <p className="eyebrow" style={{ color: "var(--fl-stone)" }}>
            Honest positioning
          </p>
          <h2 id="does-not-heading">What FundLeaf doesn&apos;t do</h2>
          <p className="fc-does-not-sub">
            FundLeaf is not a CRM. It does not process donations, claim Gift Aid
            or run events. It works alongside the CRM you already have. Naming
            this plainly is deliberate: it means you keep the system that works
            and add the piece that is missing.
          </p>
          <div className="fc-does-not-grid">
            <div className="fc-does-not-item">
              <span className="fc-does-not-x">X</span>
              <span>Not a CRM</span>
            </div>
            <div className="fc-does-not-item">
              <span className="fc-does-not-x">X</span>
              <span>No donation processing</span>
            </div>
            <div className="fc-does-not-item">
              <span className="fc-does-not-x">X</span>
              <span>No Gift Aid</span>
            </div>
            <div className="fc-does-not-item">
              <span className="fc-does-not-x">X</span>
              <span>No event management</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fc-comparison section" aria-labelledby="comparison-heading">
        <div className="fc-comparison-inner">
          <h2 id="comparison-heading">The before and after</h2>
          <p className="fc-comparison-sub">
            Not a dramatic transformation. Just a calmer, more reliable way to
            work.
          </p>
          <div className="fc-comparison-table">
            <div className="fc-comparison-header">
              <span>Current reality</span>
              <span>With FundLeaf</span>
            </div>
            {comparison.map((row) => (
              <div key={row.reality} className="fc-comparison-row">
                <span className="fc-comparison-reality">{row.reality}</span>
                <span className="fc-comparison-fundleaf">{row.fundleaf}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fc-cta section" aria-labelledby="fc-cta-heading">
        <div className="fc-cta-inner">
          <h2 id="fc-cta-heading">Start finding funding</h2>
          <p>
            Sign up free or get in touch to find the right fit for your team.
          </p>
          <div className="fc-cta-btns">
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
