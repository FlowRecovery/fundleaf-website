"use client";

import { useState } from "react";
import Link from "next/link";
import { demoGrants } from "../../../lib/data/grants";
import { formatCurrency } from "../../../lib/utils";
import MatchScore from "../../components/match-score";
import DeadlineBadge from "../../components/deadline-badge";

const TABS = ["Best matches", "All opportunities", "New", "Closing soon"] as const;

const FILTER_AMOUNTS = ["Any", "Under £10k", "£10k–£50k", "£50k–£250k", "£250k+"] as const;
const FILTER_GEOGRAPHY = ["UK-wide", "England", "Scotland", "Wales", "Northern Ireland"] as const;
const FILTER_ORG_TYPES = ["Any", "Registered charity", "CIC", "Constituted group"] as const;
const FILTER_PURPOSES = [
  "Any",
  "Community development",
  "Heritage",
  "Arts and culture",
  "Health",
  "Environment",
  "Education",
  "Poverty",
] as const;

export default function FundingDiscovery() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<(typeof TABS)[number]>("Best matches");

  const filtered = demoGrants.filter((g) => {
    if (search) {
      const q = search.toLowerCase();
      if (
        !g.funder.toLowerCase().includes(q) &&
        !g.programme.toLowerCase().includes(q) &&
        !g.description.toLowerCase().includes(q)
      )
        return false;
    }
    if (tab === "New") return g.lastVerified >= "2026-08-20";
    if (tab === "Closing soon") return g.deadline && !g.rolling;
    return true;
  });

  const sorted =
    tab === "Best matches"
      ? [...filtered].sort((a, b) => b.matchScore - a.matchScore)
      : tab === "Closing soon"
        ? [...filtered].sort((a, b) => {
            if (!a.deadline) return 1;
            if (!b.deadline) return -1;
            return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
          })
        : filtered;

  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Funding</h1>
        <p className="dash-sub">
          Discover opportunities that match your organisation.
        </p>
      </div>

      <div className="funding-search-bar">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="funding-search-icon">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          className="funding-search-input"
          placeholder="Search by funder, programme or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="funding-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            className={`funding-tab ${tab === t ? "funding-tab--active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="funding-layout">
        <aside className="funding-filters">
          <h2 className="funding-filters-title">Filters</h2>
          <div className="funding-filter-group">
            <label className="funding-filter-label">Amount</label>
            {FILTER_AMOUNTS.map((a) => (
              <label key={a} className="funding-filter-option">
                <input type="radio" name="amount" defaultChecked={a === "Any"} />
                <span>{a}</span>
              </label>
            ))}
          </div>
          <div className="funding-filter-group">
            <label className="funding-filter-label">Geography</label>
            {FILTER_GEOGRAPHY.map((g) => (
              <label key={g} className="funding-filter-option">
                <input type="checkbox" />
                <span>{g}</span>
              </label>
            ))}
          </div>
          <div className="funding-filter-group">
            <label className="funding-filter-label">Organisation type</label>
            {FILTER_ORG_TYPES.map((t) => (
              <label key={t} className="funding-filter-option">
                <input type="radio" name="orgType" defaultChecked={t === "Any"} />
                <span>{t}</span>
              </label>
            ))}
          </div>
          <div className="funding-filter-group">
            <label className="funding-filter-label">Funding purpose</label>
            {FILTER_PURPOSES.map((p) => (
              <label key={p} className="funding-filter-option">
                <input type="checkbox" />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </aside>

        <div className="funding-results">
          <p className="funding-results-count">
            {sorted.length} {sorted.length === 1 ? "opportunity" : "opportunities"}
          </p>
          <div className="funding-results-list">
            {sorted.map((g) => (
              <Link
                key={g.id}
                href={`/dashboard/funding/${g.id}`}
                className="funding-result-card"
              >
                <div className="funding-result-head">
                  <MatchScore score={g.matchScore} level={g.matchLevel} />
                  <DeadlineBadge deadline={g.deadline ?? ""} rolling={g.rolling} />
                </div>
                <h3 className="funding-result-funder">{g.funder}</h3>
                <p className="funding-result-programme">{g.programme}</p>
                <p className="funding-result-amount">
                  {formatCurrency(g.amountMin)} &ndash; {formatCurrency(g.amountMax)}
                </p>
                <p className="funding-result-desc">{g.description}</p>
                <div className="funding-result-meta">
                  <span className="funding-result-geography">{g.geography.join(", ")}</span>
                  <span className="funding-result-types">
                    {g.organisationTypes.join(", ")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
