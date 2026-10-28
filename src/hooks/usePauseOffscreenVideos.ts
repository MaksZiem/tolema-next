"use client";

import { RefObject, useEffect } from "react";

export default function usePauseOffscreenVideos(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const isVisible = () => {
      const rect = root.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return false;
      const next = root.nextElementSibling;
      return !(next && next.getBoundingClientRect().top <= Math.max(rect.top, 0));
    };

    const sync = () => {
      const visible = isVisible();
      root.querySelectorAll("video").forEach((video) => {
        if (visible && video.paused) video.play().catch(() => {});
        if (!visible && !video.paused) video.pause();
      });
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        sync();
      });
    };

    const onPlay = (e: Event) => {
      if (!isVisible()) (e.target as HTMLVideoElement).pause();
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    root.addEventListener("play", onPlay, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      root.removeEventListener("play", onPlay, true);
    };
  }, [ref]);
}
