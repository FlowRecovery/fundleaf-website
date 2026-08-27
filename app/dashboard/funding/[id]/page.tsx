import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGrantById } from "../../../../lib/data/grants";
import { formatCurrency, formatOrgType, formatSector } from "../../../../lib/utils";
import { evaluateFreshness, freshnessLabel, provenanceLabel, parseDeadline, deadlineLabel } from "../../../../lib/deadline";
import MatchScore from "../../../components/match-score";
import DeadlineBadge from "../../../components/deadline-badge";
import EligibilityPanel from "../../../components/eligibility-panel";

export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  return params.then(({ id }) => {
    const grant = getGrantById(id);
    return {
      title: grant ? `${grant.funder} – ${grant.programme}` : "Opportunity",
    };
  });
}

export default async function GrantDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const grant = getGrantById(id);

  if (!grant) {
    notFound();
  }

  const freshness = evaluateFreshness(grant.lastVerified);
  const deadlineState = parseDeadline(grant.deadline, grant.rolling);

  return (
    <div className="dash-page">
      {grant.provenance === "sample" && (
        <div className="demo-banner" role="status">
          <p className="demo-banner-text">
            Demonstration data &ndash; this is an illustrative opportunity, not live funding information.
          </p>
        </div>
      )}

      <nav className="dash-breadcrumb" aria-label="Breadcrumb">
        <Link href="/dashboard/funding" className="dash-breadcrumb-link">
          Funding
        </Link>
        <span className="dash-breadcrumb-sep">/</span>
        <span className="dash-breadcrumb-current">{grant.funder}</span>
      </nav>

      <div className="grant-detail">
        <header className="grant-detail-header">
          <div className="grant-detail-head">
            <MatchScore score={grant.matchScore} level={grant.matchLevel} />
            <DeadlineBadge deadline={grant.deadline ?? ""} rolling={grant.rolling} />
            <span className="provenance-badge">
              {provenanceLabel(grant.provenance)}
            </span>
          </div>
          <h1 className="grant-detail-funder">{grant.funder}</h1>
          <p className="grant-detail-programme">{grant.programme}</p>
          <p className="grant-detail-amount">
            {formatCurrency(grant.amountMin)} &ndash; {formatCurrency(grant.amountMax)}
          </p>
        </header>

        <div className="grant-detail-layout">
          <div className="grant-detail-main">
            <section className="grant-detail-section">
              <h2 className="grant-detail-section-title">About this programme</h2>
              <p className="grant-detail-text">{grant.description}</p>
            </section>

            <section className="grant-detail-section">
              <h2 className="grant-detail-section-title">Why it matches</h2>
              <ul className="grant-detail-list">
                {grant.matchReasons.map((r) => (
                  <li key={r} className="grant-detail-list-item grant-detail-list-item--matched">
                    <span className="grant-detail-icon">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
              {grant.reviewReasons.length > 0 && (
                <ul className="grant-detail-list">
                  {grant.reviewReasons.map((r) => (
                    <li key={r} className="grant-detail-list-item grant-detail-list-item--review">
                      <span className="grant-detail-icon">?</span>
                      {r}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="grant-detail-section">
              <h2 className="grant-detail-section-title">What they fund</h2>
              <div className="grant-detail-tags">
                {grant.sectors.map((s) => (
                  <span key={s} className="grant-detail-tag">{formatSector(s)}</span>
                ))}
                {grant.fundingTypes.map((ft) => (
                  <span key={ft} className="grant-detail-tag">{formatSector(ft)}</span>
                ))}
              </div>
            </section>

            {grant.exclusions.length > 0 && (
              <section className="grant-detail-section">
                <h2 className="grant-detail-section-title">What they do not fund</h2>
                <ul className="grant-detail-list">
                  {grant.exclusions.map((e) => (
                    <li key={e} className="grant-detail-list-item grant-detail-list-item--exclusion">
                      {e}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="grant-detail-section">
              <h2 className="grant-detail-section-title">Application process</h2>
              <p className="grant-detail-text">
                {deadlineLabel(deadlineState) === "Ongoing"
                  ? "This funder accepts applications on a rolling basis. You can apply at any time."
                  : deadlineState.type === "date" && !deadlineState.expired
                    ? `The deadline for this round is ${new Date(deadlineState.deadline + "T23:59:59").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.`
                    : deadlineState.type === "unknown"
                      ? "Contact the funder directly for application details."
                      : `Status: ${deadlineLabel(deadlineState)}`}
              </p>
            </section>
          </div>

          <aside className="grant-detail-sidebar">
            <EligibilityPanel
              criteria={grant.eligibility}
              matchScore={grant.matchScore}
            />

            <div className="grant-detail-actions">
              <button type="button" className="button-primary grant-detail-action">
                Add to pipeline
              </button>
              <button type="button" className="button-secondary grant-detail-action">
                Save for later
              </button>
              <a
                href={grant.applicationUrl}
                className="button-secondary grant-detail-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit funder &nearr;
              </a>
              <button type="button" className="grant-detail-action grant-detail-action--muted">
                Mark as unsuitable
              </button>
            </div>

            <div className="grant-detail-meta-card">
              <h3 className="grant-detail-meta-title">Source</h3>
              <a
                href={grant.sourceUrl}
                className="grant-detail-source-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {grant.funder} website &nearr;
              </a>
            </div>

            <div className="grant-detail-meta-card">
              <h3 className="grant-detail-meta-title">Freshness</h3>
              <p className="grant-detail-freshness">{freshnessLabel(freshness)}</p>
            </div>

            <div className="grant-detail-meta-card">
              <h3 className="grant-detail-meta-title">Geography</h3>
              <p>{grant.geography.join(", ")}</p>
            </div>
            <div className="grant-detail-meta-card">
              <h3 className="grant-detail-meta-title">Organisation types</h3>
              <p>{grant.organisationTypes.map(formatOrgType).join(", ")}</p>
            </div>

            <div className="grant-detail-reminder">
              <p>
                Always verify eligibility and dates at the funder&apos;s source before applying.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
