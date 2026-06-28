// Ikony jako zwykłe SVG (ścieżki z Material Icons) — bez zależności od @mui.
const iconClass = "w-6 h-6 shrink-0";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" className={iconClass} aria-hidden="true">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" className={iconClass} aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" className={iconClass} aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const Footer = () => {
  return (
    <>
      <div className="h-80 flex flex-row relative bg-gradient-to-r from-gray-200 via-gray-100 to-[#e8e6e6]">
        <div className="w-1/3">
          <div className="pl-5 pt-5 pr-1 pb-5 h-full">
            <div className="h-full border-r border-r-[2px] border-black flex flex-col">
              <h1 className="text-center text-3xl">Kontakt</h1>
              <div className="h-full flex flex-col justify-evenly">
                <div className="ml-5 text-2xl p-2 flex text-gray-600 items-center gap-3">
                  <EmailIcon />
                  [ e-mail: operat23@gmail.com ]
                </div>
                <div className="ml-5 text-2xl p-2 flex text-gray-600 items-center gap-3">
                  <LocationOnIcon />
                  [ adres: ul. Zdrojowa 13, 05-600 Grójec ]
                </div>
                <div className="ml-5 text-2xl p-2 flex text-gray-600 items-center gap-3">
                  <PhoneIcon />
                  [ telefon: 123 123 123 ]
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="h-full p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.5084175240618!2d20.874692277261758!3d51.86993138415388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719229b69ab742b%3A0xcbe63795a46cfed5!2sZdrojowa%2013%2C%2005-600%20Gr%C3%B3jec!5e0!3m2!1spl!2spl!4v1771795004676!5m2!1spl!2spl"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="h-8 bg-black text-white flex flex-col w-full text-center justify-center text-sm">
        &copy; TOLEMA
      </div>
    </>
  );
};

export default Footer;