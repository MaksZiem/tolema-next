"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { faqs } from "@/data/faq";

// ── Icons (spójne z Footer) ──────────────────────────────────────────

const iconClass = "w-5 h-5 shrink-0";

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

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
    title: "Odpowiadam",
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
    "w-full border-b border-black/15 bg-transparent py-3 text-black placeholder:text-black/35 focus:border-[#D4B876] focus:outline-none transition-colors duration-300 font-light";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
      {/* Honeypot — ukryte przed użytkownikiem, wyłapuje boty */}
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
          <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Imię i nazwisko *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Jan Kowalski" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            E-mail *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jan@przyklad.pl" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="123 123 123" />
        </div>
        <div>
          <label htmlFor="topic" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/40">
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
        <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-black/40">
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
        <button
          type="submit"
          disabled={pending}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-black/40 px-8 py-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 self-start"
        >
          <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-out group-hover:translate-x-0" />
          <span className="relative z-10 flex items-center gap-3 text-black transition-colors duration-300 group-hover:text-white">
            <span className="text-lg font-light uppercase tracking-[0.18em]">
              {pending ? "Wysyłanie…" : "Wyślij wiadomość"}
            </span>
          </span>
        </button>

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
        <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-[#D4B876] w-6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-lg font-light text-black transition-colors duration-300 group-hover:text-black/70 md:text-xl">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-1 shrink-0 text-2xl font-thin text-[#D4B876]"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="max-w-2xl pb-6 pl-10 text-base font-light leading-relaxed text-black/60">
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
          <motion.div
            className="mb-6 flex items-center gap-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-12 shrink-0 bg-[#D4B876]" />
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876]">
              Kontakt
            </span>
          </motion.div>

          <motion.h1
            className="max-w-2xl text-4xl font-thin leading-[1.05] tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Porozmawiajmy <span className="font-semibold">o wycenie</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-black/65"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Opisz w kilku zdaniach swoją sprawę — odpowiem z propozycją
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
            className="rounded-2xl bg-[#e8e8e8] px-8 py-10 text-black"
          >
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-black/50">
              Jak to wygląda
            </span>

            <ol className="mt-8 space-y-6">
              {contactSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-xs font-medium tabular-nums text-[#D4B876] w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-base font-normal text-black">{step.title}</span>
                    <span className="text-sm font-light leading-relaxed text-black/55">
                      {step.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-black/60">
                <ClockIcon />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
                  Godziny pracy
                </span>
                <span className="text-base font-light text-black">Pon–Pt, 8:00–16:00</span>
              </span>
            </div>

            <p className="mt-6 text-sm font-light leading-relaxed text-black/50">
              Pełne dane kontaktowe — e-mail, telefon i adres — znajdziesz w
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
          <motion.div
            className="mb-6 flex items-center gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 shrink-0 bg-[#D4B876]" />
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876]">
              FAQ
            </span>
          </motion.div>

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
