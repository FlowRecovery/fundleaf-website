"use client";

import { useState } from "react";
import Image from "next/image";

const tiers = [
  {
    name: "Starter",
    icon: "/free.svg",
    monthly: "Free",
    annual: "Free",
    description: "For small teams exploring funding opportunities.",
    features: [
      "2 users",
      "25 tracked opportunities",
      "Basic funding search",
      "Basic opportunity tracking",
      "Limited alerts",
      "Email support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    icon: "/growth.svg",
    monthly: "£39/mo",
    annual: "£33/mo",
    annualNote: "Billed £390/year",
    saveNote: "Save £78/year",
    description: "For charities actively managing grant applications.",
    features: [
      "10 users",
      "Up to 2,000 funding opportunities",
      "Unlimited tracked applications",
      "Application pipeline",
      "Funder relationship management",
      "Saved searches and alerts",
      "Eligibility matching",
      "Priority email support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Scale",
    icon: "/scale.svg",
    monthly: "£99/mo",
    annual: "£83/mo",
    annualNote: "Billed £990/year",
    saveNote: "Save £198/year",
    description: "For established fundraising teams.",
    features: [
      "50 users",
      "Unlimited opportunities",
      "Everything in Growth",
      "Advanced matching",
      "Custom fields and workflows",
      "Reporting and dashboards",
      "Grant reporting calendar",
      "Imports and exports",
      "Team permissions",
      "Onboarding",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Organisation",
    icon: "/organisation.svg",
    monthly: "From £3,000/yr",
    annual: "From £3,000/yr",
    annualNote: "",
    saveNote: "",
    description:
      "For larger charities and groups with more complex security, integration and support needs.",
    features: [
      "Custom/unlimited users",
      "Multiple entities",
      "Everything in Scale",
      "SSO",
      "API and integrations",
      "Advanced permissions",
      "Custom reporting",
      "Dedicated support",
      "Bespoke onboarding",
    ],
    cta: "Contact us",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free and includes everything you need to begin managing funding opportunities. No credit card required.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade or cancel at any time. Changes take effect immediately and we'll adjust your billing pro-rata.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes. Annual billing saves you two months on Growth (save £78/year) and Scale (save £198/year) compared to paying monthly.",
  },
  {
    q: "What counts as an opportunity?",
    a: "An opportunity is any grant, investment, sponsorship or partnership you track in FundLeaf, from initial discovery through to award.",
  },
  {
    q: "Is training included?",
    a: "All plans include access to our help centre and email support. Growth and Scale plans include priority support. Organisation plans include bespoke onboarding and dedicated support.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "FundLeaf is designed for organisations of all types. Contact us if you have specific pricing requirements.",
  },
];

export default function PricingContent() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="pricing-hero">
        <h1>Simple pricing for every stage</h1>
        <p className="pricing-sub">
          Start free, upgrade when you&apos;re ready. No hidden fees.
        </p>

        <div
          className="billing-toggle"
          role="radiogroup"
          aria-label="Billing period"
        >
          <button
            type="button"
            role="radio"
            aria-checked={!annual}
            className={`toggle-btn${!annual ? " toggle-active" : ""}`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={annual}
            className={`toggle-btn${annual ? " toggle-active" : ""}`}
            onClick={() => setAnnual(true)}
          >
            Annual <span className="toggle-badge">2 months free</span>
          </button>
        </div>
      </section>

      <section className="pricing-tiers" aria-label="Pricing plans">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`tier${tier.highlight ? " tier-highlight" : ""}`}
          >
            <Image
              src={tier.icon}
              alt=""
              width={48}
              height={48}
              className="tier-icon"
              aria-hidden="true"
            />
            <p className="tier-name">{tier.name}</p>
            <p className="tier-price">{annual ? tier.annual : tier.monthly}</p>
            {annual && tier.annualNote && (
              <p className="tier-annual-note">{tier.annualNote}</p>
            )}
            {annual && tier.saveNote && (
              <p className="tier-save-note">{tier.saveNote}</p>
            )}
            <p className="tier-desc">{tier.description}</p>
            <a
              href={
                tier.name === "Organisation"
                  ? "mailto:hello@fundleaf.co.uk"
                  : "https://app.fundleaf.co.uk/login"
              }
              className={`tier-cta${tier.highlight ? " tier-cta-primary" : ""}`}
            >
              {tier.cta}
            </a>
            <ul className="tier-features">
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className="pricing-vat">Prices exclude VAT where applicable.</p>

      <section className="pricing-faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently asked questions</h2>
        <dl className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.q} className="faq-item">
              <dt>{faq.q}</dt>
              <dd>{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pricing-cta">
        <h2>Ready to get organised?</h2>
        <p>Start with the free plan or get in touch to find the right fit.</p>
        <div className="pricing-cta-btns">
          <a href="https://app.fundleaf.co.uk/login" className="button-primary">
            Get started
          </a>
          <a href="mailto:hello@fundleaf.co.uk" className="button-secondary">
            Contact us
          </a>
        </div>
      </section>
    </>
  );
}
