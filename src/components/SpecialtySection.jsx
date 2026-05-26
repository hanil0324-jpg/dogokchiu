import { ArrowUpRight } from 'lucide-react';
import { centers } from '../data/centers';

export default function SpecialtySection() {
  return (
    <section id="specialty" className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9">
          <p className="text-sm font-bold text-moss">Specialty Center</p>
          <h2 className="mt-2 break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            보호자가 불안한 순간을 더 깊게 보는 전문센터
          </h2>
          <p className="mt-4 max-w-2xl break-keep text-sm leading-7 text-ink/65 sm:text-base">
            케이스 기록은 단순한 후기가 아니라, 환자별 평가와 치료 과정을 이해하는 자료가 되도록
            센터별로 정리합니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => {
            const Icon = center.icon;

            return (
              <a
                key={center.slug}
                href={`/centers/${center.slug}`}
                className="group rounded-3xl border border-oat/70 bg-white/82 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sage hover:shadow-soft"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-ink">{center.title}</h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-moss shadow-sm">
                    <Icon size={21} />
                  </span>
                </div>
                <p className="break-keep text-sm leading-6 text-ink/66">{center.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {center.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-[#eef7ff] px-3 py-1 text-xs font-semibold text-moss"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-moss transition group-hover:text-ink">
                  센터 자세히 보기
                  <ArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
