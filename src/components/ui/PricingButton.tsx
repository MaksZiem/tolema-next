export default function PricingButton({
  variant = "default",
}: {
  variant?: "default" | "reverse" | "black";
}) {
  const isReverse = variant === "reverse";
  const isBlack = variant === "black";

  return (
    <div className="flex items-center justify-center mt-20">
      <button
        className={`relative px-10 py-5 bg-transparent border-b-2 border-t-2 font-semibold overflow-hidden group transition-all duration-300 cursor-pointer
          ${
            isReverse
              ? "border-white text-white hover:text-black hover:border-white"
              : isBlack
              ? "border-black text-black hover:text-black hover:border-[#D4B876]"
              : "border-white text-white hover:text-black hover:border-[#D4B876]"
          }`}
      >
        <span
          className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400
            ${isReverse ? "bg-white" : isBlack ? "bg-[#D4B876]" : "bg-[#D4B876]"}`}
        ></span>
        <span className="relative z-10 text-2xl font-light">
          Sprawdź cennik
        </span>
      </button>
    </div>
  );
}