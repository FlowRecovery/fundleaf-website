export type ArticleType = "Guide" | "Template" | "Funder profile" | "Explainer";

export interface Article {
  slug: string;
  title: string;
  type: ArticleType;
  author: string;
  date: string;
  readingTime: string;
  description: string;
  sections: { heading: string; body: string; pullQuote?: string }[];
  conversionHeading: string;
  conversionBody: string;
}

export const articles: Article[] = [
  {
    slug: "how-to-write-a-case-for-support",
    title: "How to write a case for support that funders actually read",
    type: "Guide",
    author: "Fundleaf",
    date: "2026-01-15",
    readingTime: "8 min read",
    description:
      "A case for support is not a brochure. It is the document that decides whether a funder reads on or moves to the next application. This guide breaks down what funders look for and how to structure yours so it gets read.",
    sections: [
      {
        heading: "Why most cases for support fail",
        body: "Funders read hundreds of these. Most are written to impress rather than to inform. They open with organisational history, pack in adjectives, and bury the ask on page six. The result is a document that says everything and communicates nothing. A strong case for support answers three questions in the first page: what are you asking for, what will it achieve, and why should this funder care.",
        pullQuote:
          "A strong case for support answers three questions in the first page: what are you asking for, what will it achieve, and why should this funder care.",
      },
      {
        heading: "Start with the problem, not your organisation",
        body: "Funders fund problems, not organisations. Open with the need you exist to address, backed by evidence. Use local data where you can: the number of people in your area who experience the issue, the gap in provision, the cost of inaction. Move from the general problem to the specific gap your project fills. Only then introduce your organisation as the vehicle, not the subject.",
      },
      {
        heading: "Make the ask specific and early",
        body: "State the amount you need, what it will fund, and what happens if you do not get it. Vague asks create vague applications. If you need fifty thousand pounds for a two-year programme serving two hundred young people, say so on page one. Include a simple budget summary: staff, premises, delivery costs, and the outcome each line enables.",
      },
      {
        heading: "Show evidence, not just intention",
        body: "Funders want to know your approach works. Include what you have done before, what changed as a result, and what you learned. If you do not have outcome data from your own work, use published evidence from similar programmes. Reference it briefly: a statistic with a source is more persuasive than a paragraph of aspiration.",
        pullQuote:
          "A statistic with a source is more persuasive than a paragraph of aspiration.",
      },
      {
        heading: "End with clarity, not a flourish",
        body: "Restate the ask, the impact, and the timeline. Thank the funder for considering you. Do not add a generic paragraph about how grateful you will be. Professionalism is the tone that gets funded.",
      },
    ],
    conversionHeading: "Make your next application faster",
    conversionBody:
      "Fundleaf holds your case for support text as a reusable content block, so every application starts with your best version already loaded.",
  },
  {
    slug: "restricted-and-unrestricted-funding",
    title: "Understanding restricted and unrestricted funding",
    type: "Explainer",
    author: "Fundleaf",
    date: "2026-02-10",
    readingTime: "5 min read",
    description:
      "The difference between restricted and unrestricted funding is not just accounting terminology. It determines what you can spend, when, and how you report back. This explainer covers what each term means in practice.",
    sections: [
      {
        heading: "What restricted funding means",
        body: "Restricted funding is money given for a specific purpose. The funder has said: this amount, for this work, in this timeframe. You can only spend it on what was agreed. If circumstances change, you need the funder's permission to redirect it. Restricted income is recorded separately in your accounts and must be tracked against the original budget.",
      },
      {
        heading: "What unrestricted funding means",
        body: "Unrestricted funding is money you can spend on whatever your organisation needs most. It might come from a general donation, a fundraising event, or a funder who trusts your judgment. Unrestricted income keeps the lights on, pays core staff, and fills the gaps that restricted grants leave behind.",
        pullQuote:
          "Unrestricted income keeps the lights on, pays core staff, and fills the gaps that restricted grants leave behind.",
      },
      {
        heading: "Why the distinction matters",
        body: "When you apply for a grant, you need to know whether the funder is offering restricted or unrestricted money. This affects your budget, your reporting, and your ability to adapt. Some funds look generous on paper but are tightly ringfenced. Others offer less but give you the flexibility to use it where the need is greatest. Understanding this before you apply saves time and avoids difficult conversations later.",
      },
      {
        heading: "How to track both in practice",
        body: "Keep separate records for restricted and unrestricted income. Tag each grant in your system with its restrictions, budget codes and reporting dates. When you spend restricted money, record what it was spent on against the original budget line. This makes reporting straightforward and protects your relationship with the funder.",
      },
    ],
    conversionHeading: "Keep restrictions visible, not buried in a spreadsheet",
    conversionBody:
      "Fundleaf lets you tag each opportunity with its restriction type and budget codes, so your team always knows what can be spent where.",
  },
  {
    slug: "national-lottery-heritage-fund-what-they-look-for",
    title: "What the National Lottery Heritage Fund looks for",
    type: "Funder profile",
    author: "Fundleaf",
    date: "2026-03-05",
    readingTime: "6 min read",
    description:
      "The National Lottery Heritage Fund is one of the largest heritage funders in the UK. This profile covers what they fund, what they do not, and what makes a strong application.",
    sections: [
      {
        heading: "What they fund",
        body: "The Heritage Fund supports projects that connect people and communities with heritage. This is broadly defined: it includes buildings, landscapes, habitats, traditions, stories, and collections. They run several funding programmes, ranging from small grants under ten thousand pounds to major projects over several million. Each programme has its own criteria, but the thread running through all of them is engagement: heritage that involves people, not just preserves it.",
      },
      {
        heading: "What they do not fund",
        body: "The Fund does not generally support projects that are primarily academic research, statutory obligations, or core operational costs without a heritage project attached. They do not fund retrospective work: your project must be planned and ready to start. They are also clear that they are not a funder of last resort, so applications made in financial distress without prior planning are unlikely to succeed.",
      },
      {
        heading: "What makes an application strong",
        body: "Strong applications demonstrate partnership: evidence that you have worked with the community your project serves, not just for them. They show a clear heritage outcome alongside the engagement outcome. They include a realistic budget with a funding mix, not a reliance on one grant. And they name a project team with the skills to deliver, not just the vision to propose.",
        pullQuote:
          "Strong applications demonstrate partnership: evidence that you have worked with the community your project serves, not just for them.",
      },
      {
        heading: "Timeline and process",
        body: "Applications go through an initial expression of interest, then a development phase, then a full application. The full process from first expression to decision typically takes six to nine months. Planning for this timeline is essential: the Fund does not operate on rolling deadlines for larger programmes.",
      },
    ],
    conversionHeading: "Track your Heritage Fund application from start to finish",
    conversionBody:
      "Fundleaf maps the Heritage Fund's stages to your pipeline, so you always know where your application sits and what comes next.",
  },
  {
    slug: "grant-application-content-library",
    title: "A grant application content library: what to prepare once",
    type: "Template",
    author: "Fundleaf",
    date: "2026-04-20",
    readingTime: "7 min read",
    description:
      "Every grant application repeats the same core material: your governance structure, your safeguarding policy, your standard budgets. A content library holds these once so you are not rewriting them every time. This template tells you what to prepare and how to organise it.",
    sections: [
      {
        heading: "What belongs in a content library",
        body: "Your content library should hold the text you use in almost every application: organisational overview, governance structure, safeguarding policy, equal opportunities statement, standard budget templates, and key contact details. These are the paragraphs that change rarely and cost the most time to rewrite from scratch.",
        pullQuote:
          "These are the paragraphs that change rarely and cost the most time to rewrite from scratch.",
      },
      {
        heading: "How to organise it",
        body: "Group your content blocks by type: about us, policies, budgets, project templates. Give each block a clear name and a date of last update. Keep each block at a length that can be pasted into an application form without heavy editing: two hundred to four hundred words is the sweet spot for most sections.",
      },
      {
        heading: "How to keep it current",
        body: "Set a quarterly reminder to review each block. Update anything that has changed: staff names, income figures, policy revisions. An outdated content block is worse than no content block at all, because it gets pasted into applications without anyone checking. A date stamp on each block makes it obvious when something needs attention.",
      },
      {
        heading: "How to use it in practice",
        body: "When you start a new application, open your content library first. Pull the blocks that match the questions being asked. Edit for the specific funder and project, but start from a complete draft rather than a blank page. This turns a four-hour application into a ninety-minute one.",
      },
    ],
    conversionHeading: "Load your content library once, use it everywhere",
    conversionBody:
      "Fundleaf stores your reusable blocks alongside your applications, so every new form starts with your best text already in place.",
  },
  {
    slug: "reporting-to-funders-what-good-looks-like",
    title: "Reporting to funders: what good looks like",
    type: "Guide",
    author: "Fundleaf",
    date: "2026-05-12",
    readingTime: "6 min read",
    description:
      "Funder reporting is not a bureaucratic hurdle. It is the evidence that secures your next grant. This guide covers what good reporting looks like and how to build the habits that make it painless.",
    sections: [
      {
        heading: "Why reporting matters more than you think",
        body: "A good report does more than satisfy a condition. It builds the funder's confidence in your organisation, demonstrates impact, and creates the evidence base for future funding. A poor report, even from a project that delivered well, can undermine the relationship. Funders remember how you reported, not just what you delivered.",
        pullQuote:
          "Funders remember how you reported, not just what you delivered.",
      },
      {
        heading: "What funders actually want to see",
        body: "Most funder reports ask for the same things: what you said you would do, what you actually did, what changed as a result, and what you learned. The strongest reports include beneficiary voices, not just numbers. A single quote from someone whose life was affected is more memorable than a spreadsheet of outputs.",
      },
      {
        heading: "How to collect the data before you need it",
        body: "The biggest reporting failure is leaving data collection to the end. Build simple capture methods into your project from day one: a short survey at the point of delivery, a monthly note on challenges and adaptations, a photograph or two with consent. When the report is due, you should be assembling evidence, not scrambling for it.",
      },
      {
        heading: "How to structure the report",
        body: "Open with a one-paragraph summary: did you deliver what you said you would. Follow with evidence against each objective. Include a short section on challenges and how you addressed them. Close with learning and next steps. Keep the tone professional but human: this is a letter to a partner, not a submission to an auditor.",
      },
    ],
    conversionHeading: "Reporting does not have to be a scramble",
    conversionBody:
      "Fundleaf tracks reporting deadlines alongside application deadlines, so you are never surprised by a due date.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticlesByType(type: ArticleType): Article[] {
  return articles.filter((a) => a.type === type);
}
