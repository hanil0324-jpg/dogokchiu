import { BookOpenCheck, HandHeart, Stethoscope } from 'lucide-react';

const values = [
  {
    number: '01',
    title: '보호자와 함께 고민하는 의료진',
    description:
      '수술과 마취가 필요한 순간, 보호자가 이해할 수 있도록 현재 상태와 선택지를 차분히 설명합니다.',
    icon: HandHeart,
  },
  {
    number: '02',
    title: '치료를 위한 꾸준한 기록',
    description:
      '블로그 케이스를 단순 홍보가 아니라 진료 과정과 판단 기준을 공유하는 아카이브로 정리합니다.',
    icon: BookOpenCheck,
  },
  {
    number: '03',
    title: '정확하고 올바른 진료 기준',
    description:
      '개별 의료진의 경험에만 기대지 않고, 검사와 협진, 수술 후 관리까지 연결해 치료 방향을 찾습니다.',
    icon: Stethoscope,
  },
];

export default function ValueSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#e7f2ff_0%,#ffffff_45%,#eef7ff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-bold text-moss">Healing Animal Hospital Value</p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            도곡치유 동물병원의 중심가치
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className="rounded-[2rem] border border-oat bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-8 flex items-start justify-between gap-5">
                  <span className="text-5xl font-bold text-leaf">{value.number}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-teal text-white">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/66">{value.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
