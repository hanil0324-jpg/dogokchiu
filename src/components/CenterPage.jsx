import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { casePlaceholders, cases } from '../data/cases.ts';
import { centers } from '../data/centers';

function getCaseImage(caseItem) {
  return caseItem.image || casePlaceholders[caseItem.category] || casePlaceholders.default;
}

export default function CenterPage({ slug }) {
  const center = centers.find((item) => item.slug === slug) || centers[0];
  const Icon = center.icon;

  const relatedCases = useMemo(
    () =>
      cases
        .filter(
          (caseItem) =>
            caseItem.center === center.title || center.relatedCategories.includes(caseItem.category)
        )
        .slice(0, 6),
    [center]
  );

  useEffect(() => {
    document.title = center.seoTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', center.seoDescription);
    }
  }, [center]);

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#e6f3ff_54%,#ffffff_100%)] px-5 py-14 sm:py-20">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/hospital-lobby.jpg" alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-white/72" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <a href="/#specialty" className="inline-flex items-center gap-2 text-sm font-bold text-moss hover:text-ink">
              <ArrowLeft size={17} />
              전문센터 목록으로
            </a>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-sage/30 bg-white/82 px-4 py-2 text-sm font-bold text-moss shadow-sm">
              <Icon size={18} />
              {center.eyebrow}
            </div>
            <h1 className="mt-5 break-keep text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {center.title}
            </h1>
            <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-ink/70 sm:text-lg">
              {center.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#cases"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-ink"
              >
                관련 케이스 보기
                <ArrowUpRight size={17} />
              </a>
              <a
                href="/#inquiry"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sage/40 bg-white px-6 py-3 text-sm font-bold text-moss shadow-sm transition hover:border-moss hover:text-ink"
              >
                진료 문의하기
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
            <img
              src={center.heroImage}
              alt={`${center.title} 대표 이미지`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-oat bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-moss">보호자가 걱정하는 상황</p>
            <h2 className="mt-2 break-keep text-2xl font-bold text-ink">왜 이 센터가 필요할까요?</h2>
            <p className="mt-5 break-keep text-base leading-8 text-ink/68">{center.worry}</p>
          </article>

          <article className="rounded-[1.75rem] border border-oat bg-[#f7fbff] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-moss">도곡치유가 확인하는 항목</p>
            <h2 className="mt-2 break-keep text-2xl font-bold text-ink">진료 전후로 세심하게 봅니다</h2>
            <ul className="mt-5 grid gap-3">
              {center.checks.map((check) => (
                <li key={check} className="flex gap-3 break-keep text-sm leading-6 text-ink/70">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-moss" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff,#eef7ff)] px-5 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-moss">Related Cases</p>
              <h2 className="mt-2 break-keep text-3xl font-bold text-ink">{center.title} 관련 케이스</h2>
            </div>
            <a href="/#cases" className="inline-flex items-center gap-2 text-sm font-bold text-moss hover:text-ink">
              전체 케이스 아카이브 보기
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedCases.map((caseItem) => (
              <article key={caseItem.id} className="overflow-hidden rounded-3xl border border-oat bg-white shadow-sm">
                <img
                  src={getCaseImage(caseItem)}
                  alt={`${caseItem.title} - 관련 케이스 이미지`}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <span className="rounded-full bg-[#eef7ff] px-3 py-1 text-xs font-bold text-moss">
                    {caseItem.category}
                  </span>
                  <p className="mt-4 text-xs font-bold text-moss">{caseItem.hook}</p>
                  <h3 className="mt-2 break-keep text-lg font-bold leading-snug text-ink">{caseItem.title}</h3>
                  <p className="mt-3 break-keep text-sm leading-6 text-ink/64">{caseItem.summary}</p>
                  <a
                    href={caseItem.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-moss hover:text-ink"
                  >
                    블로그 원문 보기
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
