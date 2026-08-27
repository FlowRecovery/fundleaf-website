import type { Metadata } from "next";
import { Suspense } from "react";
import OnboardingResultClient from "./onboarding-result-client";

export const metadata: Metadata = {
  title: "Your results",
  description:
    "See the funding opportunities that match your organisation.",
};

export default function OnboardingResultPage() {
  return (
    <Suspense>
      <OnboardingResultClient />
    </Suspense>
  );
}
