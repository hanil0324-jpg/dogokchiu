export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-[linear-gradient(135deg,#d8ecff_0%,#f7fbff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-bold text-moss">Our Philosophy</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
            치유가 수술과 마취를 더 깊게 보는 이유
          </h2>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
          <p className="text-base leading-8 text-ink/72">
            보호자님들이 가장 걱정하는 순간은 대개 마취와 수술을 앞둔 순간입니다.
            도곡치유 동물병원은 단순히 수술을 진행하는 것보다, 이 아이가 마취를 견딜 수
            있는지, 심장과 장기 상태는 어떤지, 수술 후 회복 과정은 어떻게 관리해야 하는지를
            먼저 고민합니다. 그래서 노령마취, 세보플루란, 심장 협진, 중증 케이스 관리라는
            기준을 진료의 중심에 두고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
