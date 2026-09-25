import { cn } from "@/src/lib/cn";

type DividerProps = {
  className?: string;
  subtle?: boolean;
};

export function Divider({ className, subtle = false }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 border-t",
        subtle ? "border-charcoal/8" : "border-charcoal/15",
        className,
      )}
      aria-hidden="true"
    />
  );
}
