'use client';

import { servicesContent, type Locale, type ServiceItem } from '@/utils';
import { useRouter } from 'next/navigation';

interface Props {
  locale?: Locale;
}

const images = [
  "/assets/images/contactus.png",
  "/assets/images/image2.png",
  "/assets/images/image3.png",
  "/assets/images/image4.png",
  "/assets/images/image1.png",
  "/assets/images/image3.png",
  "/assets/images/image4.png",
  "/assets/images/image1.png"
];

export default function Services({ locale = "az" }: Props) {
  const services = servicesContent[locale];
  const router = useRouter();

  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s: ServiceItem, i: number) => {
            const imgSrc = s.img || images[i % images.length]; 

            return (
              <article
                key={i}
                data-aos="fade-up"
                data-aos-offset={-300}
                onClick={() => router.push(`/services/${s.slug.replace("/", "")}`)}
                className="relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <img
                  src={imgSrc}
                  alt={s.title}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-3xl" />

                <div className="absolute bottom-0 left-4 right-4 p-6 z-20 transform translate-y-[30%] group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-extrabold text-white">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm lg:text-base text-slate-200">
                    {s.desc}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                    {locale === "az" ? "Ətraflı →" : "Learn More →"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
