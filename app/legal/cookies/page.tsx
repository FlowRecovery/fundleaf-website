import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "The cookies we use at FundLeaf.",
};

export default function CookiePolicy() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <h1>Cookie Policy</h1>

        <p>
          Our website uses cookies to distinguish you from other users of our
          website. This helps us to provide you with a good experience when you
          browse our website and also allows us to improve our site.
        </p>

        <p>
          A cookie is a small file of letters and numbers that we store on your
          browser or the hard drive of your computer if you agree. Cookies
          contain information that is transferred to your computer&apos;s hard
          drive.
        </p>

        <p>We use the following cookies:</p>

        <ul>
          <li>
            <strong>Necessary cookies.</strong> These are cookies that are
            required for the operation of our website. They include, for
            example, cookies that enable you to log into secure areas of our
            website. We do not require your consent to use these types of
            cookies, as they are essential for the functioning of our website.
          </li>
          <li>
            <strong>Analytical or performance cookies.</strong> These allow us
            to recognise and count the number of visitors and to see how
            visitors move around our website when they are using it. This helps
            us to improve the way our website works, for example, by ensuring
            that users are finding what they are looking for easily.
          </li>
          <li>
            <strong>Functionality cookies.</strong> These are used to recognise
            you when you return to our website. This enables us to personalise
            our content for you and remember your preferences (for example, your
            choice of language or region).
          </li>
        </ul>

        <h2>Cookies we use</h2>

        <p>
          You can find more information about the cookies we use and the purposes
          for which we use them in the table below:
        </p>

        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Cookie name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Strictly necessary</td>
                <td>fl_cookie_consent</td>
                <td>
                  Stores your cookie consent choice so the banner does not
                  reappear on every page.
                </td>
                <td>Persistent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Controlling your cookies</h2>

        <p>
          You can choose which analytical and functionality cookies we can set by
          clicking on the buttons provided on our cookie banner, which appears at
          the bottom of any page when you first visit.
        </p>

        <p>
          If you use your browser settings to block all cookies (including
          essential cookies) you may not be able to access all or parts of our
          website.
        </p>

        <h2>Changes to this policy</h2>

        <p>
          We may update this Cookie Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <h2>Contact us</h2>

        <p>
          If you have any questions about our use of cookies, please contact us
          at{" "}
          <a href="mailto:hello@fundleaf.co.uk">hello@fundleaf.co.uk</a>.
        </p>
      </div>
    </main>
  );
}
