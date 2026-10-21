import ActionButton, { type ActionButtonVariant } from "./ActionButton";

export default function PricingButton({
  variant = "default",
}: {
  variant?: ActionButtonVariant;
}) {
  return (
    <div className="mt-8 flex justify-center">
      <ActionButton href="/offer" variant={variant}>
        Sprawdź ofertę
      </ActionButton>
    </div>
  );
}
