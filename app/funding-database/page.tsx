import type { Metadata } from "next";
import FundingDatabaseClient from "./funding-database-client";

export const metadata: Metadata = {
  title: "Funding Database",
  description:
    "Relevant UK grant opportunities, clearly organised. Search trusts, foundations, lottery distributors and statutory funders.",
};

export default function FundingDatabasePage() {
  return <FundingDatabaseClient />;
}
