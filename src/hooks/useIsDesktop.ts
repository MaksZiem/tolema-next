"use client";

import { useEffect, useLayoutEffect, useState } from "react";

// useLayoutEffect ustawia poprawną wartość synchronicznie, zanim przeglądarka
// zdąży namalować pierwszą (domyślną, mobilną) klatkę po hydracji - to eliminuje
// widoczne "mignięcie" zdjęcia zamiast wideo na desktopie. Na serwerze nie ma
// przeglądarki/paintu, więc tam bez zmian używamy zwykłego useEffect.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useIsDesktop(breakpoint = 1600) {
  const [isDesktop, setIsDesktop] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const query = window.matchMedia(`(min-width: ${breakpoint}px)`);
    setIsDesktop(query.matches);

    const update = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [breakpoint]);

  return isDesktop;
}
