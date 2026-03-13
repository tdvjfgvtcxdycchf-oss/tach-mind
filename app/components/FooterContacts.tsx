'use client';

import { useEffect, useRef } from 'react';

export default function FooterContacts() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = () => {
      if (!ref.current) return;
      const links = ref.current.querySelectorAll<HTMLElement>('.contact-highlight');
      links.forEach((el) => {
        el.classList.remove('contact-lit');
        void el.offsetWidth; // reflow — перезапускает анимацию
        el.classList.add('contact-lit');
      });
    };

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a[href="#contact"]');
      if (anchor) trigger();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-end gap-2">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">
        Контакты
      </span>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
        <a
          href="tel:+79950107316"
          className="contact-highlight flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 5.61 5.61l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
          </svg>
          +7 995 010-73-16
          <span className="text-gray-600 ml-2">— Леонид</span>
        </a>
        <a
          href="https://t.me/leonidKhanov"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-highlight flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          @leonidkhanov
          <span className="text-gray-600 ml-2">— Леонид</span>
        </a>
      </div>
    </div>
  );
}
