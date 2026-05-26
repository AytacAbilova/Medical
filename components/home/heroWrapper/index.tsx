"use client";
import { useMemo } from "react";
import Hero from "../hero";
import { usePathname } from "next/navigation";
import type { StaticImageData } from "next/image";

import servicesImg from '@/public/assets/images/aboutImg.jpeg'


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

  "/question": {
    isHome: true,
  },
    
};

const serviceHeroMap: Record<string, HeroData> = {
  "open-heart-surgery": {
    text: "İnfeksion xəstəliklərin diaqnostikası",
    img: servicesImg,
    subTitle:
      "Parazitar və bakterial infeksiyaların dəqiq laborator və instrumental müayinələrlə aşkarlanması. Eozinofiliya, IgE, nəcis analizi və USM əsasında kompleks diaqnostika.",
  },

  "coronary-bypass": {
    text: "Parazit və bağırsaq infeksiyaları",
    img: servicesImg,
    subTitle:
      "Uşaqlarda və böyüklərdə qurd invaziyaları, helmintlər və protozoa infeksiyalarının müasir müayinə və müalicə protokolları.",
  },

  "minimally-invasive-surgery": {
    text: "Hepatit A, B, C müayinəsi və müalicəsi",
    img: servicesImg,
    subTitle:
      "Viral hepatitlərin erkən diaqnostikası, PCR testlər, qaraciyər funksional analizləri və antiviral terapiya ilə tam nəzarət.",
  },

  "congenital-heart-defects": {
    text: "İnfeksion-parazitoloji check-up",
    img: servicesImg,
    subTitle:
      "Kompleks laborator paketlər: ümumi qan analizi, IgE, nəcis 3 dəfəlik müayinə, perianal test və USM ilə tam skrininq.",
  },

  "aortic-surgery": {
    text: "Qida mənşəli infeksiyalar",
    img: servicesImg,
    subTitle:
      "Çiy ət, süd və balıqdan keçən bakterial və parazitar xəstəliklərin (bruselyoz, toxoplazmoz, helmintlər) diaqnostikası və profilaktikası.",
  },

  "peripheral-vascular-surgery": {
    text: "Antibiotik terapiyası və rezistentlik",
    img: servicesImg,
    subTitle:
      "Yanlış antibiotik istifadəsi nəticəsində yaranan rezistentlik problemləri və düzgün müalicə protokolları.",
  },

  "varicose-vein-treatment": {
    text: "Linza və göz infeksiyaları",
    img: servicesImg,
    subTitle:
      "Acanthamoeba keratiti və digər infeksion göz xəstəliklərinin erkən aşkarlanması və təcili müalicə yanaşması.",
  },

  "combined-operations": {
    text: "Ümumi infeksion konsultasiya",
    img: servicesImg,
    subTitle:
      "Xəstənin şikayətlərinə əsasən kompleks yanaşma: laborator analizlər, diferensial diaqnoz və fərdi müalicə planı.",
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
