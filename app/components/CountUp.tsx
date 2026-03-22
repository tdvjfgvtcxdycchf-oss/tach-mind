"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ to, suffix = "", duration = 1200 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
          };
          rafRef.current = requestAnimationFrame(tick);
        } else {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          setValue(0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => { observer.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
