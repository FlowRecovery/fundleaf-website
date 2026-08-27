import type { Metadata } from "next";
import FundingDiscovery from "./funding-discovery-client";

export const metadata: Metadata = {
  title: "Funding",
};

export default function FundingPage() {
  return <FundingDiscovery />;
}
