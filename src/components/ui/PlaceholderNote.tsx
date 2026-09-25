import { cn } from "@/src/lib/cn";

type PlaceholderNoteProps = {
  children: React.ReactNode;
  badge?: string;
  className?: string;
};

export function PlaceholderNote({
  children,
  badge = "Pending Official Verification",
  className,
}: PlaceholderNoteProps) {
  return (
    <div
      className={cn(
        "relative rounded-xs border-l-2 border-gold/60 bg-white/70 px-5 py-4 text-sm text-muted shadow-xs",
        className,
      )}
      role="note"
      aria-label="Institutional placeholder"
    >
      {badge ? (
        <span className="mb-2 block font-sans text-[0.6875rem] font-semibold tracking-[0.14em] text-primary-green uppercase">
          {badge}
        </span>
      ) : null}
      <div className="text-body text-charcoal/80 leading-relaxed italic">
        {children}
      </div>
    </div>
  );
}
