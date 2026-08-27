"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success";

type Errors = {
  email?: string;
  cause?: string;
  orgType?: string;
};

const CAUSE_AREAS = [
  "",
  "Arts and culture",
  "Community development",
  "Education and learning",
  "Environment and conservation",
  "Health and wellbeing",
  "Human rights and justice",
  "Poverty and inequality",
  "Sports and recreation",
  "Other",
];

const ORG_TYPES = [
  "",
  "Charity",
  "CIO",
  "CIC",
  "Community interest company",
  "Social enterprise",
  "Faith organisation",
  "School or college",
  "Other",
];

function validate(
  email: string,
  cause: string,
  orgType: string
): Errors {
  const errors: Errors = {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!cause) {
    errors.cause = "Select a cause area.";
  }
  if (!orgType) {
    errors.orgType = "Select an organisation type.";
  }
  return errors;
}

export default function WeeklyShortlist({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [cause, setCause] = useState("");
  const [orgType, setOrgType] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(email, cause, orgType);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("submitting");

    setTimeout(() => {
      setState("success");
    }, 800);
  }

  if (state === "success") {
    return (
      <div className="ws-card" id={id}>
        <div className="ws-success">
          <p className="ws-success-heading">You&apos;re on the list.</p>
          <p className="ws-success-body">
            The first shortlist arrives next Monday. Check your inbox for a
            confirmation email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="ws-card" id={id}>
      <div className="ws-copy">
        <h2 className="ws-heading">Weekly shortlist</h2>
        <p className="ws-sub">
          Every Monday, the new opportunities that match your organisation. No
          other email.
        </p>
      </div>
      <form className="ws-form" onSubmit={handleSubmit} noValidate>
        <div className="ws-field">
          <label htmlFor="ws-email" className="ws-label">
            Email
          </label>
          <input
            id="ws-email"
            type="email"
            className={`ws-input ${errors.email ? "ws-input--error" : ""}`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "ws-email-error" : undefined}
            disabled={state === "submitting"}
          />
          {errors.email && (
            <p className="ws-error" id="ws-email-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="ws-field">
          <label htmlFor="ws-cause" className="ws-label">
            Cause area
          </label>
          <select
            id="ws-cause"
            className={`ws-select ${errors.cause ? "ws-input--error" : ""}`}
            value={cause}
            onChange={(e) => {
              setCause(e.target.value);
              if (errors.cause) setErrors((prev) => ({ ...prev, cause: undefined }));
            }}
            aria-invalid={!!errors.cause}
            aria-describedby={errors.cause ? "ws-cause-error" : undefined}
            disabled={state === "submitting"}
          >
            {CAUSE_AREAS.map((c) => (
              <option key={c} value={c}>
                {c || "Select a cause area"}
              </option>
            ))}
          </select>
          {errors.cause && (
            <p className="ws-error" id="ws-cause-error" role="alert">
              {errors.cause}
            </p>
          )}
        </div>
        <div className="ws-field">
          <label htmlFor="ws-org" className="ws-label">
            Organisation type
          </label>
          <select
            id="ws-org"
            className={`ws-select ${errors.orgType ? "ws-input--error" : ""}`}
            value={orgType}
            onChange={(e) => {
              setOrgType(e.target.value);
              if (errors.orgType) setErrors((prev) => ({ ...prev, orgType: undefined }));
            }}
            aria-invalid={!!errors.orgType}
            aria-describedby={errors.orgType ? "ws-org-error" : undefined}
            disabled={state === "submitting"}
          >
            {ORG_TYPES.map((t) => (
              <option key={t} value={t}>
                {t || "Select an organisation type"}
              </option>
            ))}
          </select>
          {errors.orgType && (
            <p className="ws-error" id="ws-org-error" role="alert">
              {errors.orgType}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="button-primary ws-submit"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Signing up\u2026" : "Get the shortlist"}
        </button>
      </form>
    </div>
  );
}
