import { ArrowUpRight, BookOpenCheck, Star } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { casePlaceholders, cases } from '../data/cases.ts';

const allCategory = '전체';

function getCaseImage(caseItem) {
  return caseItem.image || casePlaceholders[caseItem.category] || casePlaceholders.default;
}

function setCaseHash(category) {
  if (category === allCategory) {
    window.history.replaceState(null, '', '#cases');
    return;
  }

  window.history.replaceState(null, '', `#cases?category=${encodeURIComponent(category)}`);
}

function CaseImage({ caseItem, className = '' }) {
  return (
    <img
      src={getCaseImage(caseItem)}
      alt={`${caseItem.title} - ${caseItem.category} 케이스 이미지`}
      className={`aspect-video w-full bg-leaf object-cover ${className}`}
      loading="lazy"
    />
  );
}

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-[#eef7ff] px-3 py-1 text-xs font-semibold text-ink/62">
          #{tag}
        </span>
      ))}
    </div>
  );
}

function BlogButton({ caseItem, compact = false }) {
  return (
    <a
      href={caseItem.blogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold text-moss transition hover:text-ink ${
        compact ? 'text-sm' : 'bg-white px-4 py-3 text-sm shadow-sm hover:-translate-y-0.5'
      }`}
      aria-label={`${caseItem.title} 블로그 원문 보기`}
    >
      블로그 원문 보기
      <ArrowUpRight size={17} />
    </a>
  );
}

export default function CaseArchive() {
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(cases.map((caseItem) => caseItem.category)));
    return [allCategory, ...uniqueCategories];
  }, []);

  const [activeCategory, setActiveCategory] = useState(allCategory);
  const categoryCount = categories.length - 1;
  const surgeryCount = cases.filter((caseItem) => caseItem.category === '수술').length;
  const featuredCases = cases.filter((caseItem) => caseItem.featured).slice(0, 3);

  useEffect(() => {
    const applyCategoryFromHash = () => {
      const hash = decodeURIComponent(window.location.hash);
      const [, queryString] = hash.split('?');
      const params = new URLSearchParams(queryString || '');
      const category = params.get('category');

      if (category && categories.includes(category)) {
        setActiveCategory(category);
      }
    };

    applyCategoryFromHash();
    window.addEventListener('hashchange', applyCategoryFromHash);

    return () => window.removeEventListener('hashchange', applyCategoryFromHash);
  }, [categories]);

  const filteredCases = useMemo(() => {
    if (activeCategory === allCategory) {
      return cases;
    }

    return cases.filter((caseItem) => caseItem.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCaseHash(category);
  };

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
              <h2 className="mt-2 break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
                실제 블로그 케이스를 센터별로 모아봅니다
              </h2>
              <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-ink/65 sm:text-base">
                네이버 블로그에 쌓인 진료 기록을 병원 홈페이지 안에서 다시 살펴볼 수 있도록 대표
                케이스와 함께 정리했습니다.
              </p>
              <a
                href="https://blog.naver.com/chiu_amc"
                target="_blank"
                rel="noopener noreferrer"
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

        <div className="mb-10">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-moss">
                <Star size={15} />
                Featured Cases
              </p>
              <h3 className="mt-2 break-keep text-2xl font-bold text-ink">보호자가 먼저 보면 좋은 대표 케이스</h3>
            </div>
            <button
              type="button"
              onClick={() => handleCategoryChange('수술')}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-moss px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-ink"
            >
              수술 케이스 {surgeryCount}건 보기
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredCases.map((caseItem) => (
              <article
                key={caseItem.id}
                className="group overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-soft transition hover:-translate-y-1"
              >
                <a href={caseItem.blogUrl} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden">
                  <CaseImage caseItem={caseItem} className="transition duration-500 group-hover:scale-[1.04]" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-moss shadow-sm backdrop-blur">
                    {caseItem.category}
                  </span>
                </a>
                <div className="p-5">
                  <p className="text-xs font-bold text-moss">{caseItem.hook}</p>
                  <h4 className="mt-2 break-keep text-xl font-bold leading-snug text-ink">{caseItem.title}</h4>
                  <p className="mt-3 break-keep text-sm leading-6 text-ink/66">{caseItem.summary}</p>
                  <div className="mt-5">
                    <TagList tags={caseItem.tags} />
                  </div>
                  <div className="mt-5">
                    <BlogButton caseItem={caseItem} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="-mx-5 mb-6 overflow-x-auto px-5 pb-2">
          <div className="flex min-w-max gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`min-h-12 rounded-full border px-4 py-2 text-sm font-bold transition ${
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
              className="group flex min-h-[440px] flex-col overflow-hidden rounded-3xl border border-oat/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <a href={caseItem.blogUrl} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden">
                <CaseImage caseItem={caseItem} className="transition duration-500 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold text-moss shadow-sm backdrop-blur">
                  {caseItem.category}
                </span>
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold text-moss">{caseItem.hook}</p>
                <h3 className="mt-2 break-keep text-xl font-bold leading-snug text-ink">{caseItem.title}</h3>
                <p className="mt-3 break-keep text-sm leading-6 text-ink/66">{caseItem.summary}</p>
                <div className="mt-5">
                  <TagList tags={caseItem.tags} />
                </div>
                <div className="mt-auto pt-6">
                  <BlogButton caseItem={caseItem} compact />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
