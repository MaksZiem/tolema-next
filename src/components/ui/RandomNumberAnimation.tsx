"use client";

import { useEffect, useState } from "react";

function RandomNumberAnimation({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayed(value);
        clearInterval(interval);
      } else {
        setDisplayed(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{displayed}</span>;
}

export default RandomNumberAnimation;