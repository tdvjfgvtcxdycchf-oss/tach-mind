import Image from "next/image";
import FooterContacts from "./components/FooterContacts";
import ProjectsCarousel from "./components/ProjectsCarousel";
import HeroCarousel from "./components/HeroCarousel";
import DashboardShowcase from "./components/DashboardShowcase";
import ScrollAnimator from "./components/ScrollAnimator";
import CountUp from "./components/CountUp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020515] text-white">
      <ScrollAnimator />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#020515]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
          <Image src="/logo.png" alt="Tech Mind" width={100} height={24} priority />
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#about" className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors">
              О Нас
            </a>
            <a href="#projects" className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors">
              Проекты
            </a>
            <a
              href="#contact"
              className="btn-contact text-sm px-4 py-1.5 rounded flex items-center gap-2"
            >
              <span className="online-dot" />
              <span>Связаться</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-8 md:pt-12 pb-14 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col gap-5 md:gap-6">
          <span data-animate className="text-[#F53031] font-bold tracking-widest uppercase text-xs">
            Tech Mind
          </span>
          <h1 data-blur className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Перестаньте объяснять разработчикам что нужно бизнесу —{" "}
            <span className="text-[#F53031] underline decoration-[#F53031] underline-offset-4">
              мы уже знаем.
            </span>
          </h1>
          <p data-animate className="text-gray-400 text-sm leading-relaxed" style={{ transitionDelay: "150ms" }}>
            Сайты, мобильные приложения и ИИ-автоматизация под ключ.
            Вы даёте задачу — мы строим работающий продукт. Без долгих брифингов
            и потерянных ТЗ.
          </p>

          {/* CTA */}
          <div data-animate className="flex flex-col gap-3 mt-1" style={{ transitionDelay: "250ms" }}>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#contact"
                className="bg-[#F53031] hover:bg-[#d42829] text-white text-sm font-medium px-5 md:px-6 py-2.5 rounded transition-colors"
              >
                Получить консультацию
              </a>
              <a
                href="#projects"
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white text-sm font-medium px-5 md:px-6 py-2.5 rounded transition-colors"
              >
                Наши проекты
              </a>
            </div>
            <p className="text-xs text-gray-600">
              Бесплатно · Ответим за 30 минут · Берём 2–3 проекта в месяц
            </p>
          </div>
        </div>

        {/* Hero carousel */}
        <div data-animate style={{ transitionDelay: "100ms" }}>
          <HeroCarousel />
        </div>
      </section>

      {/* Red divider */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div data-line className="h-px bg-[#F53031]" />
      </div>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-4 md:px-8 pt-14 md:pt-32 pb-14 md:pb-20 relative overflow-hidden">
        {/* О НАС watermark */}
        <span
          className="hidden md:flex absolute left-0 top-0 bottom-16 items-center text-[#0a1530] font-black select-none pointer-events-none"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "5.5rem",
            letterSpacing: "0.15em",
            lineHeight: 1,
          }}
        >
          О НАС
        </span>

        <div className="md:ml-20 flex flex-col gap-8 md:gap-10">
          {/* Section counter */}
          <div data-animate className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs font-mono">1 / 2</span>
          </div>

          {/* Description */}
          <div data-animate className="flex flex-col gap-3 max-w-lg">
            <h2 className="text-xl font-bold text-white">Кто мы такие?</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Команда инженеров из Новосибирска (Академгородок). Строим
              продукты, которые решают реальные задачи бизнеса и уже работают
              в production — от маркетплейсов до медицинской автоматизации.
            </p>
          </div>

          {/* Principles */}
          <h3 data-animate className="text-base font-semibold text-white">
            Что вы получаете{" "}
            <span className="text-gray-500 font-normal">— конкретно</span>
          </h3>

          {/* Feature grid */}
          <div data-stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "🔒",
                title: "Продукт, а не код-на-выброс",
                text: "Архитектура под ваш рост: безопасность, масштабируемость и документация — в комплекте.",
              },
              {
                emoji: "📱",
                title: "Веб + мобайл + десктоп",
                text: "Один стек — три платформы. Единая бизнес-логика, нет дублирования, меньше расходов на поддержку.",
              },
              {
                emoji: "💬",
                title: "Разработчик = ваш менеджер",
                text: "Никаких менеджеров-посредников. Задачи — напрямую команде. Правки — за часы, не за недели.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-3 border border-white/10 rounded-lg p-5 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{card.emoji}</span>
                <h4 className="text-sm font-semibold text-white leading-snug">{card.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            <h3 data-animate className="text-base font-semibold text-white">В цифрах</h3>
            <div data-stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  count: 3,
                  suffix: "+",
                  label: "Лет в разработке",
                  sub: "Веб, мобайл и десктоп-решения для реального бизнеса",
                },
                {
                  count: 6,
                  suffix: "+",
                  label: "Проектов в production",
                  sub: "Маркетплейсы, медицина, ИИ-сервисы, автоматизация",
                },
                {
                  count: 0,
                  suffix: "",
                  label: "Провальных запусков",
                  sub: "Каждый проект доведён до работающего продукта",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1.5 border border-white/10 rounded-lg p-5 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-[#F53031]">
                    <CountUp to={stat.count} suffix={stat.suffix} />
                  </span>
                  <p className="text-sm font-medium text-white">{stat.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-5">
            <h3 data-animate className="text-base font-semibold text-white">
              Наш стек{" "}
              <span className="text-gray-500 font-normal">— Технологический фундамент</span>
            </h3>
            <div data-stagger className="flex flex-col gap-3">
              {[
                {
                  icon: "🖥️",
                  category: "Интерфейс",
                  techs: ["Next.js", "React", "Tailwind CSS"],
                },
                {
                  icon: "📱",
                  category: "Мобильная разработка",
                  techs: ["Flutter", "Dart"],
                },
                {
                  icon: "⚙️",
                  category: "Серверная логика",
                  techs: ["C# .NET", "Node.js", "Python", "Go", "SQL"],
                },
                {
                  icon: "🖱️",
                  category: "Десктоп-приложения",
                  techs: ["C# .NET", "C++"],
                },
              ].map((row) => (
                <div
                  key={row.category}
                  className="flex items-start sm:items-center gap-3 md:gap-4 border border-white/10 rounded-lg px-4 md:px-5 py-3.5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-lg w-6 shrink-0 mt-0.5 sm:mt-0">{row.icon}</span>
                  <span className="text-xs text-gray-500 w-28 md:w-40 shrink-0">{row.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {row.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-gray-200 bg-white/[0.07] border border-white/10 px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Red divider */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div data-line className="h-px bg-[#F53031]" />
      </div>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20 relative overflow-hidden">
        <span
          className="hidden md:flex absolute left-0 top-0 bottom-0 items-center text-[#0a1530] font-black select-none pointer-events-none"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "5.5rem",
            letterSpacing: "0.15em",
            lineHeight: 1,
          }}
        >
          ПРОЕКТЫ
        </span>

        <div className="md:ml-20 flex flex-col gap-8 md:gap-10">
          <div data-animate className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs font-mono">2 / 2</span>
          </div>

          <div data-animate className="flex flex-col gap-3 max-w-lg">
            <h2 className="text-xl font-bold text-white">Наши проекты</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Реальные продукты, которые мы создали и запустили в production.
            </p>
          </div>

          <div data-animate style={{ transitionDelay: "100ms" }}>
            <ProjectsCarousel />
          </div>
        </div>
      </section>

      {/* Red divider */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div data-line className="h-px bg-[#F53031]" />
      </div>

      {/* Dashboard showcase */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-14 md:py-20 relative overflow-hidden">
        <span
          className="hidden md:flex absolute left-0 top-0 bottom-0 items-center text-[#0a1530] font-black select-none pointer-events-none"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "5.5rem",
            letterSpacing: "0.15em",
            lineHeight: 1,
          }}
        >
          ДАШБОРД
        </span>

        <div className="md:ml-20">
          <div data-animate className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs font-mono">+ бонус</span>
          </div>
          <div data-animate>
            <DashboardShowcase />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/5 bg-[#020515]/90 mt-8">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Image src="/logo.png" alt="Tech Mind" width={100} height={24} />
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
