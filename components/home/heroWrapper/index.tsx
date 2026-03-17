"use client";
import { useState, useEffect } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";
import aboutImg from '@/public/assets/images/aboutushero.png'
import servicesImg from '@/public/assets/images/services.jpg'
import projectsImg from '@/public/assets/images/projects.jpg'
import contactImg from '@/public/assets/images/contact.jpg'


const heroContents: Record<string, { text?: string; video?: string; isHome?: boolean; img?: any; subTitle?: string }> = {
    "/": { isHome: true, video: "/assets/videos/hero2.mp4" },
    "/about": {
        text: "Haqqımızda",
        img: aboutImg,
        subTitle: "Turan İnşaat hovuz, türk hamamı, sauna və spa layihələrində uzunmüddətli keyfiyyət və estetik dizayn təmin edir. Hər layihə müştərinin ehtiyacına uyğun xüsusi hazırlanır."
    },
    "/contact": { 
        text: "Bizimlə əlaqə", 
        img: contactImg, 
        subTitle: "Suallarınız, qiymət sorğularınız və əməkdaşlıq imkanları üçün bizimlə əlaqə saxlayın." 
    },
    "/services": { 
        text: "Xidmətlərimiz", 
        img: servicesImg, 
        subTitle: "Turan İnşaat olaraq hovuz, sauna, türk hamamı və spa layihələrinin dizaynı və tikintisi sahəsində geniş və peşəkar xidmətlər təqdim edirik." 
    },
    "/projects": {
        text: "Layihələrimiz",
        img: projectsImg,
        subTitle: "Real spa, türk hamamı və hovuz layihələrimiz ilə estetik və funksional dizayn təmin edirik. Hər layihə peşəkar komandamız tərəfindən fərdi şəkildə hazırlanır."
    },
};

export default function HeroWrapper() {
    const pathname = usePathname();
    const [hero, setHero] = useState(heroContents[pathname] || heroContents["/"]);

    useEffect(() => {
        setHero(heroContents[pathname] || heroContents["/"]);
    }, [pathname]);

    return <Hero isHome={hero.isHome} img={hero.img} text={hero.text} video={hero.video} subTitle={hero.subTitle} />;
}