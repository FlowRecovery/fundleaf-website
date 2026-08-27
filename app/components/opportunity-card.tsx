export interface Opportunity {
  name: string;
  funder: string;
  amountRange: string;
  deadline: string;
  eligibility: string[];
  geographicScope: string;
  organisationTypes: string[];
  applicationRoute: string;
  funderHistory: string;
}

export default function OpportunityCard({
  opportunity,
  className,
}: {
  opportunity: Opportunity;
  className?: string;
}) {
  return (
    <div className={`opp-card ${className ?? ""}`}>
      <div className="opp-card-header">
        <h3 className="opp-card-name">{opportunity.name}</h3>
        <span className="opp-card-funder">{opportunity.funder}</span>
      </div>
      <div className="opp-card-meta">
        <span className="opp-card-amount">{opportunity.amountRange}</span>
        <span className="opp-card-deadline">Deadline: {opportunity.deadline}</span>
      </div>
      <ul className="opp-card-eligibility">
        {opportunity.eligibility.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
