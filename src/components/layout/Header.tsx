"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/src/data/site";
import { Container } from "@/src/components/ui/Container";
import { MobileMenu } from "@/src/components/layout/MobileMenu";
import { cn } from "@/src/lib/cn";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-xs">
      <Container
        width="wide"
        className="flex h-16 items-center justify-between gap-6 sm:h-20"
      >
        {/* Temporary text-based branding placeholder - ready for official asset */}
        <Link
          href="/"
          className="group flex flex-col rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-green"
          aria-label={`${site.shortName} - ${site.name}`}
        >
          <span className="font-display text-2xl font-semibold tracking-tight text-deep-green sm:text-3xl leading-none transition-colors group-hover:text-primary-green">
            {site.shortName}
          </span>
          <span className="font-sans text-[0.65rem] tracking-[0.16em] text-muted uppercase font-medium mt-1 sm:text-[0.7rem]">
            {site.name}
          </span>
        </Link>

        {/* Desktop primary navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {site.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative py-1 font-sans text-xs tracking-[0.08em] uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-green",
                      isActive
                        ? "font-semibold text-deep-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-green"
                        : "text-charcoal/80 hover:text-deep-green",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu dialog trigger and panel */}
        <MobileMenu items={[...site.navigation]} />
      </Container>
    </header>
  );
}
