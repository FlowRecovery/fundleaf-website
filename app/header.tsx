import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-brand">
          <Image
            src="/fundleaf_logo.svg"
            alt="Fundleaf"
            width={120}
            height={68}
            priority
          />
        </Link>
        <nav aria-label="Main">
          <Link href="/pricing" className="header-link">
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
}
