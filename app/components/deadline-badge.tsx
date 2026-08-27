import { parseDeadline, deadlineLabel, deadlineBadgeClass } from "../../lib/deadline";

interface DeadlineBadgeProps {
  deadline: string;
  rolling: boolean;
}

export default function DeadlineBadge({ deadline, rolling }: DeadlineBadgeProps) {
  const state = parseDeadline(deadline, rolling);
  const label = deadlineLabel(state);
  const className = `deadline-badge ${deadlineBadgeClass(state)}`;

  return <span className={className}>{label}</span>;
}
