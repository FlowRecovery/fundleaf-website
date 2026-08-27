"use client";

import { useState } from "react";

const DEMO_APPLICATIONS = [
  {
    id: "1",
    funder: "Lloyds Bank Foundation",
    programme: "Small Grants",
    amount: "£10,000–£50,000",
    status: "preparing",
    submitted: null,
    deadline: "2026-10-15",
    owner: "Fundraising team",
  },
  {
    id: "2",
    funder: "Esmée Fairbairn Foundation",
    programme: "Main Grant Programme",
    amount: "£30,000–£300,000",
    status: "submitted",
    submitted: "2026-08-01",
    deadline: null,
    owner: "Director",
  },
  {
    id: "3",
    funder: "National Lottery Heritage Fund",
    programme: "Resilient Heritage",
    amount: "£3,000–£250,000",
    status: "eligible",
    submitted: null,
    deadline: "2027-03-15",
    owner: "Fundraising team",
  },
];

const STATUS_LABELS: Record<string, string> = {
  suggested: "Suggested",
  reviewing: "Reviewing",
  eligible: "Eligible",
  preparing: "Preparing",
  submitted: "Submitted",
  won: "Won",
  "not-pursuing": "Not pursuing",
};

export default function ApplicationsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? DEMO_APPLICATIONS
      : DEMO_APPLICATIONS.filter((a) => a.status === filter);

  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Applications</h1>
        <p className="dash-sub">
          Track and manage your funding applications.
        </p>
      </div>

      <div className="app-filters">
        {["all", "preparing", "submitted", "won"].map((f) => (
          <button
            key={f}
            type="button"
            className={`funding-tab ${filter === f ? "funding-tab--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All" : STATUS_LABELS[f]}
          </button>
        ))}
      </div>

      <div className="app-list">
        {filtered.map((a) => (
          <div key={a.id} className="app-item">
            <div className="app-item-head">
              <h3 className="app-item-funder">{a.funder}</h3>
              <span className={`app-status app-status--${a.status}`}>
                {STATUS_LABELS[a.status]}
              </span>
            </div>
            <p className="app-item-programme">{a.programme}</p>
            <div className="app-item-meta">
              <span>{a.amount}</span>
              {a.submitted && <span>Submitted {a.submitted}</span>}
              {a.deadline && !a.submitted && <span>Deadline {a.deadline}</span>}
              <span>{a.owner}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
