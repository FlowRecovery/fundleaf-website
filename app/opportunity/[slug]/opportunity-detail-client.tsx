"use client";

import { useState } from "react";
import Link from "next/link";
import type { OpportunityDetail } from "../data";

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr);
  const now = new Date();
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export default function OpportunityDetailClient({
  opportunity: opp,
}: {
  opportunity: OpportunityDetail;
}) {
  const [saved, setSaved] = useState(false);
  const days = daysUntil(opp.deadline);

  const chipClass =
    days <= 7
      ? "od-chip od-chip--urgent"
      : days <= 30
        ? "od-chip od-chip--soon"
        : "od-chip";

  const chipLabel =
    days === 0
      ? "Closed"
      : days === 1
        ? "1 day left"
        : `${days} days left`;

  return (
    <div className="od">
      <div className="od-layout">
        <main className="od-main">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            {opp.funderName}
          </p>
          <h1 className="od-title">{opp.programmeTitle}</h1>

          <section aria-labelledby="od-eligibility">
            <h2 id="od-eligibility">Eligibility</h2>
            <p className="od-note">
              Below is a general indication. Sign in to check your organisation
              against this funder&apos;s specific criteria.
            </p>
            <ul className="od-checklist">
              {opp.organisationTypes.map((t) => (
                <li key={t}>
                  <span className="od-check" aria-hidden="true">&#10003;</span>
                  {t}
                </li>
              ))}
              <li>
                <span className="od-check" aria-hidden="true">&#10003;</span>
                {opp.location}
              </li>
            </ul>
          </section>

          <section aria-labelledby="od-supports">
            <h2 id="od-supports">What the fund supports</h2>
            <ul className="od-list">
              {opp.whatTheFundSupports.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="od-does-not">
            <h2 id="od-does-not">What it does not support</h2>
            <ul className="od-list od-list--muted">
              {opp.whatItDoesNotSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="od-process">
            <h2 id="od-process">Application process</h2>
            <ol className="od-steps">
              {opp.applicationProcess.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="od-timeline">
            <h2 id="od-timeline">Assessment timeline</h2>
            <p>{opp.assessmentTimeline}</p>
          </section>

          <section aria-labelledby="od-background">
            <h2 id="od-background">Funder background</h2>
            <p>{opp.funderBackground}</p>
          </section>

          <section aria-labelledby="od-giving">
            <h2 id="od-giving">Recent giving patterns</h2>
            <p>{opp.recentGiving}</p>
          </section>

          {opp.relatedOpportunities.length > 0 && (
            <section aria-labelledby="od-related">
              <h2 id="od-related">Related opportunities</h2>
              <div className="od-related-list">
                {opp.relatedOpportunities.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/opportunity/${r.slug}`}
                    className="od-related-link"
                  >
                    <span className="od-related-name">{r.name}</span>
                    <span className="od-related-funder">{r.funder}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="od-sidebar">
          <div className="od-sidebar-inner">
            <div className="od-sidebar-row">
              <span className="od-sidebar-label">Amount</span>
              <span className="od-sidebar-value">
                &pound;{opp.amountMin.toLocaleString()} &ndash; &pound;{opp.amountMax.toLocaleString()}
              </span>
            </div>
            <div className="od-sidebar-row">
              <span className="od-sidebar-label">Deadline</span>
              <span className={chipClass}>{chipLabel}</span>
            </div>
            <div className="od-sidebar-row">
              <span className="od-sidebar-label">Location</span>
              <span className="od-sidebar-value">{opp.location}</span>
            </div>
            <div className="od-sidebar-row">
              <span className="od-sidebar-label">Organisation types</span>
              <span className="od-sidebar-value">
                {opp.organisationTypes.join(", ")}
              </span>
            </div>
            <div className="od-sidebar-row">
              <span className="od-sidebar-label">Application route</span>
              <span className="od-sidebar-value">{opp.applicationRoute}</span>
            </div>
            <button
              type="button"
              className={`od-save-btn ${saved ? "od-save-btn--saved" : ""}`}
              onClick={() => setSaved((s) => !s)}
            >
              {saved ? "Saved" : "Save opportunity"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
