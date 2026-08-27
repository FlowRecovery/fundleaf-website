import type { DeadlineState, FreshnessState, GrantOpportunity, Provenance } from "./types";

/**
 * Deadline policy
 *
 * All deadline logic is consolidated here. Every function accepts an
 * optional `now` parameter so tests never depend on the real clock.
 *
 * UK end-of-day rule: date-only deadlines (e.g. "2026-12-01") are
 * treated as expiring at 23:59:59 Europe/London on that date.
 *
 * ISO timestamps with offsets are parsed normally.
 * Rolling and ongoing programmes never expire.
 * Unknown deadlines never sort or trigger reminders as though they
 * were precise dates.
 */

export const UK_END_OF_DAY = "T23:59:59";

export function parseDeadline(
  raw: string | null | undefined,
  rolling: boolean,
  now: Date = new Date()
): DeadlineState {
  if (rolling) return { type: "rolling" };
  if (raw === null || raw === undefined || raw === "") return { type: "unknown" };

  const trimmed = raw.trim();

  if (trimmed.toLowerCase() === "closed") return { type: "closed" };

  let date: Date;
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    date = new Date(trimmed + UK_END_OF_DAY);
  } else {
    date = new Date(trimmed);
  }

  if (isNaN(date.getTime())) return { type: "malformed", raw: trimmed };

  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return {
    type: "date",
    deadline: trimmed,
    expired: diffDays < 0,
    daysRemaining: diffDays,
  };
}

export function deadlineLabel(state: DeadlineState): string {
  switch (state.type) {
    case "rolling":
      return "Ongoing";
    case "unknown":
      return "Deadline not provided";
    case "closed":
      return "Closed";
    case "malformed":
      return "Check the funder\u2019s source";
    case "ongoing":
      return "Ongoing";
    case "date":
      if (state.expired) return "Passed";
      if (state.daysRemaining === 0) return "Today";
      if (state.daysRemaining === 1) return "Tomorrow";
      if (state.daysRemaining <= 7) return `${state.daysRemaining} days`;
      if (state.daysRemaining <= 30) return `${Math.ceil(state.daysRemaining / 7)} weeks`;
      return new Date(state.deadline + UK_END_OF_DAY).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    default:
      return "Unknown";
  }
}

export function deadlineBadgeClass(state: DeadlineState): string {
  if (state.type === "rolling" || state.type === "ongoing") return "deadline-badge--rolling";
  if (state.type === "unknown") return "deadline-badge--normal";
  if (state.type === "closed" || state.type === "malformed") return "deadline-badge--urgent";
  if (state.expired) return "deadline-badge--normal";
  if (state.daysRemaining <= 14) return "deadline-badge--urgent";
  if (state.daysRemaining <= 30) return "deadline-badge--soon";
  return "deadline-badge--normal";
}

export function isDeadlineExpired(state: DeadlineState): boolean {
  return state.type === "date" && state.expired;
}

export function isDeadlineClosingSoon(state: DeadlineState, windowDays: number = 30): boolean {
  return (
    state.type === "date" &&
    !state.expired &&
    state.daysRemaining >= 0 &&
    state.daysRemaining <= windowDays
  );
}

export function deadlineSortKey(state: DeadlineState): number {
  switch (state.type) {
    case "date":
      return state.expired ? Infinity : state.daysRemaining;
    case "rolling":
    case "ongoing":
      return Infinity;
    case "unknown":
    case "closed":
    case "malformed":
      return Infinity;
    default:
      return Infinity;
  }
}

/**
 * Freshness policy
 *
 * Freshness is derived from the stored `lastVerified` field, never
 * from render time.
 *
 * - Fresh: checked within the last 30 days
 * - Stale: checked more than 30 days ago
 * - Unknown: no lastVerified value
 */
export const FRESHNESS_THRESHOLD_DAYS = 30;

export function evaluateFreshness(
  lastVerified: string | null | undefined,
  now: Date = new Date()
): FreshnessState {
  if (!lastVerified) return { status: "unknown" };

  const date = new Date(lastVerified);
  if (isNaN(date.getTime())) return { status: "unknown" };

  const diffMs = now.getTime() - date.getTime();
  const daysSinceCheck = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (daysSinceCheck <= FRESHNESS_THRESHOLD_DAYS) {
    return { status: "fresh", lastChecked: lastVerified, daysSinceCheck };
  }
  return { status: "stale", lastChecked: lastVerified, daysSinceCheck };
}

export function freshnessLabel(state: FreshnessState): string {
  switch (state.status) {
    case "fresh":
      return `Checked ${state.daysSinceCheck === 0 ? "today" : `${state.daysSinceCheck} days ago`}`;
    case "stale":
      return `Last checked ${state.daysSinceCheck} days ago`;
    case "unknown":
      return "Check date unknown";
    default:
      return "Check date unknown";
  }
}

/**
 * Provenance helpers
 */

export function isLiveRecord(opportunity: GrantOpportunity): boolean {
  return opportunity.provenance === "live";
}

export function isSampleRecord(opportunity: GrantOpportunity): boolean {
  return opportunity.provenance === "sample";
}

export function provenanceLabel(provenance: Provenance): string {
  switch (provenance) {
    case "live":
      return "Live data";
    case "sample":
      return "Demonstration data";
    case "unknown":
      return "Data source unknown";
    default:
      return "Data source unknown";
  }
}

/**
 * Filtering helpers for production safety
 */

export function excludeExpired(opportunities: GrantOpportunity[], now: Date = new Date()): GrantOpportunity[] {
  return opportunities.filter((g) => {
    const state = parseDeadline(g.deadline, g.rolling, now);
    return !isDeadlineExpired(state);
  });
}

export function excludeSample(opportunities: GrantOpportunity[]): GrantOpportunity[] {
  return opportunities.filter((g) => g.provenance === "live");
}

export function liveCount(opportunities: GrantOpportunity[], now: Date = new Date()): number {
  return excludeExpired(excludeSample(opportunities), now).length;
}
