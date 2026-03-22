"use client";

const NavItem = ({ label, active }: { label: string; active?: boolean }) => (
  <div
    className={`flex items-center gap-2 px-2 py-1.5 rounded text-[9px] font-medium transition-colors ${
      active ? "bg-[#F53031]/15 text-[#F53031]" : "text-gray-600"
    }`}
  >
    <span className="w-1 h-1 rounded-full bg-current shrink-0" />
    {label}
  </div>
);

const KpiCard = ({
  label,
  value,
  color,
  dot,
}: {
  label: string;
  value: string;
  color: string;
  dot?: string;
}) => (
  <div className="flex flex-col gap-1 border border-white/8 rounded-md px-2.5 py-2 bg-white/[0.02] flex-1 min-w-0">
    <span className="text-[8px] text-gray-600 truncate">{label}</span>
    <div className="flex items-center gap-1.5">
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: dot }}
        />
      )}
      <span className="text-xs font-bold truncate" style={{ color }}>
        {value}
      </span>
    </div>
  </div>
);

// Sparkline SVG for sessions chart (7 days)
const SessionSparkline = () => {
  const points = [38, 52, 47, 71, 65, 89, 82];
  const max = 100;
  const w = 220;
  const h = 48;
  const pad = 4;

  const pts = points.map((v, i) => {
    const x = pad + (i / (points.length - 1)) * (w - pad * 2);
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${x},${y}`;
  });

  const linePath = `M ${pts.join(" L ")}`;
  const areaPath = `M ${pts[0]} L ${pts.join(" L ")} L ${
    pad + (w - pad * 2)
  },${h} L ${pad},${h} Z`;

  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F53031" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F53031" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sg)" />
      <path d={linePath} fill="none" stroke="#F53031" strokeWidth="1.5" strokeLinejoin="round" />
      {points.map((v, i) => {
        const x = pad + (i / (points.length - 1)) * (w - pad * 2);
        const y = h - pad - (v / max) * (h - pad * 2);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === points.length - 1 ? 2.5 : 0}
            fill="#F53031"
          />
        );
      })}
    </svg>
  );
};

// Mini bar for traffic source
const SourceBar = ({ label, pct, value }: { label: string; pct: number; value: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-[9px] text-gray-500 w-14 shrink-0 truncate">{label}</span>
    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-[#F53031]/70"
        style={{ width: `${pct}%` }}
      />
    </div>
    <span className="text-[9px] text-gray-400 w-7 text-right shrink-0">{value}</span>
  </div>
);

export default function DashboardShowcase() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Section header */}
      <div className="flex flex-col gap-3 max-w-lg">
        <span className="text-[#F53031] font-bold tracking-widest uppercase text-xs">
          Клиентский дашборд
        </span>
        <h2 className="text-xl font-bold text-white leading-snug">
          Ваш проект под контролем{" "}
          <span className="text-[#F53031]">24/7</span>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Каждому клиенту мы открываем персональный дашборд — SSL, состояние
          сервера, трафик и аномалии в реальном времени. Никаких запросов
          «что там с сайтом»: всё видно самому.
        </p>
      </div>

      {/* Browser mockup */}
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
        {/* Browser chrome */}
        <div className="bg-[#0d1424] border-b border-white/5 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <a
            href="https://dashboard-tech-mind.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 mx-3 bg-white/5 hover:bg-white/10 rounded text-[9px] text-gray-400 hover:text-white px-2.5 py-1 font-mono transition-colors cursor-pointer"
          >
            dashboard-tech-mind.ru
          </a>
        </div>

        {/* App content */}
        <div className="bg-[#060d1f] flex" style={{ minHeight: 240 }}>
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col gap-1 border-r border-white/5 px-2 py-3 bg-[#04091a]" style={{ width: 96 }}>
            <div className="px-2 mb-2">
              <span className="text-[10px] font-bold text-white tracking-tight">TechMind</span>
            </div>
            <NavItem label="Обзор" active />
            <NavItem label="Аналитика" />
            <NavItem label="ИИ-анализ" />
            <NavItem label="Отчёты" />
            <NavItem label="Настройки" />
          </div>

          {/* Main */}
          <div className="flex-1 p-3 flex flex-col gap-3 min-w-0">
            {/* Greeting */}
            <div>
              <p className="text-[11px] font-bold text-white">
                Добро пожаловать,{" "}
                <span className="text-[#F53031]">Иван</span>
              </p>
              <p className="text-[9px] text-gray-600 mt-0.5">
                Мониторинг сайта example-client.ru
              </p>
            </div>

            {/* KPI row */}
            <div className="flex gap-2">
              <KpiCard label="SSL" value="Активен" color="#34d399" dot="#34d399" />
              <KpiCard label="Домен" value="Активен" color="#34d399" dot="#34d399" />
              <KpiCard label="Баланс" value="∞ дней" color="#fbbf24" dot="#fbbf24" />
              <KpiCard label="Сервер" value="CPU 12%" color="#a3e635" dot="#a3e635" />
            </div>

            {/* Sessions chart */}
            <div className="border border-white/5 rounded-md p-2.5 bg-white/[0.015]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-semibold text-gray-400">Сессии за 7 дней</span>
                <span className="text-[9px] font-bold text-white">+18%</span>
              </div>
              <SessionSparkline />
              <div className="flex justify-between mt-1">
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
                  <span key={d} className="text-[7px] text-gray-700">{d}</span>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex gap-3">
              {/* Traffic sources */}
              <div className="flex-1 border border-white/5 rounded-md p-2.5 bg-white/[0.015] flex flex-col gap-1.5 min-w-0">
                <span className="text-[9px] font-semibold text-gray-400 mb-0.5">
                  Источники трафика
                </span>
                <SourceBar label="Google" pct={64} value="64%" />
                <SourceBar label="Соцсети" pct={20} value="20%" />
                <SourceBar label="Прямые" pct={11} value="11%" />
                <SourceBar label="Прочие" pct={5} value="5%" />
              </div>

              {/* Top pages */}
              <div className="flex-1 border border-white/5 rounded-md p-2.5 bg-white/[0.015] flex flex-col gap-1 min-w-0">
                <span className="text-[9px] font-semibold text-gray-400 mb-0.5">
                  Топ страниц
                </span>
                {[
                  ["/главная", "320"],
                  ["/услуги", "180"],
                  ["/контакты", "95"],
                  ["/блог", "61"],
                ].map(([page, cnt]) => (
                  <div key={page} className="flex items-center justify-between gap-2">
                    <span className="text-[9px] text-gray-500 truncate">{page}</span>
                    <span className="text-[9px] font-semibold text-gray-300 shrink-0">{cnt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value props under mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          {
            title: "SSL и домен",
            text: "Мониторим сертификат и срок домена — предупредим до истечения.",
          },
          {
            title: "Трафик в реальном времени",
            text: "Сессии, источники, конверсионная воронка — всё в одном экране.",
          },
          {
            title: "ИИ-аномалии",
            text: "Система сама замечает подозрительные скачки и сбои и сигнализирует.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-1.5 border border-white/8 rounded-lg px-4 py-3.5 bg-white/[0.02]"
          >
            <p className="text-xs font-semibold text-white">{item.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
