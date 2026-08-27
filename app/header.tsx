import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-brand" aria-label="Fundleaf home">
          <Image
            src="/fundleaf_logo.svg"
            alt="Fundleaf"
            width={120}
            height={68}
            priority
          />
        </Link>
        <div className="header-nav">
          <nav aria-label="Main">
            <Link href="/pricing" className="header-link">
              Pricing
            </Link>
          </nav>
          <Link href="#" className="header-cta">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
