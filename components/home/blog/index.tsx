"use client";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
};

const featuredPosts: BlogPost[] = [
  {
    slug: "aciq-urek-emeliyyati-nece-icra-edilir",
    title: "Açıq Ürək Əməliyyatı Necə İcra Edilir?",
    excerpt:
      "Bypass əməliyyatı zamanı kardiopulmoner maşın necə işləyir, cərrah hansı addımları atır — tam bələdçi.",
    category: "Cərrahi",
    date: "15 Aprel 2025",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  },
  {
    slug: "aorta-anevrizması-sessiz-saatlı-bomba",
    title: "Aorta Anevrizması – Səssiz Saatlı Bomba",
    excerpt:
      "55 mm-dən böyük anevrizma həyatı təhdid edir. Erkən diaqnoz həlledicidir.",
    category: "Aorta",
    date: "2 Mart 2025",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
  },
  {
    slug: "ef-30-emeliyyat-mumkundurmu",
    title: "EF 30% — Əməliyyat Mümkündürmü?",
    excerpt:
      "Ürəyin atım fraksiyası kritik həddə düşdükdə bypass mümkündür. Real nümunə ilə izah.",
    category: "Yüksək Risk",
    date: "18 Fevral 2025",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    slug: "38-yasinda-infarkt",
    title: "38 Yaşında İnfarkt: Ürək Xəstəliyi Cavanlaşır",
    excerpt:
      "Gənc yaşda infarkt niyə artır? Risk faktorları, profilaktika və vaxtında müdaxilənin əhəmiyyəti.",
    category: "Profilaktika",
    date: "5 Yanvar 2025",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80",
  },
  {
    slug: "bypass-sonrasi-heyat",
    title: "Açıq Ürək Əməliyyatından Sonra Həyat",
    excerpt:
      "Reabilitasiya, qidalanma, fiziki fəaliyyət — bypass sonrası tam sağalma bələdçisi.",
    category: "Sağalma",
    date: "20 Dekabr 2024",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
  },
  {
    slug: "xaricde-redd-edilmisdim",
    title: "Xaricdə Rədd Edilmişdim – Azərbaycanda Xilas Oldum",
    excerpt:
      "Türkiyə və Almaniyadan imtina alan xəstə Azərbaycanda uğurla əməliyyat olundu.",
    category: "Real Hekayə",
    date: "10 Noyabr 2024",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
  },
];

const sidebarFeatured: BlogPost[] = [
  featuredPosts[0],
  featuredPosts[2],
  featuredPosts[4],
];

const sidebarLatest: BlogPost[] = [
  featuredPosts[3],
  featuredPosts[5],
  featuredPosts[1],
];

const BigCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <Link
    href={`/blog/${post.slug}`}
    className="group relative overflow-hidden rounded-2xl block"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-2xl">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl" />

      {/* Category badge */}
      <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
        {post.category}
      </span>

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#C49B63] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <span className="mt-3 inline-block text-xs text-gray-400">
          {post.date}
        </span>
      </div>
    </div>
  </Link>
);

const SidebarItem = ({ post }: { post: BlogPost }) => (
  <Link
    href={`/blog/${post.slug}`}
    className="group flex gap-3 items-start py-3 border-b border-white/10 last:border-0"
  >
    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="flex-1 min-w-0">
      <span className="text-[11px] text-[#C49B63] font-medium">{post.date}</span>
      <p className="text-sm text-black font-medium leading-snug mt-0.5 group-hover:text-[#C49B63] transition-colors line-clamp-2">
        {post.title}
      </p>
    </div>
  </Link>
);

export const BlogSection = () => {
  return (
    <section className="py-24 px-4  text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-[#C49B63] font-semibold text-sm uppercase tracking-widest">
              Bloq
            </span>
            <h2 className="text-3xl md:text-[48px] font-extrabold mt-2 leading-tight">
              Tibbi məqalələr.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-[#C49B63] border border-[#C49B63]/40 px-5 py-2.5 rounded-full hover:bg-[#C49B63]/10 transition-colors self-start md:self-auto"
          >
            Bütün məqalələr →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {featuredPosts.map((post, i) => (
              <BigCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <h3 className="text-base font-bold text-black mb-1 pb-3 border-b border-white/10">
                Seçilmiş
              </h3>
              <div>
                {sidebarFeatured.map((post) => (
                  <SidebarItem key={post.slug} post={post} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-black mb-1 pb-3 border-b border-white/10">
                Son məqalələr
              </h3>
              <div>
                {sidebarLatest.map((post) => (
                  <SidebarItem key={post.slug} post={post} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#C49B63]/30 bg-[#C49B63]/5 p-5">
              <p className="text-sm font-semibold text-black mb-1">
                Konsultasiya lazımdır?
              </p>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Dr. Abbaszadə ilə əlaqə saxlayın. Sorğunuzu göndərin, qısa
                müddətdə cavab alın.
              </p>
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold bg-[#C49B63] text-[#0E172A] px-5 py-2.5 rounded-full hover:bg-[#d4aa74] transition-colors"
              >
                Əlaqə →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};