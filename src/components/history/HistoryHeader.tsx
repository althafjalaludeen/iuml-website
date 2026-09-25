import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { cn } from "@/src/lib/cn";

type HistoryHeaderProps = {
  className?: string;
};

export function HistoryHeader({ className }: HistoryHeaderProps) {
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
          <ol className="flex items-center gap-2 font-sans text-xs tracking-wider text-muted uppercase">
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
              <span className="font-semibold text-deep-green" aria-current="page">
                History
              </span>
            </li>
          </ol>
        </nav>

        {/* Title, Introduction & Archival Note */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary-green uppercase">
              History
            </p>
            <h1 className="mt-1.5 font-display text-h1 text-charcoal tracking-tight">
              A History of the Indian Union Muslim League
            </h1>
            <p className="mt-3 text-body text-charcoal/80 leading-relaxed max-w-2xl">
              A chronological overview of the organization from its formation in independent India
              through its subsequent political, constitutional, and parliamentary development.
            </p>
          </div>

          {/* Archival Annotation */}
          <aside
            aria-label="Archival documentation notice"
            className="self-start lg:self-end max-w-sm rounded-xs border-l-2 border-gold/70 bg-white/60 p-3.5 text-xs text-muted leading-relaxed shadow-2xs"
          >
            <span className="block font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-primary-green mb-1">
              Documentary Standard
            </span>
            Historical milestones are compiled from official organizational records, Election Commission of India reports, parliamentary archives, and verified independent reporting.
          </aside>
        </div>
      </Container>
    </header>
  );
}
