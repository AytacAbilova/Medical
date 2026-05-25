"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";

const content = {
  az: {
    title: "Tibbi Yazılar",
    desc: "Ürək-damar sağlamlığı haqqında faydalı məqalələr və tövsiyələr.",
    newsletter: "Tibbi yeniliklər üçün abunə olun",
    placeholder: "E-poçt ünvanınız",
    subscribeBtn: "Abunə ol",
    posts: [
      {
        id: "1",
        title: "Ürək bypass əməliyyatından sonra sağalma prosesi",
        category: "Məsləhət",
        date: "21 Yanvar, 2024",
        img: "/assets/images/blog1.jpg",
        href: "/blog/bypass-sagalma",
      },
      {
        id: "2",
        title: "10 gündəlik vəzifə — az kəsiklə böyük nəticə",
        category: "Məlumat",
        date: "7 Mart, 2024",
        href: "/blog/gundelik",
      },
      {
        id: "3",
        title: "Koronar xəstəliyin erkən əlamətlərini necə tanımaq olar?",
        category: "Xidmətlər",
        date: "15 Aprel, 2024",
        href: "/blog/koronar-elamet",
      },
      {
        id: "4",
        title: "Minimal invaziv cərrahiyyə — sürətli sağalma",
        category: "Məsləhət",
        date: "2 May, 2024",
        href: "/blog/minimal",
      },
    ],
  },
};
const categories = ["Hamısı", "Məsləhət", "Məlumat", "Xidmətlər", "Profilaktika"];

