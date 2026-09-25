import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { cn } from "@/src/lib/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-charcoal/8 bg-ivory/60 py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs tracking-wider text-muted uppercase">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="flex items-center gap-2">
                    <span className="text-charcoal/30" aria-hidden="true">
                      /
                    </span>
                    {isLast || !crumb.href ? (
                      <span className="font-semibold text-deep-green" aria-current="page">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="font-sans text-xs font-semibold tracking-[0.14em] text-primary-green uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-display text-h1 text-charcoal tracking-tight",
              eyebrow ? "mt-3" : "mt-0",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-body-large text-muted leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
