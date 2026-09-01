import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FundLeaf",
  description:
    "FundLeaf helps UK charities find funding they can actually apply for, understand why they match, and manage applications from discovery through to outcome.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="about-heading">About FundLeaf</h1>
        <p className="about-sub">
          Finding the right funding should not be a full-time job. We built
          FundLeaf to make it easier for UK charities, community groups and
          social enterprises to find grants they can actually get.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">The problem</h2>
          <p>
            UK charities spend hundreds of hours each year searching grant
            databases, reading eligibility criteria, and tracking deadlines
            across dozens of funders. Small teams juggle spreadsheets, bookmarks
            and scattered notes. Opportunities slip through. Good organisations
            miss out on funding they were eligible for.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">What we are building</h2>
          <p>
            FundLeaf turns funding discovery into a managed process. You describe
            your organisation once, and FundLeaf identifies which grants you are
            genuinely eligible for, explains why each one fits, and helps you
            track every application from first look through to outcome.
          </p>
          <p>
            This is not a searchable directory with a few extra filters. FundLeaf
            understands eligibility, prioritises the strongest opportunities, and
            keeps your entire funding pipeline in one place.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">How it works</h2>
          <div className="about-steps">
            <div className="about-step">
              <span className="about-step-num">1</span>
              <div>
                <h3>Describe your organisation</h3>
                <p>
                  Tell us what you do, where you work, and what kind of funding
                  you need. This takes a few minutes and drives everything that
                  follows.
                </p>
              </div>
            </div>
            <div className="about-step">
              <span className="about-step-num">2</span>
              <div>
                <h3>See your matches</h3>
                <p>
                  FundLeaf scans UK funding opportunities and shows you the ones
                  that fit, with a clear explanation of why each one matches.
                </p>
              </div>
            </div>
            <div className="about-step">
              <span className="about-step-num">3</span>
              <div>
                <h3>Manage your pipeline</h3>
                <p>
                  Move opportunities from discovery through review, preparation
                  and submission. Never lose track of where things stand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Who it is for</h2>
          <p>
            FundLeaf is built for UK charities, CICs, constituted community
            groups and social enterprises. Whether you are a solo fundraisers
            juggling everything, a small team sharing a pipeline, or a
            department that needs structure, FundLeaf gives you clarity on your
            funding landscape.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Contact</h2>
          <p>
            Get in touch at{" "}
            <a href="mailto:hello@fundleaf.co.uk">hello@fundleaf.co.uk</a>.
            We would love to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
}
