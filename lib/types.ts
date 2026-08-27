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
