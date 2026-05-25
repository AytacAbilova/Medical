import {
    FaLightbulb,
    FaDesktop,
    FaUserGroup,
    FaChartBar,
    FaLock,
    FaBolt,
    FaClock,
    FaMessage,
    FaBook,
} from "react-icons/fa6";

// ─── DATA ────────────────────────────────────────────────────
const content = {
    az: {
        title: "Guided by what matters",
        desc: "Lorem ipsum dolor sit amet consectetu vel cursus et at aliquam commodo purus adipiscing massa amet vitae velit eget diam ut facilisis dictumst id.",
        values: [
            { icon: FaLightbulb, label: "Innovation" },
            { icon: FaDesktop, label: "Transparency" },
            { icon: FaUserGroup, label: "Collaboration" },
            { icon: FaChartBar, label: "Scalability" },
            { icon: FaLock, label: "Trust" },
            { icon: FaBolt, label: "Speed" },
            { icon: FaClock, label: "Efficiency" },
            { icon: FaMessage, label: "Communication" },
            { icon: FaBook, label: "Learning" },
        ]
    },
};

export default function OurValues({ locale = "az" }: { locale?: "az" }) {
    const t = content[locale];

    return (
        <section className="bg-white md:py-24 py-12">
            <div className="max-w-[900px] mx-auto px-6">

                {/* Header — mobil sol, desktop mərkəz */}
                <h2
                    data-aos="fade-up"
                    className="text-[26px] md:text-[48px] font-extrabold text-[#001a56] leading-tight mb-2
                 text-left md:text-center"
                >
                    {t.title}
                </h2>
                <p
                    data-aos="fade-up"
                    className="text-[#465271] text-[14px] leading-relaxed mb-8
                 text-left md:text-center md:max-w-lg md:mx-auto"
                >
                    {t.desc}
                </p>

                {/* Grid — mobil 2 sütun, desktop 3 sütun */}
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-2 sm:grid-cols-3 mt-6"
                >
                    {t.values.map((v, i) => {
                        const Icon = v.icon;
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-2 py-3
                       w-auto mx-0 md:w-[220px] md:mx-auto"
                            >
                                <Icon size={18} color="#2388ff" />
                                <span className="text-[#001a56] font-bold text-[16px] md:text-[22px]">
                                    {v.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}