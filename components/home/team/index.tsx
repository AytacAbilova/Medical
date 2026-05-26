import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────
interface TeamMember {
    name: string;
    role: string;
    img: string | StaticImageData;
    href: string;
}

const content = {
    az: {
        title: "Komandamızla tanış olun",
        desc: "Peşəkar həkimlər və tibb işçilərindən ibarət güclü komandamız.",
        members: [
            { name: "Dr. [Ad Soyad]", role: "Ürək-damar Cərrahı", img: "/assets/team/doctor1.jpg", href: "/about" },
            { name: "Dr. [Ad Soyad]", role: "Kardioloq", img: "/assets/team/doctor2.jpg", href: "/about" },
            { name: "Dr. [Ad Soyad]", role: "Anestezioloq", img: "/assets/team/doctor3.jpg", href: "/about" },
            { name: "Dr. [Ad Soyad]", role: "Reanimatoloq", img: "/assets/team/doctor4.jpg", href: "/about" },
            { name: "[Ad Soyad]", role: "Baş Tibb Bacısı", img: "/assets/team/doctor5.jpg", href: "/about" },
            { name: "[Ad Soyad]", role: "Klinik Koordinator", img: "/assets/team/doctor6.jpg", href: "/about" },
        ] satisfies TeamMember[],
    },
};

export default function OurTeam({ locale = "az" }: { locale?: "az" }) {
    const t = content[locale];

    return (
        <section className="bg-white px-6 py-12 md:py-24">
            <div className="bg-[#ebf4ff] rounded-3xl py-24 px-6 lg:px-10">
                <div className="max-w-[1300px] mx-auto">

                    {/* Header */}
                    <div className="text-left lg:text-center mb-10 lg:mb-14">
                        <h2 className="text-[26px] lg:text-[48px] font-extrabold text-[#001a56] leading-tight mb-3">
                            {t.title}
                        </h2>
                        <p className="text-[#465271] text-[14px] lg:text-[15px] lg:max-w-xl lg:mx-auto">
                            {t.desc}
                        </p>
                    </div>

                    {/* Grid — mobil 2 sütun, desktop 3 sütun */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
                        {t.members.map((member, i) => (
                            <Link
                                key={i}
                                href={member.href}
                                data-aos="fade-up"
                                data-aos-delay={i * 60}
                                className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                {/* Şəkil */}
                                <div className="relative w-full h-[160px] sm:h-[220px] lg:h-[360px] overflow-hidden">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        quality={90}
                                        className="object-cover object-top"
                                    />
                                </div>

                                {/* Alt hissə */}
                                <div className="flex flex-col gap-1 px-3 py-3 lg:px-6 lg:py-5">
                                    <p className="text-[#001a56] font-extrabold text-[14px] lg:text-[18px] leading-tight">
                                        {member.name}
                                    </p>
                                    <p className="text-[#465271] text-[11px] lg:text-sm">
                                        {member.role}
                                    </p>
                                    <div
                                        className="mt-2 w-7 h-7 lg:w-9 lg:h-9 rounded-full border border-gray-200 flex items-center justify-center
                     group-hover:bg-[#2A69AC] group-hover:border-[#2A69AC] transition-all duration-300"
                                    >
                                        <ArrowRight size={12} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}