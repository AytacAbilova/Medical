'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import { servicesContent } from '@/utils';

interface Props {
  locale?: 'az' | 'en';
}


export default function OurServices({ locale = 'az' }: Props) {
  const router = useRouter();
  const services = servicesContent[locale];

  return (
    <section className="bg-[#0F172A] py-32 text-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">

        {/* Header */}
        <span className="uppercase tracking-[0.15em] text-sm font-extrabold text-[#2A69AC]">
          {locale === 'az' ? "Xidmətlərimiz" : "Our Services"}
        </span>

        <h2 className="mt-6 text-[clamp(36px,4vw,56px)] font-extrabold leading-tight font-[var(--font-manrope)]">
          {locale === 'az'
            ? "Premium hovuz, hamam və spa layihələri"
            : "Premium Pools & Spa Solutions"}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-400 font-[var(--font-dm-sans)]">
          {locale === 'az'
            ? "Turan İnşaat olaraq fərdi və ictimai hovuzlar, türk hamamı, sauna və spa layihələrinin dizaynı və tikintisində peşəkar xidmət göstəririk. Ideal həllərimiz villa, otel və spa mərkəzləri üçün nəzərdə tutulub."
            : "Turan Construction provides professional design and construction of private and public pools, Turkish baths, saunas, and spa projects. Our solutions are ideal for villas, hotels, and spa centers."}
        </p>

        {/* Slider */}
        <div className="mt-20">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {services.map((s:any, i:any) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => router.push(`/services/${s.slug}`)}
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />
                  <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold font-[var(--font-manrope)]">{s.title}</h3>
                    <p className="text-sm mt-6 text-slate-200 font-[var(--font-dm-sans)]">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                      Ətraflı →
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="mt-20 w-full flex justify-center">
          <Button
            text={locale === 'az' ? "Bütün xidmətlər" : "All Services"}
            link="/services"
            type={4}
          />
        </div>
      </div>
    </section>
  );
}