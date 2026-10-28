export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SEND_ERROR = "Nie udało się wysłać wiadomości. Spróbuj ponownie później.";

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Uzupełnij imię, adres e-mail oraz treść wiadomości.",
    };
  }

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Podaj poprawny adres e-mail." };
  }

  try {
    const res = await fetch("/kontakt.php", { method: "POST", body: formData });
    const data = (await res.json()) as Partial<ContactFormState>;
    if (data.status === "success" || data.status === "error") {
      return { status: data.status, message: data.message ?? SEND_ERROR };
    }
    return { status: "error", message: SEND_ERROR };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return { status: "error", message: SEND_ERROR };
  }
}
