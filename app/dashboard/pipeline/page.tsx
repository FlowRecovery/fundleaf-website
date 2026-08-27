"use client";

import Link from "next/link";
import { demoGrants } from "../../../lib/data/grants";
import { formatCurrency } from "../../../lib/utils";
import MatchScore from "../../components/match-score";
import DeadlineBadge from "../../components/deadline-badge";

const COLUMNS = [
  "suggested",
  "reviewing",
  "eligible",
  "preparing",
  "submitted",
  "won",
  "not-pursuing",
] as const;

const COLUMN_LABELS: Record<string, string> = {
  suggested: "Suggested",
  reviewing: "Reviewing",
  eligible: "Eligible",
  preparing: "Preparing",
  submitted: "Submitted",
  won: "Won",
  "not-pursuing": "Not pursuing",
};

export default function PipelineBoard() {
  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Pipeline</h1>
        <p className="dash-sub">
          Track every opportunity from discovery to outcome.
        </p>
      </div>

      <div className="pipeline-board">
        {COLUMNS.map((status) => {
          const grants = demoGrants.filter((g) => g.pipelineStatus === status);
          return (
            <div key={status} className="pipeline-column">
              <div className="pipeline-column-head">
                <h2 className="pipeline-column-title">{COLUMN_LABELS[status]}</h2>
                <span className="pipeline-column-count">{grants.length}</span>
              </div>
              <div className="pipeline-column-cards">
                {grants.map((g) => (
                  <Link
                    key={g.id}
                    href={`/dashboard/funding/${g.id}`}
                    className="pipeline-card"
                  >
                    <div className="pipeline-card-head">
                      <MatchScore score={g.matchScore} level={g.matchLevel} size="sm" />
                    </div>
                    <h3 className="pipeline-card-funder">{g.funder}</h3>
                    <p className="pipeline-card-programme">{g.programme}</p>
                    <p className="pipeline-card-amount">
                      {formatCurrency(g.amountMin)}&ndash;{formatCurrency(g.amountMax)}
                    </p>
                    {g.deadline && (
                      <DeadlineBadge deadline={g.deadline} rolling={g.rolling} />
                    )}
                    {g.owner && (
                      <span className="pipeline-card-owner">{g.owner}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
