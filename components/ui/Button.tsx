import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "whatsapp"
  | "ghost"
  | "inverse"
  | "outlineInverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium transition-[transform,background-color,border-color,color] duration-200 ease-[var(--ease-out-soft)] focus-visible:outline-2 focus-visible:outline-offset-3 active:translate-y-px disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // On light backgrounds.
  primary: "bg-brand text-bg hover:bg-brand-deep focus-visible:outline-brand",
  secondary:
    "border border-line-strong text-ink hover:border-brand hover:text-brand focus-visible:outline-brand",
  whatsapp:
    "bg-[#1f7a52] text-white hover:bg-[#196244] focus-visible:outline-[#1f7a52]",
  ghost: "text-ink hover:text-brand",
  // On dark / maroon backgrounds — deterministic, no className overrides needed.
  inverse:
    "bg-bg text-brand hover:bg-surface focus-visible:outline-bg", // solid cream fill, maroon text
  outlineInverse:
    "border border-bg/60 text-bg hover:bg-bg/10 hover:border-bg focus-visible:outline-bg",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
  } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, icon: _i, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
        >
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

  const { variant: _v, size: _s, icon: _i, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
      {icon}
    </button>
  );
}

/** Arrow that points toward the reading-end (flips correctly in RTL). */
export function ArrowEnd({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 rtl:-scale-x-100 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
