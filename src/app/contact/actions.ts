"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@tolema.pl";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  `Formularz kontaktowy TOLEMA <${SMTP_USER ?? "info@tolema.pl"}>`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot - pole ukryte przed użytkownikiem, wypełniane tylko przez boty.
  if (formData.get("company")) {
    return { status: "success", message: "Wiadomość została wysłana." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
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

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.warn(
      "SMTP_HOST / SMTP_USER / SMTP_PASSWORD nie są ustawione - formularz kontaktowy nie może wysłać wiadomości."
    );
    return {
      status: "error",
      message:
        "Formularz jest chwilowo niedostępny. Skontaktuj się bezpośrednio mailowo lub telefonicznie.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: topic
        ? `[TOLEMA] Nowa wiadomość - ${topic}`
        : "[TOLEMA] Nowa wiadomość ze strony kontaktowej",
      text: [
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        topic ? `Temat: ${topic}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #171717;">
          <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${topic ? `<p><strong>Temat:</strong> ${escapeHtml(topic)}</p>` : ""}
          <p style="white-space: pre-wrap; margin-top: 16px;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Dziękujemy! Wiadomość została wysłana - odezwiemy się wkrótce.",
    };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      status: "error",
      message: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
    };
  }
}
