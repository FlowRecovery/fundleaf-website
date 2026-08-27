"use client";

import Link from "next/link";

const DEMO_SAVED = [
  {
    id: "garfield-weston-community",
    funder: "Garfield Weston Foundation",
    programme: "Community & Welfare",
    amount: "£10k–£200k",
    saved: "2026-08-20",
    match: 92,
  },
  {
    id: "national-lottery-heritage",
    funder: "National Lottery Heritage Fund",
    programme: "Heritage Grants",
    amount: "£10k–£2.5m",
    saved: "2026-08-18",
    match: 87,
  },
  {
    id: "tudor-trust-open",
    funder: "Tudor Trust",
    programme: "Open Programme",
    amount: "£1k–£100k",
    saved: "2026-08-15",
    match: 78,
  },
];

export default function SavedPage() {
  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Saved</h1>
        <p className="dash-sub">
          Opportunities you have saved for later.
        </p>
      </div>

      <div className="saved-list">
        {DEMO_SAVED.map((s) => (
          <Link
            key={s.id}
            href={`/dashboard/funding/${s.id}`}
            className="saved-item"
          >
            <div className="saved-item-head">
              <h3 className="saved-item-funder">{s.funder}</h3>
              <span className="saved-item-match">{s.match}% match</span>
            </div>
            <p className="saved-item-programme">{s.programme}</p>
            <div className="saved-item-meta">
              <span>{s.amount}</span>
              <span>Saved {s.saved}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
