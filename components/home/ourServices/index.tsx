'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

interface Props {
  locale?: 'az' | 'en';
}

const servicesContent = {
  az: [
    {
      title: "Hovuz Tikintisi",
      desc: "Fərdi və ictimai hovuzların dizaynı və quraşdırılması. Villa, otel və spa üçün ideal.",
      img: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      link: "/services/pool-construction",
      cta: "Ətraflı →",
    },
    {
      title: "Türk Hamamı",
      desc: "Mərmər dekor və müasir buxar sistemləri ilə rahat və estetik layihələr.",
      img: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
      link: "/services/turkish-bath",
      cta: "Ətraflı →",
    },
    {
      title: "Sauna",
      desc: "Fin və infraqırmızı saunaların dizaynı və quraşdırılması ilə sağlamlıq və rahatlıq.",
      img: "https://i.pinimg.com/736x/4b/34/8d/4b348d91042e2b81263361b19668b69b.jpg",
      link: "/services/sauna",
      cta: "Ətraflı →",
    },
    {
      title: "Spa və Relax Zonaları",
      desc: "Tam istirahət və spa sahələrinin inşası – jacuzzi, hidromasaj və masaj otaqları.",
      img: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
      link: "/services/spa-relax",
      cta: "Ətraflı →",
    },
    {
      title: "Duz və Buxar Otaqları",
      desc: "Haloterapiya və buxar terapiyası üçün xüsusi otaqlar, sağlamlıq və rahatlıq üçün.",
      img: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
      link: "/services/salt-steam",
      cta: "Ətraflı →",
    },
    {
      title: "Rus Hamamı",
      desc: "Təbii ağac materialları ilə klassik rus hamamı layihələri, enerji və detoks effekti.",
      img: "https://i.pinimg.com/1200x/3d/d3/99/3dd3996ef102678e11bcdd2abdd908f1.jpg",
      link: "/services/russian-bath",
      cta: "Ətraflı →",
    },
  ],
  en: [
    {
      title: "Pool Construction",
      desc: "Design and installation of private and public pools. Ideal for villas, hotels, and spas.",
      img: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      link: "/services/pool-construction",
      cta: "Learn More →",
    },
    {
      title: "Turkish Bath",
      desc: "Comfortable and aesthetic projects with marble decor and modern steam systems.",
      img: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
      link: "/services/turkish-bath",
      cta: "Learn More →",
    },
    {
      title: "Sauna",
      desc: "Design and installation of Finnish and infrared saunas for health and comfort.",
      img: "https://i.pinimg.com/736x/4b/34/8d/4b348d91042e2b81263361b19668b69b.jpg",
      link: "/services/sauna",
      cta: "Learn More →",
    },
    {
      title: "Spa & Relax Zones",
      desc: "Construction of full relaxation and spa areas – jacuzzis, hydro-massage, and massage rooms.",
      img: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
      link: "/services/spa-relax",
      cta: "Learn More →",
    },
    {
      title: "Salt & Steam Rooms",
      desc: "Special rooms for halotherapy and steam therapy for health and relaxation.",
      img: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
      link: "/services/salt-steam",
      cta: "Learn More →",
    },
    {
      title: "Russian Bath",
      desc: "Classic Russian bath projects with natural wood materials, energy, and detox effect.",
      img: "https://i.pinimg.com/1200x/3d/d3/99/3dd3996ef102678e11bcdd2abdd908f1.jpg",
      link: "/services/russian-bath",
      cta: "Learn More →",
    },
  ],
};

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
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {services.map((s, i) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => router.push(s.link)}
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />
                  <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[65%] group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold font-[var(--font-manrope)]">{s.title}</h3>
                    <p className="text-sm mt-4 text-slate-200 font-[var(--font-dm-sans)]">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                      {s.cta}
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