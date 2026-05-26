import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { casePlaceholders, cases } from '../data/cases.ts';
import { staffMembers } from '../data/staff';

function getCaseImage(caseItem) {
  return caseItem.image || casePlaceholders[caseItem.category] || casePlaceholders.default;
}

export default function StaffPage({ slug }) {
  const staff = staffMembers.find((member) => member.slug === slug) || staffMembers[0];

  const relatedCases = useMemo(
    () =>
      cases
        .filter((caseItem) => staff.relatedCategories.includes(caseItem.category))
        .slice(0, 6),
    [staff]
  );

  useEffect(() => {
    document.title = staff.seoTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', staff.seoDescription);
    }
  }, [staff]);

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fbff_0%,#e6f3ff_52%,#ffffff_100%)] px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
            <img
              src={staff.image}
              alt={`도곡치유 동물병원 ${staff.role} ${staff.name} 수의사 프로필`}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>

          <div>
            <a href="/#staff" className="inline-flex items-center gap-2 text-sm font-bold text-moss hover:text-ink">
              <ArrowLeft size={17} />
              의료진 소개로
            </a>
            <p className="mt-8 inline-flex rounded-full border border-sage/30 bg-white/82 px-4 py-2 text-sm font-bold text-moss shadow-sm">
              Dogok Healing Medical Staff
            </p>
            <h1 className="mt-5 break-keep text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {staff.role} {staff.name}
            </h1>
            <p className="mt-5 break-keep text-lg font-bold text-moss">{staff.focus.join(' · ')}</p>
            <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-ink/70 sm:text-lg">
              {staff.intro}
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
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.75rem] border border-oat bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-moss">진료 철학</p>
            <h2 className="mt-2 break-keep text-2xl font-bold text-ink">보호자가 이해할 수 있는 진료</h2>
            <p className="mt-5 break-keep text-base leading-8 text-ink/68">{staff.philosophy}</p>
          </article>

          <article className="rounded-[1.75rem] border border-oat bg-[#f7fbff] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-moss">주요 이력</p>
            <h2 className="mt-2 break-keep text-2xl font-bold text-ink">{staff.name} 수의사의 진료 배경</h2>
            <ul className="mt-5 grid gap-3">
              {staff.careers.map((career) => (
                <li key={career} className="flex gap-3 break-keep text-sm leading-6 text-ink/70">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-moss" />
                  <span>{career}</span>
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
              <h2 className="mt-2 break-keep text-3xl font-bold text-ink">{staff.name} 수의사 관련 진료 케이스</h2>
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
                  alt={`${caseItem.title} - ${staff.name} 수의사 관련 케이스`}
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
