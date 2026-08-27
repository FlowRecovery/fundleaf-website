import type { GrantOpportunity } from "../../lib/types";
import { formatCurrency } from "../../lib/utils";
import MatchScore from "./match-score";
import DeadlineBadge from "./deadline-badge";

interface GrantCardProps {
  grant: GrantOpportunity;
  href?: string;
}

export default function GrantCard({ grant, href }: GrantCardProps) {
  const content = (
    <div className="grant-card">
      <div className="grant-card-head">
        <MatchScore score={grant.matchScore} level={grant.matchLevel} size="sm" />
        <DeadlineBadge deadline={grant.deadline ?? ""} rolling={grant.rolling} />
      </div>
      <h3 className="grant-card-funder">{grant.funder}</h3>
      <p className="grant-card-programme">{grant.programme}</p>
      <p className="grant-card-amount">
        {formatCurrency(grant.amountMin)} &ndash; {formatCurrency(grant.amountMax)}
      </p>
      <p className="grant-card-desc">{grant.description}</p>
      {grant.matchReasons.length > 0 && (
        <ul className="grant-card-reasons">
          {grant.matchReasons.slice(0, 2).map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="grant-card-link">
        {content}
      </a>
    );
  }

  return content;
}
