import Link from "next/link";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import { COMPANY } from "@/lib/site";

const contactItems = [
  {
    label: "E-mail",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    label: "Adres",
    value: `${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}`,
    href: COMPANY.mapsUrl,
  },
  {
    label: "Telefon",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer data-navbar="light">
      <div className="bg-[#0d0d0d] px-8 py-14 text-white md:px-16 lg:px-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_0.8fr_1.6fr] md:items-center md:gap-14">
          <div>
            <h2 className="text-2xl font-thin leading-tight tracking-tight md:text-3xl">
              Porozmawiajmy <span className="font-semibold">o wycenie</span>
            </h2>
          </div>

          <ul className="space-y-5">
            {contactItems.map(({ label, value, href }) => (
              <li key={label}>
                <a href={href} className="group flex flex-col">
                  <span className="text-sm font-light text-white/60">{label}</span>
                  <span className="text-lg font-light text-white underline decoration-white/0 underline-offset-4 transition-colors duration-300 group-hover:decoration-[#D4B876]">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Statyczna mapa zamiast iframe Google Maps - iframe przekazywał Google IP i cookies bez zgody.
              Aby pokazać zrzut mapy, dodaj public/mapa.webp i ustaw go jako tło tego linku. */}
          <a
            href={COMPANY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Otwórz mapę dojazdu w Google Maps: ${COMPANY.street}, ${COMPANY.city} (nowa karta)`}
            className="group flex flex-col gap-6 border-t border-white/15 pt-6 md:border-t-0 md:border-l md:pl-14 md:pt-0"
          >
            <span className="flex flex-col">
              <span className="text-sm font-light text-white/60">Dojazd</span>
              <span className="mt-1 text-2xl font-thin leading-snug text-white md:text-3xl">
                {COMPANY.street}
                <br />
                {COMPANY.postalCode} {COMPANY.city}
              </span>
            </span>
            <span className="inline-flex items-center gap-3 text-sm font-light text-[#D4B876]">
              Otwórz w Google Maps
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-black px-8 py-5 text-white md:flex-row md:px-16 lg:px-24">
        <span className="text-xs font-light uppercase tracking-[0.3em] text-white/70">
          &copy; {year} TOLEMA wyceny · Wszelkie prawa zastrzeżone
        </span>
        <span className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-light uppercase tracking-[0.2em] text-white/70">
          <Link href="/polityka-prywatnosci" className="hover:text-white">
            Polityka prywatności
          </Link>
          <CookieSettingsButton className="uppercase tracking-[0.2em] hover:text-white" />
        </span>
      </div>

      <div className="bg-black px-8 pb-6 text-center text-[11px] font-light leading-relaxed text-white/60 md:px-16 md:text-left lg:px-24">
        {COMPANY.name}, {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city} · {COMPANY.court} · KRS{" "}
        {COMPANY.krs} · NIP {COMPANY.nip} · REGON {COMPANY.regon} · Kapitał zakładowy {COMPANY.shareCapital}
      </div>
    </footer>
  );
};

export default Footer;
