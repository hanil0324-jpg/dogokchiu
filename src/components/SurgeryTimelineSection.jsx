import { ClipboardCheck, HeartPulse, MessageSquareText, MonitorCheck, Stethoscope } from 'lucide-react';

const timelineSteps = [
  {
    step: '01',
    title: '초진 및 상태 확인',
    description: '보호자가 걱정하는 증상, 기존 검사 기록, 복용 중인 약, 생활 변화를 먼저 확인합니다.',
    icon: MessageSquareText,
  },
  {
    step: '02',
    title: '수술 필요성 판단',
    description: '수술이 필요한 이유와 가능한 대안, 예상되는 회복 과정과 주의사항을 설명합니다.',
    icon: ClipboardCheck,
  },
  {
    step: '03',
    title: '마취 전 평가',
    description: '혈액검사, 영상검사, 심장 상태를 바탕으로 환자별 마취 위험도를 확인합니다.',
    icon: HeartPulse,
  },
  {
    step: '04',
    title: '수술 중 모니터링',
    description: '마취 깊이, 호흡, 산소포화도, 혈압 변화를 확인하며 수술 과정을 관리합니다.',
    icon: MonitorCheck,
  },
  {
    step: '05',
    title: '회복 및 재진 관리',
    description: '통증, 식욕, 활력, 상처 회복 상태를 이어서 관찰하고 재진 계획을 안내합니다.',
    icon: Stethoscope,
  },
];

export default function SurgeryTimelineSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-moss">Surgery Care Timeline</p>
            <h2 className="mt-2 break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
              수술 전부터 회복까지, 한 과정으로 살핍니다
            </h2>
          </div>
          <p className="break-keep text-sm leading-7 text-ink/65 sm:text-base">
            도곡치유 동물병원은 수술 당일만 보는 것이 아니라, 수술을 결정하기 전의 평가와 수술 후
            회복 과정까지 이어지는 진료 흐름을 중요하게 생각합니다.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[linear-gradient(180deg,#1e6fa8,#d8ecff)] md:block" />
          <div className="grid gap-4">
            {timelineSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="relative grid gap-4 rounded-[1.75rem] border border-oat/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft md:grid-cols-[4.5rem_1fr] md:p-6"
                >
                  <div className="relative z-10 flex items-center gap-4 md:block">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#1e6fa8,#123b63)] text-white shadow-soft">
                      <Icon size={21} />
                    </span>
                    <span className="mt-3 inline-flex rounded-full bg-[#eef7ff] px-3 py-1 text-xs font-bold text-moss md:mt-4">
                      STEP {item.step}
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <h3 className="break-keep text-xl font-bold text-ink sm:text-2xl">{item.title}</h3>
                      <p className="mt-3 break-keep text-sm leading-7 text-ink/66 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                    <span className="hidden text-6xl font-bold text-[#eef7ff] lg:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
