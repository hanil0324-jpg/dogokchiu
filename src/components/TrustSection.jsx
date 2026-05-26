import { HeartPulse, Microscope, ShieldCheck, Stethoscope } from 'lucide-react';

const trustItems = [
  {
    title: '세보플루란 기반 안전 마취',
    description:
      '환자 상태와 시술 목적에 맞춰 마취 깊이와 회복 과정을 세심하게 확인합니다.',
    icon: ShieldCheck,
  },
  {
    title: '외과 중심의 수술 판단',
    description:
      '수술이 필요한 이유와 대안을 먼저 설명하고, 보호자와 치료 방향을 함께 정리합니다.',
    icon: Microscope,
  },
  {
    title: '심장 협진 기반 노령마취 평가',
    description:
      '노령 환자의 심장 상태와 기저 질환을 살피며 마취 전 위험도를 중요하게 확인합니다.',
    icon: HeartPulse,
  },
  {
    title: '중증 케이스 중심의 입원 관리',
    description:
      '수술 후 통증, 식욕, 활력, 검사 변화를 이어서 보며 회복 과정을 꼼꼼히 관찰합니다.',
    icon: Stethoscope,
  },
];

export default function TrustSection() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-moss">Why Dogok Healing</p>
            <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
              보호자가 가장 걱정하는 순간을 기준으로 진료합니다
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink/60">
            마취, 수술, 심장 협진, 입원 관리까지 각 단계의 판단 기준을 케이스로 남깁니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-oat/75 bg-white/92 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-leaf text-moss">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
