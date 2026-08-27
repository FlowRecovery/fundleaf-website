import type { Metadata } from "next";
import ResourcesIndexClient from "./resources-index-client";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates and funder profiles for UK fundraisers. Practical writing, honest guidance and the background knowledge that makes applications stronger.",
};

export default function ResourcesPage() {
  return <ResourcesIndexClient />;
}
