"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import OpportunityCard, {
  type Opportunity,
} from "../components/opportunity-card";
import WeeklyShortlist from "../components/weekly-shortlist";

const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    name: "Community Projects Fund",
    funder: "National Lottery Community Fund",
    amountRange: "\u00a310,000 \u2013 \u00a3100,000",
    deadline: "31 March 2026",
    eligibility: ["Charitable organisations", "UK-wide", "Under \u00a32m annual income"],
    geographicScope: "UK-wide",
    organisationTypes: ["Charity", "CIO", "CIC"],
    applicationRoute: "Expression of interest",
    funderHistory: "Awarded 412 grants in 2024\u201325",
  },
  {
    name: "Youth Social Action Fund",
    funder: "Tudor Trust",
    amountRange: "\u00a35,000 \u2013 \u00a350,000",
    deadline: "15 April 2026",
    eligibility: ["Youth-focused work", "England", "Grassroots organisations"],
    geographicScope: "England",
    organisationTypes: ["Charity", "CIO", "Unincorporated association"],
    applicationRoute: "Full application",
    funderHistory: "Awarded 87 grants in 2024\u201325",
  },
  {
    name: "Small Grants for Heritage",
    funder: "National Lottery Heritage Fund",
    amountRange: "\u00a33,000 \u2013 \u00a310,000",
    deadline: "Rolling",
    eligibility: ["Heritage projects", "UK-wide", "Not-for-profit"],
    geographicScope: "UK-wide",
    organisationTypes: ["Charity", "CIO", "Local authority"],
    applicationRoute: "Expression of interest",
    funderHistory: "Awarded 234 grants in 2024\u201325",
  },
  {
    name: "Stronger Communities Programme",
    funder: "Garfield Weston Foundation",
    amountRange: "\u00a350,000 \u2013 \u00a3300,000",
    deadline: "1 June 2026",
    eligibility: ["Community infrastructure", "England, Wales & NI", "Established organisations"],
    geographicScope: "England, Wales & NI",
    organisationTypes: ["Charity", "CIO"],
    applicationRoute: "Invitation only",
    funderHistory: "Awarded 63 grants in 2024\u201325",
  },
  {
    name: "Research & Innovation Fund",
    funder: "Wellcome Trust",
    amountRange: "\u00a3100,000 \u2013 \u00a31,000,000",
    deadline: "30 September 2026",
    eligibility: ["Health research", "UK-based institutions", "Academic partnerships"],
    geographicScope: "UK",
    organisationTypes: ["University", "Research institute"],
    applicationRoute: "Full application",
    funderHistory: "Awarded 156 grants in 2024\u201325",
  },
];

type FilterState = {
  region: string;
  amount: string;
  type: string;
};

const REGIONS = [
  "All regions",
  "UK-wide",
  "England",
  "Scotland",
  "Wales",
  "England, Wales & NI",
];

const AMOUNTS = [
  "Any amount",
  "Under \u00a310,000",
  "\u00a310,000 \u2013 \u00a3100,000",
  "\u00a3100,000+",
];

const TYPES = [
  "All types",
  "Charity",
  "CIO",
  "CIC",
  "University",
  "Research institute",
];

const ANATOMY_FIELDS = [
  { label: "Amount range", value: "\u00a310,000 \u2013 \u00a3100,000" },
  { label: "Deadline", value: "31 March 2026" },
  { label: "Eligibility", value: "Charitable organisations, under \u00a32m income" },
  { label: "Geographic scope", value: "UK-wide" },
  { label: "Organisation types", value: "Charity, CIO, CIC" },
  { label: "Application route", value: "Expression of interest" },
  { label: "Typical award size", value: "\u00a335,000 average (last 3 years)" },
  { label: "Funder history", value: "412 grants awarded in 2024\u201325" },
];

function matchesFilter(opp: Opportunity, filters: FilterState): boolean {
  if (filters.region !== "All regions" && opp.geographicScope !== filters.region) {
    return false;
  }
  if (filters.type !== "All types" && !opp.organisationTypes.includes(filters.type)) {
    return false;
  }
  if (filters.amount !== "Any amount") {
    const min = parseInt(opp.amountRange.replace(/[^0-9]/g, ""), 10);
    if (filters.amount === "Under \u00a310,000" && min > 10000) return false;
    if (filters.amount === "\u00a3100,000+" && min < 100000) return false;
    if (
      filters.amount === "\u00a310,000 \u2013 \u00a3100,000" &&
      (min < 10000 || min > 100000)
    )
      return false;
  }
  return true;
}

