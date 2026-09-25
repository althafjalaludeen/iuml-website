import { cn } from "@/src/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-sans text-metadata uppercase text-primary-green">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-display text-h2 text-charcoal tracking-tight",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-body-large text-muted">{description}</p>
      ) : null}
    </div>
  );
}
