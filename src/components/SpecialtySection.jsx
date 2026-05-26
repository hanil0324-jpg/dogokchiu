import { Activity, Bone, HeartHandshake, Scissors, Sparkles, Syringe } from 'lucide-react';

const centers = [
  {
    title: '수술센터',
    description: '수술 전 평가부터 통증 관리와 입원 회복까지 이어서 살핍니다.',
    keywords: ['외과수술', '입원관리', '회복평가'],
    icon: Scissors,
  },
  {
    title: '노령마취센터',
    description: '나이만으로 판단하지 않고 심장, 장기, 기저 질환을 함께 평가합니다.',
    keywords: ['노령마취', '세보플루란', '심장 협진'],
    icon: Syringe,
  },
  {
    title: '심장협진센터',
    description: '마취와 수술 전 심장 상태를 확인해 환자별 위험도를 정리합니다.',
    keywords: ['심장초음파', '협진', '마취평가'],
    icon: HeartHandshake,
  },
  {
    title: '종양수술센터',
    description: '종괴 제거, 병리검사, 추적 관리를 연결해 치료 방향을 세웁니다.',
    keywords: ['종괴', '병리검사', '종양수술'],
    icon: Activity,
  },
  {
    title: '치과·스케일링센터',
    description: '구강 통증과 마취 위험도를 함께 고려하며 치과 치료를 계획합니다.',
    keywords: ['스케일링', '발치', '구강통증'],
    icon: Sparkles,
  },
  {
    title: '피부·알러지센터',
    description: '반복되는 피부 문제를 사진 기록과 검사 지표로 차분히 추적합니다.',
    keywords: ['아토피', '외이염', '피부검사'],
    icon: Bone,
  },
];

export default function SpecialtySection() {
  return (
    <section id="specialty" className="bg-[linear-gradient(180deg,#f4f9ff_0%,#ffffff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9">
          <p className="text-sm font-bold text-moss">Specialty Center</p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            보호자가 불안한 순간을 더 세밀하게 보는 전문센터
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 sm:text-base">
            케이스 기록은 단순한 후기가 아니라, 환자별 평가와 치료 과정을 이해하는 자료가
            되도록 정리합니다.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => {
            const Icon = center.icon;

            return (
              <article
                key={center.title}
                className="rounded-3xl border border-oat/70 bg-white/82 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-ink">{center.title}</h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-moss">
                    <Icon size={21} />
                  </span>
                </div>
                <p className="text-sm leading-6 text-ink/66">{center.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {center.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-moss"
                    >
                      {keyword}
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
