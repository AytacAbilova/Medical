'use client'
import Link from "next/link";
import Image from "next/image";
import './header.css'
import Button from "../common/Button";
import logo from '../../public/assets/images/logo.png'
import { useEffect } from "react";
export default function Header() {

  useEffect(() => {
    const cursor = document.getElementById("magic-cursor");
    const ball = document.getElementById("ball");

    if (!cursor || !ball) return;
    // constants/services.ts


    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;

    const speed = 0.15; // ↓ bunu dəyişərək gecikməni tənzimləyə bilərsən

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

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
   const services = [
  { title: "Hovuz Tikintisi", slug: "hovuz-tikintisi" },
  { title: "Türk Hamamı", slug: "turk-hamami" },
  { title: "Sauna", slug: "sauna" },
  { title: "Buxar Otağı", slug: "buxar-otagi" },
  { title: "Rus Hamamı (Banya)", slug: "rus-hamami" },
  { title: "Spa və Relax Zonaları", slug: "spa-zonalari" },
  { title: "Masaj Otaqları", slug: "masaj-otagi" },
  { title: "Duz Otaqları", slug: "duz-otagi" },
];

  return (
    <>
      {/* Preloader */}
      <div className="preloader" style={{ display: "none" }}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <Image src="/loader.svg" alt="Loading" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Magic Cursor */}
      <div id="magic-cursor" style={{ opacity: 0, visibility: "hidden" }}>
        <div id="ball" />
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo */}
          <div className="site-logo">
            <Link href="/">
              <Image
                src={logo}
                alt="Tikinti Şirkəti Logo"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="menu">
              <li className="has-dropdown">
                <Link href="/">Home</Link>
               
                
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>
<li className="has-dropdown">
  <Link href="/services">Xidmətlər</Link>

  <ul className="dropdown">
    {services.map((s) => (
      <li key={s.slug}>
        <Link href={`/services/${s.slug}`}>
          {s.title}
        </Link>
      </li>
    ))}
  </ul>
</li>

              <li className="has-dropdown">
                <Link href="/projects">Projects</Link>
                <ul className="dropdown">
                  <li><Link href="/projects/aspen-heights">Aspen Heights</Link></li>
                  <li><Link href="/projects/forest-hill-towers">Forest Hill Towers</Link></li>
                  <li><Link href="/projects/bayside-residences">Bayside Residences</Link></li>
                  <li><Link href="/projects/parkview-plaza">Parkview Plaza</Link></li>
                </ul>
              </li>


              <li className="has-dropdown">
                <span>Pages</span>
                <ul className="dropdown">
                  <li><Link href="/team">Our Team</Link></li>
                  <li><Link href="/faqs">FAQs</Link></li>
                </ul>
              </li>

              <li className="mobile-only">
                <Link href="/contact">Bizimlə əlaqə</Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <Button link={"/contact"} text={'Bizimlə əlaqə'} type={1} />
        </div>
      </header>
    </>
  );
}
