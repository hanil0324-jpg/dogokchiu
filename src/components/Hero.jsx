import {
  ArrowDown,
  BadgeCheck,
  Clock,
  HeartPulse,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const heroStats = [
  { label: '마취 전 평가', value: '심장·장기 상태 확인' },
  { label: '수술 관리', value: '집도의 직접 설명' },
  { label: '회복 관찰', value: '통증·활력 변화 추적' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-14 pt-10 sm:pt-14 lg:pb-20">
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/hospital-lobby.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-90 saturate-[0.95]"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,251,255,0.9)_0%,rgba(247,251,255,0.82)_42%,rgba(247,251,255,0.58)_70%,rgba(247,251,255,0.34)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,251,255,0.42)_0%,rgba(247,251,255,0.18)_45%,rgba(247,251,255,0.88)_100%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-[720px]">
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white/82 px-4 py-2 text-xs font-bold text-moss shadow-sm">
              <BadgeCheck size={15} />
              수술·마취 중심 진료
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white/82 px-4 py-2 text-xs font-bold text-moss shadow-sm">
              <HeartPulse size={15} />
              심장 협진 기반 평가
            </span>
          </div>

          <h1 className="max-w-[12em] break-keep text-[2.18rem] font-bold leading-[1.16] tracking-normal text-ink sm:text-[3.15rem] lg:text-[3.55rem]">
            단 한 마리를 위해 깊이 고민하는
            <span className="block">수술·마취 중심 동물병원</span>
          </h1>
          <p className="mt-6 max-w-[42rem] break-keep text-base leading-8 text-ink/70 sm:text-lg">
            노령마취, 세보플루란, 외과 박사수료, 심장 협진, 중증 케이스까지.
            도곡치유 동물병원은 보호자가 가장 걱정하는 순간에 더 깊이 살피는 진료를
            지향합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              케이스 아카이브 보기
              <ArrowDown size={18} />
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage/35 bg-white px-6 py-4 text-sm font-bold text-moss shadow-sm transition hover:-translate-y-0.5 hover:border-moss hover:text-ink"
            >
              진료 문의하기
              <MessageCircle size={18} />
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-oat/75 bg-white/75 p-4 shadow-sm">
                <p className="text-xs font-bold text-moss">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-ink">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:translate-y-6">
          <div className="absolute -right-4 -top-4 z-10 hidden rounded-2xl bg-white px-4 py-3 shadow-soft sm:block">
            <p className="flex items-center gap-2 text-sm font-bold text-ink">
              <ShieldCheck size={17} className="text-moss" />
              중증 케이스 중심 관리
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
            <img
              src="/images/hospital-surgery.png"
              alt="도곡치유동물병원 심장 노령 중증질환 전문 진료 이미지"
              className="aspect-square w-full bg-ink object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/94 p-4 shadow-soft backdrop-blur">
            <p className="text-sm font-bold text-ink">수술 전부터 회복까지 이어지는 기록</p>
            <p className="mt-1 text-xs leading-5 text-ink/62">
              마취 평가, 협진, 입원 관리 과정을 보호자 눈높이에 맞춰 차분히 설명합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl overflow-hidden rounded-[1.5rem] border border-oat bg-white shadow-soft md:grid-cols-3">
        <a href="#inquiry" className="flex items-center gap-4 border-b border-oat p-5 md:border-b-0 md:border-r">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-moss">
            <Clock size={20} />
          </span>
          <span>
            <span className="block text-xs font-bold text-ink/45">진료 문의</span>
            <span className="block text-sm font-bold text-ink">02-508-7678</span>
          </span>
        </a>
        <a href="#inquiry" className="flex items-center gap-4 border-b border-oat p-5 md:border-b-0 md:border-r">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-moss">
            <MapPin size={20} />
          </span>
          <span>
            <span className="block text-xs font-bold text-ink/45">오시는 길</span>
            <span className="block text-sm font-bold text-ink">서울 강남구 도곡로 189 1층</span>
          </span>
        </a>
        <a href="#cases" className="flex items-center gap-4 p-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-moss">
            <ShieldCheck size={20} />
          </span>
          <span>
            <span className="block text-xs font-bold text-ink/45">케이스 아카이브</span>
            <span className="block text-sm font-bold text-ink">수술·마취·심장 협진 기록</span>
          </span>
        </a>
      </div>
    </section>
  );
}
