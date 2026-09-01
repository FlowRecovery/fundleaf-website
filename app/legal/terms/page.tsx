import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of FundLeaf. These will be completed before launch.",
};

export default function TermsOfService() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <h1>Terms of Service</h1>

        <p>
          These terms of service will be completed before FundLeaf launches.
          They will govern your use of the platform and explain what you can
          expect from us.
        </p>

        <p>
          In the meantime, if you have questions about these terms, please
          contact us at{" "}
          <a href="mailto:hello@fundleaf.co.uk">hello@fundleaf.co.uk</a>.
        </p>

        <h2>What we will cover</h2>

        <ul>
          <li>What FundLeaf provides</li>
          <li>Your responsibilities</li>
          <li>Intellectual property</li>
          <li>Limitation of liability</li>
          <li>How to contact us</li>
        </ul>

        <p>
          Last updated: August 2026. This page will be reviewed and completed
          before any user accounts are created.
        </p>
      </div>
    </main>
  );
}
