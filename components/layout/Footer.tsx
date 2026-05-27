"use client";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
// import logo from "@/public/assets/images/logo.png";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

// ─── DATA ────────────────────────────────────────────────────
const content = {
  az: {
    name: "Dr. Xatirə Aslanova",
    specialty: "Pediatrik infeksionist",
    phone: "+994 50 884 66 14",
    socialLabel: "Bizi izləyin",
    email: "info@drxatireaslanova.az",
    addresses: [
      "Lux International Hospital — Faiq Yusifov küç. 146A, Bakı",
      "Mərkəzi Klinika — Parlament pr. 76, Bakı",
      "Unikal Klinika — Kazım Kazımzadə küç. 95–99, Bakı",
    ],
    workTitle: "Qəbul saatları",
    workDays: "B.e – Cümə",
    workHours: "09:00 – 18:00",
    navTitle: "Keçidlər",
    navLinks: [
      { label: "Ana səhifə", href: "/" },
      { label: "Haqqımızda", href: "/about" },
      { label: "Xidmətlər", href: "/services" },
      { label: "Blog", href: "/question" },
      { label: "Sual-Cavab", href: "/faq" },
      { label: "Əlaqə", href: "/contact" },
    ],
    newsletter: "Tibbi yeniliklər üçün abunə olun",
    placeholder: "E-poçt ünvanınız",
    subscribeBtn: "Abunə ol",
    copyright: "Dr. Xatirə Aslanova. Bütün hüquqlar qorunur.",
    privacy: "Məxfilik",
    terms: "Şərtlər",
  },
};



// ─── FOOTER ──────────────────────────────────────────────────
const Footer = () => {
  const t = content.az;

  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-10 pb-8 pt-4">
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #001a56 0%, #0a2d7a 55%, #1a4a9a 100%)",
        }}
      >
        {/* ── Yuxarı: logo sol / nav sağ ── */}
        <div
          className="flex flex-col lg:flex-row gap-12 px-10 lg:px-16 pt-14 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* SOL — Logo + sosial */}
          <div className="flex flex-col gap-8 lg:w-56 shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
            </div>

            <div>
              <p className="text-slate-300 text-sm mb-4">{t.socialLabel ?? "Bizi izləyin"}</p>
              <div className="flex items-center gap-4">
                {[
                  { href: "#", icon: <FaFacebook  size={16} /> },
                  { href: "#", icon: <FaXTwitter  size={16} /> },
                  { href: "#", icon: <BsInstagram size={16} /> },
                  { href: "#", icon: <BsYoutube   size={16} /> },
                ].map((s, i) => (
                  <a href={s.href} key={i} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
      
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SAĞ — Nav sütunları */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            <div>
              <p className="text-white font-semibold text-sm mb-5">Əsas səhifələr</p>
              <ul className="flex flex-col gap-3">
                {t.navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-5">Digər</p>
              <ul className="flex flex-col gap-3">
                {t.navLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Newsletter ── */}
        <div
          className="px-10 lg:px-16 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <h3 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-[38px] leading-snug max-w-sm">
            {t.newsletter}
          </h3>

          <div
            className="flex w-full sm:max-w-md rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <input
            suppressHydrationWarning
              autoComplete="off"
              type="email"
              placeholder={t.placeholder}
              className="flex-1 min-w-0 bg-transparent text-white text-sm px-6 py-4 outline-none placeholder:text-slate-400"
            />
            <button className="shrink-0 bg-[#001a56] hover:bg-[#0a2a6e] text-white font-bold text-sm px-7 py-4 rounded-full m-1 transition-colors duration-200">
              {t.subscribeBtn}
            </button>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {t.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 text-sm hover:text-white transition-colors duration-200">{t.privacy}</Link>
            <Link href="#" className="text-slate-500 text-sm hover:text-white transition-colors duration-200">{t.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};


export default memo(Footer);