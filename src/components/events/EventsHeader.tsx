import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { eventNotices } from "@/src/data/events";
import { cn } from "@/src/lib/cn";

type EventsHeaderProps = {
  className?: string;
};

export function EventsHeader({ className }: EventsHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-charcoal/8 bg-ivory/60 pt-7 pb-6 sm:pt-9 sm:pb-7 lg:pt-10 lg:pb-8",
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
                Events
              </span>
            </li>
          </ol>
        </nav>

        {/* Title, Introduction & Archival Note */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary-green uppercase">
              Events
            </p>
            <h1 className="mt-1.5 font-display text-h1 text-charcoal tracking-tight">
              Events & Programs
            </h1>
            <p className="mt-2.5 text-body text-muted leading-relaxed">
              A public record of upcoming and past programs, meetings and events documented by the organization.
            </p>
          </div>

          {/* Archival Annotation */}
          <aside
            aria-label="Archival notice"
            className="self-start lg:self-end max-w-sm border-l border-gold/70 pl-3.5 py-0.5 text-xs text-muted/90 italic leading-relaxed"
          >
            {eventNotices.headerNotice}
          </aside>
        </div>
      </Container>
    </header>
  );
}
