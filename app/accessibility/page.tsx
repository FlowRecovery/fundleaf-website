import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "Fundleaf is committed to making this website accessible to everyone. This statement explains what we have done and what remains in progress.",
};

export default function AccessibilityPage() {
  return (
    <section className="legal-page">
      <div className="legal-inner">
        <h1>Accessibility statement</h1>
        <p className="legal-updated">Last updated: August 2026</p>

        <h2>Our commitment</h2>
        <p>
          Fundleaf is committed to making this website accessible to the widest
          possible audience, regardless of ability or technology. We aim to meet
          WCAG 2.1 Level AA as a minimum standard.
        </p>

        <h2>What we have done</h2>
        <ul>
          <li>All pages use semantic HTML with proper heading hierarchy.</li>
          <li>Colour contrast ratios meet or exceed WCAG AA requirements.</li>
          <li>All interactive elements are keyboard navigable with visible focus
            indicators.</li>
          <li>A skip-to-content link is provided on every page.</li>
          <li>Images use descriptive alt text or are marked as decorative.</li>
          <li>Form inputs are associated with labels and include error messages
            that are announced to screen readers.</li>
          <li>
            <code>prefers-reduced-motion</code> is respected: animations and
            transitions are disabled for users who have requested reduced motion
            in their operating system.
          </li>
        </ul>

        <h2>What is in progress</h2>
        <ul>
          <li>We are progressively adding ARIA landmarks and live regions where
            they add value for assistive technology users.</li>
          <li>Some older content may not yet have full alt text. We are working
            through the backlog.</li>
          <li>Third-party integrations (such as the cookie banner) are maintained
            by their respective providers and may not always meet the same
            standard we set for our own code.</li>
        </ul>

        <h2>Feedback</h2>
        <p>
          If you encounter any accessibility barriers on this site, please email
          us at{" "}
          <a href="mailto:accessibility@fundleaf.co.uk">
            accessibility@fundleaf.co.uk
          </a>
          . We take every report seriously and will respond within five working
          days.
        </p>

        <h2>Enforcement</h2>
        <p>
          If you are not satisfied with our response, you can contact the
          Equality and Human Rights Commission (EHRC) in England, Scotland or
          Wales, or the Equality Commission for Northern Ireland.
        </p>
      </div>
    </section>
  );
}
