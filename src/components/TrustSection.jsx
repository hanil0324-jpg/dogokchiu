import { HeartPulse, Microscope, ShieldCheck, Stethoscope } from 'lucide-react';

const trustItems = [
  {
    number: '01',
    label: '마취 안전',
    title: '세보플루란 기반 안전 마취',
    description:
      '환자 상태와 시술 목적에 맞춰 마취 깊이와 회복 과정을 세심하게 확인합니다.',
    icon: ShieldCheck,
    accent: 'from-[#1e6fa8] to-[#4fa8e0]',
    iconBg: 'bg-[linear-gradient(135deg,#1e6fa8,#4fa8e0)]',
    badgeBg: 'bg-[#e6f1fb] text-[#1e6fa8]',
  },
  {
    number: '02',
    label: '외과 판단',
    title: '외과 중심의 수술 판단',
    description:
      '수술이 필요한 이유와 대안을 먼저 설명하고, 보호자와 치료 방향을 함께 정리합니다.',
    icon: Microscope,
    accent: 'from-[#0f6e56] to-[#1d9e75]',
    iconBg: 'bg-[linear-gradient(135deg,#0f6e56,#1d9e75)]',
    badgeBg: 'bg-[#e1f5ee] text-[#0f6e56]',
  },
  {
    number: '03',
    label: '심장 협진',
    title: '심장 협진 기반 노령마취 평가',
    description:
      '노령 환자의 심장 상태와 기저 질환을 살피며 마취 전 위험도를 중요하게 확인합니다.',
    icon: HeartPulse,
    accent: 'from-[#1e6fa8] to-[#4fa8e0]',
    iconBg: 'bg-[linear-gradient(135deg,#1e6fa8,#4fa8e0)]',
    badgeBg: 'bg-[#e6f1fb] text-[#1e6fa8]',
  },
  {
    number: '04',
    label: '입원 관리',
    title: '중증 케이스 중심의 입원 관리',
    description:
      '수술 후 통증, 식욕, 활력, 검사 변화를 이어서 보며 회복 과정을 꼼꼼히 관찰합니다.',
    icon: Stethoscope,
    accent: 'from-[#0f6e56] to-[#1d9e75]',
    iconBg: 'bg-[linear-gradient(135deg,#0f6e56,#1d9e75)]',
    badgeBg: 'bg-[#e1f5ee] text-[#0f6e56]',
  },
];

export default function TrustSection() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">

        {/* 섹션 헤더 */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-moss/45" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-moss/80">
                Why Dogok Healing
              </p>
            </div>
            <h2 className="max-w-[18em] break-keep text-3xl font-bold leading-tight text-ink sm:text-4xl">
              보호자가 가장 걱정하는 순간을
              <span className="block text-moss">기준으로 진료합니다</span>
            </h2>
          </div>
          <p className="max-w-xs break-keep text-sm leading-7 text-ink/55 sm:text-right">
            마취, 수술, 심장 협진, 입원 관리까지<br />
            각 단계의 판단 기준을 케이스로 남깁니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-oat/75 bg-white p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-soft"
              >
                {/* 상단 컬러 라인 */}
                <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-[linear-gradient(90deg,var(--tw-gradient-stops))] ${item.accent}`} />

                {/* 번호 + 레이블 + 아이콘 */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${item.badgeBg}`}>
                      {item.number}
                    </span>
                    <span className="text-[11px] font-semibold text-ink/40">{item.label}</span>
                  </div>
                  <div className={`grid h-9 w-9 place-items-center rounded-xl ${item.iconBg} text-white shadow-sm`}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="break-keep text-base font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
