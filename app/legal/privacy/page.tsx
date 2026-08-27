import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fundleaf handles your data. This policy will be completed before launch.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <h1>Privacy Policy</h1>

        <p>
          This privacy policy will be completed before Fundleaf launches. It
          will explain what data we collect, how we use it, and your rights
          under UK data protection law.
        </p>

        <p>
          In the meantime, if you have questions about how your data is handled,
          please contact us at{" "}
          <a href="mailto:hello@fundleaf.co.uk">hello@fundleaf.co.uk</a>.
        </p>

        <h2>What we will cover</h2>

        <ul>
          <li>What personal data we collect</li>
          <li>How we use your data</li>
          <li>Legal bases for processing</li>
          <li>How we store and protect your data</li>
          <li>Your rights under UK GDPR</li>
          <li>How to contact us and the ICO</li>
        </ul>

        <p>
          Last updated: August 2026. This page will be reviewed and completed
          before any user data is collected.
        </p>
      </div>
    </main>
  );
}
