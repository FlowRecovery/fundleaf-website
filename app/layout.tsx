import type { Metadata } from "next";
import Header from "./header";
import Footer from "./footer";
import CookieBanner from "./cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fundleaf.co.uk"),
  title: "Fundleaf",
  description: "Funding, organised.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
