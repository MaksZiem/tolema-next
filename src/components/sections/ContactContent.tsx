"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import ActionButton from "@/components/ui/ActionButton";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { faqs } from "@/data/faq";

const topics = [
  "Wycena nieruchomości",
  "Wycena maszyn i urządzeń",
  "Wycena przedsiębiorstwa",
  "Kosztorys / szacowanie szkód",
  "Inne",
];

const contactSteps = [
  {
    title: "Piszesz",
    text: "Opisujesz krótko przedmiot i cel wyceny.",
  },
  {
    title: "Odpowiadamy",
    text: "Otrzymujesz zakres prac i wycenę kosztu, zwykle w ciągu 24 godzin.",
  },
  {
    title: "Ustalamy termin",
    text: "Umawiamy oględziny i realizujemy zlecenie.",
  },
];

// ── Form ──────────────────────────────────────────────────────────────

const initialState: ContactFormState = { status: "idle", message: "" };

function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const inputClass =
    "w-full border-b border-black/15 bg-transparent py-3 text-black placeholder:text-black/45 focus:border-[#D4B876] focus:outline-none transition-colors duration-300 font-light";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
      {/* Honeypot - ukryte przed użytkownikiem, wyłapuje boty */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/60">
            Imię i nazwisko *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Jan Kowalski" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/60">
            E-mail *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jan@przyklad.pl" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/60">
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="123 123 123" />
        </div>
        <div>
          <label htmlFor="topic" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/60">
            Temat
          </label>
          <select id="topic" name="topic" defaultValue="" className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>
              Wybierz temat
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/60">
          Wiadomość *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Opisz krótko przedmiot i cel wyceny…"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <ActionButton type="submit" variant="reverse" disabled={pending} arrow={false} className="self-start">
          {pending ? "Wysyłanie…" : "Wyślij wiadomość"}
        </ActionButton>

        {state.status !== "idle" && (
          <p
            role="status"
            className={`text-sm font-light ${
              state.status === "success" ? "text-[#8a7233]" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>

      <p className="text-xs font-light leading-relaxed text-black/60">
        Administratorem danych podanych w formularzu jest TOLEMA NIERUCHOMOŚCI sp. z o.o. Dane
        przetwarzamy, aby odpowiedzieć na Twoje zapytanie. Więcej, w tym o Twoich prawach:{" "}
        <Link href="/polityka-prywatnosci" className="underline underline-offset-2">
          Polityka prywatności
        </Link>
        .
      </p>
    </form>
  );
}

// ── FAQ item ─────────────────────────────────────────────────────────

function FaqItem({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
      viewport={{ once: true }}
      className="border-b border-black/10"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start gap-4 py-6 text-left cursor-pointer"
      >
        <span className="flex-1 text-lg font-light text-black transition-colors duration-300 group-hover:text-black/70 md:text-xl">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-1.5 shrink-0 text-[#D4B876]"
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
            <path d="M12 4v16M4 12h16" />
          </svg>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="max-w-2xl pb-6 text-base font-light leading-relaxed text-black/60">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ── ContactContent ───────────────────────────────────────────────────

export default function ContactContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative bg-white px-8 pt-40 pb-24 text-black md:px-16 md:pt-44 lg:px-24"
        data-navbar="dark"
      >
        <div className="mx-auto max-w-[1000px]">
          <motion.h1
            className="max-w-2xl text-4xl font-thin leading-[1.05] tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Zadaj nam <span className="font-semibold">pytanie dotyczące wyceny</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-black/65"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Opisz w kilku zdaniach swoją sprawę - odpowiemy z propozycją
            zakresu prac i kosztu wyceny. Można też zadzwonić lub napisać
            bezpośrednio na e-mail.
          </motion.p>
        </div>
      </section>

      {/* ── Form + quick info ───────────────────────────────── */}
      <section
        className="relative bg-white px-8 pb-28 text-black md:px-16 lg:px-24"
        data-navbar="dark"
      >
        <div className="mx-auto grid max-w-[1000px] gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="border-t border-black/15 pt-8 text-black lg:border-t-0 lg:border-l lg:pl-10 lg:pt-1"
          >
            <h2 className="text-2xl font-thin tracking-tight">Jak to wygląda</h2>

            <ol className="mt-8 space-y-6">
              {contactSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="shrink-0 text-base font-light tabular-nums text-[#8a7233] w-4">
                    {i + 1}.
                  </span>
                  <span className="flex flex-col">
                    <span className="text-base font-normal text-black">{step.title}</span>
                    <span className="text-sm font-light leading-relaxed text-black/65">
                      {step.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <dl className="mt-10 border-t border-black/10 pt-8">
              <dt className="text-sm font-light text-black/60">Godziny pracy</dt>
              <dd className="mt-1 text-lg font-light tabular-nums text-black">Pon–Pt, 8:00–16:00</dd>
            </dl>

            <p className="mt-6 text-sm font-light leading-relaxed text-black/60">
              Pełne dane kontaktowe - e-mail, telefon i adres - znajdziesz w
              stopce poniżej.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section
        className="relative bg-[#fafaf8] px-8 py-28 text-black md:px-16 lg:px-24"
        data-navbar="dark"
      >
        <div className="mx-auto max-w-[860px]">
          <motion.h2
            className="max-w-xl text-3xl font-thin tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Najczęściej <span className="font-semibold">zadawane pytania</span>
          </motion.h2>

          <div className="mt-12 border-t border-black/10">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                index={i}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
