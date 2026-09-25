import { cn } from "@/src/lib/cn";

type ContainerWidth = "narrow" | "default" | "wide";

const widths: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

type ContainerProps = {
  as?: "div" | "section" | "article" | "header" | "footer" | "nav" | "main";
  width?: ContainerWidth;
  className?: string;
  children: React.ReactNode;
};

export function Container({
  as: Component = "div",
  width = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-12",
        widths[width],
        className,
      )}
    >
      {children}
    </Component>
  );
}
