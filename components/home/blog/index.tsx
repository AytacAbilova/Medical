import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────
const content = {
  az: {
    title:       "Tibbi Yazılar",
    desc:        "Ürək-damar sağlamlığı haqqında faydalı məqalələr və tövsiyələr.",
    newsletter:  "Tibbi yeniliklər üçün abunə olun",
    placeholder: "E-poçt ünvanınız",
    subscribeBtn:"Abunə ol",
    posts: [
      {
        id:       "1",
        title:    "Ürək bypass əməliyyatından sonra sağalma prosesi",
        category: "Məsləhət",
        date:     "21 Yanvar, 2024",
        img:      "/assets/images/blog1.jpg",
        href:     "/blog/bypass-sagalma",
        featured: true,
      },
      {
        id:       "2",
        title:    "Koronar xəstəliyin erkən əlamətlərini necə tanımaq olar?",
        category: "Məlumat",
        date:     "7 Mart, 2024",
        href:     "/blog/koronar-elamet",
        featured: false,
      },
      {
        id:       "3",
        title:    "Minimal invaziv cərrahiyyə — az kəsik, sürətli sağalma",
        category: "Xidmətlər",
        date:     "15 Aprel, 2024",
        href:     "/blog/minimal-invaziv",
        featured: false,
      },
    ],
  },
};

export default function BlogSection({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];
  const featured  = t.posts.find((p) => p.featured)!;
  const secondary = t.posts.filter((p) => !p.featured);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-[48px] font-extrabold text-[#001a56] leading-tight mb-4"
          >
            {t.title}
          </h2>
          <p
            data-aos="fade-up"
            className="text-[#465271] text-[15px] max-w-xl mx-auto"
          >
            {t.desc}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* SOL — Böyük featured kart */}
          <Link
            href={featured.href}
            data-aos="fade-right"
            className="group bg-[#EEF3FA] rounded-3xl overflow-hidden flex flex-col
                       hover:shadow-lg transition-all duration-300"
          >
            {/* Şəkil */}
            <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">
              <Image
                src={featured.img!}
                alt={featured.title}
                fill
                quality={90}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Alt mətn */}
            <div className="p-7 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[20px] leading-snug mb-3">
                  {featured.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-[#2388ff] bg-white px-3 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{featured.date}</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0
                              group-hover:bg-[#2388ff] transition-colors duration-300">
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </Link>

          {/* SAĞ — 2 kiçik post + newsletter */}
          <div className="flex flex-col gap-5">

            {/* Kiçik postlar */}
            {secondary.map((post) => (
              <Link
                key={post.id}
                href={post.href}
                data-aos="fade-left"
                className="group bg-white rounded-3xl border border-gray-100 p-6
                           flex items-center justify-between gap-4
                           hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div>
                  <h3 className="text-[#001a56] font-extrabold text-[17px] leading-snug mb-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#2388ff] bg-[#EEF3FA] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[#465271] text-[13px]">{post.date}</span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#EEF3FA] flex items-center justify-center shrink-0
                                group-hover:bg-[#2388ff] transition-colors duration-300">
                  <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </Link>
            ))}

            {/* Newsletter kartı */}
            <div
              data-aos="fade-up"
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{
                background: "linear-gradient(135deg, #001a56 0%, #0a2d7a 60%, #1a4a9a 100%)",
              }}
            >
              <h3 className="text-white font-extrabold text-[22px] sm:text-[26px] leading-snug">
                {t.newsletter}
              </h3>
              <div
                className="flex rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <input
                  type="email"
                  placeholder={t.placeholder}
                  className="flex-1 min-w-0 bg-transparent text-white text-sm px-5 py-3.5 outline-none placeholder:text-slate-400"
                />
                <button className="shrink-0 bg-white text-[#001a56] font-bold text-sm px-6 py-3.5 m-1 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  {t.subscribeBtn}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}