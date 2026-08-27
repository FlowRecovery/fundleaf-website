import { formatDeadline, daysUntil } from "../../lib/utils";

interface DeadlineBadgeProps {
  deadline: string;
  rolling: boolean;
}

export default function DeadlineBadge({ deadline, rolling }: DeadlineBadgeProps) {
  if (rolling) {
    return <span className="deadline-badge deadline-badge--rolling">Rolling</span>;
  }

  const days = daysUntil(deadline);
  let className = "deadline-badge";

  if (days <= 14) className += " deadline-badge--urgent";
  else if (days <= 30) className += " deadline-badge--soon";
  else className += " deadline-badge--normal";

  return (
    <span className={className}>
      {formatDeadline(deadline)}
    </span>
  );
}
