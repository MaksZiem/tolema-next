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

export default function PricingButton({
  variant = "default",
}: {
  variant?: keyof typeof variants;
}) {
  const v = variants[variant];

  return (
    <div className="mt-8 flex justify-center">
      <Link href="/offer">
        <button
          className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-8 py-4 cursor-pointer ${v.border}`}
        >
          {/* Tło wjeżdżające z lewej */}
          <span
            className={`absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 ${v.fill}`}
          />

          {/* Treść - kolor zmienia się na hover */}
          <span
            className={`relative z-10 flex items-center gap-3 transition-colors duration-300 ${v.text} ${v.hoverText}`}
          >
            <span className="text-lg font-light uppercase tracking-[0.18em]">
              Sprawdź ofertę
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
}