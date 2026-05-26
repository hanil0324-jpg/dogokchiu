import { ArrowUpRight, CheckCircle2, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react';
import { staffMembers } from '../data/staff';

const focusItems = [
  {
    title: '수술 전 평가',
    description: '심장, 장기 상태, 기저 질환을 확인하고 마취와 수술 계획을 세웁니다.',
    icon: ShieldCheck,
  },
  {
    title: '심장 협진',
    description: '노령 환자와 심장 질환 환자의 마취 전 위험도를 더 세심하게 확인합니다.',
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
      {items.slice(0, 5).map((item) => (
        <li key={item} className="flex gap-3 break-keep text-sm leading-6 text-ink/70">
          <CheckCircle2 size={17} className="mt-1 shrink-0 text-moss" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function VisualProofSection() {
  const director = staffMembers[0];
  const doctors = staffMembers.slice(1);

  return (
    <section id="staff" className="bg-[linear-gradient(180deg,#ffffff_0%,#eef7ff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 border-b border-oat pb-8">
          <p className="text-sm font-bold text-moss">Medical Staff</p>
          <h2 className="mt-2 break-keep text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            깊이 있는 진료를 만드는 의료진
          </h2>
          <p className="mt-4 max-w-3xl break-keep text-sm leading-7 text-ink/65 sm:text-base">
            도곡치유 동물병원은 수술과 마취를 단순 처치로 보지 않습니다. 환자의 상태를 평가하고,
            보호자에게 설명하며, 회복까지 이어지는 과정을 중요하게 생각합니다.
          </p>
        </div>

        <article className="grid overflow-hidden rounded-[2rem] border border-oat bg-[linear-gradient(135deg,#ffffff,#e7f2ff)] shadow-soft lg:grid-cols-[0.92fr_1.08fr]">
          <a href={`/staff/${director.slug}`} className="block bg-white">
            <img
              src={director.image}
              alt={`도곡치유 동물병원 ${director.role} ${director.name} 수의사`}
              className="h-full min-h-[430px] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
            />
          </a>
          <div className="p-7 sm:p-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-moss">
              <GraduationCap size={16} />
              {director.focus.slice(0, 2).join(' · ')}
            </p>
            <h3 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
              {director.role} {director.name}
            </h3>
            <p className="mt-4 break-keep text-base leading-8 text-ink/70">{director.intro}</p>
            <CareerList items={director.careers} />
            <a
              href={`/staff/${director.slug}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-ink"
            >
              의료진 상세 보기
              <ArrowUpRight size={17} />
            </a>
          </div>
        </article>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr_1.08fr]">
          {doctors.map((doctor) => (
            <article key={doctor.slug} className="overflow-hidden rounded-[2rem] border border-oat bg-white shadow-sm">
              <a href={`/staff/${doctor.slug}`} className="block overflow-hidden">
                <img
                  src={doctor.image}
                  alt={`도곡치유 동물병원 ${doctor.role} ${doctor.name} 수의사`}
                  className="aspect-square w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </a>
              <div className="p-6">
                <p className="text-xs font-bold text-moss">{doctor.focus.slice(0, 2).join(' · ')}</p>
                <h3 className="mt-2 text-2xl font-bold text-ink">
                  {doctor.name} 수의사
                </h3>
                <p className="mt-3 break-keep text-sm leading-6 text-ink/66">{doctor.intro}</p>
                <CareerList items={doctor.careers} />
                <a
                  href={`/staff/${doctor.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-moss transition hover:text-ink"
                >
                  의료진 상세 보기
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}

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
                    <p className="mt-2 break-keep text-sm leading-6 text-ink/66">{item.description}</p>
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
