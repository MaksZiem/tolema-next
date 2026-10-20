import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import { COMPANY, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności | TOLEMA – Rzeczoznawca majątkowy",
  description:
    "Informacje o przetwarzaniu danych osobowych i plikach cookies na stronie TOLEMA wyceny.",
  alternates: {
    canonical: `${SITE_URL}/polityka-prywatnosci`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "21 października 2026 r.";

const h2 = "mt-14 mb-4 text-2xl font-thin tracking-tight md:text-3xl";
const p = "mb-4 text-base font-light leading-relaxed text-black/75";
const table = "my-6 w-full border-collapse text-left text-sm font-light";
const th = "border-b border-black/20 py-3 pr-4 align-top font-medium text-black";
const td = "border-b border-black/10 py-3 pr-4 align-top text-black/75";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section
        className="relative bg-white px-8 pt-40 pb-28 text-black md:px-16 md:pt-44 lg:px-24"
        data-navbar="dark"
      >
        <div className="mx-auto max-w-[860px]">
          <h1 className="text-4xl font-thin leading-[1.05] tracking-tight md:text-5xl">
            Polityka <span className="font-semibold">prywatności</span>
          </h1>
          <p className="mt-4 text-sm font-light text-black/60">
            Ostatnia aktualizacja: {LAST_UPDATED}
          </p>

          <h2 className={h2}>1. Administrator danych</h2>
          <p className={p}>
            Administratorem Twoich danych osobowych jest <strong className="font-medium">{COMPANY.name}</strong>{" "}
            z siedzibą w {COMPANY.city}, {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}, wpisana do
            rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez {COMPANY.court} pod
            numerem KRS {COMPANY.krs}, NIP {COMPANY.nip}, REGON {COMPANY.regon}, kapitał zakładowy{" "}
            {COMPANY.shareCapital}.
          </p>
          <p className={p}>
            W sprawach danych osobowych możesz kontaktować się z nami pod adresem e-mail{" "}
            <a href={`mailto:${COMPANY.email}`} className="underline underline-offset-2">
              {COMPANY.email}
            </a>
            , telefonicznie: <a href={COMPANY.phoneHref} className="underline underline-offset-2">{COMPANY.phone}</a>,
            lub pisemnie na adres siedziby.
          </p>

          <h2 className={h2}>2. Jakie dane, w jakim celu i na jakiej podstawie</h2>
          <div className="overflow-x-auto">
            <table className={table}>
              <thead>
                <tr>
                  <th className={th}>Sytuacja</th>
                  <th className={th}>Dane</th>
                  <th className={th}>Cel i podstawa prawna</th>
                  <th className={th}>Jak długo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>Formularz kontaktowy, e-mail, telefon</td>
                  <td className={td}>imię i nazwisko, e-mail, telefon (opcjonalnie), treść wiadomości</td>
                  <td className={td}>
                    odpowiedź na zapytanie i przygotowanie oferty — art. 6 ust. 1 lit. b RODO (działania przed
                    zawarciem umowy na Twoje żądanie) oraz lit. f RODO (prawnie uzasadniony interes:
                    prowadzenie korespondencji)
                  </td>
                  <td className={td}>12 miesięcy od ostatniego kontaktu, jeśli nie dojdzie do zlecenia</td>
                </tr>
                <tr>
                  <td className={td}>Realizacja zlecenia</td>
                  <td className={td}>dane z umowy i dokumentacji wyceny</td>
                  <td className={td}>
                    wykonanie umowy, rozliczenia oraz obowiązki podatkowe i zawodowe — art. 6 ust. 1 lit. b i
                    lit. c RODO
                  </td>
                  <td className={td}>
                    przez okres wymagany przepisami podatkowymi (5 lat od końca roku podatkowego) i przepisami
                    dotyczącymi zawodu rzeczoznawcy majątkowego, a także do upływu terminu przedawnienia
                    roszczeń
                  </td>
                </tr>
                <tr>
                  <td className={td}>Statystyki strony (Google Analytics)</td>
                  <td className={td}>
                    dane o urządzeniu i przeglądarce, przybliżona lokalizacja, odwiedzone podstrony,
                    identyfikatory cookies
                  </td>
                  <td className={td}>analiza ruchu na stronie — art. 6 ust. 1 lit. a RODO (Twoja zgoda)</td>
                  <td className={td}>2 miesiące</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            Podanie danych w formularzu jest dobrowolne, ale bez imienia, adresu e-mail i treści wiadomości
            nie będziemy mogli odpowiedzieć. Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na
            zautomatyzowanym przetwarzaniu, w tym profilowaniu.
          </p>

          <h2 className={h2}>3. Odbiorcy danych</h2>
          <p className={p}>Twoje dane mogą być przekazywane podmiotom, które świadczą dla nas usługi:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base font-light leading-relaxed text-black/75">
            <li>Vercel Inc. (USA) — hosting strony,</li>
            <li>Resend (USA) — wysyłka wiadomości z formularza kontaktowego,</li>
            <li>
              Google (Google Ireland Ltd. / Google LLC) — poczta e-mail oraz, po wyrażeniu zgody, Google
              Analytics,
            </li>
            <li>biuro rachunkowe i podmioty świadczące obsługę prawną — w zakresie niezbędnym przy zleceniach.</li>
          </ul>

          <h2 className={h2}>4. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
          <p className={p}>
            Część dostawców ma siedzibę w USA. Przekazanie danych odbywa się na podstawie decyzji Komisji
            Europejskiej z 10 lipca 2023 r. w sprawie ram ochrony danych UE–USA (EU-US Data Privacy
            Framework) — w zakresie, w jakim dostawca do nich przystąpił — a w pozostałym zakresie na
            podstawie standardowych klauzul umownych zatwierdzonych przez Komisję (art. 46 ust. 2 lit. c
            RODO).
          </p>

          <h2 className={h2}>5. Twoje prawa</h2>
          <p className={p}>Masz prawo do:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-base font-light leading-relaxed text-black/75">
            <li>dostępu do swoich danych i otrzymania ich kopii,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
            <li>
              wycofania zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania przed jej
              wycofaniem.
            </li>
          </ul>
          <p className={p}>
            Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193
            Warszawa).
          </p>

          <h2 className={h2}>6. Pliki cookies</h2>
          <p className={p}>Strona używa plików cookies i podobnych technologii w następującym zakresie:</p>
          <div className="overflow-x-auto">
            <table className={table}>
              <thead>
                <tr>
                  <th className={th}>Nazwa</th>
                  <th className={th}>Dostawca</th>
                  <th className={th}>Cel</th>
                  <th className={th}>Czas</th>
                  <th className={th}>Zgoda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>tolema-consent (localStorage)</td>
                  <td className={td}>ta strona</td>
                  <td className={td}>zapamiętanie Twojej decyzji w sprawie cookies</td>
                  <td className={td}>12 miesięcy</td>
                  <td className={td}>nie (niezbędne)</td>
                </tr>
                <tr>
                  <td className={td}>_ga, _ga_&lt;ID&gt;</td>
                  <td className={td}>Google Analytics</td>
                  <td className={td}>rozróżnianie użytkowników i sesji na potrzeby statystyk</td>
                  <td className={td}>do 2 lat</td>
                  <td className={td}>tak</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            Cookies Google Analytics są zapisywane dopiero po kliknięciu „Akceptuję” w banerze. Swoją decyzję
            możesz zmienić w każdej chwili:{" "}
            <CookieSettingsButton className="underline underline-offset-2" />. Możesz też blokować cookies w
            ustawieniach przeglądarki.
          </p>

          <h2 className={h2}>7. Zmiany polityki</h2>
          <p className={p}>
            O zmianach informujemy przez publikację nowej wersji na tej stronie, z nową datą aktualizacji.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
