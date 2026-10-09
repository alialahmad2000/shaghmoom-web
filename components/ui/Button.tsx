import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Buttons (PROPOSED, brand §9): solid in the text colour of the ground, or the
 * ghost variant — outline in the text colour. Colours come from the section
 * ground (--ink / --ground), so the same button is correct on maroon and sand.
 * 2px corners; the focus ring is gold.
 */
type Variant = "solid" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-brand border-2 border-ink font-semibold leading-none transition-colors duration-200 ease-[var(--ease-out-soft)] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-ground hover:bg-transparent hover:text-ink",
  ghost: "bg-transparent text-ink hover:bg-ink hover:text-ground",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 py-3 text-base",
  lg: "min-h-14 px-7 py-4 text-[17px]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Trailing icon (e.g. arrow). */
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "solid", size = "md", className = "", icon } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...rest } = props;
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
        {icon}
      </Link>
    );
  }

  const { variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
      {icon}
    </button>
  );
}

/** Arrow that points toward the reading end (flips correctly in RTL). */
export function ArrowEnd({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 rtl:-scale-x-100 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
