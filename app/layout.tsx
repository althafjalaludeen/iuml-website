import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteShell } from "@/src/components/layout/SiteShell";
import { site } from "@/src/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.metadata.title,
    template: `%s · ${site.shortName}`,
  },
  description: site.metadata.description,
  applicationName: site.name,
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.metadata.title,
    description: site.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory font-sans text-charcoal">
        {/* Cinematic intro will be composed here in a later phase. */}
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
