import Link from "next/link";
import { cn } from "@/src/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-green text-white hover:bg-deep-green focus-visible:outline-gold",
  secondary:
    "border border-charcoal/15 bg-white text-charcoal hover:border-primary-green/40 hover:text-deep-green",
  ghost: "text-charcoal hover:bg-white/60 hover:text-deep-green",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:h-12 sm:px-6",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium tracking-wide transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out motion-safe:hover:-translate-y-px motion-safe:hover:shadow-[0_8px_20px_-12px_rgba(12,59,40,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[props.variant ?? "primary"],
    sizeClasses[props.size ?? "md"],
    props.className,
  );

  if (isLinkProps(props)) {
    const { href, external, children } = props;

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", children, disabled, name, value, onClick } = props;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      name={name}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
