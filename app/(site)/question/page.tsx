"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import blogData from "@/data/blog.json";

const POSTS_PER_PAGE = 5;

const categories = ["Hamısı", ...Array.from(new Set(blogData.map((p) => p.category)))];

const ArrowBtn = () => (
  <div className="w-9 h-9 rounded-full bg-[#EEF3FA] flex items-center justify-center shrink-0
                  group-hover:bg-[#2388ff] transition-colors duration-300">
    <ArrowUpRight size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
  </div>
);

export default function BlogSection({ locale = "az" }: { locale?: "az" }) {
  const [search, setSearch]     = useState("");
  const [activecat, setActivecat] = useState("Hamısı");
  const [page, setPage]         = useState(1);

  const featured = blogData.slice(0, 4);

  const filtered = blogData.filter((p) => {
    const matchCat    = activecat === "Hamısı" || p.category === activecat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  // Filtr dəyişdikdə səhifəni sıfırla
  const handleCat = (cat: string) => { setActivecat(cat); setPage(1); };
  const handleSearch = (v: string) => { setSearch(v); setPage(1); };

  return (
    <section className="bg-white md:py-24 pt-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center md:mb-14 mb-7">
          <h2 className="text-[30px] md:text-[60px] font-extrabold text-[#001a56] leading-tight md:mb-4 mb-2">
            Tibbi Yazılar
          </h2>
          <p className="text-[#465271] text-[16px] max-w-xl mx-auto">
            Dr. Xatirə Aslanovanın infeksion xəstəliklər üzrə elmi-populyar məqalələri.
          </p>
        </div>

        {/* ── Featured grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

          {/* SOL SÜTUN */}
          <div className="flex flex-col gap-5 h-full">
            <Link
              href={`/question/${featured[0].slug}`}
              className="group bg-[#EEF3FA] rounded-3xl overflow-hidden flex-1 flex flex-col
                         hover:shadow-lg transition-all duration-300 min-h-[360px]"
            >
              <div className="relative w-full flex-1">
                <Image src={featured[0].img} alt={featured[0].title}
                  fill quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#001a56] font-extrabold text-[20px] leading-snug mb-3 line-clamp-2">
                  {featured[0].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[#2388ff] bg-white px-3 py-1 rounded-full">
                    {featured[0].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{featured[0].date}</span>
                </div>
              </div>
            </Link>

            <Link
              href={`/question/${featured[1].slug}`}
              className="group bg-white rounded-3xl border border-gray-100 md:p-[40px] p-[20px]
                         flex items-center justify-between gap-4 hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[18px] md:text-[22px] leading-snug mb-3 line-clamp-2">
                  {featured[1].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[#2388ff] bg-[#EEF3FA] px-3 py-1.5 rounded-full">
                    {featured[1].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{featured[1].date}</span>
                </div>
              </div>
              <ArrowBtn />
            </Link>
          </div>

          {/* SAĞ SÜTUN */}
          <div className="flex flex-col gap-5 h-full">
            <Link
              href={`/question/${featured[2].slug}`}
              className="group bg-white rounded-3xl border border-gray-100 md:p-[40px] p-[20px]
                         flex items-center justify-between gap-4 hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[18px] md:text-[22px] leading-snug mb-3 line-clamp-2">
                  {featured[2].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[#2388ff] bg-[#EEF3FA] px-3 py-1.5 rounded-full">
                    {featured[2].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{featured[2].date}</span>
                </div>
              </div>
              <ArrowBtn />
            </Link>

            <Link
              href={`/question/${featured[3].slug}`}
              className="group bg-white rounded-3xl border border-gray-100 md:p-[40px] p-[20px]
                         flex items-center justify-between gap-4 hover:shadow-md transition-all duration-300"
            >
              <div>
                <h3 className="text-[#001a56] font-extrabold text-[18px] md:text-[22px] leading-snug mb-3 line-clamp-2">
                  {featured[3].title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[#2388ff] bg-[#EEF3FA] px-3 py-1.5 rounded-full">
                    {featured[3].category}
                  </span>
                  <span className="text-[#465271] text-[13px]">{featured[3].date}</span>
                </div>
              </div>
              <ArrowBtn />
            </Link>

            {/* Newsletter */}
            <div
              className="flex-1 rounded-3xl md:p-[60px] p-8 flex flex-col justify-center gap-5"
              style={{ background: "linear-gradient(135deg, #001a56 0%, #0a2d7a 60%, #1a4a9a 100%)" }}
            >
              <h3 className="text-white font-extrabold text-[24px] sm:text-[34px] leading-snug">
                Tibbi yeniliklər üçün abunə olun
              </h3>
              <div
                className="flex rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <input
                  type="email"
                  placeholder="E-poçt ünvanınız"
                  className="flex-1 min-w-0 bg-transparent text-white text-sm px-5 py-3.5 outline-none placeholder:text-slate-400"
                />
                <button className="shrink-0 bg-white text-[#001a56] font-bold text-sm px-6 py-3.5 m-1 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  Abunə ol
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Post siyahısı + sidebar ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start md:py-[120px] py-[60px]">

          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-28">
            <h2 className="text-[28px] md:text-[48px] font-extrabold text-[#001a56] leading-tight mb-5">
              Son məqalələr
            </h2>

            <div className="relative mb-5">
              <input
                type="text"
                placeholder="Məqalə axtar..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
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

            {/* Desktop kateqoriya */}
            <div className="hidden lg:block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => handleCat(cat)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-[16px] font-semibold
                              transition-colors duration-200
                              ${i !== categories.length - 1 ? "border-b border-gray-50" : ""}
                              ${activecat === cat ? "bg-[#EEF3FA] text-[#2388ff]" : "text-[#001a56] hover:bg-gray-50"}`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${activecat === cat ? "bg-[#2388ff]" : "bg-gray-200"}`} />
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobil kateqoriya */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCat(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200
                              ${activecat === cat
                                ? "bg-[#EEF3FA] text-[#2388ff] border-[#2388ff]/30"
                                : "bg-white text-[#001a56] border-gray-200"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Post siyahısı */}
          <div className="flex-1 w-full">
            {paginated.length === 0 ? (
              <p className="text-[#465271] text-sm py-10 text-center">Heç bir məqalə tapılmadı.</p>
            ) : (
              <>
                {/* Post list */}
                <div>
                  {paginated.map((post, i) => (
                    <Link
                      key={post.id}
                      href={`/question/${post.slug}`}
                      className={`group flex gap-4 lg:gap-6 py-6 lg:py-8 items-start
                                  ${i !== paginated.length - 1 ? "border-b border-gray-100" : ""}
                                  hover:opacity-80 transition-opacity duration-200`}
                    >
                      <div className="relative w-[120px] h-[120px] lg:w-[200px] lg:h-[160px]
                                      shrink-0 rounded-2xl overflow-hidden bg-[#EEF3FA]">
                        <Image src={post.img} alt={post.title} fill quality={85}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white
                                        flex items-center justify-center shadow-sm
                                        group-hover:bg-[#2388ff] transition-colors duration-300">
                          <ArrowUpRight size={12} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      <div className="flex flex-col justify-between flex-1 h-[120px] lg:h-[160px]">
                        <div>
                          <h3 className="text-[#001a56] font-extrabold text-[16px] lg:text-[20px]
                                         leading-snug mb-1 lg:mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-[#465271] text-[13px] lg:text-[15px] leading-relaxed
                                        line-clamp-2 hidden sm:block">
                            {post.desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] lg:text-[12px] font-bold text-[#2388ff] bg-[#EEF3FA] px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-[#465271] text-[11px] lg:text-[12px]">{post.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* ── Pagination ── */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">

               

                    {/* Düymələr */}
                    <div className="flex items-center gap-2">
                      {/* Əvvəlki */}
                      <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center
                                   text-[#001a56] hover:bg-[#EEF3FA] hover:border-[#2388ff]/30
                                   disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      {/* Nömrəli düymələr */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-200
                                      ${page === p
                                        ? "bg-[#001a56] text-white shadow-md"
                                        : "border border-gray-200 text-[#001a56] hover:bg-[#EEF3FA] hover:border-[#2388ff]/30"}`}
                        >
                          {p}
                        </button>
                      ))}

                      {/* Növbəti */}
                      <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center
                                   text-[#001a56] hover:bg-[#EEF3FA] hover:border-[#2388ff]/30
                                   disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}