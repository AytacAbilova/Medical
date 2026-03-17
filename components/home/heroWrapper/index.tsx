"use client";
import { useState, useEffect } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";

const heroContents: Record<string, { text?: string; video?: string; isHome?: boolean }> = {
  "/": { isHome: true, video: "/assets/videos/hero2.mp4" },
  "/about": { text: "Haqqımızda", video: "/assets/videos/hero.mp4" },
  "/contact": { text: "Bizimlə əlaqə", video: "/assets/videos/hero.mp4" },
};

export default function HeroWrapper() {
  const pathname = usePathname();
  console.log(pathname,'rena');
  
  const [hero, setHero] = useState(heroContents[pathname] || heroContents["/"]);

  useEffect(() => {
    setHero(heroContents[pathname] || heroContents["/"]);
  }, [pathname]); // path dəyişəndə video/text yenilənir

  return <Hero isHome={hero.isHome} text={hero.text} video={hero.video} />;
}