export default function FundingDatabaseClient() {
  const [filters, setFilters] = useState<FilterState>({
    region: "All regions",
    amount: "Any amount",
    type: "All types",
  });
  const [showFilters, setShowFilters] = useState(true);

  const results = useMemo(
    () => SAMPLE_OPPORTUNITIES.filter((o) => matchesFilter(o, filters)),
    [filters]
  );

  const hasFilters =
    filters.region !== "All regions" ||
    filters.amount !== "Any amount" ||
    filters.type !== "All types";

  function resetFilters() {
    setFilters({ region: "All regions", amount: "Any amount", type: "All types" });
  }

  return (
    <>
      <section className="fdb-hero">
        <div className="fdb-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Funding database
          </p>
          <h1>
            Every UK funder worth your time, in one&nbsp;index.
          </h1>
          <p className="fdb-hero-sub">
            Trusts and foundations, lottery distributors, statutory funders and
            corporate giving programmes. Searchable, filterable and kept up to
            date so you spend less time searching and more time applying.
          </p>
          <div className="fdb-hero-actions">
            <Link href="#" className="button-primary">
              Start finding funding
            </Link>
            <Link href="/pricing" className="button-secondary">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="fdb-search section" aria-labelledby="search-heading">
        <div className="fdb-search-inner">
          <div className="fdb-search-header">
            <h2 id="search-heading">Browse the database</h2>
            <button
              type="button"
              className="fdb-filter-toggle"
              onClick={() => setShowFilters((s) => !s)}
            >
              {showFilters ? "Hide filters" : "Show filters"}
            </button>
          </div>

          {showFilters && (
            <div className="fdb-filters">
              <div className="fdb-filter-group">
                <label htmlFor="f-region" className="fdb-filter-label">
                  Region
                </label>
                <select
                  id="f-region"
                  className="fdb-select"
                  value={filters.region}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, region: e.target.value }))
                  }
                >
                  {REGIONS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="fdb-filter-group">
                <label htmlFor="f-amount" className="fdb-filter-label">
                  Award size
                </label>
                <select
                  id="f-amount"
                  className="fdb-select"
                  value={filters.amount}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, amount: e.target.value }))
                  }
                >
                  {AMOUNTS.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="fdb-filter-group">
                <label htmlFor="f-type" className="fdb-filter-label">
                  Organisation type
                </label>
                <select
                  id="f-type"
                  className="fdb-select"
                  value={filters.type}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, type: e.target.value }))
                  }
                >
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              {hasFilters && (
                <button
                  type="button"
                  className="fdb-reset"
                  onClick={resetFilters}
                >
                  Reset filters
                </button>
              )}
            </div>
          )}

          <p className="fdb-results-count">
            {results.length} {results.length === 1 ? "opportunity" : "opportunities"} found
          </p>

          {results.length > 0 ? (
            <div className="fdb-results">
              {results.map((opp) => (
                <OpportunityCard key={opp.name} opportunity={opp} />
              ))}
            </div>
          ) : (
            <div className="fdb-empty">
              <p className="fdb-empty-heading">No exact matches yet.</p>
              <p className="fdb-empty-body">
                Remove a filter or broaden the amount range.
              </p>
              <button
                type="button"
                className="button-secondary"
                onClick={resetFilters}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="fdb-anatomy section" aria-labelledby="anatomy-heading">
        <div className="fdb-anatomy-inner">
          <div className="fdb-anatomy-text">
            <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
              Anatomy of an opportunity
            </p>
            <h2 id="anatomy-heading">
              Every record tells you what you need before you open&nbsp;it.
            </h2>
            <p className="fdb-anatomy-sub">
              Each opportunity in the database comes with the key facts laid
              out plainly. No digging through PDFs to find the deadline or
              guess whether you are eligible.
            </p>
          </div>
          <div className="fdb-anatomy-card" aria-label="Annotated opportunity record">
            <div className="fdb-anatomy-header">
              <span className="fdb-anatomy-name">Community Projects Fund</span>
              <span className="fdb-anatomy-funder">National Lottery Community Fund</span>
            </div>
            <div className="fdb-anatomy-fields">
              {ANATOMY_FIELDS.map((f) => (
                <div key={f.label} className="fdb-anatomy-row">
                  <span className="fdb-anatomy-label">{f.label}</span>
                  <span className="fdb-anatomy-line" aria-hidden="true" />
                  <span className="fdb-anatomy-value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fdb-matching section" aria-labelledby="matching-heading">
        <div className="fdb-matching-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Matching
          </p>
          <h2 id="matching-heading">What we mean by a strong match</h2>
          <div className="fdb-matching-columns">
            <div className="fdb-matching-col">
              <h3>Eligibility, not scoring</h3>
              <p>
                We do not rank opportunities with a hidden score. Instead, we
                surface the factual criteria you need to decide for yourself:
                geographic scope, organisation types accepted, income thresholds
                and application routes. If the facts line up, it is a match.
              </p>
            </div>
            <div className="fdb-matching-col">
              <h3>Derived from the source</h3>
              <p>
                Eligibility cues are taken directly from each funder&apos;s published
                guidance. Where a funder has changed their criteria, we update
                the record. We do not infer or extrapolate beyond what is
                written.
              </p>
            </div>
            <div className="fdb-matching-col">
              <h3>Honest about gaps</h3>
              <p>
                Some funders publish less detail than others. When information
                is missing, we say so rather than filling the gap with an
                assumption. You will see &ldquo;Not specified&rdquo; where we have
                not been given a clear answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ws-fdb-heading">
        <div style={{ width: "min(var(--container-max), calc(100% - (2 * var(--gutter))))", marginInline: "auto" }}>
          <p id="ws-fdb-heading" className="sr-only">Weekly shortlist</p>
          <WeeklyShortlist />
        </div>
      </section>

      <section className="fdb-cta section" aria-labelledby="fdb-cta-heading">
        <div className="fdb-cta-inner">
          <h2 id="fdb-cta-heading">Start finding funding</h2>
          <p>
            Sign up free or get in touch to talk about what your team needs.
          </p>
          <div className="fdb-cta-btns">
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
