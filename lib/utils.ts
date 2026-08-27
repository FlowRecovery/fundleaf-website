export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `£${(amount / 1000000).toFixed(1)}m`;
  }
  if (amount >= 1000) {
    return `£${(amount / 1000).toFixed(0)}k`;
  }
  return `£${amount}`;
}

export function formatDeadline(deadline: string): string {
  const date = new Date(deadline);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Passed";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays <= 7) return `${diffDays} days`;
  if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks`;

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function daysUntil(deadline: string): number {
  const date = new Date(deadline);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function formatOrgType(type: string): string {
  const map: Record<string, string> = {
    "registered-charity": "Registered charity",
    cic: "CIC",
    "constituted-group": "Constituted group",
    "social-enterprise": "Social enterprise",
    other: "Other",
  };
  return map[type] || type;
}

export function formatSector(sector: string): string {
  return sector
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function formatPipelineStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1);
}
