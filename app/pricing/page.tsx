import type { Metadata } from "next";
import PricingContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for every stage. Start free and upgrade when you're ready.",
};

export default function PricingPage() {
  return <PricingContent />;
}
