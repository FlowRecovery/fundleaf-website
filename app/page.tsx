import Link from "next/link";
import WeeklyShortlist from "./components/weekly-shortlist";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
              Funding, organised.
            </p>
            <h1>
              Find the funding to do more good.
            </h1>
            <p className="hero-intro">
              Relevant opportunities, clearer eligibility and a calmer way to
              build your funding shortlist &ndash; all in one place.
            </p>
            <div className="hero-actions">
              <a href="https://app.fundleaf.co.uk/login" className="button-primary">
                Start finding funding
              </a>
              <Link href="/#how-it-works" className="button-secondary">
                See how it works
              </Link>
            </div>
          </div>
          <div className="hero-product">
            <p className="hero-product-placeholder">
              Product UI coming soon
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="workflow section" aria-labelledby="workflow-heading">
        <div className="workflow-inner">
          <h2 id="workflow-heading">How it works</h2>
          <p className="workflow-sub">
            From discovery to award, FundLeaf keeps every step clear and
            connected.
          </p>
        </div>
      </section>

      <section className="workflow-band workflow-band--cream" aria-labelledby="wf-find">
        <div className="workflow-band-inner">
          <div className="workflow-band-text">
            <span className="workflow-num">1</span>
            <h3 id="wf-find">Find</h3>
            <p className="workflow-band-heading">
              Stop searching in six places at once.
            </p>
            <p>
              Opportunities from trusts, foundations, lottery distributors and
              statutory funders in one searchable index.
            </p>
          </div>
          <div className="workflow-band-ui" aria-hidden="true">
            <div className="ui-filter-rail">
              <div className="ui-filter-rail-row">
                <span className="ui-filter-chip ui-filter-chip--active">
                  Saved search
                </span>
                <span className="ui-filter-chip">Location</span>
                <span className="ui-filter-chip">Award size</span>
              </div>
              <p className="ui-small-text">
                Get a weekly shortlist of new matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-band workflow-band--sand" aria-labelledby="wf-qualify">
        <div className="workflow-band-inner workflow-band-inner--reversed">
          <div className="workflow-band-text">
            <span className="workflow-num">2</span>
            <h3 id="wf-qualify">Qualify</h3>
            <p className="workflow-band-heading">
              Know if it&apos;s worth your time before you open it.
            </p>
            <p>
              Eligibility cues based on your organisation type, location and
              typical award size, so a shortlist takes minutes instead of an
              afternoon.
            </p>
          </div>
          <div className="workflow-band-ui" aria-hidden="true">
            <div className="ui-eligibility-panel">
              <div className="ui-eligibility-row">
                <span className="ui-check">&#10003;</span>
                <span>Organisation type eligible</span>
              </div>
              <div className="ui-eligibility-row">
                <span className="ui-check">&#10003;</span>
                <span>UK-wide</span>
              </div>
              <div className="ui-eligibility-row">
                <span className="ui-check">&#10003;</span>
                <span>Award range overlaps your target</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-band workflow-band--cream" aria-labelledby="wf-apply">
        <div className="workflow-band-inner">
          <div className="workflow-band-text">
            <span className="workflow-num">3</span>
            <h3 id="wf-apply">Apply</h3>
            <p className="workflow-band-heading">
              Never write the same paragraph twice.
            </p>
            <p>
              A reusable content library holds your governance, history,
              safeguarding and standard budgets, so every application starts
              most of the way finished.
            </p>
          </div>
          <div className="workflow-band-ui" aria-hidden="true">
            <div className="ui-content-blocks">
              <p className="ui-block-title">Content blocks</p>
              <div className="ui-block-row">
                <span className="ui-block-name">Organisation overview</span>
                <span className="ui-block-date">Updated 28 Jul</span>
              </div>
              <div className="ui-block-row">
                <span className="ui-block-name">Safeguarding policy</span>
                <span className="ui-block-date">Updated 14 Jul</span>
              </div>
              <div className="ui-block-row">
                <span className="ui-block-name">Standard budgets</span>
                <span className="ui-block-date">Updated 01 Aug</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-band workflow-band--sand" aria-labelledby="wf-track">
        <div className="workflow-band-inner workflow-band-inner--reversed">
          <div className="workflow-band-text">
            <span className="workflow-num">4</span>
            <h3 id="wf-track">Track</h3>
            <p className="workflow-band-heading">
              Every deadline in one place.
            </p>
            <p>
              Applications move through clear stages with owners and dates, and
              nothing depends on someone remembering.
            </p>
          </div>
          <div className="workflow-band-ui" aria-hidden="true">
            <div className="ui-pipeline">
              <p className="ui-block-title">Pipeline</p>
              <div className="ui-pipeline-stages">
                <div className="ui-pipeline-col">
                  <span className="ui-pipeline-stage">Researching</span>
                  <div className="ui-pipeline-card">Greenford Trust</div>
                </div>
                <div className="ui-pipeline-col">
                  <span className="ui-pipeline-stage">Drafting</span>
                  <div className="ui-pipeline-card">
                    Youth programme
                    <span className="ui-chip ui-chip--warning">
                      Closes in 6 days
                    </span>
                  </div>
                </div>
                <div className="ui-pipeline-col">
                  <span className="ui-pipeline-stage">Submitted</span>
                </div>
                <div className="ui-pipeline-col">
                  <span className="ui-pipeline-stage">Decision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-band workflow-band--cream" aria-labelledby="wf-secure">
        <div className="workflow-band-inner">
          <div className="workflow-band-text">
            <span className="workflow-num">5</span>
            <h3 id="wf-secure">Secure</h3>
            <p className="workflow-band-heading">
              The work doesn&apos;t stop at the award.
            </p>
            <p>
              Track conditions, payment schedules and reporting deadlines so
              funded relationships stay in good standing.
            </p>
          </div>
          <div className="workflow-band-ui" aria-hidden="true">
            <div className="ui-reporting">
              <p className="ui-block-title">Reporting</p>
              <div className="ui-reporting-row">
                <span className="ui-reporting-label">Interim report</span>
                <span className="ui-reporting-date">due 14 March</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ws-home-heading">
        <div className="section-inner">
          <p id="ws-home-heading" className="sr-only">Weekly shortlist</p>
          <WeeklyShortlist />
        </div>
      </section>

      <section className="deadline section" aria-labelledby="deadline-heading">
        <div className="deadline-inner">
          <div className="deadline-copy">
            <h2 id="deadline-heading">
              A missed deadline is the most expensive thing in fundraising.
            </h2>
            <p>
              Application windows, submission dates and reporting obligations
              all sit on one calendar, with reminders that escalate as the date
              approaches. FundLeaf is built so that the deadline is never the
              thing you find out about too late.
            </p>
          </div>
          <div className="deadline-calendar" aria-hidden="true">
            <div className="deadline-item deadline-item--urgent">
              <span className="deadline-label">Tomorrow</span>
              <span className="deadline-name">National Lottery &ndash; application close</span>
            </div>
            <div className="deadline-item">
              <span className="deadline-label">7 days</span>
              <span className="deadline-name">Tudor Trust &ndash; quarterly deadline</span>
            </div>
            <div className="deadline-item">
              <span className="deadline-label">21 days</span>
              <span className="deadline-name">Annual report to Garfield Weston</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features section" aria-labelledby="features-heading">
        <div className="features-inner">
          <h2 id="features-heading">
            Built for organisations that need focus
          </h2>
          <ul className="features-list">
            <li>
              <h3>One place for everything</h3>
              <p>
                Opportunities, applications and contacts live together so
                nothing slips through the cracks.
              </p>
            </li>
            <li>
              <h3>Clear at every stage</h3>
              <p>
                See where each opportunity stands from first discovery through
                to a signed agreement.
              </p>
            </li>
            <li>
              <h3>Lightweight by design</h3>
              <p>
                No heavy setup. FundLeaf stays out of the way and lets your
                team focus on the work that matters.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
