import { BookOpenCheck, HandHeart, Stethoscope } from 'lucide-react';

const values = [
  {
    number: '01',
    title: '보호자와 함께 고민하는 의료진',
    description:
      '수술과 마취가 필요한 순간, 보호자가 이해할 수 있도록 현재 상태와 선택지를 차분히 설명합니다.',
    icon: HandHeart,
    accent: '#1e6fa8',
    accentBg: '#e6f1fb',
  },
  {
    number: '02',
    title: '치료를 위한 꾸준한 기록',
    description:
      '블로그 케이스를 단순 홍보가 아니라 진료 과정과 판단 기준을 공유하는 아카이브로 정리합니다.',
    icon: BookOpenCheck,
    accent: '#0f6e56',
    accentBg: '#e1f5ee',
  },
  {
    number: '03',
    title: '정확하고 올바른 진료 기준',
    description:
      '개별 의료진의 경험에만 기대지 않고, 검사와 협진, 수술 후 관리까지 연결해 치료 방향을 찾습니다.',
    icon: Stethoscope,
    accent: '#1e6fa8',
    accentBg: '#e6f1fb',
  },
];

export default function ValueSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#e7f2ff_0%,#ffffff_45%,#eef7ff_100%)] px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">

        {/* 섹션 헤더 */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-moss/45" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-moss/80">
              Our Core Values
            </p>
          </div>
          <h2 className="break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            도곡치유 동물병원의
            <span className="ml-2 text-moss">중심가치</span>
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid gap-5 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.number}
                className="group relative overflow-hidden rounded-[2rem] border border-oat bg-white p-8 shadow-sm transition hover:-translate-y-1.5 hover:shadow-soft"
                style={{ borderLeft: `3px solid ${value.accent}`, borderRadius: '0 2rem 2rem 0' }}
              >
                {/* 배경 워터마크 숫자 */}
                <span
                  className="pointer-events-none absolute -right-2 -top-3 select-none text-[88px] font-black leading-none"
                  style={{ color: value.accentBg, transition: 'color 0.3s' }}
                  aria-hidden="true"
                >
                  {value.number}
                </span>

                {/* 번호 레이블 + 아이콘 */}
                <div className="relative mb-6 flex items-center justify-between">
                  <span
                    className="rounded-md px-2.5 py-1 text-xs font-bold"
                    style={{ background: value.accentBg, color: value.accent }}
                  >
                    POINT {value.number}
                  </span>
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl shadow-sm"
                    style={{ background: value.accentBg }}
                  >
                    <Icon size={20} style={{ color: value.accent }} />
                  </div>
                </div>

                <h3 className="relative break-keep text-xl font-bold leading-snug text-ink">
                  {value.title}
                </h3>
                <p className="relative mt-4 break-keep text-sm leading-7 text-ink/60">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
