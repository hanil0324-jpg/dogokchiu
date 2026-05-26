import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: '병원소개', href: '#philosophy' },
  { label: '전문센터', href: '#specialty' },
  { label: '수술 케이스', href: '#cases?category=수술' },
  { label: '케이스 아카이브', href: '#cases' },
  { label: '진료문의', href: '#inquiry' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2" aria-label="도곡치유 동물병원 홈">
          <img
            src="/images/logo-main.png"
            alt="동물병원 치유"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">도곡치유 동물병원</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/75 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-moss">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-oat bg-white text-ink shadow-sm md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-oat bg-white px-5 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-ink/80 transition hover:bg-leaf"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
