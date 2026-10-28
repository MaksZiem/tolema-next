"use client";

import { RefObject, useEffect } from "react";

export default function usePauseOffscreenVideos(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const observer = new IntersectionObserver(([entry]) => {
      root.querySelectorAll("video").forEach((video) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    });

    observer.observe(root);
    return () => observer.disconnect();
  }, [ref]);
}
