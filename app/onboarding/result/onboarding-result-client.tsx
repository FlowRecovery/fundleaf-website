"use client";

import Link from "next/link";

const MATCHED_OPPORTUNITIES = [
  {
    id: "1",
    name: "National Lottery Community Fund",
    programme: "Reaching Communities",
    amount: "£10,000 – £500,000",
    deadline: "Rolling",
    match: 94,
  },
  {
    id: "2",
    name: "Tudor Trust",
    programme: "Open Programme",
    amount: "Up to £100,000",
    deadline: "Rolling",
    match: 91,
  },
  {
    id: "3",
    name: "Lloyds Bank Foundation",
    programme: "Small Grants",
    amount: "£10,000 – £50,000",
    deadline: "Rolling",
    match: 89,
  },
  {
    id: "4",
    name: "Esmée Fairbairn Foundation",
    programme: "Main Grant Programme",
    amount: "£30,000 – £300,000",
    deadline: "Rolling",
    match: 87,
  },
  {
    id: "5",
    name: "Garfield Weston Foundation",
    programme: "Community & Welfare",
    amount: "£10,000 – £200,000",
    deadline: "Rolling",
    match: 85,
  },
];

export default function OnboardingResultClient() {
  return (
    <div className="onb-result-page">
      <div className="demo-banner" role="status">
        <p className="demo-banner-text">
          Demonstration data &ndash; these are illustrative results, not live matches.
        </p>
      </div>

      <div className="onb-result-hero">
        <div className="onb-result-badge">
          <span className="onb-result-badge-num">5</span>
          <span className="onb-result-badge-label">opportunities shown</span>
        </div>
        <h1 className="onb-result-heading">
          Here are some opportunities that could match your organisation
        </h1>
        <p className="onb-result-sub">
          Based on what you told us, these funders are a strong fit. In
          production, this would show your real matches. You can refine your
          filters at any time.
        </p>
      </div>

      <div className="onb-result-list">
        {MATCHED_OPPORTUNITIES.map((opp) => (
          <div key={opp.id} className="onb-result-card">
            <div className="onb-result-card-head">
              <span className="onb-result-match">{opp.match}% match</span>
              <span className="onb-result-deadline">{opp.deadline}</span>
            </div>
            <h3 className="onb-result-card-title">{opp.name}</h3>
            <p className="onb-result-card-programme">{opp.programme}</p>
            <p className="onb-result-card-amount">{opp.amount}</p>
            <Link
              href={`/opportunity/${opp.id}`}
              className="onb-result-card-link"
            >
              View details &rarr;
            </Link>
          </div>
        ))}
      </div>

      <div className="onb-result-actions">
        <Link href="/funding-database" className="button-primary">
          Browse full database
        </Link>
        <Link href="/dashboard" className="button-secondary">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
