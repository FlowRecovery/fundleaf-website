import type { EligibilityCriterion } from "../../lib/types";

interface EligibilityPanelProps {
  criteria: EligibilityCriterion[];
  matchScore: number;
}

export default function EligibilityPanel({
  criteria,
  matchScore,
}: EligibilityPanelProps) {
  const matched = criteria.filter((c) => c.status === "matched").length;
  const uncertain = criteria.filter((c) => c.status === "uncertain").length;
  const failed = criteria.filter((c) => c.status === "failed").length;

  return (
    <div className="eligibility-panel">
      <div className="eligibility-summary">
        <div className="eligibility-score">
          <span className="eligibility-score-num">{matchScore}%</span>
          <span className="eligibility-score-label">match</span>
        </div>
        <div className="eligibility-counts">
          <span className="eligibility-count eligibility-count--matched">
            {matched} matched
          </span>
          {uncertain > 0 && (
            <span className="eligibility-count eligibility-count--uncertain">
              {uncertain} to review
            </span>
          )}
          {failed > 0 && (
            <span className="eligibility-count eligibility-count--failed">
              {failed} conflicts
            </span>
          )}
        </div>
      </div>
      <ul className="eligibility-list">
        {criteria.map((c) => (
          <li key={c.label} className={`eligibility-item eligibility-item--${c.status}`}>
            <span className="eligibility-icon">
              {c.status === "matched" && "✓"}
              {c.status === "uncertain" && "?"}
              {c.status === "failed" && "✗"}
            </span>
            <div className="eligibility-text">
              <span className="eligibility-label">{c.label}</span>
              <span className="eligibility-detail">{c.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
