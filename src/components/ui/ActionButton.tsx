import Link from "next/link";

const variants = {
  default: {
    border: "border-white/40",
    text: "text-white",
    fill: "bg-[#D4B876]",
    hoverText: "group-hover:text-black",
  },
  reverse: {
    border: "border-black/40",
    text: "text-black",
    fill: "bg-black",
    hoverText: "group-hover:text-white",
  },
  black: {
    border: "border-black/50",
    text: "text-black",
    fill: "bg-[#D4B876]",
    hoverText: "group-hover:text-black",
  },
} as const;

export type ActionButtonVariant = keyof typeof variants;

type ActionButtonProps = {
  variant?: ActionButtonVariant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & (
  | { href: string; type?: never; disabled?: never }
  | { href?: undefined; type?: "button" | "submit"; disabled?: boolean }
);

export default function ActionButton({
  variant = "default",
  arrow = true,
  className = "",
  children,
  ...rest
}: ActionButtonProps) {
  const v = variants[variant];
  const classes = `group relative inline-flex items-center gap-3 overflow-hidden border px-8 py-4 cursor-pointer disabled:pointer-events-none disabled:opacity-60 ${v.border} ${className}`;

  const content = (
    <>
      <span
        className={`absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 ${v.fill}`}
      />
      <span
        className={`relative z-10 flex items-center gap-3 transition-colors duration-300 ${v.text} ${v.hoverText}`}
      >
        <span className="text-lg font-light uppercase tracking-[0.18em]">
          {children}
        </span>
        {arrow && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </span>
    </>
  );

  if (rest.href !== undefined && !rest.href.startsWith("/")) {
    return (
      <a href={rest.href} className={classes}>
        {content}
      </a>
    );
  }

  if (rest.href !== undefined) {
    return (
      <Link href={rest.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={rest.type ?? "button"} disabled={rest.disabled} className={classes}>
      {content}
    </button>
  );
}
