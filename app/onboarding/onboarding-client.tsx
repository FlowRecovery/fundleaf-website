"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3 | 4;

const ORG_TYPES = [
  "Registered charity",
  "CIO (Charitable Incorporated Organisation)",
  "CIC (Community Interest Company)",
  "Constituted community group",
  "Social enterprise",
  "Other",
];

const REGIONS = [
  "UK-wide",
  "England",
  "Scotland",
  "Wales",
  "Northern Ireland",
  "Specific region or local authority area",
];

const CAUSE_AREAS = [
  "Arts and culture",
  "Community development",
  "Education and learning",
  "Environment and conservation",
  "Health and wellbeing",
  "Human rights and justice",
  "Housing and homelessness",
  "Poverty and inequality",
  "Sports and recreation",
  "Young people and children",
  "Elderly people",
  "Disability",
  "Faith-based work",
  "Other",
];

const FUNDING_TYPES = [
  "Project funding",
  "Core / unrestricted costs",
  "Capital costs (buildings, equipment)",
  "Revenue funding",
  "Research and innovation",
];

const AMOUNT_RANGES = [
  "Under \u00a35,000",
  "\u00a35,000 \u2013 \u00a325,000",
  "\u00a325,000 \u2013 \u00a3100,000",
  "\u00a3100,000 \u2013 \u00a3500,000",
  "\u00a3500,000+",
  "Not sure yet",
];

const TOTAL_STEPS = 4;

export default function OnboardingClient() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [orgType, setOrgType] = useState("");
  const [charityNumber, setCharityNumber] = useState("");
  const [region, setRegion] = useState("");
  const [causes, setCauses] = useState<string[]>([]);
  const [amountRange, setAmountRange] = useState("");
  const [fundingTypes, setFundingTypes] = useState<string[]>([]);

  function toggleCause(c: string) {
    setCauses((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  function toggleFundingType(f: string) {
    setFundingTypes((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  }

  function skip() {
    if (step < TOTAL_STEPS) {
      setStep((s) => (s + 1) as Step);
    } else {
      router.push("/onboarding/result");
    }
  }

  function next() {
    if (step < TOTAL_STEPS) {
      setStep((s) => (s + 1) as Step);
    } else {
      router.push("/onboarding/result");
    }
  }

  return (
    <div className="onb-page">
      <div className="onb-card">
        <div className="onb-progress" aria-label={`Step ${step} of ${TOTAL_STEPS}`}>
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <div
              key={i}
              className={`onb-progress-step ${i + 1 <= step ? "onb-progress-step--done" : ""} ${i + 1 === step ? "onb-progress-step--current" : ""}`}
            >
              <span className="onb-progress-num">{i + 1}</span>
              {i < TOTAL_STEPS - 1 && <span className="onb-progress-line" />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="onb-step">
            <h1 className="onb-heading">What type of organisation are you?</h1>
            <p className="onb-sub">
              This helps us match you with funders who support your type of
              work.
            </p>
            <div className="onb-options">
              {ORG_TYPES.map((t) => (
                <label key={t} className={`onb-option ${orgType === t ? "onb-option--selected" : ""}`}>
                  <input
                    type="radio"
                    name="orgType"
                    value={t}
                    checked={orgType === t}
                    onChange={() => setOrgType(t)}
                    className="onb-radio"
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
            {(orgType === "Registered charity" || orgType === "CIO (Charitable Incorporated Organisation)") && (
              <div className="onb-field">
                <label htmlFor="charity-number" className="onb-label">
                  Charity number (optional)
                </label>
                <input
                  id="charity-number"
                  type="text"
                  className="onb-input"
                  placeholder="e.g. 1234567"
                  value={charityNumber}
                  onChange={(e) => setCharityNumber(e.target.value)}
                />
                <p className="onb-hint">
                  We can look up your details from the Charity Commission.
                </p>
              </div>
            )}
            <p className="onb-skip-note">
              Skipping this means we cannot tailor your shortlist.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="onb-step">
            <h1 className="onb-heading">Where do you work?</h1>
            <p className="onb-sub">
              Many funders restrict their giving to specific areas.
            </p>
            <div className="onb-options">
              {REGIONS.map((r) => (
                <label key={r} className={`onb-option ${region === r ? "onb-option--selected" : ""}`}>
                  <input
                    type="radio"
                    name="region"
                    value={r}
                    checked={region === r}
                    onChange={() => setRegion(r)}
                    className="onb-radio"
                  />
                  <span>{r}</span>
                </label>
              ))}
            </div>
            <p className="onb-skip-note">
              Skipping this means we cannot filter by location.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="onb-step">
            <h1 className="onb-heading">What do you do?</h1>
            <p className="onb-sub">
              Select all that apply. This is the main signal funders use to
              assess fit.
            </p>
            <div className="onb-chips">
              {CAUSE_AREAS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`onb-chip ${causes.includes(c) ? "onb-chip--selected" : ""}`}
                  onClick={() => toggleCause(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="onb-skip-note">
              Skipping this means your shortlist will be unfiltered by cause
              area.
            </p>
          </div>
        )}

        {step === 4 && (
          <div className="onb-step">
            <h1 className="onb-heading">What are you looking for?</h1>
            <p className="onb-sub">
              Tell us about the funding you need so we can prioritise the
              right opportunities.
            </p>
            <div className="onb-field">
              <label className="onb-label">Typical amount range</label>
              <div className="onb-options onb-options--compact">
                {AMOUNT_RANGES.map((a) => (
                  <label key={a} className={`onb-option ${amountRange === a ? "onb-option--selected" : ""}`}>
                    <input
                      type="radio"
                      name="amount"
                      value={a}
                      checked={amountRange === a}
                      onChange={() => setAmountRange(a)}
                      className="onb-radio"
                    />
                    <span>{a}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="onb-field">
              <label className="onb-label">Type of funding (select all)</label>
              <div className="onb-chips">
                {FUNDING_TYPES.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`onb-chip ${fundingTypes.includes(f) ? "onb-chip--selected" : ""}`}
                    onClick={() => toggleFundingType(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <p className="onb-skip-note">
              Skipping this means we cannot prioritise by amount or type.
            </p>
          </div>
        )}

        <div className="onb-actions">
          {step > 1 && (
            <button
              type="button"
              className="button-secondary"
              onClick={() => setStep((s) => (s - 1) as Step)}
            >
              Back
            </button>
          )}
          <div className="onb-actions-right">
            <button type="button" className="onb-skip-btn" onClick={skip}>
              Skip for now
            </button>
            <button type="button" className="button-primary" onClick={next}>
              {step === TOTAL_STEPS ? "See my results" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
