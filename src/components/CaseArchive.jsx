import { ArrowUpRight, BookOpenCheck } from 'lucide-react';
import { useEffect } from 'react';
import { useMemo, useState } from 'react';
import { caseCategories, cases } from '../data/cases';

export default function CaseArchive() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const categoryCount = caseCategories.filter((category) => category !== '전체').length;
  const surgeryCount = cases.filter((caseItem) => caseItem.category === '수술').length;

  useEffect(() => {
    const applyCategoryFromHash = () => {
      const hash = decodeURIComponent(window.location.hash);
      const [, queryString] = hash.split('?');
      const params = new URLSearchParams(queryString || '');
      const category = params.get('category');

      if (category && caseCategories.includes(category)) {
        setActiveCategory(category);
      }
    };

    applyCategoryFromHash();
    window.addEventListener('hashchange', applyCategoryFromHash);

    return () => window.removeEventListener('hashchange', applyCategoryFromHash);
  }, []);

  const filteredCases = useMemo(() => {
    if (activeCategory === '전체') {
      return cases;
    }

    return cases.filter((caseItem) => caseItem.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="cases" className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_55%,#ffffff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 overflow-hidden rounded-[2rem] border border-oat bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold text-moss">
                <BookOpenCheck size={18} />
                Case Archive
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
                실제 블로그 케이스를 센터별로 모아봅니다
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 sm:text-base">
                네이버 블로그에 쌓인 진료 기록을 병원 홈페이지 안에서 다시 살펴볼 수 있도록
                대표 이미지와 함께 정리했습니다.
              </p>
              <a
                href="https://blog.naver.com/chiu_amc"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-leaf px-4 py-2 text-xs font-bold text-moss transition hover:bg-moss hover:text-white"
              >
                자료 출처: 도곡치유 네이버 블로그
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 rounded-3xl bg-[linear-gradient(135deg,#eef7ff,#d8ecff)] p-3 text-center sm:min-w-[320px]">
              <div>
                <p className="text-2xl font-bold text-moss">{cases.length}</p>
                <p className="text-xs font-semibold text-ink/55">연결 케이스</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-moss">{categoryCount}</p>
                <p className="text-xs font-semibold text-ink/55">진료 분류</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-moss">Blog</p>
                <p className="text-xs font-semibold text-ink/55">원문 이동</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-3 rounded-[1.5rem] border border-oat bg-white/92 p-4 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs font-bold text-moss">Surgery Cases</p>
            <h3 className="mt-1 text-xl font-bold text-ink">수술 케이스만 빠르게 모아보기</h3>
            <p className="mt-2 text-sm leading-6 text-ink/60">
              종괴 제거, 중성화, 마취 평가 등 수술 관련 블로그 케이스를 먼저 확인할 수 있습니다.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('수술');
              window.history.replaceState(null, '', '#cases?category=수술');
            }}
            className="inline-flex items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-ink"
          >
            수술 케이스 {surgeryCount}건 보기
          </button>
        </div>

        <div className="-mx-5 mb-6 overflow-x-auto px-5 pb-2">
          <div className="flex min-w-max gap-2">
            {caseCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? 'border-moss bg-moss text-white shadow-sm'
                      : 'border-oat bg-white text-ink/70 hover:border-sage hover:text-moss'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((caseItem) => (
            <article
              key={caseItem.id}
              className="group flex min-h-[410px] flex-col overflow-hidden rounded-3xl border border-oat/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <a href={caseItem.link} target="_blank" rel="noreferrer" className="relative block overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="h-52 w-full bg-leaf object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-moss shadow-sm backdrop-blur">
                  {caseItem.category}
                </span>
              </a>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-ink">{caseItem.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/66">{caseItem.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {caseItem.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-cream px-3 py-1 text-xs text-ink/62">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={caseItem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-moss transition hover:text-ink"
                  aria-label={`${caseItem.title} 자세히 보기`}
                >
                  자세히 보기
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
