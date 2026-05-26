import { ArrowUpRight, CheckCircle2, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react';

const directorCareers = [
  '건국대학교 수의외과학 박사 과정',
  '건국대학교 수의외과학 석사 학위 취득',
  '한국수의외과학회 정회원',
  '24시 용인 아이온동물메디컬센터 진료의',
  '24시 강서 율동물의료센터 외과원장',
  '2023 아시아 수의외과학회 발표',
  '2024 TPLO course 수료',
];

const doctorCareers = [
  '전북대학교 수의과대학 졸업',
  '전북대학교 수의과대학 내과학 석사 졸업',
  '전북대학교 전북동물의료센터 내과 팀장',
  '24시 더케어동물의료센터 내과 과장',
  '심장·노령성 질환 진료',
];

const jinCareers = [
  '건국대학교 수의과대학 학사 졸업',
  '서울수의임상컨퍼런스 참석',
  '웨스턴 BASIC 기본과정 수료',
  'KSFM 고양이 진료 마스터 클래스 수료',
  '공중방역수의사 재직',
];

const focusItems = [
  {
    title: '수술 전 평가',
    description: '심장, 장기 상태, 기저 질환을 확인한 뒤 마취와 수술 계획을 세웁니다.',
    icon: ShieldCheck,
  },
  {
    title: '심장 협진',
    description: '노령 환자나 심장 질환이 있는 환자는 마취 전 위험도를 더 세밀하게 살핍니다.',
    icon: HeartPulse,
  },
  {
    title: '수술 후 회복',
    description: '통증, 활력, 식욕, 입원 중 변화를 함께 보며 회복 과정을 이어서 관찰합니다.',
    icon: CheckCircle2,
  },
];

function CareerList({ items }) {
  return (
    <ul className="mt-5 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink/70">
          <CheckCircle2 size={17} className="mt-1 shrink-0 text-moss" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function VisualProofSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 border-b border-oat pb-8">
          <p className="text-sm font-bold text-moss">Medical Staff</p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            깊이 있는 진료를 만드는 의료진
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/65 sm:text-base">
            도곡치유 동물병원은 수술과 마취를 단순한 처치로 보지 않습니다. 환자의 상태를
            평가하고, 보호자에게 설명하며, 회복까지 이어서 살피는 과정을 중요하게 생각합니다.
          </p>
        </div>

        <article className="grid overflow-hidden rounded-[2rem] border border-oat bg-[linear-gradient(135deg,#ffffff,#e7f2ff)] shadow-soft lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-white">
            <img
              src="/images/director-choi.jpg"
              alt="도곡치유동물병원 대표원장 최한일"
              className="h-full min-h-[430px] w-full object-cover object-top"
            />
          </div>
          <div className="p-7 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-moss">
              <GraduationCap size={16} />
              건국대학교 수의외과학 전문의 과정
            </p>
            <h3 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">대표원장 최한일</h3>
            <p className="mt-4 text-base leading-8 text-ink/70">
              외과 수술과 고위험 마취 케이스를 중심으로, 수술이 필요한 이유와 마취 전 확인해야
              할 요소를 보호자에게 차분히 설명합니다.
            </p>
            <CareerList items={directorCareers} />
          </div>
        </article>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr_1.08fr]">
          <article className="overflow-hidden rounded-[2rem] border border-oat bg-white shadow-sm">
            <img
              src="/images/doctor-kim.png"
              alt="도곡치유동물병원 김수진 수의사"
              className="aspect-square w-full object-cover object-top"
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-xs font-bold text-moss">심장·노령성 질환 전문</p>
              <h3 className="mt-2 text-2xl font-bold text-ink">김수진 수의사</h3>
              <p className="mt-3 text-sm leading-6 text-ink/66">
                심장과 노령성 질환을 중심으로 마취 전 환자 상태를 세밀하게 평가합니다.
              </p>
              <CareerList items={doctorCareers} />
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-oat bg-white shadow-sm">
            <img
              src="/images/doctor-jin.png"
              alt="도곡치유동물병원 진성록 수의사"
              className="aspect-square w-full object-cover object-top"
              loading="lazy"
            />
            <div className="p-6">
              <p className="text-xs font-bold text-moss">내과 진료·고양이 진료</p>
              <h3 className="mt-2 text-2xl font-bold text-ink">진성록 수의사</h3>
              <p className="mt-3 text-sm leading-6 text-ink/66">
                보호자와 반려동물이 모두 편안할 수 있도록 세심하고 정확한 진료를 지향합니다.
              </p>
              <CareerList items={jinCareers} />
            </div>
          </article>

          <div className="grid gap-4">
            {focusItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex gap-5 rounded-[1.5rem] border border-oat bg-white p-6 shadow-sm"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-leaf text-moss">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/66">{item.description}</p>
                  </div>
                </article>
              );
            })}
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-ink"
            >
              실제 케이스 보기
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
