"use client";
import { useMemo } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";
import type { StaticImageData } from "next/image";

import aboutImg from '@/public/assets/images/homeImage.png'
import servicesImg from '@/public/assets/images/homeImage.png'
import projectsImg from '@/public/assets/images/homeImage.png'
import contactImg from '@/public/assets/images/homeImage.png'

type HeroData = {
    isHome?: boolean;
    video?: string;
    img?: StaticImageData;
    text?: string;
    subTitle?: string;
};

const heroContents: Record<string, HeroData> = {
  "/": {
    isHome: true,
  },

  "/about": {
    isHome: true,
  },

  "/contact": {
    isHome: true,
  },

  "/services": {
    isHome: true,
  },

  "/projects": {
    isHome: true,
  },

  "/blog": {
    isHome: true,
  },
    
};

const serviceHeroMap: Record<string, HeroData> = {
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

    const normalizedPath = useMemo(() => {
        const path = pathname.replace(/^\/(az|en|ru)/, "") || "/";

        return path !== "/" ? path.replace(/\/$/, "") : path;
    }, [pathname]);

    const hero = useMemo<HeroData>(() => {
        const staticHero = heroContents[normalizedPath];

        if (staticHero) return staticHero;

        if (normalizedPath.startsWith("/services/")) {
            const slug = normalizedPath.split("/")[2];
            return serviceHeroMap[slug] ?? heroContents["/services"];
        }

        return heroContents["/"];
    }, [normalizedPath]);

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
