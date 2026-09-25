import { cn } from "@/src/lib/cn";

type EventDateBadgeProps = {
  dateIso: string;
  endDateIso?: string;
  className?: string;
};

const MONTH_NAMES = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export function EventDateBadge({
  dateIso,
  endDateIso,
  className,
}: EventDateBadgeProps) {
  // Parse YYYY-MM-DD reliably without timezone shift
  const [yearStr, monthStr, dayStr] = dateIso.split("-");
  const monthIdx = monthStr ? parseInt(monthStr, 10) - 1 : 0;
  const month = MONTH_NAMES[monthIdx] ?? "DATE";
  const day = dayStr ? parseInt(dayStr, 10) : "";
  const year = yearStr ?? "";

  let endDay: string | number = "";
  if (endDateIso) {
    const [, , endDayStr] = endDateIso.split("-");
    if (endDayStr) {
      endDay = parseInt(endDayStr, 10);
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xs border border-charcoal/15 bg-white px-3 py-2 text-center shadow-2xs min-w-[4.25rem] shrink-0",
        className,
      )}
      aria-label={`Date: ${day} ${month} ${year}`}
    >
      <span className="font-sans text-[0.625rem] font-bold tracking-[0.16em] uppercase text-primary-green">
        {month}
      </span>
      <span className="font-display text-2xl font-bold tracking-tight text-deep-green leading-none my-0.5">
        {endDay && endDay !== day ? `${day}-${endDay}` : day}
      </span>
      <span className="font-sans text-[0.625rem] font-medium tracking-wider text-muted">
        {year}
      </span>
    </div>
  );
}
