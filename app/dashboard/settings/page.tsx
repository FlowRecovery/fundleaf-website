"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Fundraising team");
  const [email, setEmail] = useState("team@portsunlightvillage.com");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="dash-page">
      <div className="dash-header">
        <h1 className="dash-title">Settings</h1>
        <p className="dash-sub">
          Manage your account and preferences.
        </p>
      </div>

      <div className="settings-page">
        <section className="org-section">
          <h2 className="org-section-title">Profile</h2>
          <div className="org-fields">
            <div className="org-field">
              <label className="org-label" htmlFor="settings-name">Display name</label>
              <input
                id="settings-name"
                type="text"
                className="org-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="org-field">
              <label className="org-label" htmlFor="settings-email">Email</label>
              <input
                id="settings-email"
                type="email"
                className="org-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="org-section">
          <h2 className="org-section-title">Notifications</h2>
          <div className="org-fields">
            <label className="org-field org-field--inline">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="org-checkbox"
              />
              <span>Email me when new strong matches are found</span>
            </label>
          </div>
        </section>

        <section className="org-section">
          <h2 className="org-section-title">Danger zone</h2>
          <div className="org-fields">
            <button type="button" className="button-secondary settings-danger-btn">
              Delete account
            </button>
          </div>
        </section>

        <div className="org-actions">
          <button type="button" className="button-primary">
            Save settings
          </button>
        </div>
      </div>
    </div>
  );
}
