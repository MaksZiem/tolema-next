// Ikony jako zwykłe SVG (ścieżki z Material Icons) — bez zależności od @mui.
const iconClass = "w-5 h-5 shrink-0";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const contactItems = [
  {
    icon: EmailIcon,
    label: "E-mail",
    value: "operat23@gmail.com",
    href: "mailto:operat23@gmail.com",
  },
  {
    icon: LocationOnIcon,
    label: "Adres",
    value: "ul. Zdrojowa 13, 05-600 Grójec",
    href: null,
  },
  {
    icon: PhoneIcon,
    label: "Telefon",
    value: "123 123 123",
    href: "tel:123123123",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer data-navbar="light">
      <div className="bg-[#0d0d0d] px-8 py-14 text-white md:px-16 lg:px-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_0.8fr_1.6fr] md:items-center md:gap-14">
          <div>
            <div className="mb-4 flex items-center gap-5">
              <div className="h-px w-12 shrink-0 bg-[#D4B876]" />
              <span className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876]">
                Kontakt
              </span>
            </div>

            <h2 className="text-2xl font-thin leading-tight tracking-tight md:text-3xl">
              Porozmawiajmy <span className="font-semibold">o wycenie</span>
            </h2>
          </div>

          <ul className="space-y-5">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#D4B876]">
                    <Icon />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                      {label}
                    </span>
                    <span className="text-base font-light text-white">{value}</span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="group flex items-center gap-4">
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="h-40 overflow-hidden rounded-2xl border border-white/10 md:h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.5084175240618!2d20.874692277261758!3d51.86993138415388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719229b69ab742b%3A0xcbe63795a46cfed5!2sZdrojowa%2013%2C%2005-600%20Gr%C3%B3jec!5e0!3m2!1spl!2spl!4v1771795004676!5m2!1spl!2spl"
              className="h-full w-full grayscale invert-[0.92] contrast-[0.9]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 bg-black px-8 py-5 text-white md:flex-row md:px-16 lg:px-24">
        <span className="text-xs font-light uppercase tracking-[0.3em] text-white/70">
          &copy; {year} TOLEMA wyceny
        </span>
        <span className="text-xs font-light uppercase tracking-[0.3em] text-white/40">
          Wszelkie prawa zastrzeżone
        </span>
      </div>
    </footer>
  );
};

export default Footer;
