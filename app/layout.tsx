import type { Metadata } from "next";
import Header from "./header";
import Footer from "./footer";
import CookieBanner from "./cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fundleaf.co.uk"),
  title: {
    default: "Fundleaf — Funding, organised",
    template: "%s | Fundleaf",
  },
  description:
    "Find the funding to do more good. Fundleaf organises opportunities, applications and deadlines so your team can focus on the work that matters.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Fundleaf — Funding, organised",
    description:
      "Find the funding to do more good. Fundleaf organises opportunities, applications and deadlines so your team can focus on the work that matters.",
    url: "https://fundleaf.co.uk",
    siteName: "Fundleaf",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
