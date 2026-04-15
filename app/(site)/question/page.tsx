"use client";
import { useState } from "react";
import Link from "next/link";

const posts = [
  {
    slug: "aciq-urek-emeliyyati-nece-icra-edilir",
    category: "Cərrahiyyə",
    categoryColor: "#1565C0",
    title: "Açıq Ürək Əməliyyatı Necə İcra Edilir?",
    excerpt: "Kardiopulmoner bypass, döş sümüyünün açılması və cərrahın ürəyə birbaşa müdaxiləsi – addım-addım izah.",
    date: "2024-02-21",
    readTime: "6 dəq",
    featured: true,
    hot: true,
  },
  {
    slug: "koronar-bypass-damarlar-haradan-alinir",
    category: "Bypass",
    categoryColor: "#1565C0",
    title: "Koronar Bypass: Damarlar Haradan Alınır?",
    excerpt: "LIMA, radial artery və safen vena – tam arterial revaskulyarizasiyanın üstünlükləri.",
    date: "2024-03-10",
    readTime: "5 dəq",
    featured: true,
  },
  {
    slug: "aorta-anevrizması-sessiz-saatli-bomba",
    category: "Aorta",
    categoryColor: "#C62828",
    title: "Aorta Anevrizması – Səssiz Saatlı Bomba",
    excerpt: "55 mm hədd, yırtılma riski, simptomlar – vaxtında aşkarlama həyatı xilas edir.",
    date: "2024-03-28",
    readTime: "7 dəq",
    featured: true,
    urgent: true,
  },
  {
    slug: "38-yasinda-infarkt-urek-xesteliyinin-cavanlasması",
    category: "Risk",
    categoryColor: "#C62828",
    title: "38 Yaşında İnfarkt: Ürək Xəstəliyi Cavanlaşır",
    excerpt: "Stres, piylənmə, siqaret – gənc yaşda ürək infarktının arxasında duran amillər.",
    date: "2024-04-05",
    readTime: "5 dəq",
    urgent: true,
  },
  {
    slug: "ef-30-emeliyyat-mumkundurmu",
    category: "Xüsusi Hallar",
    categoryColor: "#00796B",
    title: "EF (Atım Fraksiyası) 30% – Əməliyyat Mümkündürmü?",
    excerpt: "Yüksək risk, zəif ürək funksiyası – Dr. Abbaszadənin uğurlu təcrübəsindən.",
    date: "2024-04-18",
    readTime: "6 dəq",
  },
  {
    slug: "asd-emeliyyati-anadangelme-qusurun-cerrahi-mualicesi",
    category: "Anadangəlmə",
    categoryColor: "#1565C0",
    title: "ASD Əməliyyatı: Anadangəlmə Qüsurun Cərrahi Müalicəsi",
    excerpt: "Qulaqcıqlar arası çəpər defekti – sinus venosus növü də daxil olmaqla müalicə variantları.",
    date: "2024-05-02",
    readTime: "6 dəq",
  },
  {
    slug: "varikoz-venaların-lazer-mualicesi-vs-cerrahiyye",
    category: "Periferik Damar",
    categoryColor: "#00796B",
    title: "Varikoz Venaların Lazer Müalicəsi vs Cərrahiyyə",
    excerpt: "EVLA, skleroterapiya, fleboektomiya – hansı üsul sizə uyğundur?",
    date: "2024-05-17",
    readTime: "5 dəq",
  },
  {
    slug: "karotid-endarterektomiya-insultu-nece-onleyer",
    category: "İnsult Profilaktikası",
    categoryColor: "#C62828",
    title: "Karotid Endarterektomiya – İnsultu Necə Önləyər?",
    excerpt: "70%+ karotid stenozu, yağ plakı çıxarılması – insult riskini kəskin azaltmağın yolu.",
    date: "2024-06-03",
    readTime: "5 dəq",
  },
  {
    slug: "urek-qapagi-emeliyyati-temir-mi-evzetme-mi",
    category: "Qapaq Cərrahiyyəsi",
    categoryColor: "#1565C0",
    title: "Ürək Qapağı Əməliyyatı: Təmir mi, Əvəzetmə mi?",
    excerpt: "Mitral, aorta, triküspid – qapaq patologiyalarında cərrahi qərarın meyarları.",
    date: "2024-06-20",
    readTime: "7 dəq",
  },
  {
    slug: "hipertoniya-sessiz-qatil",
    category: "Kardiovaskulyar Risk",
    categoryColor: "#C62828",
    title: "Hipertoniya: Səssiz Qatil",
    excerpt: "120/80 norması, yüksək qan təzyiqinin simptomları, dərman vs. həyat tərzi.",
    date: "2024-07-08",
    readTime: "4 dəq",
    urgent: true,
  },
  {
    slug: "aciq-urek-emeliyyatından-sonra-heyat",
    category: "Reabilitasiya",
    categoryColor: "#00796B",
    title: "Açıq Ürək Əməliyyatından Sonra Həyat",
    excerpt: "Sağalma müddəti, reabilitasiya, idman, diet – bypass sonrası tam bərpa üçün rəhbər.",
    date: "2024-07-25",
    readTime: "8 dəq",
  },
  {
    slug: "lmca-stenozu-ana-koronar-arteriya-daralması",
    category: "Bypass",
    categoryColor: "#1565C0",
    title: "LMCA Stenozu: Ana Koronar Arteriya Daralması",
    excerpt: "Sol ana koronar arteriyada 80–85% stenoz – ən yüksək risk qrupu üçün bypass taktikası.",
    date: "2024-08-12",
    readTime: "6 dəq",
  },
  {
    slug: "şirvanda-aciq-urek-cerrahiyyesi-tarixi-hadise",
    category: "Hadisə & PR",
    categoryColor: "#1A3A5C",
    title: "Şirvanda Açıq Ürək Cərrahiyyəsi – Tarixi Hadisə",
    excerpt: "21 fevral 2024 – TƏBİB nəzarəti altında Şirvan Diaqnostik Mərkəzdə bölgənin ilk açıq ürək əməliyyatı.",
    date: "2024-02-21",
    readTime: "4 dəq",
    featured: true,
  },
  {
    slug: "eyni-seandsda-3-emeliyyat-mumkundurmu",
    category: "Xüsusi Hallar",
    categoryColor: "#00796B",
    title: "Eyni Seansda 3 Əməliyyat: Mümkündürmü?",
    excerpt: "CABG x4 + nefrektomiya + vena cava trombektomiya – çox sahəli nadir müdaxilənin arxasındakı həqiqət.",
    date: "2024-09-01",
    readTime: "5 dəq",
  },
  {
    slug: "periferik-damar-xesteliyinden-qorunma",
    category: "Periferik Damar",
    categoryColor: "#00796B",
    title: "Qan Dövranı Pozğunluğu: Alt Ətrafların Damarlarını Necə Qoruyaq?",
    excerpt: "Periferik arteriya xəstəliyi, klodikasiya, aorta-bifemoral bypass – erkən diaqnostika önəmi.",
    date: "2024-09-18",
    readTime: "5 dəq",
  },
  {
    slug: "xaricde-redd-edilmisdim-azerbaycanda-xilas-oldum",
    category: "Pasiyent Hekayəsi",
    categoryColor: "#1A3A5C",
    title: "Xaricdə Rədd Edilmişdim – Azərbaycanda Xilas Oldum",
    excerpt: "\"Artıq heç bir şey etmək olmaz\" dedilər. Dr. Abbaszadə isə əks fikirdi.",
    date: "2024-10-05",
    readTime: "4 dəq",
    hot: true,
  },
];
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
const categoryColors: Record<string, string> = {
  "Cərrahiyyə": "#1565C0",
  "Bypass": "#1565C0",
  "Aorta": "#C62828",
  "Risk": "#C62828",
  "Xüsusi Hallar": "#00796B",
  "Anadangəlmə": "#1565C0",
  "Periferik Damar": "#00796B",
  "İnsult Profilaktikası": "#C62828",
  "Qapaq Cərrahiyyəsi": "#1565C0",
  "Kardiovaskulyar Risk": "#C62828",
  "Reabilitasiya": "#00796B",
  "Hadisə & PR": "#1A3A5C",
  "Pasiyent Hekayəsi": "#1A3A5C",
};

