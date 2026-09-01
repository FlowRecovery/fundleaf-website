import type { Metadata } from "next";
import Link from "next/link";
import IntegrationRequestForm from "./integration-request-form";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "FundLeaf works alongside your CRM, finance tools and calendar. Connect the systems you already use.",
};

type IntegrationStatus = "live" | "planned";

type Integration = {
  name: string;
  category: string;
  description: string;
  status: IntegrationStatus;
};

const integrations: Integration[] = [
  {
    name: "Beacon",
    category: "Charity CRM",
    description:
      "Sync funder contacts and awarded income back to Beacon so your fundraising and finance teams work from one record.",
    status: "planned",
  },
  {
    name: "Donorfy",
    category: "Charity CRM",
    description:
      "Push awarded grants and funder details into Donorfy to keep your supporter database complete.",
    status: "planned",
  },
  {
    name: "Salesforce NPSP",
    category: "Charity CRM",
    description:
      "Write awarded income and funder records to Salesforce Nonprofit Success Pack via the REST API.",
    status: "planned",
  },
  {
    name: "Access Charity CRM",
    category: "Charity CRM",
    description:
      "Export awarded grants and funder contacts for import into Access Charity CRM.",
    status: "planned",
  },
  {
    name: "Xero",
    category: "Finance",
    description:
      "Create invoice records in Xero from awarded grants so your finance team can reconcile funding income without manual entry.",
    status: "planned",
  },
  {
    name: "Sage",
    category: "Finance",
    description:
      "Export awarded grant data in a format Sage can import, keeping your accounts up to date.",
    status: "planned",
  },
  {
    name: "Microsoft 365",
    category: "Calendar & email",
    description:
      "Sync deadlines to Outlook and receive reminder notifications through the tools your team already checks every day.",
    status: "planned",
  },
  {
    name: "Google Workspace",
    category: "Calendar & email",
    description:
      "Push deadlines to Google Calendar and get reminders in Gmail or Google Chat.",
    status: "planned",
  },
  {
    name: "CSV export",
    category: "Export",
    description:
      "Download any list of opportunities, applications or deadlines as a CSV file for your own reporting.",
    status: "live",
  },
  {
    name: "REST API",
    category: "Export",
    description:
      "Read and write opportunity and application data through a documented REST API. Build your own workflows or connect tools we have not thought of yet.",
    status: "live",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="int-hero">
        <div className="int-hero-inner">
          <p className="eyebrow" style={{ color: "var(--fl-olive)" }}>
            Integrations
          </p>
          <h1>
            FundLeaf is not your&nbsp;CRM. It works with&nbsp;it.
          </h1>
          <p className="int-hero-sub">
            Your CRM holds supporters, donations and Gift Aid. FundLeaf holds
            funders, applications and deadlines. When an award comes in, the
            income and funder contact flow back to your CRM so the finance and
            reporting picture stays whole in one system.
          </p>
        </div>
      </section>

      <section className="int-division section" aria-labelledby="division-heading">
        <div className="int-division-inner">
          <h2 id="division-heading">The division of labour</h2>
          <div className="int-division-grid">
            <div className="int-division-card">
              <h3>Your CRM</h3>
              <ul>
                <li>Supporter and donor records</li>
                <li>Donation processing and Gift Aid</li>
                <li>Event management and memberships</li>
                <li>Case management and reporting</li>
              </ul>
            </div>
            <div className="int-division-card">
              <h3>FundLeaf</h3>
              <ul>
                <li>Funder database and eligibility</li>
                <li>Application drafting and tracking</li>
                <li>Deadline reminders and pipeline</li>
                <li>Award conditions and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="int-grid section" aria-labelledby="grid-heading">
        <div className="int-grid-inner">
          <h2 id="grid-heading">Available integrations</h2>
          <p className="int-grid-sub">
            Some are live today. Others are planned and honestly labelled.
            Nothing is shown as a partnership until it is one.
          </p>
          <div className="int-cards">
            {integrations.map((int) => (
              <div key={int.name} className="int-card">
                <div className="int-card-header">
                  <span className="int-card-name">{int.name}</span>
                  {int.status === "planned" && (
                    <span className="int-status int-status--planned">
                      Planned
                    </span>
                  )}
                  {int.status === "live" && (
                    <span className="int-status int-status--live">Live</span>
                  )}
                </div>
                <span className="int-card-category">{int.category}</span>
                <p className="int-card-desc">{int.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="int-developer section" aria-labelledby="dev-heading">
        <div className="int-developer-inner">
          <div className="int-developer-copy">
            <p className="eyebrow" style={{ color: "var(--fl-sage)" }}>
              For developers
            </p>
            <h2 id="dev-heading">Build your own</h2>
            <p>
              The FundLeaf REST API lets you read and write opportunities,
              applications and deadlines programmatically. If you need a
              integration we have not built yet, the API is the way to do it.
            </p>
        <Link href="/integrations" className="button-secondary int-dev-btn">
          Read the API docs
        </Link>
          </div>
          <div className="int-developer-code" aria-hidden="true">
            <pre>
              <code>
{`GET /api/v1/opportunities
Authorization: Bearer <token>

{
  "opportunities": [
    {
      "id": "opp_01H5...",
      "name": "Community Projects Fund",
      "deadline": "2026-03-31",
      "status": "open"
    }
  ]
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="int-request section" aria-labelledby="request-heading">
        <div className="int-request-inner">
          <h2 id="request-heading">Request an integration</h2>
          <p className="int-request-sub">
            Tell us what tool your team uses and we will add it to the
            roadmap.
          </p>
          <IntegrationRequestForm />
        </div>
      </section>
    </>
  );
}
