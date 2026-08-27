import type { Metadata } from "next";
import Link from "next/link";
import {
  demoMetrics,
  getStrongMatches,
  getUpcomingDeadlines,
  getGrantsByStatus,
} from "../../../lib/data/grants";
import { formatCurrency } from "../../../lib/utils";
import MatchScore from "../../components/match-score";
import DeadlineBadge from "../../components/deadline-badge";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardOverview() {
  const strong = getStrongMatches();
  const deadlines = getUpcomingDeadlines().slice(0, 4);

  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Funding overview</h1>
        <p className="dash-sub">
          Your funding landscape at a glance.
        </p>
      </div>

      <div className="dash-metrics">
        <div className="dash-metric">
          <span className="dash-metric-value">{demoMetrics.strongMatches}</span>
          <span className="dash-metric-label">Strong matches</span>
        </div>
        <div className="dash-metric">
          <span className="dash-metric-value">{demoMetrics.potentialFunding}</span>
          <span className="dash-metric-label">Potential funding</span>
        </div>
        <div className="dash-metric">
          <span className="dash-metric-value">{demoMetrics.upcomingDeadlines}</span>
          <span className="dash-metric-label">Upcoming deadlines</span>
        </div>
        <div className="dash-metric">
          <span className="dash-metric-value">{demoMetrics.activeApplications}</span>
          <span className="dash-metric-label">Active applications</span>
        </div>
      </div>

      <div className="dash-grid">
        <section className="dash-section">
          <div className="dash-section-head">
            <h2 className="dash-section-title">Recommended funding</h2>
            <Link href="/dashboard/funding" className="dash-section-link">
              View all &rarr;
            </Link>
          </div>
          <div className="dash-cards">
            {strong.slice(0, 4).map((g) => (
              <Link
                key={g.id}
                href={`/dashboard/funding/${g.id}`}
                className="dash-grant-card"
              >
                <div className="dash-grant-head">
                  <MatchScore score={g.matchScore} level={g.matchLevel} />
                  {g.deadline && (
                    <DeadlineBadge deadline={g.deadline} rolling={g.rolling} />
                  )}
                </div>
                <h3 className="dash-grant-funder">{g.funder}</h3>
                <p className="dash-grant-programme">{g.programme}</p>
                <p className="dash-grant-amount">
                  {formatCurrency(g.amountMin)} &ndash; {formatCurrency(g.amountMax)}
                </p>
                <p className="dash-grant-desc">{g.description}</p>
                <span className="dash-grant-status">
                  {g.pipelineStatus === "suggested" && "Suggested"}
                  {g.pipelineStatus === "reviewing" && "Reviewing"}
                  {g.pipelineStatus === "eligible" && "Eligible"}
                  {g.pipelineStatus === "preparing" && "Preparing"}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="dash-side-sections">
          <section className="dash-section">
            <h2 className="dash-section-title">Upcoming deadlines</h2>
            <div className="dash-deadline-list">
              {deadlines.map((g) => (
                <Link
                  key={g.id}
                  href={`/dashboard/funding/${g.id}`}
                  className="dash-deadline-item"
                >
                  <div className="dash-deadline-info">
                    <span className="dash-deadline-funder">{g.funder}</span>
                    <span className="dash-deadline-programme">{g.programme}</span>
                  </div>
                  <div className="dash-deadline-meta">
                    <DeadlineBadge deadline={g.deadline!} rolling={g.rolling} />
                    <span className="dash-deadline-amount">
                      {formatCurrency(g.amountMin)}&ndash;{formatCurrency(g.amountMax)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="dash-section">
            <h2 className="dash-section-title">Application pipeline</h2>
            <div className="dash-pipeline-summary">
              {["suggested", "reviewing", "eligible", "preparing", "submitted", "won"].map(
                (status) => {
                  const count = getGrantsByStatus(
                    status as Parameters<typeof getGrantsByStatus>[0]
                  ).length;
                  return (
                    <div key={status} className="dash-pipeline-row">
                      <span className="dash-pipeline-label">
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                      <span className="dash-pipeline-count">{count}</span>
                    </div>
                  );
                }
              )}
            </div>
            <Link href="/dashboard/pipeline" className="dash-section-link">
              View pipeline &rarr;
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
