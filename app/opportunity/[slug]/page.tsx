import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOpportunity, getAllSlugs } from "../data";
import OpportunityDetailClient from "./opportunity-detail-client";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const opp = getOpportunity(slug);
  if (!opp) return {};
  return {
    title: `${opp.programmeTitle} | ${opp.funderName}`,
    description: `${opp.funderName} ${opp.programmeTitle}: \u00a3${opp.amountMin.toLocaleString()}\u2013\u00a3${opp.amountMax.toLocaleString()} grants. Deadline ${opp.deadlineLabel}. ${opp.location}.`,
  };
}

export default async function OpportunityPage({ params }: Props) {
  const { slug } = await params;
  const opp = getOpportunity(slug);
  if (!opp) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GrantOpportunity",
    name: `${opp.funderName} ${opp.programmeTitle}`,
    description: `Funding from ${opp.funderName} for projects in ${opp.location}.`,
    provider: { "@type": "Organization", name: opp.funderName },
    eligibleRegion: opp.location,
    minimumAmount: opp.amountMin,
    maximumAmount: opp.amountMax,
    deadline: opp.deadline,
    applicationUrl: `https://fundleaf.co.uk/opportunity/${opp.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OpportunityDetailClient opportunity={opp} />
    </>
  );
}
