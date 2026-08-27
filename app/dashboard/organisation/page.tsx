"use client";

import { useState } from "react";
import { demoOrganisation } from "../../../lib/data/grants";
import { formatSector } from "../../../lib/utils";

export default function OrganisationProfile() {
  const [org, setOrg] = useState(demoOrganisation);

  function update(field: string, value: string | number | string[]) {
    setOrg((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Organisation</h1>
        <p className="dash-sub">
          Your profile drives eligibility matching across Fundleaf.
        </p>
      </div>

      <div className="org-profile">
        <section className="org-section">
          <h2 className="org-section-title">Organisation</h2>
          <div className="org-fields">
            <div className="org-field">
              <label className="org-label" htmlFor="org-name">Organisation name</label>
              <input
                id="org-name"
                type="text"
                className="org-input"
                value={org.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="org-type">Organisation type</label>
              <select
                id="org-type"
                className="org-select"
                value={org.type}
                onChange={(e) => update("type", e.target.value)}
              >
                <option value="registered-charity">Registered charity</option>
                <option value="cic">CIC</option>
                <option value="constituted-group">Constituted group</option>
                <option value="social-enterprise">Social enterprise</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="charity-num">Charity number</label>
              <input
                id="charity-num"
                type="text"
                className="org-input"
                value={org.charityNumber}
                onChange={(e) => update("charityNumber", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="company-num">Company number</label>
              <input
                id="company-num"
                type="text"
                className="org-input"
                value={org.companyNumber}
                onChange={(e) => update("companyNumber", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="website">Website</label>
              <input
                id="website"
                type="url"
                className="org-input"
                value={org.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="year-founded">Year founded</label>
              <input
                id="year-founded"
                type="number"
                className="org-input"
                value={org.yearFounded}
                onChange={(e) => update("yearFounded", Number(e.target.value))}
              />
            </div>
          </div>
        </section>

        <section className="org-section">
          <h2 className="org-section-title">Location</h2>
          <div className="org-fields">
            <div className="org-field">
              <label className="org-label" htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                className="org-input"
                value={org.postcode}
                onChange={(e) => update("postcode", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="local-authority">Local authority</label>
              <input
                id="local-authority"
                type="text"
                className="org-input"
                value={org.localAuthority}
                onChange={(e) => update("localAuthority", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="nation">Nation</label>
              <select
                id="nation"
                className="org-select"
                value={org.nation}
                onChange={(e) => update("nation", e.target.value)}
              >
                <option value="England">England</option>
                <option value="Scotland">Scotland</option>
                <option value="Wales">Wales</option>
                <option value="Northern Ireland">Northern Ireland</option>
              </select>
            </div>
            <div className="org-field">
              <label className="org-label">Areas served</label>
              <div className="org-tags">
                {org.areasServed.map((a) => (
                  <span key={a} className="org-tag">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="org-section">
          <h2 className="org-section-title">Financial</h2>
          <div className="org-fields">
            <div className="org-field">
              <label className="org-label" htmlFor="income">Annual income</label>
              <input
                id="income"
                type="text"
                className="org-input"
                value={org.annualIncome}
                onChange={(e) => update("annualIncome", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="expenditure">Annual expenditure</label>
              <input
                id="expenditure"
                type="text"
                className="org-input"
                value={org.annualExpenditure}
                onChange={(e) => update("annualExpenditure", e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="org-section">
          <h2 className="org-section-title">What you do</h2>
          <div className="org-fields">
            <div className="org-field">
              <label className="org-label">Charitable purposes</label>
              <ul className="org-list">
                {org.charitablePurposes.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="org-field">
              <label className="org-label">Beneficiaries</label>
              <div className="org-tags">
                {org.beneficiaries.map((b) => (
                  <span key={b} className="org-tag">{b}</span>
                ))}
              </div>
            </div>
            <div className="org-field">
              <label className="org-label">Sectors</label>
              <div className="org-tags">
                {org.sectors.map((s) => (
                  <span key={s} className="org-tag">{formatSector(s)}</span>
                ))}
              </div>
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="description">Description</label>
              <textarea
                id="description"
                className="org-textarea"
                rows={4}
                value={org.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="org-section">
          <h2 className="org-section-title">Funding</h2>
          <div className="org-fields">
            <div className="org-field">
              <label className="org-label">Funding types sought</label>
              <div className="org-tags">
                {org.fundingTypesSought.map((ft) => (
                  <span key={ft} className="org-tag">{formatSector(ft)}</span>
                ))}
              </div>
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="min-award">Minimum award</label>
              <input
                id="min-award"
                type="text"
                className="org-input"
                value={org.minimumAward}
                onChange={(e) => update("minimumAward", e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="max-award">Maximum award</label>
              <input
                id="max-award"
                type="text"
                className="org-input"
                value={org.maximumAward}
                onChange={(e) => update("maximumAward", e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="org-actions">
          <button type="button" className="button-primary">
            Save profile
          </button>
          <button type="button" className="button-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
