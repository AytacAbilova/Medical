"use client";
import { useState, useEffect } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";

import aboutImg from '@/public/assets/images/homeImage.png'
import servicesImg from '@/public/assets/images/homeImage.png'
import projectsImg from '@/public/assets/images/homeImage.png'
import contactImg from '@/public/assets/images/homeImage.png'

const heroContents: Record<string, any> = {
    "/": { isHome: true, video: "/assets/videos/hero1.mp4" },
    "/about": {
        text: "Haqqında",
        img: aboutImg,
        subTitle:
            "Ürək-damar cərrahiyyəsi sahəsində geniş təcrübəyə malik Dr. Beyrək Abbaszadə müasir açıq ürək, minimal invaziv və damar cərrahiyyəsi metodları ilə pasiyentlərə yüksək səviyyəli tibbi xidmət təqdim edir."
    },
    "/contact": {
        text: "Bizimlə əlaqə",
        img: contactImg,
        subTitle: "Suallarınız və əməkdaşlıq üçün bizimlə əlaqə saxlayın."
    },
    "/services": {
        text: "Ürək-Damar Cərrahiyyəsi Xidmətləri",
        img: servicesImg,
        subTitle: "Açıq ürək əməliyyatları, koronar bypass, aorta və damar cərrahiyyəsi daxil olmaqla bütün müasir kardiovaskulyar müdaxilələr."
    },
    "/projects": {
        text: "Tez-tez verilən suallar",
        img: projectsImg,
        subTitle:
            "Ürək-damar cərrahiyyəsi, əməliyyatlar və müalicə prosesi ilə bağlı ən çox verilən suallar və ətraflı cavablar."
    },
    "/question": {
        text: "Tibbi Bloq",
        img: projectsImg,
        subTitle:
            "Ürək-damar cərrahiyyəsi, risk amillər, pasiyent hekayələri və müasir müalicə üsulları haqqında."
    },
};

const serviceHeroMap: Record<string, any> = {
    "open-heart-surgery": {
        text: "Açıq Ürək Əməliyyatı",
        img: servicesImg,
        subTitle:
            "Qapaq (aorta, mitral) təmiri/dəyişdirilməsi, ASD/VSD korreksiyası və ciddi ürək qüsurlarının cərrahi həlli. Kardiopulmoner bypass altında icra edilir.",
    },

    "coronary-bypass": {
        text: "Koronar Bypass (CABG)",
        img: servicesImg,
        subTitle:
            "2–4 damar şuntlaması, arterial revaskulyarizasiya. LIMA, radial arteriya və safen vena istifadə olunaraq ağır ürək çatışmazlığında belə tətbiq edilir.",
    },

    "minimally-invasive-surgery": {
        text: "Minimal İnvaziv Cərrahiyyə",
        img: servicesImg,
        subTitle:
            "Kiçik kəsiklərlə endoskopik qapaq əməliyyatları və bypass. Döş sümüyü tam kəsilmir, daha az qan itkisi və sürətli sağalma təmin edir.",
    },

    "congenital-heart-defects": {
        text: "Anadangəlmə Ürək Qüsurları",
        img: servicesImg,
        subTitle:
            "Uşaq və böyüklərdə ASD, VSD və digər anomaliyaların cərrahi korreksiyası. Qulaqcıqlararası çəpər defektlərinin aradan qaldırılması.",
    },

    "aortic-surgery": {
        text: "Aorta Cərrahiyyəsi",
        img: servicesImg,
        subTitle:
            "Anevrizma və diseksiyaların açıq və endovasküler (EVAR/TEVAR) üsullarla müalicəsi, kompleks aorta qövsü əməliyyatları.",
    },

    "peripheral-vascular-surgery": {
        text: "Periferik Damar Cərrahiyyəsi",
        img: servicesImg,
        subTitle:
            "Aorta-bifemoral bypass, karotid endarterektomiya və periferik damar xəstəliklərinin cərrahi müalicəsi.",
    },

    "varicose-vein-treatment": {
        text: "Varikoz Vena Müalicəsi",
        img: servicesImg,
        subTitle:
            "EVLA lazer ablasiyası, skleroterapiya və fleboektomiya ilə varikoz damarların müasir müalicəsi.",
    },

    "combined-operations": {
        text: "Birləşdirilmiş Əməliyyatlar",
        img: servicesImg,
        subTitle:
            "Eyni seansda bir neçə ürək-damar cərrahiyyəsi əməliyyatının kombinə şəkildə icrası.",
    },
};

export default function HeroWrapper() {
    const pathname = usePathname();
    const [hero, setHero] = useState<any>(heroContents["/"]);

    useEffect(() => {
        if (heroContents[pathname]) {
            setHero(heroContents[pathname]);
            return;
        }

        if (pathname.startsWith("/services/")) {
            const slug = pathname.split("/")[2];
            setHero(serviceHeroMap[slug] || heroContents["/services"]);
            return;
        }

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