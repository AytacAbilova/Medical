import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import blogData from "@/data/blog.json";
import { Metadata } from "next";

// ── Tip ──────────────────────────────────────────────────────
type Post = {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  img: string;
  body: string;
};

function safeDecodeURIComponent(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function toSlugLike(value: string) {
  const decoded = safeDecodeURIComponent(value)
    .replace(/^"+|"+$/g, "")
    .trim()
    .toLowerCase();

  const ascii = decoded.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  const slug = ascii
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug;
}

function findPostBySlugParam(slugParam: string) {
  const decoded = safeDecodeURIComponent(slugParam);
  const normalized = toSlugLike(slugParam);
  const posts = blogData as Post[];

  const direct =
    posts.find((p) => p.slug === decoded) ||
    posts.find((p) => p.slug === slugParam) ||
    posts.find((p) => p.slug === normalized);
  if (direct) return direct;

  const candidates = posts
    .map((p) => {
      const hit =
        normalized === p.slug ||
        normalized.startsWith(`${p.slug}-`) ||
        p.slug.startsWith(`${normalized}-`);
      return hit ? p : null;
    })
    .filter(Boolean) as Post[];

  if (candidates.length === 0) return null;

  return candidates.sort((a, b) => b.slug.length - a.slug.length)[0];
}

// ── Static params (SSG) ──────────────────────────────────────
export async function generateStaticParams() {
  return (blogData as Post[]).map((post) => ({ slug: post.slug }));
}

// ── Metadata ─────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPostBySlugParam(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Dr. Xatirə Aslanova`,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.img],
      type: "article",
      locale: "az_AZ",
    },
  };
}

// ── JSON-LD Schema ────────────────────────────────────────────
function ArticleSchema({ post }: { post: Post }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "headline": post.title,
          "description": post.desc,
          "datePublished": post.date,
          "author": {
            "@type": "Physician",
            "name": "Dr. Xatirə Aslanova",
          },
          "image": post.img,
          "url": `https://yourdomain.az/question/${post.slug}`,
        }),
      }}
    />
  );
}

// ── Əsas səhifə ──────────────────────────────────────────────
export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  return <BlogDetailPageInner params={params} />;
}

async function BlogDetailPageInner({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const { slug } = await params;
  const post = findPostBySlugParam(slug);
  if (post && safeDecodeURIComponent(slug) !== post.slug && toSlugLike(slug) !== post.slug) {
    redirect(`/question/${post.slug}`);
  }
  if (!post) notFound();

  // Oxşar məqalələr — eyni kateqoriya, max 3 ədəd
  const related = (blogData as Post[])
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Body mətnini paraqraflara böl
  const paragraphs = post.body.split("\n\n").filter(Boolean);

  return (
    <main className="bg-white min-h-screen">

      {/* ── Breadcrumb / Geri düyməsi ── */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 pt-10">
        <Link
          href="/question"
          className="inline-flex items-center gap-2 text-[#465271] text-sm
                     hover:text-[#2388ff] transition-colors duration-200 group"
        >
          <div className="w-8 h-8 rounded-full bg-[#EEF3FA] flex items-center justify-center
                          group-hover:bg-[#2388ff] transition-colors duration-200">
            <ArrowLeft size={14} className="text-[#2388ff] group-hover:text-white transition-colors duration-200" />
          </div>
          Bloga qayıt
        </Link>
      </div>

      {/* ── Header ── */}
      <header className="max-w-[900px] mx-auto px-6 lg:px-10 pt-8 pb-10">

        {/* Kateqoriya + Tarix */}
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-bold
                           text-[#2388ff] bg-[#EEF3FA] px-3.5 py-1.5 rounded-full">
            <Tag size={11} />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#465271] text-[12px]">
            <Calendar size={11} />
            {post.date}
          </span>
        </div>

        {/* Başlıq */}
        <h1 className="font-extrabold text-[28px] md:text-[42px] leading-[1.15]
                       text-[#001a56] mb-5">
          {post.title}
        </h1>

        {/* Lead / desc */}
        <p className="text-[#465271] text-[16px] md:text-[18px] leading-[1.75]
                      border-l-4 border-[#2388ff] pl-5">
          {post.desc}
        </p>
      </header>

      {/* ── Şəkil ── */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 mb-12">
        <div className="relative w-full h-[280px] md:h-[460px] rounded-3xl overflow-hidden
                        border border-gray-100">
          <Image
            src={post.img}
            alt={post.title}
            fill
            quality={90}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a56]/10 to-transparent" />
        </div>
      </div>

      {/* ── Mətn ── */}
      <article className="max-w-[900px] mx-auto px-6 lg:px-10 pb-16">
        <div className="prose-container">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-[#2d3a57] text-[16px] md:text-[17px] leading-[1.9]
                         mb-6 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>

        {/* ── Müəllif kartı ── */}
        <div className="mt-14 flex items-center gap-5 bg-[#F8F9FB] border border-gray-100
                        rounded-2xl p-6">
          <div className="w-14 h-14 rounded-full bg-[#EEF3FA] flex items-center justify-center
                          shrink-0 border-2 border-[#2388ff]/20 overflow-hidden">
            <Image
              src="/assets/images/aboutUss.png"
              alt="Dr. Xatirə Aslanova"
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-[#001a56] font-extrabold text-[15px]">
              Dr. Xatirə Aslanova
            </p>
            <p className="text-[#465271] text-[13px] mt-0.5">
              İnfeksionist, Tibbi parazitologiya üzrə mütəxəssis
            </p>
          </div>
          <Link
            href="/about"
            className="ml-auto shrink-0 text-[13px] font-semibold text-[#2388ff]
                       hover:text-[#001a56] transition-colors duration-200"
          >
            Profil →
          </Link>
        </div>
      </article>

      {/* ── Oxşar məqalələr ── */}
      {related.length > 0 && (
        <section className="bg-[#F8F9FB] py-16">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <h2 className="text-[#001a56] font-extrabold text-[22px] md:text-[28px] mb-8">
              Oxşar məqalələr
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/question/${rel.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100
                             hover:border-[#2388ff]/30 hover:shadow-md
                             transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Şəkil */}
                  <div className="relative w-full h-[160px] bg-[#EEF3FA]">
                    <Image
                      src={rel.img}
                      alt={rel.title}
                      fill
                      quality={80}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Mətn */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <span className="text-[11px] font-bold text-[#2388ff] bg-[#EEF3FA]
                                     px-2.5 py-1 rounded-full w-fit">
                      {rel.category}
                    </span>
                    <h3 className="text-[#001a56] font-extrabold text-[15px] leading-snug
                                   line-clamp-3 flex-1">
                      {rel.title}
                    </h3>
                    <span className="text-[#465271] text-[12px] mt-auto">{rel.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ArticleSchema post={post} />
    </main>
  );
}
