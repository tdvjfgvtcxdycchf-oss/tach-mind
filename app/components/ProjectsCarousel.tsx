"use client";

import { useState } from "react";

const TelegramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

type ProjectLink = { type: "telegram" | "web" | "github"; href: string; label: string };

type Project = {
  category: string;
  title: string;
  emoji: string;
  description: string;
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    category: "Маркетплейс",
    title: "Veinyard",
    emoji: "🎮",
    description:
      "Маркетплейс для Roblox-сообщества: 3D-модели, текстуры, скрипты и игровые ресурсы — от создателей для разработчиков по всему миру.",
    links: [{ type: "web", href: "https://veinyard.com/", label: "veinyard.com" }],
  },
  {
    category: "Веб-приложение",
    title: "VKI — Расписание и Оценки",
    emoji: "📅",
    description:
      "Удобное веб-приложение для студентов колледжа: расписание занятий и успеваемость в одном месте — без лишнего, только нужное.",
    links: [{ type: "web", href: "https://vki.xellu.xyz/", label: "vki.xellu.xyz" }],
  },
  {
    category: "Telegram-бот",
    title: "Чат-бот для медицинского центра",
    emoji: "🏥",
    description:
      "Автоматизация клиники пластической хирургии АвисМед: запись пациентов, прайс, рассрочка, специальные предложения и связь с менеджером — прямо в Telegram.",
    links: [{ type: "telegram", href: "https://t.me/avismedicine_bot", label: "@avismedicine_bot" }],
  },
  {
    category: "Сайт + Telegram-бот",
    title: "Анализ состава продуктов на трансжиры",
    emoji: "🔬",
    description:
      "Сервис для автоматического выявления трансжиров в составе продукта питания. Достаточно загрузить фото состава — система определит опасные ингредиенты.",
    links: [
      { type: "web", href: "http://трансжиры.рф", label: "трансжиры.рф" },
      { type: "telegram", href: "https://t.me/transfats_bot", label: "@transfats_bot" },
    ],
  },
  {
    category: "Десктоп-приложение",
    title: "Helinstaller",
    emoji: "🪟",
    description:
      "Предустановщик Windows: автоматически настраивает систему после чистой установки — нужные программы, драйверы и параметры за один запуск.",
    links: [{ type: "github", href: "https://github.com/Helitop/Helinstaller", label: "Helitop/Helinstaller" }],
  },
  {
    category: "Передача файлов",
    title: "HeliShare",
    emoji: "📤",
    description:
      "Инструмент для быстрой передачи файлов между устройствами — без облаков, без регистрации, напрямую по сети.",
    links: [{ type: "github", href: "https://github.com/Helitop/HeliShare", label: "Helitop/HeliShare" }],
  },
];

export default function ProjectsCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setActive((i) => (i + 1) % projects.length);

  const project = projects[active];

  return (
    <div className="flex flex-col gap-6">
      {/* Featured card */}
      <div className="relative flex flex-col gap-5 border border-[#F53031]/25 rounded-lg p-8 bg-white/[0.03] min-h-[220px]">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Предыдущий проект"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors text-3xl leading-none px-1 select-none"
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Следующий проект"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors text-3xl leading-none px-1 select-none"
        >
          ›
        </button>

        <div className="flex items-start justify-between gap-3 px-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#F53031]">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white leading-snug">{project.title}</h3>
          </div>
          <span className="text-3xl shrink-0">{project.emoji}</span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed px-8">{project.description}</p>

        <div className="flex items-center gap-4 px-8 mt-auto">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.type === "telegram" && <TelegramIcon />}
              {link.type === "web" && <LinkIcon />}
              {link.type === "github" && <GithubIcon />}
              {link.label}
            </a>
          ))}
          <span className="ml-auto text-[11px] text-gray-700 font-mono">
            {active + 1} / {projects.length}
          </span>
        </div>
      </div>

      {/* Thumbnail nav */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-lg border transition-all ${
              i === active
                ? "border-[#F53031]/40 bg-[#F53031]/8 text-white"
                : "border-white/5 text-gray-600 hover:text-gray-400 hover:border-white/10"
            }`}
          >
            <span className="text-lg">{p.emoji}</span>
            <span className="text-[9px] font-medium leading-tight text-center line-clamp-2">{p.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
