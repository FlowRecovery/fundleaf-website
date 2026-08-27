import type { Metadata } from "next";
import FundingDatabaseClient from "./funding-database-client";

export const metadata: Metadata = {
  title: "Funding Database",
  description:
    "Every UK funder worth your time, in one index. Search trusts, foundations, lottery distributors and statutory funders.",
};

export default function FundingDatabasePage() {
  return <FundingDatabaseClient />;
}
