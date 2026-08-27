import Link from "next/link";

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
              <Link href="#" className="button-primary">
                Start finding funding
              </Link>
              <Link href="/pricing" className="button-secondary">
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

      <section className="workflow section" aria-labelledby="workflow-heading">
        <div className="workflow-inner">
          <h2 id="workflow-heading">How it works</h2>
          <p className="workflow-sub">
            From discovery to award, Fundleaf keeps every step clear and
            connected.
          </p>
          <ol className="workflow-steps">
            <li>
              <span className="step-num">1</span>
              <h3>Find</h3>
              <p>Discover funding opportunities that match your goals.</p>
            </li>
            <li>
              <span className="step-num">2</span>
              <h3>Qualify</h3>
              <p>Check eligibility and prioritise the best fits.</p>
            </li>
            <li>
              <span className="step-num">3</span>
              <h3>Apply</h3>
              <p>Prepare and submit applications with confidence.</p>
            </li>
            <li>
              <span className="step-num">4</span>
              <h3>Track</h3>
              <p>Monitor progress across every active application.</p>
            </li>
            <li>
              <span className="step-num">5</span>
              <h3>Secure</h3>
              <p>Award, onboard and manage funding relationships.</p>
            </li>
          </ol>
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
                No heavy setup. Fundleaf stays out of the way and lets your
                team focus on the work that matters.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
