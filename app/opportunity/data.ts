export interface OpportunityDetail {
  slug: string;
  funderName: string;
  programmeTitle: string;
  amountMin: number;
  amountMax: number;
  deadline: string;
  deadlineLabel: string;
  location: string;
  organisationTypes: string[];
  applicationRoute: string;
  whatTheFundSupports: string[];
  whatItDoesNotSupport: string[];
  applicationProcess: string[];
  assessmentTimeline: string;
  funderBackground: string;
  recentGiving: string;
  relatedOpportunities: { slug: string; name: string; funder: string }[];
}

export const opportunities: Record<string, OpportunityDetail> = {
  "alder-community-fund": {
    slug: "alder-community-fund",
    funderName: "The Alder Foundation",
    programmeTitle: "Community Fund",
    amountMin: 5000,
    amountMax: 25000,
    deadline: "2026-03-31",
    deadlineLabel: "31 March 2026",
    location: "Greater Manchester",
    organisationTypes: ["Charity", "CIO", "CIC", "Community interest company"],
    applicationRoute: "Expression of interest, then full application",
    whatTheFundSupports: [
      "Projects tackling social isolation in over-65s",
      "Community-led mental health and wellbeing initiatives",
      "Programmes improving access to local services for disabled residents",
      "Grassroots sport and physical activity for under-represented groups",
    ],
    whatItDoesNotSupport: [
      "Capital projects over \u00a350,000",
      "Organisations with annual income above \u00a32m",
      "Statutory services or work that should be funded by local authority budgets",
      "Political or religious campaigning",
    ],
    applicationProcess: [
      "Submit an expression of interest via the Alder Foundation website.",
      "If your EOI is accepted, you will be invited to complete a full application.",
      "Full applications include a project plan, budget, and two referee contacts.",
      "Shortlisted applicants may be asked for a 20-minute video conversation.",
    ],
    assessmentTimeline:
      "The panel meets quarterly in March, June, September and December. Decisions are communicated within three weeks of the panel meeting. Successful applicants receive payment within 30 days of signing a grant agreement.",
    funderBackground:
      "The Alder Foundation was established in 2009 using income from the Alder Community Trust, a Manchester-based endowment. It focuses exclusively on Greater Manchester and has awarded over \u00a318m since inception. The foundation is staffed by a small team and governed by a board of six trustees.",
    recentGiving:
      "In 2024\u201325 the fund awarded 34 grants averaging \u00a314,200. The most common funded areas were social isolation (12 grants), mental health (9) and disability access (8). Two grants were declined at the full application stage for falling outside geographic scope.",
    relatedOpportunities: [
      {
        slug: "national-lottery-community-fund",
        name: "National Lottery Community Fund",
        funder: "National Lottery Community Fund",
      },
      {
        slug: "tudor-trust",
        name: "Tudor Trust",
        funder: "Tudor Trust",
      },
    ],
  },
};

export function getOpportunity(slug: string): OpportunityDetail | undefined {
  return opportunities[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(opportunities);
}
