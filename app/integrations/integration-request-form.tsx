"use client";

import { useState } from "react";

export default function IntegrationRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="int-form-success">
        <p>Thanks. We will be in touch.</p>
      </div>
    );
  }

  return (
    <form
      className="int-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="int-form-row">
        <div className="int-form-group">
          <label htmlFor="int-name" className="int-form-label">
            Your name
          </label>
          <input id="int-name" type="text" className="int-input" required />
        </div>
        <div className="int-form-group">
          <label htmlFor="int-email" className="int-form-label">
            Email
          </label>
          <input id="int-email" type="email" className="int-input" required />
        </div>
      </div>
      <div className="int-form-group">
        <label htmlFor="int-tool" className="int-form-label">
          Which tool or CRM do you use?
        </label>
        <input id="int-tool" type="text" className="int-input" required />
      </div>
      <div className="int-form-group">
        <label htmlFor="int-detail" className="int-form-label">
          Anything else we should know?
        </label>
        <textarea
          id="int-detail"
          className="int-input int-textarea"
          rows={3}
        />
      </div>
      <button type="submit" className="button-primary">
        Submit request
      </button>
    </form>
  );
}
