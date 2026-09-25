import Link from "next/link";
import { site } from "@/src/data/site";
import { Container } from "@/src/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-charcoal/15 bg-deep-green text-ivory">
      <Container width="wide" className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Temporary text identity */}
          <div className="lg:col-span-5">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {site.shortName}
              </span>
              <span className="font-sans text-xs tracking-[0.14em] text-ivory/70 uppercase font-medium mt-1">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ivory/75 leading-relaxed">
              Official institutional portal. Dedicated to documenting archival history, leadership records, and public services.
            </p>
          </div>

          {/* Navigation Directory */}
          <nav aria-label="Footer Navigation" className="lg:col-span-3">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-ivory/60 uppercase">
              Sections
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-ivory/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social Placeholders */}
          <div className="lg:col-span-4">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-ivory/60 uppercase">
              Headquarters & Contact
            </p>
            <address className="mt-4 not-italic text-sm text-ivory/80 space-y-2">
              <p className="border-l border-gold/40 pl-3 italic">
                {site.contact.address}
              </p>
              <p className="border-l border-gold/40 pl-3 italic">
                {site.contact.email}
              </p>
              <p className="border-l border-gold/40 pl-3 italic">
                {site.contact.phone}
              </p>
            </address>

            <p className="mt-6 font-sans text-xs font-semibold tracking-[0.14em] text-ivory/60 uppercase">
              Public Channels
            </p>
            <ul className="mt-3">
              {site.social.map((item) => (
                <li key={item.platform} className="text-sm italic text-ivory/75 border-l border-gold/40 pl-3">
                  {item.note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal and terms */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.legal.copyrightNote}
          </p>
          <ul className="flex gap-6">
            <li>
              <Link
                href={site.legal.privacyHref}
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={site.legal.termsHref}
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
