import type { Metadata } from "next";
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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
