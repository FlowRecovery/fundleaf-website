import type { Metadata } from "next";
import OnboardingClient from "./onboarding-client";

export const metadata: Metadata = {
  title: "Set up your organisation",
  description:
    "Tell us about your organisation so we can find the right funding opportunities for you.",
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}
