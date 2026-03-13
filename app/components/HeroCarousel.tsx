"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/shot-veinyard.png",
    objectPos: "object-top",
    label: "Маркетплейс",
    title: "Veinyard",
    desc: "Маркетплейс Roblox-ассетов: 3D-модели, скрипты и текстуры от топовых создателей для разработчиков игр.",
  },
  {
    src: "/shot-vki.png",
    objectPos: "object-top",
    label: "Веб-приложение",
    title: "VKI Plus",
    desc: "Расписание, оценки и пропуски — всё в одном месте. Удобно, быстро, без лишнего.",
  },
  {
    src: "/shot-avismedicine.png",
    objectPos: "object-bottom",
    label: "Telegram-бот",
    title: "АвисМед",
    desc: "Запись в клинику, прайс, рассрочка и спецпредложения — прямо в Telegram, без звонков.",
  },
  {
    src: "/shot-transfats.jpg",
    objectPos: "object-center",
    label: "ИИ-сервис",
    title: "Трансжиры.рф",
    desc: "Сфотографируй состав продукта — ИИ мгновенно выделит опасные трансжиры и маргарины.",
  },
];

const AUTOPLAY_MS = 3500;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), []);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[active];

  return (
    <div
      className="relative rounded overflow-hidden border border-white/10 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/2]">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.title}
          fill
          className={`object-cover ${slide.objectPos} transition-opacity duration-500`}
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020515] via-[#020515]/30 to-transparent" />
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#F53031]">
          {slide.label}
        </span>
        <p className="text-sm font-bold text-white mt-0.5">{slide.title}</p>
        <p className="text-xs text-gray-400 leading-relaxed mt-1">{slide.desc}</p>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Предыдущий"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-black/30 hover:bg-black/50 rounded-full w-7 h-7 flex items-center justify-center text-lg leading-none transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Следующий"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-black/30 hover:bg-black/50 rounded-full w-7 h-7 flex items-center justify-center text-lg leading-none transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute top-3 right-3 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`rounded-full transition-all ${
              i === active
                ? "w-4 h-1.5 bg-[#F53031]"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
