'use client'
import { useState, useRef } from "react";
import Button from "@/components/common/Button";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: "My Class (Yasamal) – Hovuz",
      slug: "myclass-hovuz",
      description: "Fitness mərkəzi üçün müasir filtrasiya sistemi ilə qurulmuş hovuz layihəsi.",
      image: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "My Class (Yasamal) – Cakuzi",
      slug: "myclass-cakuzi",
      description: "Relaks və hidromasaj üçün premium jacuzzi sistemi.",
      image: "https://i.pinimg.com/1200x/39/be/20/39be2079cb4742d9b2d16fa225b80464.jpg",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "My Class (Yasamal) – Sauna",
      slug: "myclass-sauna",
      description: "Fin sauna texnologiyası ilə hazırlanmış zona.",
      image: "https://i.pinimg.com/736x/22/31/ec/2231ec16f22e1b76f1b3be82a057f785.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "My Class (Yasamal) – Türk Hamamı",
      slug: "myclass-hamam",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      image: "https://i.pinimg.com/1200x/26/cc/5b/26cc5b9a58ef92af3266c7dfeaabceb0.jpg",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Hyatt Regency – Çöl Hovuz",
      slug: "hyatt-pool",
      description: "Otellər üçün geniş açıq hovuz layihəsi.",
      image: "https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/our-project-1-1.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
  {
      title: "Daşma hovuz (Bilgəh Mircəlal küç.)",
      slug: "myclass-hovuz",
      description: "Fitness mərkəzi üçün müasir filtrasiya sistemi ilə qurulmuş hovuz layihəsi.",
      image: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },  {
      title: "Daşma hovuz (Badamdar layihəsi)",
      slug: "myclass-hovuz",
      description: "Fitness mərkəzi üçün müasir filtrasiya sistemi ilə qurulmuş hovuz layihəsi.",
      image: "https://i.pinimg.com/736x/83/31/41/833141387254914189437991760c3432.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
//     Daşma hovuz (Bilgəh Mircəlal küç.)
// Daşma hovuz (Badamdar layihəsi)
  ];

  const handlePlayClick = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  return (
    <section ref={sectionRef} className="py-10 bg-white text-gray-900">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* 🔥 Swiper Featured - Fade effect */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          loop
          className="relative mb-20 rounded-3xl h-[400px] md:h-[500px]"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.slug}>
              <div className="relative w-full h-full group cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-700" />
                <div className="absolute bottom-0 p-8 text-white transition-transform duration-700">
                  <span className="text-[#C49B63] text-sm font-semibold">Premium Layihə</span>
                  <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                  <p className="mt-3 text-gray-300 max-w-xl">{project.description}</p>
                </div>

                {/* Hover play icon */}
                <div
                  onClick={() => handlePlayClick(index)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-black/60 p-5 rounded-full text-white text-3xl hover:text-[#C49B63] transition">
                    <FaPlay />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔽 Projects list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              onClick={() => {
                setActiveIndex(i);
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold group-hover:text-[#C49B63] transition-colors">{project.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{project.description}</p>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-20 flex justify-center">
          <Button text="Əlaqə saxla" link="/contact" type={4} />
        </div>
      </div>

      {/* 🎬 Video Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-black rounded-xl overflow-hidden w-[90%] max-w-5xl flex flex-col md:flex-row relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-[#C49B63] transition"
            >
              &times;
            </button>

            <video
              src={projects[activeIndex].video}
              controls
              autoPlay
              className="w-full md:w-2/3 h-auto rounded-xl"
            />

            <div className="p-6 text-white md:w-1/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{projects[activeIndex].title}</h3>
              <p className="text-gray-300">{projects[activeIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}