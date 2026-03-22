"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      "[data-animate], [data-stagger], [data-blur], [data-line]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