const posts = [
  {
    id: "1",
    title: "Ürək bypass əməliyyatından sonra sağalma prosesi",
    desc: "Bypass sonrası ilk həftələrdə nələrə diqqət etmək lazımdır? Həkimin tövsiyələri ilə sağalma prosesi.",
    category: "Məsləhət",
    date: "21 Yanvar, 2024",
    img: "/assets/images/blog1.jpg",
    href: "/blog/bypass-sagalma",
  },
  {
    id: "2",
    title: "Koronar xəstəliyin erkən əlamətlərini necə tanımaq olar?",
    desc: "Ürək xəstəliklərinin erkən diaqnozu həyatı xilas edə bilər. Bu əlamətlərə diqqət edin.",
    category: "Məlumat",
    date: "7 Mart, 2024",
    img: "/assets/images/blog2.jpg",
    href: "/blog/koronar-elamet",
  },
  {
    id: "3",
    title: "Minimal invaziv cərrahiyyə — az kəsik, sürətli sağalma",
    desc: "Müasir tibb minimal invaziv metodlarla böyük əməliyyatları kiçik kəsiklərlə icra etməyə imkan verir.",
    category: "Xidmətlər",
    date: "15 Aprel, 2024",
    img: "/assets/images/blog3.jpg",
    href: "/blog/minimal-invaziv",
  },
  {
    id: "4",
    title: "Ürək sağlamlığı üçün gündəlik 5 vərdiş",
    desc: "Sadə həyat tərzi dəyişiklikləri ilə ürək-damar xəstəliklərinin riskini əhəmiyyətli dərəcədə azaltmaq mümkündür.",
    category: "Profilaktika",
    date: "2 May, 2024",
    img: "/assets/images/blog4.jpg",
    href: "/blog/gundelik-verdis",
  },
  {
    id: "5",
    title: "Aorta anevrizması: əlamətlər və müalicə yolları",
    desc: "Aorta anevrizması ciddi bir vəziyyətdir. Erkən müdaxilə ilə uğurlu müalicə mümkündür.",
    category: "Məlumat",
    date: "18 İyun, 2024",
    img: "/assets/images/blog5.jpg",
    href: "/blog/aorta-anevrizm",
  },
];
const ArrowBtn = () => (
  <div className="w-9 h-9 rounded-full bg-[#EEF3FA] flex items-center justify-center shrink-0
                  group-hover:bg-[#2388ff] transition-colors duration-300">
    <ArrowUpRight size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
  </div>
);

export default function BlogSection({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];
  const [search, setSearch] = useState("");
  const [activecat, setActivecat] = useState("Hamısı");

  const filtered = posts.filter((p) => {
    const matchCat = activecat === "Hamısı" || p.category === activecat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  return (
    <section className="bg-white md:py-24 pt-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center md:mb-14 mb-7">
          <h2 className="text-[30px] md:text-[60px] font-extrabold text-[#001a56] leading-tight md:mb-4 mb-2">
            {t.title}
          </h2>
          <p className="text-[#465271] text-[16px] max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Ana grid — 2 sütun, eyni hündürlük */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

          {/* ── SOL SÜTUN ── */}
          <div className="flex flex-col gap-5 h-full">

            {/* Böyük şəkil kartı — flex-1 ilə böyüyür */}
            <Link
              href={t.posts[0].href}
              className="group bg-[#EEF3FA] rounded-3xl overflow-hidden flex-1 flex flex-col
                         hover:shadow-lg transition-all duration-300 min-h-[360px] md:p-[40px] p-[20px]"
            >
              <div className="relative w-full flex-1">
                <Image
                  src={t.posts[0].img!}
                  alt={t.posts[0].title}
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>

            {/* Sol aşağı post kartı */}
            <Link
              href={t.posts[1].href}
              className="group bg-white rounded-3xl border border-gray-100 md:p-[40px] p-[20px]
                         flex items-center justify-between gap-4
                         hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[20px] md:text-[22px] leading-snug mb-3">
                  {t.posts[1].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-bold text-[#2388ff] bg-[#EEF3FA]  md:p-[12px] p-[8px] rounded-full">
                    {t.posts[1].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{t.posts[1].date}</span>
                </div>
              </div>
              <ArrowBtn />
            </Link>
          </div>

          {/* ── SAĞ SÜTUN ── */}
          <div className="flex flex-col gap-5 h-full">

            {/* Sağ post 1 */}
            <Link
              href={t.posts[2].href}
              className="group bg-white rounded-3xl border border-gray-100 md:p-[40px] p-[20px]
                         flex items-center justify-between gap-4
                         hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[20px] md:text-[22px] leading-snug mb-3">
                  {t.posts[2].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-bold text-[#2388ff] bg-[#EEF3FA]  md:p-[12px] p-[8px] rounded-full">
                    {t.posts[2].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{t.posts[2].date}</span>
                </div>
              </div>
              <ArrowBtn />
            </Link>

            {/* Sağ post 2 */}
            <Link
              href={t.posts[3].href}
              className="group bg-white rounded-3xl border border-gray-100 md:p-[40px] p-[20px]
                         flex items-center justify-between gap-4
                         hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[20px] md:text-[22px] leading-snug mb-3">
                  {t.posts[3].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-bold text-[#2388ff] bg-[#EEF3FA]  md:p-[12px] p-[8px] rounded-full">
                    {t.posts[3].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{t.posts[3].date}</span>
                </div>
              </div>
              <ArrowBtn />
            </Link>

            {/* Newsletter kartı — flex-1 ilə qalan boşluğu doldurur */}
            <div
              className="flex-1 rounded-4xl md:p-[80px] p-8 flex flex-col justify-center gap-5"
              style={{
                background: "linear-gradient(135deg, #001a56 0%, #0a2d7a 60%, #1a4a9a 100%)",
              }}
            >
              <h3 className="text-white font-extrabold text-[24px] sm:text-[38px] leading-snug">
                {t.newsletter}
              </h3>
              <div
                className="flex rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
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
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start md:py-[120px] py-[60px]">

          {/* ── SOL — Sticky sidebar ── */}
          <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-28">

            <h2 className="text-[28px] md:text-[48px] font-extrabold text-[#001a56] leading-tight mb-5">
              Son məqalələr
            </h2>

            {/* Axtarış */}
            <div className="relative mb-5">
              <input
                type="text"
                placeholder="Məqalə axtar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 rounded-full p-4 pr-14
                 text-sm outline-none text-[#001a56] placeholder:text-gray-400
                 focus:border-[#2388ff] transition-colors duration-200"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-[#001a56] flex items-center justify-center
                       hover:bg-[#2388ff] transition-colors duration-200">
                <Search size={16} color="#fff" />
              </button>
            </div>

            {/* Kateqoriya — mobil: üfüqi scroll, desktop: şaquli list */}
            {/* Desktop */}
            <div className="hidden lg:block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActivecat(cat)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-[18px] font-semibold
                    transition-colors duration-200
                    ${i !== categories.length - 1 ? "border-b border-gray-50" : ""}
                    ${activecat === cat
                      ? "bg-[#EEF3FA] text-[#2388ff]"
                      : "text-[#001a56] hover:bg-gray-50"
                    }`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${activecat === cat ? "bg-[#2388ff]" : "bg-gray-200"}`} />
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobil — üfüqi scroll pills */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActivecat(cat)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
                    transition-colors duration-200 border
                    ${activecat === cat
                      ? "bg-[#EEF3FA] text-[#2388ff] border-[#2388ff]/30"
                      : "bg-white text-[#001a56] border-gray-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* ── SAĞ — Post siyahısı ── */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <p className="text-[#465271] text-sm py-10 text-center">Heç bir məqalə tapılmadı.</p>
            ) : (
              filtered.map((post, i) => (
                <Link
                  key={post.id}
                  href={post.href}
                  className={`group flex gap-4 lg:gap-6 py-6 lg:py-8 items-start
                    ${i !== filtered.length - 1 ? "border-b border-gray-100" : ""}
                    hover:opacity-80 transition-opacity duration-200`}
                >
                  {/* Şəkil — mobil kiçik, desktop böyük */}
                  <div className="relative w-[120px] h-[120px] lg:w-[240px] lg:h-[240px]
                        shrink-0 rounded-2xl overflow-hidden bg-[#EEF3FA]">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      quality={85}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white
                          flex items-center justify-center shadow-sm
                          group-hover:bg-[#2388ff] transition-colors duration-300">
                      <ArrowUpRight size={12} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Məzmun */}
                  <div className="flex flex-col justify-between flex-1
                        h-[120px] lg:h-[240px]">
                    <div>
                      <h3 className="text-[#001a56] font-extrabold text-[18px] lg:text-[24px]
                           leading-snug mb-1 lg:mb-3 line-clamp-2 lg:line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-[#465271] text-[13px] lg:text-[18px] leading-relaxed
                          line-clamp-2 hidden sm:block">
                        {post.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[14px] lg:text-[13px] font-bold text-[#2388ff]
                             bg-[#EEF3FA] px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[#465271] text-[12px] lg:text-[13px]">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
}