"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/src/data/site";
import { site } from "@/src/data/site";
import { cn } from "@/src/lib/cn";

type MobileMenuProps = {
  items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const titleId = useId();

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Focus trap and Escape key listener
  useEffect(() => {
    if (!open) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
      "button, a[href]",
    );
    firstFocusable?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 items-center justify-center rounded-xs border border-charcoal/15 bg-white/60 px-3 font-sans text-xs font-semibold tracking-wider text-charcoal uppercase transition-colors hover:border-primary-green/40 hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          {/* Panel dialog */}
          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-ivory shadow-2xl transition-transform"
          >
            {/* Header with temporary branding placeholder */}
            <div className="flex h-16 items-center justify-between border-b border-charcoal/10 px-6">
              <div id={titleId} className="flex flex-col">
                <span className="font-display text-xl font-semibold tracking-tight text-deep-green leading-none">
                  {site.shortName}
                </span>
                <span className="font-sans text-[0.625rem] tracking-[0.14em] text-muted uppercase font-medium mt-0.5">
                  Navigation
                </span>
              </div>
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-xs border border-charcoal/15 bg-white/60 px-3 font-sans text-xs font-semibold tracking-wider text-charcoal uppercase hover:text-deep-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            {/* Nav list */}
            <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="flex flex-col divide-y divide-charcoal/6">
                {items.map((item) => {
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
                          "block py-3.5 font-display text-2xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-green",
                          isActive
                            ? "font-semibold text-deep-green"
                            : "text-charcoal/90 hover:text-deep-green",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Note at bottom */}
            <div className="border-t border-charcoal/8 bg-white/40 p-5 text-xs text-muted">
              <p className="font-sans tracking-wide">
                {site.name} · Official Institutional Portal
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
