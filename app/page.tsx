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
          <a href="/" onClick={() => window.location.reload()}>
            <Image src="/logo.png" alt="Tech Mind" width={100} height={24} priority />
          </a>
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
            Сайты, мобильные приложения и автоматизация процессов.
            Вы объясняете задачу один раз — мы делаем готовый продукт.
            Без лишних встреч и бесконечных согласований.
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
            <span className="text-gray-600 text-xs font-mono">1 / 3</span>
          </div>

          {/* Description */}
          <div data-animate className="flex flex-col gap-3 max-w-lg">
            <h2 className="text-xl font-bold text-white">Кто мы такие?</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Команда разработчиков из Академгородка (Новосибирск). Делаем сайты,
              приложения и автоматизацию, которые уже работают в реальных бизнесах —
              от маркетплейсов до медицинских центров.
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
                text: "Делаем так, чтобы продукт работал надёжно и легко расширялся — с документацией и защитой данных.",
              },
              {
                emoji: "📱",
                title: "Сайт, приложение и программа для компьютера",
                text: "Один код — три платформы. Общая логика без дублирования, меньше расходов на поддержку.",
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
                  sub: "Сайты, мобильные приложения и программы для компьютера",
                },
                {
                  count: 6,
                  suffix: "+",
                  label: "Запущенных проектов",
                  sub: "Маркетплейсы, медицина, сервисы и автоматизация",
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
              Что мы используем
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
                  category: "Программы для компьютера",
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

      {/* For whom */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-14 md:pt-20 pb-14 md:pb-20 relative overflow-hidden">
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
          ДЛЯ КОГО
        </span>

        <div className="md:ml-20 flex flex-col gap-8 md:gap-10">
          <div data-animate className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs font-mono">2 / 3</span>
          </div>

          <div data-animate className="flex flex-col gap-3 max-w-lg">
            <h2 className="text-xl font-bold text-white">С кем мы работаем?</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Мы работаем с бизнесами, где есть повторяющиеся задачи — запись клиентов,
              общение, отчёты. Всё это можно автоматизировать и сэкономить время и деньги.
            </p>
          </div>

          <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                emoji: "🚗",
                title: "Автошколы",
                text: "Ученики записываются и смотрят расписание сами — администратор не тратит время на звонки и бумажные журналы.",
              },
              {
                emoji: "🏥",
                title: "Медицинские центры",
                text: "Пациенты записываются сами и получают напоминания — меньше пропущенных визитов и лишних звонков в регистратуру.",
              },
              {
                emoji: "📚",
                title: "Образование и курсы",
                text: "Ученики оплачивают и получают материалы онлайн — не нужно собирать деньги вручную и рассылать задания в мессенджерах.",
              },
              {
                emoji: "💪",
                title: "Фитнес и спорт",
                text: "Клиенты сами записываются и покупают абонементы — администратор не тратит время на звонки, оплата приходит автоматически.",
              },
              {
                emoji: "✂️",
                title: "Салоны и сервисы красоты",
                text: "Онлайн-запись, напоминания клиентам и учёт записей — вместо блокнота и WhatsApp.",
              },
              {
                emoji: "💡",
                title: "Стартапы и новые идеи",
                text: "Есть идея продукта? Мы строим его с нуля — от дизайна до запуска.",
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
            <span className="text-gray-600 text-xs font-mono">3 / 3</span>
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

      {/* Red divider */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div data-line className="h-px bg-[#F53031]" />
      </div>

      {/* How we work */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-14 md:pt-20 pb-14 md:pb-20 relative overflow-hidden">
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
          ПРОЦЕСС
        </span>

        <div className="md:ml-20 flex flex-col gap-8 md:gap-10">
          <div data-animate className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs font-mono">как мы работаем</span>
          </div>

          <div data-animate className="flex flex-col gap-3 max-w-lg">
            <h2 className="text-xl font-bold text-white">Что вас ждёт</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Никаких сюрпризов — вот как выглядит работа с нами от первого сообщения до готового продукта.
            </p>
          </div>

          <div data-stagger className="flex flex-col gap-3">
            {[
              {
                step: "01",
                title: "Вы пишете нам",
                text: "Расскажите задачу в свободной форме — никаких анкет и документов. Достаточно пары сообщений.",
              },
              {
                step: "02",
                title: "Обсуждаем и считаем",
                text: "Уточняем детали, предлагаем решение, называем цену и срок. Обычно это занимает один разговор.",
              },
              {
                step: "03",
                title: "Делаем",
                text: "Берёмся за работу и по ходу показываем промежуточные результаты. Вы всегда в курсе что происходит.",
              },
              {
                step: "04",
                title: "Сдаём готовый продукт",
                text: "Передаём всё что сделали, объясняем как пользоваться. Дальше 3 месяца на связи — если что-то сломается, исправим бесплатно.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 border border-white/10 rounded-lg px-5 py-4 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <span className="text-2xl font-black text-[#F53031]/30 font-mono shrink-0 leading-none mt-0.5">{item.step}</span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red divider */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div data-line className="h-px bg-[#F53031]" />
      </div>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-14 md:pt-20 pb-14 md:pb-20 relative overflow-hidden">
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
          ЦЕНЫ
        </span>

        <div className="md:ml-20 flex flex-col gap-8 md:gap-10">
          <div data-animate className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-gray-600 text-xs font-mono">цены</span>
          </div>

          <div data-animate className="flex flex-col gap-3 max-w-lg">
            <h2 className="text-xl font-bold text-white">Сколько это стоит?</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Три пакета под разные задачи. Если не уверены какой подходит — напишите,
              разберёмся вместе.
            </p>
          </div>

          <div data-stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tag: "Старт",
                emoji: "🌐",
                title: "Сайт-визитка",
                features: [
                  "До 5 страниц",
                  "Адаптация под телефон",
                  "Форма обратной связи",
                  "Настройка домена и хостинга",
                ],
                price: "от 10 000 ₽",
                highlight: false,
              },
              {
                tag: "Бизнес",
                emoji: "🤖",
                title: "Сайт + Чат-бот",
                features: [
                  "Всё из пакета Старт",
                  "Бот для записи клиентов",
                  "Прайс-лист и уведомления",
                  "Связь с менеджером",
                ],
                price: "от 20 000 ₽",
                highlight: true,
              },
              {
                tag: "Продукт",
                emoji: "📱",
                title: "Приложение под ключ",
                features: [
                  "Веб или мобильное приложение",
                  "Личный кабинет пользователя",
                  "Серверная часть и база данных",
                  "Поддержка после запуска",
                ],
                price: "от 60 000 ₽",
                highlight: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.tag}
                className={`relative flex flex-col gap-5 rounded-lg p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-[#F53031]/40 bg-[#F53031]/5"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-6 text-[10px] font-bold tracking-widest uppercase bg-[#F53031] text-white px-3 py-1 rounded-full">
                    Популярный
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{pkg.emoji}</span>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-[#F53031]">{pkg.tag}</p>
                    <h4 className="text-sm font-bold text-white">{pkg.title}</h4>
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-[#F53031] mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-3 border-t border-white/5">
                  <p className="text-lg font-bold text-white">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-animate className="flex flex-col gap-3">
            <p className="text-sm text-gray-300 border-l-2 border-[#F53031] pl-4">
              Вы платите один раз и владеете продуктом — без ежегодных платежей за то, что уже ваше.
            </p>
            <p className="text-sm text-gray-400 border-l-2 border-white/10 pl-4">
              3 месяца гарантии после сдачи — баги исправляем бесплатно. Нововведения и доработки — стоимость зависит от объёма, обсуждаем индивидуально.
            </p>
            <p className="text-xs text-gray-600 pl-4">
              Цены ориентировочные и зависят от сложности. Точную стоимость назовём после короткого разговора.
            </p>
          </div>
        </div>
      </section>

      {/* Red divider */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div data-line className="h-px bg-[#F53031]" />
      </div>

      {/* Contact CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-4 md:px-8 pt-14 md:pt-20 pb-16 md:pb-28">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <div data-animate className="flex flex-col gap-3">
            <span className="text-[#F53031] font-bold tracking-widest uppercase text-xs">Начнём?</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Расскажите задачу —{" "}
              <span className="text-[#F53031]">ответим за 30 минут</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
              Без лишних формальностей. Пишите как удобно — разберёмся и предложим решение.
            </p>
          </div>

          <div data-animate className="flex flex-col sm:flex-row items-center gap-4" style={{ transitionDelay: "100ms" }}>
            <a
              href="https://t.me/leonidKhanov"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F53031] hover:bg-[#d42829] text-white text-sm font-medium px-8 py-3 rounded transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Написать в Telegram
            </a>
            <a
              href="tel:+79950107316"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              +7 995 010-73-16 — Леонид
            </a>
          </div>

          <p data-animate className="text-xs text-gray-700" style={{ transitionDelay: "200ms" }}>
            Берём 2–3 проекта в месяц · Академгородок, Новосибирск
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020515]/90 mt-8">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Image src="/logo.png" alt="Tech Mind" width={100} height={24} />
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
