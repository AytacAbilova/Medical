'use client'
import Link from "next/link";
import Image from "next/image";
import './header.css'
import Button from "../common/Button";
import logo from '../../public/assets/images/logo.png'
import { useEffect } from "react";
import { servicesContent } from "@/utils";
import { projects } from "../home/ourProjects/projes";
export default function Header({ locale = "az" }: any) {

  useEffect(() => {
    const cursor = document.getElementById("magic-cursor");
    const ball = document.getElementById("ball");

    if (!cursor || !ball) return;
  


    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;

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

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <div className="preloader" style={{ display: "none" }}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <Image src="/loader.svg" alt="Loading" width={40} height={40} />
          </div>
        </div>
      </div>

      <div id="magic-cursor" style={{ opacity: 0, visibility: "hidden" }}>
        <div id="ball" />
      </div>

      <header className="site-header">
        <div className="container header-inner">
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

          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="menu">
              <li className="has-dropdown">
                <Link href="/">Ana səhifə</Link>
              </li>

              <li>
                <Link href="/about">Haqqında</Link>
              </li>
              <li className="has-dropdown">
                <Link href="/services">Xidmətlər</Link>

                <ul className="dropdown">
                  {servicesContent[locale].map((s: any) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="has-dropdown">
                <Link href="/projects">Sual-Cavab</Link>
              </li>
              <li className="has-dropdown">
                <Link href="/blog">Tibbi Yazılar</Link>
              </li>
              <li className="mobile-only">
                <Link href="/contact">Bizimlə əlaqə</Link>
              </li>
            </ul>
          </nav>

  
          <Button link={"/contact"} text={'Bizimlə əlaqə'} type={1} />
        </div>
      </header>
    </>
  );
}