const allCategories = ["Hamısı", ...Array.from(new Set(posts.map((p) => p.category)))];

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString("az-AZ", { day: "numeric", month: "long", year: "numeric" });
}

function CategoryPill({ cat, color }: { cat: string; color: string }) {
  return (
    <span
      className="text-xs font-bold px-3 py-1 rounded-full"
      style={{ background: `${color}15`, color }}
    >
      {cat}
    </span>
  );
}

function PostCover({ post, index }: { post: (typeof posts)[0]; index: number }) {
  const gradients: Record<string, string> = {
    "#1565C0": "linear-gradient(135deg, #1565C0 0%, #1A3A5C 100%)",
    "#C62828": "linear-gradient(135deg, #C62828 0%, #7B1818 100%)",
    "#00796B": "linear-gradient(135deg, #00796B 0%, #004D40 100%)",
    "#1A3A5C": "linear-gradient(135deg, #1A3A5C 0%, #0D2137 100%)",
  };

  const gradient = gradients[post.categoryColor] || gradients["#1A3A5C"];
  const imageSrc = images[index % images.length];

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* şəkil */}
      <img
        src={imageSrc}
        alt={post.title}
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div
        className="absolute inset-0"
        style={{ background: gradient, opacity: 0.25 }}
      />
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filtered =
    activeCategory === "Hamısı"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <section className="bg-[#F0F4F8] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">

          {/* ── LEFT: MAIN CONTENT ── */}
          <div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-1">
              {allCategories.map((cat) => {
                const active = activeCategory === cat;
                const color = cat === "Hamısı" ? "#1A3A5C" : (categoryColors[cat] || "#1A3A5C");
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200"
                    style={{
                      background: active ? color : "#fff",
                      color: active ? "#fff" : color,
                      borderColor: active ? color : "#e2e8f0",
                      boxShadow: active ? `0 4px 14px ${color}30` : "none",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-extrabold text-[#1A3A5C]">
                {activeCategory === "Hamısı" ? "Bütün məqalələr" : activeCategory}
              </h2>
              <span className="text-xs bg-[#1A3A5C]/10 text-[#1A3A5C] font-bold px-3 py-1 rounded-full">
                {filtered.length} yazı
              </span>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((post, index)  => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-slate-200 transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  {/* Cover */}
                  <div className="relative h-48 overflow-hidden">
                    <PostCover post={post} index={index}  />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {post.hot && (
                        <span className="text-[10px] font-bold bg-[#C62828] text-white px-2.5 py-1 rounded-full">
                           Populyar
                        </span>
                      )}
                      {post.urgent && !post.hot && (
                        <span className="text-[10px] font-bold bg-[#C62828] text-white px-2.5 py-1 rounded-full">
                             Vacib
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <CategoryPill cat={post.category} color={post.categoryColor} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-extrabold text-[#1A3A5C] text-base leading-snug mb-3 group-hover:text-[#1565C0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400">{formatDate(post.date)}</span>
                      <span className="text-xs text-slate-400">🕐 {post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="space-y-8 sticky top-8">

            {/* CTA */}
            <div
              className="rounded-2xl p-7 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1A3A5C, #1565C0)" }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%,-30%)" }} />
              <h3 className="font-extrabold text-lg mb-2 leading-snug">Konsultasiya lazımdır?</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Dr. Abbaszadə ilə birbaşa əlaqə saxlayın.
              </p>
              <a href="/contact"
                className="block text-center bg-white text-[#1565C0] font-bold py-2.5 rounded-xl text-sm hover:bg-blue-50 transition mb-2">
                Müraciət et
              </a>
              <a href="tel:+994503127657"
                className="block text-center text-white/70 font-semibold py-2.5 rounded-xl text-sm border border-white/20 hover:bg-white/10 transition">
                +994 50 312 76 57
              </a>
            </div>

            {/* Featured */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 rounded-full bg-[#1565C0]" />
                <h4 className="font-extrabold text-[#1A3A5C] text-base">Seçilmiş</h4>
              </div>
              <div className="space-y-5">
                {featuredPosts.map((post,index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}
                    className="flex gap-3 group items-start">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <PostCover post={post} index={index} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400 mb-1">{formatDate(post.date)}</div>
                      <div className="font-bold text-[#1A3A5C] text-sm leading-snug group-hover:text-[#1565C0] transition-colors line-clamp-2">
                        {post.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 rounded-full bg-[#00796B]" />
                <h4 className="font-extrabold text-[#1A3A5C] text-base">Son məqalələr</h4>
              </div>
              <div className="space-y-4">
                {latestPosts.map((post,index) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}
                    className="flex gap-3 group items-start">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <PostCover post={post} index={index}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400 mb-1">{formatDate(post.date)}</div>
                      <div className="font-bold text-[#1A3A5C] text-sm leading-snug group-hover:text-[#1565C0] transition-colors line-clamp-2">
                        {post.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 rounded-full bg-[#C62828]" />
                <h4 className="font-extrabold text-[#1A3A5C] text-base">Mövzular</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(categoryColors).map(([cat, color]) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                    style={{ background: `${color}12`, color }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}