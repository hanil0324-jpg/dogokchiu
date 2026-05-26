import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { equipmentCategories, equipmentItems } from '../data/equipment';

export default function EquipmentSection() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredEquipment = useMemo(() => {
    if (activeCategory === '전체') {
      return equipmentItems;
    }

    return equipmentItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="equipment" className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 overflow-hidden rounded-[2rem] border border-oat bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold text-moss">Medical Equipment</p>
              <h2 className="mt-2 break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
                검사부터 마취·수술 관리까지 이어지는 장비 환경
              </h2>
            </div>
            <div>
              <p className="break-keep text-sm leading-7 text-ink/65 sm:text-base">
                도곡치유 동물병원은 장비를 단순히 나열하기보다, 보호자가 가장 걱정하는 마취와
                수술 전후의 판단을 돕는 기준으로 활용합니다.
              </p>
              <a
                href="https://blog.naver.com/chiu_amc/223619224924"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#eef7ff] px-4 py-2 text-xs font-bold text-moss transition hover:bg-moss hover:text-white"
              >
                장비소개 블로그 원문 보기
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="-mx-5 mb-6 overflow-x-auto px-5 pb-2">
          <div className="flex min-w-max gap-2">
            {equipmentCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
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

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredEquipment.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[260px] flex-col rounded-[1.75rem] border border-oat/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-[#eef7ff] px-3 py-1 text-xs font-bold text-moss">
                    {item.category}
                  </span>
                  <h3 className="mt-4 break-keep text-xl font-bold leading-snug text-ink">{item.name}</h3>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-moss">
                  <CheckCircle2 size={21} />
                </span>
              </div>
              <p className="break-keep text-sm leading-6 text-ink/66">{item.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f7fbff] px-3 py-1 text-xs font-semibold text-ink/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
