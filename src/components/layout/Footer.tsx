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
        <div className="grid gap-10 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center md:gap-14">
          <div>
            <h2 className="text-2xl font-thin leading-tight tracking-tight md:text-3xl lg:whitespace-nowrap">
              Porozmawiajmy <span className="font-semibold">o wycenie</span>
            </h2>
          </div>

          <ul className="space-y-5">
            {contactItems.map(({ label, value, href }) => (
              <li key={label}>
                <a href={href} className="group flex flex-col">
                  <span className="text-sm font-light text-white/60">{label}</span>
                  <span className="text-lg font-light text-white underline decoration-[#D4B876] decoration-1 underline-offset-[6px] transition-colors duration-300 group-hover:text-[#D4B876]">
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
            className="group relative flex h-40 w-full items-end md:max-w-[28rem] md:justify-self-end overflow-hidden border border-white/10 bg-[#161616] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] p-6 md:h-48"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-[70%] text-[#D4B876]">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="relative flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <span className="text-sm font-light text-white/80">
                {COMPANY.street}, {COMPANY.city}
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4B876]">
                Otwórz w Google Maps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-black px-8 py-5 text-white md:flex-row md:px-16 lg:px-24">
        <span className="text-xs font-light uppercase tracking-[0.3em] text-white/70">
          &copy; {year} TOLEMA nieruchomości · Wszelkie prawa zastrzeżone
        </span>
        <span className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-light uppercase tracking-[0.2em] text-white/70">
          <Link href="/polityka-prywatnosci" className="hover:text-white">
            Polityka prywatności
          </Link>
          <CookieSettingsButton className="uppercase tracking-[0.2em] hover:text-white" />
          <a
            href="https://zmax-dev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Realizacja: zmax-dev
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
