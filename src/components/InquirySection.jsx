import { CalendarCheck, MapPin, Phone } from 'lucide-react';

export default function InquirySection() {
  return (
    <section id="inquiry" className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-oat bg-[linear-gradient(135deg,#ffffff,#eef7ff)] shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-7 sm:p-10">
            <p className="text-sm font-bold text-moss">Inquiry</p>
            <h2 className="mt-2 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
              진료 문의
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
              마취와 수술을 앞두고 걱정되는 부분이 있다면 현재 상태와 이전 검사 기록을
              함께 알려주세요. 필요한 평가 방향을 차분히 안내드립니다.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href="tel:025087678"
                className="flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf text-moss">
                  <Phone size={19} />
                </span>
                <span>
                  <span className="block text-xs font-bold text-ink/50">전화번호</span>
                  <span className="block font-bold">02-508-7678</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf text-moss">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="block text-xs font-bold text-ink/50">위치</span>
                  <span className="block font-bold">서울 강남구 도곡로 189 1층</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end bg-moss p-7 text-white sm:p-10">
            <div className="mb-8">
              <CalendarCheck size={34} />
              <p className="mt-5 text-2xl font-bold leading-tight">
                필요한 순간에 바로 연결될 수 있도록
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                예약, 전화 문의 버튼은 추후 실제 네이버 예약과 전화 연결로 교체할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-moss transition hover:bg-leaf"
              >
                네이버 예약하기
              </a>
              <a
                href="tel:025087678"
                className="rounded-full border border-white/45 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                전화 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
