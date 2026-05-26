import { MonitorCheck, ShieldPlus, Syringe } from 'lucide-react';

const galleryItems = [
  {
    image: '/images/surgery-detail-2-upright.jpg',
    alt: '도곡치유동물병원 수술실 현장 사진',
    title: '수술 중 실시간 모니터링',
    description: '마취 중 심박, 호흡, 산소포화도 변화를 확인하며 수술 과정을 살핍니다.',
    icon: MonitorCheck,
  },
  {
    image: '/images/surgery-detail-1-upright.jpg',
    alt: '도곡치유동물병원 수술 및 마취 관리 사진',
    title: '환자별 마취 계획',
    description: '나이, 심장 상태, 기저 질환을 바탕으로 마취 전후 과정을 조정합니다.',
    icon: Syringe,
  },
];

export default function SurgeryGallerySection() {
  return (
    <section className="bg-[linear-gradient(135deg,#123b63_0%,#152b3f_58%,#1e6fa8_100%)] px-5 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold text-leaf">
              <ShieldPlus size={18} />
              Surgery Room Record
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">
              수술실에서 이어지는 세밀한 확인
            </h2>
          </div>
          <p className="text-sm leading-7 text-white/68 sm:text-base">
            수술은 수술 자체만이 아니라, 마취 전 평가와 수술 중 모니터링, 회복 관찰까지
            하나의 과정으로 이어집니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {galleryItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 shadow-soft"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-72 w-full object-cover sm:h-[360px]"
                  loading="lazy"
                />
                <div className="flex gap-4 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-moss">
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
