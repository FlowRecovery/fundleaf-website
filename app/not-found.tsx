import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-inner">
        <p className="not-found-code">404</p>
        <h1>Page not found</h1>
        <p className="not-found-body">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link href="/funding-database" className="button-primary">
            Browse the funding database
          </Link>
          <Link href="/" className="button-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
