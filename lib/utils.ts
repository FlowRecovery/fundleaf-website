import { parseDeadline, deadlineLabel, deadlineBadgeClass, freshnessLabel } from "./deadline";
import type { DeadlineState, FreshnessState } from "./types";

export { provenanceLabel } from "./deadline";

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `\u00a3${(amount / 1000000).toFixed(1)}m`;
  }
  if (amount >= 1000) {
    return `\u00a3${(amount / 1000).toFixed(0)}k`;
  }
  return `\u00a3${amount}`;
}

export function formatDeadline(deadline: string): string {
  const state = parseDeadline(deadline, false);
  return deadlineLabel(state);
}

export function daysUntil(deadline: string): number {
  const state = parseDeadline(deadline, false);
  if (state.type !== "date") return Infinity;
  return state.daysRemaining;
}

export function formatDeadlineState(state: DeadlineState): string {
  return deadlineLabel(state);
}

export function getDeadlineBadgeClass(state: DeadlineState): string {
  return deadlineBadgeClass(state);
}

export function formatFreshness(state: FreshnessState): string {
  return freshnessLabel(state);
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
