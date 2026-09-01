import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & Security",
  description:
    "How FundLeaf keeps your data safe. Security, privacy and GDPR compliance built in from day one.",
};

const securityFeatures = [
  {
    title: "UK-based infrastructure",
    description:
      "All data is stored securely in the UK, hosted by trusted cloud providers. Your data never leaves the country.",
  },
  {
    title: "Encryption at rest and in transit",
    description:
      "All sensitive data including contact information, funding records and API keys are encrypted. All communications use HTTPS.",
  },
  {
    title: "Daily backups",
    description:
      "Your entire account is automatically backed up every day, with records stored for 30 days.",
  },
  {
    title: "Access controls",
    description:
      "Set fine-grained roles and permissions so your team members only access the data they need.",
  },
  {
    title: "Two-factor authentication",
    description:
      "Add an extra layer of login security with time-based one-time passwords or authenticator apps.",
  },
  {
    title: "Audit logging",
    description:
      "A complete history of all changes made to records, so you always know who did what and when.",
  },
  {
    title: "Penetration testing",
    description:
      "Regular independent security assessments to identify and address potential vulnerabilities.",
  },
  {
    title: "Real-time monitoring",
    description:
      "Automated systems continuously monitor for suspicious activity and block unauthorised access attempts.",
  },
];

const gdprFeatures = [
  {
    title: "Consent tracking",
    description:
      "Securely store contact and marketing preferences alongside any uploaded consent forms and compliance information.",
  },
  {
    title: "Right to be forgotten",
    description:
      "Permanently delete any contact's data along with all associated records and file attachments.",
  },
  {
    title: "Right to access",
    description:
      "Easily export any contact's data and send it directly to the requester.",
  },
  {
    title: "Data filtering",
    description:
      "Filter and segment data by consent date, marketing preferences, and more to maintain clean records.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="security-hero">
        <div className="security-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Security &amp; GDPR
          </p>
          <h1>Your data is safe with&nbsp;us</h1>
          <p className="security-hero-sub">
            Security and privacy are built into FundLeaf from day one. We take
            the protection of your organisation&apos;s data as seriously as you
            do.
          </p>
        </div>
      </section>

      <section className="security-grid section" aria-labelledby="security-heading">
        <div className="security-grid-inner">
          <h2 id="security-heading">Security</h2>
          <p className="security-grid-sub">
            FundLeaf is designed to meet the security expectations of
            organisations handling sensitive funding data.
          </p>
          <div className="security-cards">
            {securityFeatures.map((f) => (
              <div key={f.title} className="security-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="security-gdpr section" aria-labelledby="gdpr-heading">
        <div className="security-gdpr-inner">
          <div className="security-gdpr-copy">
            <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
              GDPR
            </p>
            <h2 id="gdpr-heading">Stress-free GDPR compliance</h2>
            <p>
              Used well, the GDPR can build trust with your supporters and keep
              your data clean and compliant. FundLeaf was designed from the ground
              up to help you do this.
            </p>
          </div>
          <div className="security-gdpr-cards">
            {gdprFeatures.map((f) => (
              <div key={f.title} className="security-gdpr-card">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="security-cta section" aria-labelledby="cta-heading">
        <div className="security-cta-inner">
          <h2 id="cta-heading">Questions about security?</h2>
          <p>
            We&apos;re happy to discuss our security practices in more detail.
            Get in touch and we&apos;ll answer anything you need.
          </p>
          <div className="security-cta-btns">
            <a href="mailto:hello@fundleaf.co.uk" className="button-primary">
              Contact us
            </a>
            <a href="/pricing" className="button-secondary">
              View pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
