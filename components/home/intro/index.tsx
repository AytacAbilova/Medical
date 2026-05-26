import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/public/assets/images/introimg.png";

const content = {
  az: {
    title: "25 illik təcrübə ilə sağlamlığınız üçün etibarlı yanaşma",

    btn: "Ətraflı məlumat",
    btnHref: "/about",

    para1:
      "Dr. Xatirə Aslanova infeksion xəstəliklər və tibbi parazitologiya sahəsində 25 illik fasiləsiz klinik təcrübəyə malik mütəxəssisdir. O, uşaqlardan böyüklərə qədər bütün yaş qruplarında infeksion və parazitar xəstəliklərin diaqnostikası və müalicəsi ilə məşğuldur.",

    para2:
      "Peşəkar fəaliyyətində əsas prinsip xəstəliyin yalnız simptomlarını deyil, əsas səbəbini müəyyən edib müalicə etməkdir. Müasir diaqnostika, sübuta əsaslanan tibb və fərdi yanaşma ilə hər bir pasiyent üçün uyğun müalicə planı hazırlanır.",
  },
};

const CTAButton = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center bg-[#001a56] hover:bg-[#2A69AC]
               text-white font-semibold text-sm px-7 py-3.5 rounded-full
               transition-colors duration-300"
  >
    {label}
  </Link>
);

export default function AboutIntro({
  locale = "az",
}: {
  locale?: "az";
}) {
  const t = content[locale];

  return (
    <section className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1300px] mx-auto px-5 lg:px-10">

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-10 lg:mb-16 items-start">

          {/* Left */}
          <div>
            <span className="inline-block text-sm font-semibold text-[#2A69AC] bg-[#EEF4FB] px-4 py-2 rounded-full mb-5">
              Parasitus Medical Center
            </span>

            <h2 className="text-[30px] md:text-[52px] font-extrabold text-[#001a56] leading-[1.1] mb-6">
              {t.title}
            </h2>

            <div className="hidden lg:block">
              <CTAButton href={t.btnHref} label={t.btn} />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <p className="text-[#465271] text-[15px] md:text-[17px] leading-relaxed font-medium">
              {t.para1}
            </p>

            <p className="text-[#465271] text-[15px] md:text-[17px] leading-relaxed font-medium">
              {t.para2}
            </p>

            {/* Mobile Button */}
            <div className="block lg:hidden mt-2">
              <CTAButton href={t.btnHref} label={t.btn} />
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          data-aos="fade-up"
          className="relative w-full h-[240px] sm:h-[360px] lg:h-[620px] rounded-[32px] overflow-hidden"
        >
          <Image
            src={bannerImg}
            alt="Dr. Xatirə Aslanova"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}