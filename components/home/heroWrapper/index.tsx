"use client";
import { useState, useEffect } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";

import aboutImg from '@/public/assets/images/aboutushero.png'
import servicesImg from '@/public/assets/images/services.jpg'
import projectsImg from '@/public/assets/images/projects.jpg'
import contactImg from '@/public/assets/images/contact.jpg'

const heroContents: Record<string, any> = {
    "/": { isHome: true, video: "/assets/videos/hero1.mp4" },
    "/about": {
        text: "Haqqımızda",
        img: aboutImg,
        subTitle: "Turan İnşaat hovuz, türk hamamı, sauna və spa layihələrində uzunmüddətli keyfiyyət və estetik dizayn təmin edir."
    },
    "/contact": { 
        text: "Bizimlə əlaqə", 
        img: contactImg, 
        subTitle: "Suallarınız və əməkdaşlıq üçün bizimlə əlaqə saxlayın." 
    },
    "/services": { 
        text: "Hovuz, SPA və Hamam Xidmətləri", 
        img: servicesImg, 
        subTitle: "Fərdi və ictimai hovuz, türk hamamı və SPA xidmətləri." 
    },
    "/projects": {
        text: "Layihələrimiz",
        img: projectsImg,
        subTitle: "Real layihələrimiz ilə estetik və funksional dizayn."
    },
};

// 🔥 services slug-ları üçün ayrıca map
const serviceHeroMap: Record<string, any> = {
    "pool-types": {
        text: "Hovuz Növləri",
        img: servicesImg,
        subTitle: "Fərdi, ictimai və olimpiya hovuzları daxil olmaqla bütün hovuz növləri haqqında məlumat."
    },
    "pool-filtration": {
        text: "Hovuz Təmizləmə Sistemləri",
        img: servicesImg,
        subTitle: "Skimmer, daşma və müasir filtrasiya texnologiyaları."
    },
    "pool-heating-cooling": {
        text: "İsitmə və Soyutma Sistemləri",
        img: servicesImg,
        subTitle: "Hovuz suyu üçün effektiv istilik və soyutma həlləri."
    },
    "turkish-bath-spa": {
        text: "Türk Hamamı və SPA",
        img: servicesImg,
        subTitle: "Rahatlıq, sağlamlıq və lüks SPA həlləri."
    },
};

export default function HeroWrapper() {
    const pathname = usePathname();
    const [hero, setHero] = useState<any>(heroContents["/"]);

    useEffect(() => {
        // 👉 exact match
        if (heroContents[pathname]) {
            setHero(heroContents[pathname]);
            return;
        }

        // 👉 services/[slug]
        if (pathname.startsWith("/services/")) {
            const slug = pathname.split("/")[2];
            setHero(serviceHeroMap[slug] || heroContents["/services"]);
            return;
        }

        // 👉 fallback
        setHero(heroContents["/"]);
    }, [pathname]);

    return (
        <Hero
            isHome={hero.isHome}
            img={hero.img}
            text={hero.text}
            video={hero.video}
            subTitle={hero.subTitle}
        />
    );
}