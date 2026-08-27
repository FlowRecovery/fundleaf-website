export type OrganisationType =
  | "registered-charity"
  | "cic"
  | "constituted-group"
  | "social-enterprise"
  | "other";

export type FundingType =
  | "project"
  | "core"
  | "capital"
  | "revenue"
  | "research";

export type PipelineStatus =
  | "suggested"
  | "reviewing"
  | "eligible"
  | "preparing"
  | "submitted"
  | "won"
  | "not-pursuing";

export type MatchLevel = "strong" | "good" | "uncertain" | "weak";

export type Provenance = "live" | "sample" | "unknown";

export type DeadlineState =
  | { type: "date"; deadline: string; expired: boolean; daysRemaining: number }
  | { type: "rolling" }
  | { type: "ongoing" }
  | { type: "unknown" }
  | { type: "closed" }
  | { type: "malformed"; raw: string };

export type FreshnessState =
  | { status: "fresh"; lastChecked: string; daysSinceCheck: number }
  | { status: "stale"; lastChecked: string; daysSinceCheck: number }
  | { status: "unknown" };

export interface EligibilityCriterion {
  label: string;
  status: "matched" | "uncertain" | "failed";
  detail: string;
}

export interface GrantOpportunity {
  id: string;
  funder: string;
  programme: string;
  description: string;
  amountMin: number;
  amountMax: number;
  deadline: string | null;
  rolling: boolean;
  geography: string[];
  organisationTypes: OrganisationType[];
  sectors: string[];
  fundingTypes: FundingType[];
  eligibility: EligibilityCriterion[];
  exclusions: string[];
  applicationUrl: string;
  sourceUrl: string;
  lastVerified: string;
  matchScore: number;
  matchLevel: MatchLevel;
  matchReasons: string[];
  reviewReasons: string[];
  pipelineStatus: PipelineStatus;
  owner?: string;
  provenance: Provenance;
}

export interface OrganisationProfile {
  name: string;
  type: OrganisationType;
  charityNumber: string;
  companyNumber: string;
  website: string;
  yearFounded: number;
  postcode: string;
  localAuthority: string;
  nation: string;
  areasServed: string[];
  annualIncome: string;
  annualExpenditure: string;
  charitablePurposes: string[];
  beneficiaries: string[];
  sectors: string[];
  description: string;
  fundingTypesSought: FundingType[];
  minimumAward: string;
  maximumAward: string;
}

export interface DashboardMetrics {
  strongMatches: number;
  potentialFunding: string;
  upcomingDeadlines: number;
  activeApplications: number;
}
