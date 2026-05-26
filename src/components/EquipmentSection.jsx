import {
  ActivitySquare,
  ArrowUpRight,
  HeartPulse,
  MonitorCheck,
  ScanLine,
  Stethoscope,
  Syringe,
} from 'lucide-react';

const equipmentItems = [
  {
    title: '심장·복부 초음파 검사',
    description:
      '마취 전 심장 상태와 복부 장기 상태를 확인해 환자별 위험도와 치료 방향을 세밀하게 살핍니다.',
    points: ['심장 상태 확인', '복부 장기 평가', '노령 환자 검진'],
    icon: HeartPulse,
  },
  {
    title: '디지털 영상 검사',
    description:
      '정형외과, 흉부, 복부 질환 평가에 필요한 영상 정보를 빠르게 확인하고 보호자에게 설명합니다.',
    points: ['흉부·복부 평가', '정형외과 확인', '수술 전 계획'],
    icon: ScanLine,
  },
  {
    title: '혈액·기본 검사 장비',
    description:
      '수술과 마취 전 혈액검사, 염증 수치, 장기 기능 변화를 확인해 진료 기준을 세웁니다.',
    points: ['혈액검사', '장기 기능 확인', '마취 전 평가'],
    icon: ActivitySquare,
  },
  {
    title: '세보플루란 흡입마취 시스템',
    description:
      '수술과 스케일링 등 마취가 필요한 진료에서 환자 상태에 맞춰 마취 깊이를 조절합니다.',
    points: ['흡입마취', '마취 깊이 조절', '노령마취'],
    icon: Syringe,
  },
  {
    title: '수술 중 모니터링 장비',
    description:
      '마취 중 호흡, 산소포화도, 혈압 등 주요 변화를 확인하며 수술 과정을 관리합니다.',
    points: ['호흡 확인', '산소포화도', '혈압 변화'],
    icon: MonitorCheck,
  },
  {
    title: '입원·회복 관리 장비',
    description:
      '수술 이후 통증, 활력, 식욕, 회복 상태를 이어서 관찰하며 필요한 처치를 진행합니다.',
    points: ['회복 관찰', '입원 관리', '통증 관리'],
    icon: Stethoscope,
  },
];

export default function EquipmentSection() {
  return (
    <section id="equipment" className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-moss">Medical Equipment</p>
            <h2 className="mt-2 break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
              검사부터 마취·수술 관리까지 이어지는 장비 환경
            </h2>
          </div>
          <div>
            <p className="break-keep text-sm leading-7 text-ink/65 sm:text-base">
              도곡치유 동물병원은 장비를 단순히 나열하기보다, 보호자가 가장 걱정하는 마취와 수술
              전후의 판단을 돕는 기준으로 활용합니다.
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-oat/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="break-keep text-xl font-bold leading-snug text-ink">{item.title}</h3>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-leaf text-moss">
                    <Icon size={22} />
                  </span>
                </div>
                <p className="break-keep text-sm leading-6 text-ink/66">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-[#eef7ff] px-3 py-1 text-xs font-semibold text-moss"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
