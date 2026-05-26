const features = [
  {
    label: '특화진료',
    title: '안전한 마취',
    description: '세보플루란 기반 흡입마취와 심장 모니터링으로 환자별 마취 위험도를 살핍니다.',
  },
  {
    label: '외과진료',
    title: '수술·종양 케이스',
    description: '피부 종괴, 정형외과, 복강 수술 등 수술 전후 과정을 케이스로 기록합니다.',
  },
  {
    label: '협진진료',
    title: '심장·노령 평가',
    description: '노령 환자와 심장 질환 환자는 마취 전 평가와 협진을 중요하게 확인합니다.',
  },
];

export default function FeatureTreatmentSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#152b3f_0%,#123b63_55%,#1e6fa8_100%)] text-white shadow-soft">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 sm:p-10">
              <p className="text-sm font-bold text-leaf">Specialized Treatment</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
                전문적인 의료진의 경험과 기록
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
                도곡치유는 잘하는 진료를 크게 말하기보다, 실제 케이스와 평가 과정을 통해
                보호자가 확인할 수 있는 진료 기록을 쌓아갑니다.
              </p>
            </div>
            <div className="grid divide-y divide-white/10 border-t border-white/10 lg:border-l lg:border-t-0">
              {features.map((feature) => (
                <a
                  key={feature.title}
                  href="#cases"
                  className="group grid gap-2 p-6 transition hover:bg-white/7 sm:p-8"
                >
                  <span className="text-xs font-bold text-leaf">{feature.label}</span>
                  <span className="text-2xl font-bold">{feature.title}</span>
                  <span className="text-sm leading-6 text-white/65">{feature.description}</span>
                  <span className="mt-2 text-sm font-bold text-leaf transition group-hover:translate-x-1">
                    케이스 보기 →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
