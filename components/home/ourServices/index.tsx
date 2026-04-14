'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const testimonials = [
  {
    text: "Xaricdə əməliyyatdan imtina etdilər. Dr. Beyrək bizi qurtardı. İki ay sonra həyatımıza qayıtdıq.",
    name: "Pasiyent ailəsi",
  },
  {
    text: "82 yaşında bypass keçirdim. 6 gün sonra evə getdim. Çox sağ olun, həkimim.",
    name: "Hüseynqulu baba",
  },
  {
    text: "4 damar bypass – klinik prosedur çox peşəkar aparıldı. Bütün göstəricilər normal.",
    name: "Biləsuvar pasiyenti",
  },
  {
    text: "32 yaşında ASD ilə gəldim. 5 gün sonra evə yazıldım. Gözəl komanda!",
    name: "Gənc pasiyent",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0F172A] py-25 text-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">

        {/* Header */}
        <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#C49B63]">
          PASİYENT RƏYLƏRİ
        </span>

        <h2 className="mt-6 text-3xl md:text-[56px] font-extrabold leading-tight font-[var(--font-manrope)]">
          Pasiyentlərimiz bizim haqqımızda nə deyir?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 font-[var(--font-dm-sans)]">
          Uğurlu əməliyyatlar və məmnun pasiyentlər bizim əsas prioritetimizdir.
        </p>

        {/* Slider */}
        <div className="mt-16">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop
            className="!h-full"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide
                key={i}
                className="h-auto !h-full flex"
              >
                <div className="bg-white rounded-[20px] p-6 shadow-sm border text-left flex flex-col justify-between flex-1 min-h-[320px]">

                  {/* Stars */}
                  <div className="flex gap-1 text-[#F59E0B] text-lg">
                    ★★★★★
                  </div>

                  {/* Text */}
                  <p className="mt-4 text-slate-600 leading-relaxed flex-1">
                    {item.text}
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] bg-gray-200 my-6" />

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-semibold text-[#0F172A]">
                        {item.name}
                      </p>
                      <span className="text-sm text-slate-400">
                        Pasiyent
                      </span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}