import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Create your Fundleaf account and start finding funding that matches your organisation.",
};

export default function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link href="/" className="auth-back" aria-label="Back to home">
          &larr; Fundleaf
        </Link>
        <h1 className="auth-title">Create your account</h1>
        <p className="auth-sub">
          Start finding funding that matches your organisation.
        </p>

        <div className="auth-sso">
          <button type="button" className="auth-sso-btn auth-sso-btn--ms">
            <svg width="20" height="20" viewBox="0 0 21 21" aria-hidden="true">
              <rect x="1" y="1" width="9" height="9" fill="#f25022" />
              <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
              <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
            </svg>
            Continue with Microsoft
          </button>
          <button type="button" className="auth-sso-btn auth-sso-btn--google">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <form className="auth-form" action="/onboarding" method="GET">
          <div className="auth-field">
            <label htmlFor="email" className="auth-label">
              Work email
            </label>
            <input
              id="email"
              type="email"
              className="auth-input"
              required
              autoComplete="email"
            />
          </div>
          <div className="auth-field">
            <label htmlFor="password" className="auth-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="auth-input"
              required
              autoComplete="new-password"
              minLength={8}
            />
            <p className="auth-hint">At least 8 characters</p>
          </div>
          <button type="submit" className="button-primary auth-submit">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link href="#" className="auth-link">
            Sign in
          </Link>
        </p>

        <p className="auth-legal">
          By creating an account you agree to our{" "}
          <Link href="#">Terms</Link> and{" "}
          <Link href="#">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
