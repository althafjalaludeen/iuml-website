import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { cn } from "@/src/lib/cn";

type ThiruvallaHeaderProps = {
  className?: string;
};

export function ThiruvallaHeader({ className }: ThiruvallaHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-charcoal/8 bg-ivory/60 pt-7 pb-8 sm:pt-9 sm:pb-10 lg:pt-11 lg:pb-12",
        className,
      )}
    >
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-xs tracking-wider text-muted uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-charcoal/30" aria-hidden="true">
                /
              </span>
              <Link
                href="/history"
                className="transition-colors hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
              >
                History
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-charcoal/30" aria-hidden="true">
                /
              </span>
              <Link
                href="/history/pathanamthitta"
                className="transition-colors hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
              >
                Pathanamthitta
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-charcoal/30" aria-hidden="true">
                /
              </span>
              <span className="font-semibold text-deep-green" aria-current="page">
                Thiruvalla
              </span>
            </li>
          </ol>
        </nav>

        {/* Title, Introduction & Documentary Standard Notice */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary-green uppercase">
              Mandalam & Local History
            </p>
            <h1 className="mt-1.5 font-display text-h1 text-charcoal tracking-tight">
              IUML in Thiruvalla
            </h1>
            <p className="mt-3 text-body text-charcoal/80 leading-relaxed max-w-2xl">
              A documented history of the Indian Union Muslim League&apos;s organizational presence
              in Thiruvalla, from its pre-1982 affiliation with Alleppey District through mandalam consolidation,
              municipal participation, and youth wing initiatives.
            </p>
          </div>

          {/* Archival Annotation */}
          <aside
            aria-label="Documentary standard notice"
            className="self-start lg:self-end max-w-sm rounded-xs border-l-2 border-gold/70 bg-white/60 p-3.5 text-xs text-muted leading-relaxed shadow-2xs"
          >
            <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-primary-green mb-1">
              Documentary Standard
            </span>
            Historical claims reflect verified Kerala Gazette demarcation records, State Election Commission returns, party archives, and contemporary news reportage. No founding dates are assumed without corroboration.
          </aside>
        </div>
      </Container>
    </header>
  );
}
