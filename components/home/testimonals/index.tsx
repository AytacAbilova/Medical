"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Product = {
  title: string;
  desc: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Skimmer Hovuz Sistemləri",
    desc: "Sadə və sərfəli filtrasiya sistemi ilə şəxsi hovuzlar üçün ideal həll.",
    image: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
  },
  {
    title: "Daşma (Infinity) Hovuzlar",
    desc: "Estetik dizayn və yüksək su dövriyyəsi ilə premium hovuz sistemləri.",
    image: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
  },
  {
    title: "UV Dezinfeksiya Sistemləri",
    desc: "Kimyəvi maddələri minimuma endirən müasir su təmizləmə texnologiyası.",
    image: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
  },
  {
    title: "Duz Elektroliz Sistemləri",
    desc: "Duzdan xlor istehsal edərək suyu daha təbii və təmiz saxlayır.",
    image: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
  },
];

export const Products = () => {
  return (
    <section className="py-20 px-4 bg-[#0E172A] text-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[#C49B63] font-semibold md:text-[16px] uppercase tracking-wider">
            Məhsullarımız
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-extrabold mt-3">
            Hovuz və SPA üçün texnoloji həllər
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Müasir hovuz sistemləri, filtrasiya və spa avadanlıqları ilə
            keyfiyyətli və uzunömürlü həllər təqdim edirik.
          </p>
        </div>
        <div className="swipperwrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="relative overflow-hidden rounded-[24px] group cursor-pointer">

                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-4 right-4 p-5 z-20 
        transform translate-y-[60%] group-hover:translate-y-0 
        transition-all duration-500">

                    <h3 className="text-lg font-bold text-white">
                      {p.title}
                    </h3>

                    <p className="text-sm mt-4 text-slate-200">
                      {p.desc}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                      Ətraflı →
                    </span>
                  </div>

                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};