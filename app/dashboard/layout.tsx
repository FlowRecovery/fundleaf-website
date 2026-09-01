import type { Metadata } from "next";
import Link from "next/link";
import AppSidebar from "../components/app-sidebar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | FundLeaf",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-shell">
      <AppSidebar />
      <div className="app-main">
        <header className="app-topbar">
          <div className="app-topbar-inner">
            <nav className="app-topbar-nav" aria-label="Breadcrumb">
              <Link href="/" className="app-topbar-home">
                FundLeaf
              </Link>
            </nav>
            <div className="app-topbar-actions">
              <Link href="/dashboard/organisation" className="app-topbar-avatar" aria-label="Organisation profile">
                PS
              </Link>
            </div>
          </div>
        </header>
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
