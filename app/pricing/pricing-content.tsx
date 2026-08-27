"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Starter",
    monthly: "Free",
    annual: "Free",
    description:
      "For small teams getting started with managing funding opportunities.",
    features: [
      "Up to 200 opportunities",
      "2 users",
      "Basic opportunity tracking",
      "Email support",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    monthly: "£29/mo",
    annual: "£26/mo",
    description:
      "For growing organisations that need more collaborators and richer tracking.",
    features: [
      "Up to 2,000 opportunities",
      "10 users",
      "Application tracking",
      "Organisation & contact management",
      "Priority email support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Scale",
    monthly: "£79/mo",
    annual: "£71/mo",
    description:
      "For established teams managing complex funding portfolios across multiple projects.",
    features: [
      "Unlimited opportunities",
      "50 users",
      "Custom fields & workflows",
      "Reporting & dashboards",
      "Dedicated account manager",
    ],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    description:
      "For large organisations with specific security, compliance or integration needs.",
    features: [
      "Everything in Scale",
      "Unlimited users",
      "SSO & advanced permissions",
      "API access & integrations",
      "Dedicated support & onboarding",
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
    a: "Yes. Annual billing saves you approximately 10% compared to paying monthly.",
  },
  {
    q: "What counts as an opportunity?",
    a: "An opportunity is any grant, investment, sponsorship or partnership you track in Fundleaf — from initial discovery through to award.",
  },
  {
    q: "Is training included?",
    a: "All plans include access to our help centre and email support. Growth and Scale plans include priority support. Enterprise plans include dedicated onboarding.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Fundleaf is designed for organisations of all types. Contact us if you have specific pricing requirements.",
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
            Annual <span className="toggle-badge">Save 10%</span>
          </button>
        </div>
      </section>

      <section className="pricing-tiers" aria-label="Pricing plans">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`tier${tier.highlight ? " tier-highlight" : ""}`}
          >
            <p className="tier-name">{tier.name}</p>
            <p className="tier-price">{annual ? tier.annual : tier.monthly}</p>
            <p className="tier-desc">{tier.description}</p>
            <a
              href="#"
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
          <a href="#" className="tier-cta tier-cta-primary">
            Get started
          </a>
          <a href="#" className="tier-cta">
            Contact us
          </a>
        </div>
      </section>
    </>
  );
}
