'use client'
import Link from "next/link";
import Image from "next/image";
import './header.css'
import Button from "../common/Button";
import logo from '../../public/assets/images/image.png'
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { servicesContent, type Locale, type ServiceItem } from "@/utils";

export default function Header({ locale = "az" }: { locale?: Locale }) {
  const services: ServiceItem[] = servicesContent[locale];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("magic-cursor");
    const ball = document.getElementById("ball");
    if (!cursor || !ball) return;

    let mouseX = 0, mouseY = 0, ballX = 0, ballY = 0;
    const speed = 0.15;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = "1";
      cursor.style.visibility = "visible";
    };

    const animate = () => {
      ballX += (mouseX - ballX) * speed;
      ballY += (mouseY - ballY) * speed;
      ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Menyu açıq ikən scroll bağla
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <div id="magic-cursor" style={{ opacity: 0, visibility: "hidden" }}>
        <div id="ball" />
      </div>

      <header className="site-header">
        <div className="container header-inner">

          {/* SOL — Logo */}
          <div className="site-logo">
            <Link
              href="/"
              className="flex items-center gap-[10px] no-underline"
            >
              <Image src={logo} alt="Logo" width={50} height={50} priority />

              <span className="text-[20px] sm:text-[24px] font-bold text-[#001a56] whitespace-nowrap">
                SmartAsisstant
              </span>
            </Link>
          </div>

          {/* SAĞ — Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <nav className="main-nav" aria-label="Main Navigation">
              <ul className="menu">
                <li><Link href="/">Ana səhifə</Link></li>
                <li><Link href="/about">Haqqında</Link></li>
                <li className="has-dropdown">
                  <Link href="/services">Xidmətlər</Link>
                  <ul className="dropdown">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`}>{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li><Link href="/faq">Sual-Cavab</Link></li>
                <li><Link href="/blog">Tibbi Yazılar</Link></li>
              </ul>
            </nav>
            <div className="desktop-only">
              <Button link="/contact" text="Randevu al" type={1} />
            </div>
          </div>

          {/* Hamburger düyməsi — yalnız mobil */}
          {/* Hamburger — CSS mobile-only class ilə desktop-da gizlənir */}
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(true)}
            aria-label="Menyunu aç"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#001a56",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Menu size={20} color="#fff" />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          maxHeight: "50vh",
          background: "#fff",
          zIndex: 1999,
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
          padding: "16px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <Image src={logo} alt="Logo" width={32} height={32} />
            <span style={{ color: "#001a56", fontSize: 15, fontWeight: 700 }}>Dr. [Ad Soyad]</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Bağla"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#2388ff",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={18} color="#fff" />
          </button>
        </div>

        <div style={{ height: 1, background: "#f0f0f0", marginBottom: 8 }} />

        {/* Linklər */}
        <nav>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[
              { label: "Ana səhifə", href: "/" },
              { label: "Haqqında", href: "/about" },
              { label: "Xidmətlər", href: "/services" },
              { label: "Sual-Cavab", href: "/faq" },
              { label: "Tibbi Yazılar", href: "/blog" },
              { label: "Əlaqə", href: "/contact" },
            ].map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid #f5f5f5" }}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "11px 4px",
                    color: "#001a56",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay — menyu açıq ikən arxa fonu qaraldır */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
          zIndex: 1998,
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}