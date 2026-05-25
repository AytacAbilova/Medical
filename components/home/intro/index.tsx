import Image from "next/image";
import Link from "next/link";
import bannerImg from '@/public/assets/images/introimg.png';

const content = {
  az: {
    title:   "We started as two founders in New York",
    btn:     "Join our team",
    btnHref: "/about",
    para1:   "Volutpat lacus orci urna porttitor et nec sit id odio pharetra nibh pellentesque elementum in pharetra accumsan aliquet malesuada. A tincidunt aliquet quam neque nibh a euismod ornare eu pretium elit ac magna dignissim.",
    para2:   "Congue sagittis venenatis augue erat lacus et donec enim sit odio semper dis molestie suscipit purus et sed semper pellentesque nunc vestibulum rhoncus scelerisque fermentum eget in morbi integer dolor aliquam in mi diam et gravida donec tempus ut lobortis at eget tortor cursus orci gravida dictum.",
  },
};

const CTAButton = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center bg-[#001a56] hover:bg-[#2A69AC]
               text-white font-semibold text-sm px-7 py-3.5 rounded-full
               transition-colors duration-300"
  >
    {label}
  </Link>
);

export default function AboutIntro({ locale = "az" }: { locale?: "az" }) {
  const t = content[locale];

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-5 lg:px-10">

        {/* ── Grid: desktop 2 sütun / mobil 1 sütun ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-20 mb-8 lg:mb-14 items-start">

          {/* SOL — Başlıq + düymə (yalnız desktop-da düymə burada) */}
          <div>
            <h2 className="text-[28px] md:text-[48px] font-extrabold text-[#001a56] leading-tight mb-6 lg:mb-8">
              {t.title}
            </h2>
            {/* Düymə — yalnız desktop */}
            <div className="hidden lg:block">
              <CTAButton href={t.btnHref} label={t.btn} />
            </div>
          </div>

          {/* SAĞ — Paraqraflar + düymə (mobil düymə burada) */}
          <div className="flex flex-col gap-4">
            <p className="text-[#465271] text-[14px] lg:text-[16px] leading-relaxed font-semibold">
              {t.para1}
            </p>
            <p className="text-[#465271] text-[14px] lg:text-[16px] leading-relaxed font-semibold">
              {t.para2}
            </p>
            {/* Düymə — yalnız mobil */}
            <div className="block lg:hidden mt-2">
              <CTAButton href={t.btnHref} label={t.btn} />
            </div>
          </div>
        </div>

        {/* ── Banner şəkil ── */}
        <div
          data-aos="fade-up"
          className="relative w-full h-[220px] sm:h-[340px] lg:h-[560px] rounded-3xl overflow-hidden"
        >
          <Image
            src={bannerImg}
            alt="Klinika"
            fill
            quality={95}
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}