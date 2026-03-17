"use client";
import { useState, useEffect } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";
import aboutImg from '@/public/assets/images/aboutUs.jpg'

const heroContents: Record<string, { text?: string; video?: string; isHome?: boolean; img?: any, subTitle?: string }> = {
    "/": { isHome: true, video: "/assets/videos/hero2.mp4" },
    "/about": {
        text: "Haqqımızda",
        img: aboutImg,
        subTitle: " Turan İnşaat hovuz, türk hamamı, sauna və spa layihələrində uzunmüddətli keyfiyyət və estetik dizayn təmin edir. Hər layihə  müştərinin ehtiyacına uyğun xüsusi hazırlanır."
    },

    "/contact": { 
        text: "Bizimlə əlaqə", 
        video: "/assets/images/hero.mp4", 
        subTitle: "Suallarınız, qiymət sorğularınız və əməkdaşlıq imkanları üçün bizimlə əlaqə saxlayın." },
};

export default function HeroWrapper() {
    const pathname = usePathname();
    const [hero, setHero] = useState(heroContents[pathname] || heroContents["/"]);

    useEffect(() => {
        setHero(heroContents[pathname] || heroContents["/"]);
    }, [pathname]);

    return <Hero isHome={hero.isHome} img={hero.img} text={hero.text} video={hero.video} subTitle={hero.subTitle} />;
}