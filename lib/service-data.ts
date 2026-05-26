import {
  Bug, Microscope, FlaskConical, Heart, Wind,
  Baby, ShieldAlert, Eye, TestTube, Clock,
  Pill, Syringe, Dog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug:     string;
  icon:     LucideIcon;
  title:    string;
  desc:     string;
  fullDesc: string;
}

export const services: Service[] = [
  {
    slug:  "helmintozlar",
    icon:  Bug,
    title: "Helmintozlar",
    desc:  "Askaridoz, enterobioz, exinokokkoz və digər qurd xəstəliklərinin diaqnostikası və müalicəsi.",
    fullDesc: `Askaridoz (Ascaris lumbricoides), enterobioz (bizquyruq), teniarinxoz (öküz soliteri), tenioz (donuz soliteri), opistorxoz, klonorxoz, fassiolyoz, exinokokkoz, trixinelloz, strongiloidoz, ankilostomidoz, nekatoroz, şistosomoz və digər bağırsaq parazitlər.\n\nDiaqnoz nəcis analizi, perianal yapışqan lent metodu, qan analizləri (İgE və spesifik anticisimlər), USM, KT vasitəsilə qoyulur.\n\nMüalicə yaşa və çəkiyə uyğun antihelmintik preparatlarla aparılır. Ailənin bütün üzvlərinin müayinəsi vacibdir.`,
  },
  {
    slug:  "protozoy",
    icon:  Microscope,
    title: "Protozoy xəstəlikləri",
    desc:  "Lyamblioz, amöbiaz, leyşmanioz, toksoplazmoz, malyariya və digər parazitar infeksiyalar.",
    fullDesc: `Lyamblioz (Giardia lamblia), amöbiaz, blastosistoz, visseral leyşmanioz, dəri leyşmaniozu (Azərbaycanın Şəki, Goranboy, Tərtər, Şəmkir, Bərdə, Göyçay rayonlarında endemik), toksoplazmoz, malyariya, Acanthamoeba keratiti.\n\nDr. Aslanova xüsusilə leyşmanioz diaqnostikası və müalicəsində böyük təcrübəyə malikdir, kosmetik defekt qalmadan tam sağaltma əldə edə bilir.`,
  },
  {
    slug:  "hepatit",
    icon:  FlaskConical,
    title: "Virus hepatitləri",
    desc:  "Hepatit A, B, C, D və E formalarının diaqnostikası, izlənməsi və antiviral müalicəsi.",
    fullDesc: `Hepatit A, B, C, D və E formalarının diaqnostikası, izlənməsi və müalicəsi.\n\nHepatit C üçün antiviral kombinə müalicə (3 ay ərzində tam sağalma mümkündür), hepatit B daşıyıcılarının uzunmüddətli nəzarəti.\n\nSirroz və qaraciyər xərçəngi kimi ağırlaşmaların qarşısının alınması. Viral, spirtli içkilər, dərman preparatları, göbələk zəhərlənməsi səbəbli hepatitlərin differensial diaqnostikası.`,
  },
  {
    slug:  "mede-bagırsaq",
    icon:  Heart,
    title: "Mədə-bağırsaq infeksiyaları",
    desc:  "Helicobacter pylori, rotavirus, salmonelloz, dizenteriya və digər bağırsaq infeksiyaları.",
    fullDesc: `Helicobacter pylori mənşəli qastrit, duodenit, mədə xorası — 2-li, 3-lü antibiotik kombinə müalicə protokolları.\n\nRotavirus, adenovirus, salmonelloz, dizenteriya, kampilobakterioz, yersinioz, listerioz, kolera müalicəsi.\n\nQaraciyər absesi diaqnostikası. Bağırsaq mikroflorasının bərpası. Endoskopiya və laboratoriya diaqnostikasına yönləndirmə.`,
  },
  {
    slug:  "teneffus",
    icon:  Wind,
    title: "Tənəffüs yolları infeksiyaları",
    desc:  "Qrip, pnevmoniya, bronxit, faringit, sinusit, otitis media və KRVİ müalicəsi.",
    fullDesc: `Qrip (influenza), pnevmoniya, bronxit, faringit, tonzilit, kəskin otitis media, sinusit, adenovirus infeksiyası, KRVİ.\n\nDr. Aslanova badamcıqların erkən kəsdirilməsinə qarşıdır — immun sistemin tərkib hissəsi kimi müalicəyə tabe olmayan hallar istisna olmaqla qorunmasını vacib hesab edir.`,
  },
  {
    slug:  "usaq-infeksiyalari",
    icon:  Baby,
    title: "Uşaq infeksion xəstəlikləri",
    desc:  "Qızılca, su çiçəyi, skarlatina, əl-ayaq-ağız xəstəliyi və digər uşaq infeksiyaları.",
    fullDesc: `Qızılca (rubeola), su çiçəyi (Varicella zoster), kəmərləyici dəmrov, qızılyel (Streptococcus pyogenes mənşəli), əl-ayaq-ağız xəstəliyi (Koksaki virus), skarlatina.\n\nQızılca üçün İgG anticisim analizi ilə immunitet səviyyəsinin təyini xidməti də göstərilir.`,
  },
  {
    slug:  "cyyi",
    icon:  ShieldAlert,
    title: "Cinsi yolla yoluxan infeksiyalar",
    desc:  "Siflis, qonoreya, xlamidioz, HPV, genital herpes, İİV/QİÇS diaqnostika və müalicəsi.",
    fullDesc: `Siflis, qonoreya, xlamidial infeksiyalar, trixomoniaz, genital herpes (HSV-2), HPV, İİV/QİÇS, yumşaq şankr.\n\nPap Smear yaxma testi və PZR diaqnostikası, antiviral müalicə.\n\nHPV peyvəndi 11-12 yaşlardan tövsiyə olunur (qızlar 26, oğlanlar 21 yaşa qədər).`,
  },
  {
    slug:  "torch",
    icon:  Baby,
    title: "TORCH infeksiyaları",
    desc:  "Hamiləlik planlaşdıran xanımlar üçün kompleks seroloji və PZR diaqnostikası.",
    fullDesc: `Toksoplazmoz, rubella, CMV, HSV-1/2, Varicella, sifilis, hepatit B, leptospiroz, EBV, İİV, Parvovirus B19 üzrə kompleks seroloji və PZR diaqnostikası.\n\nBətndaxili infeksiyaların erkən aşkarlanması və qarşısının alınması.`,
  },
  {
    slug:  "deri",
    icon:  Eye,
    title: "Dəri və selikli qişa infeksiyaları",
    desc:  "Dəri leyşmaniozu, onixomikoz, demodikoz, herpes labialis, konyuktivit müalicəsi.",
    fullDesc: `Dəri leyşmaniozu, onixomikoz (dırnaq göbələyi), Tinea capitis (saçlı dəri göbələyi), demodikoz, herpes labialis (HSV-1), gənə dişləməsi infeksiyaları, parazitar mənşəli allergik səpgilər, konyuktivit.`,
  },
  {
    slug:  "sidik",
    icon:  TestTube,
    title: "Sidik-cinsiyyət sistemi infeksiyaları",
    desc:  "Sistit, uretrit, pielonefrit, vulvovaginit və reproduktiv sistem infeksiyaları.",
    fullDesc: `Sistit, uretrit, pielonefrit, vulvovaginit, qadın və kişi reproduktiv sistem infeksiyaları, parazitlərlə bağlı vaginal axıntılar.`,
  },
  {
    slug:  "verem",
    icon:  Microscope,
    title: "Vərəm diaqnostikası",
    desc:  "Quantiferon testi ilə latent vərəm, ağciyər və ekstrapulmonar tuberkulyoz üzrə məsləhət.",
    fullDesc: `Quantiferon testi vasitəsilə gizli (latent) vərəmin aşkarlanması, ağciyər və ekstrapulmonar vərəm (limfa düyünləri, sümük, dəri, böyrək, beyin) üzrə məsləhət.\n\nHİV xəstələrində ekstrapulmonar vərəm xüsusi diqqət sahəsidir. Rentgenoloji və bakterioloji testlərlə uyğunlaşdırma.`,
  },
  {
    slug:  "zoonoz",
    icon:  Dog,
    title: "Zoonoz infeksiyalar",
    desc:  "Bruselyoz, qarayara, leptospiroz, tularemiya, qudurma, ekinokokkoz müalicəsi.",
    fullDesc: `Bruselyoz (heyvandarlıqla məşğul olan şəxslər üçün peşə xəstəliyi), qarayara (Bacillus anthracis), leptospiroz (qızdırma, sarılıq, əzələ ağrısı), listerioz, tularemiya, qudurma, ekinokokkoz.`,
  },
  {
    slug:  "peyvend",
    icon:  Syringe,
    title: "Peyvəndləmə",
    desc:  "Hepatit B, qızılca, qrip, HPV, tetanoz peyvəndləri üzrə məsləhət və icra.",
    fullDesc: `Hepatit B peyvəndi (90-95% qoruyuculuq), qızılca-məxmərək-parotit, qrip peyvəndi (hər il), HPV peyvəndi (11-12 yaşdan), tetanoz immunoqlobulini.\n\nDr. Aslanova özü COVID-19 peyvəndinin pioner alanlarından biridir.`,
  },
  {
    slug:  "checkup",
    icon:  FlaskConical,
    title: "Parazitoloji Check-up",
    desc:  "Profilaktik aşkarlama paketi: qan, nəcis, anticisim testləri və USM müayinəsi.",
    fullDesc: `Klinikada parazitar xəstəliklərin profilaktik aşkarlanması üçün xüsusi kompleks müayinə paketi: ümumi qan analizi, nəcis analizi, anticisim testləri (İgG, İgM, İgE), USM müayinəsi.\n\nBayram dövrləri laboratoriya analizlərinə 30%-ə qədər endirimlər.`,
  },
  {
    slug:  "yorgunluq",
    icon:  Clock,
    title: "Xroniki Yorğunluq Sindromu",
    desc:  "Uzun müddətli halsızlıq, saç tökülməsi, yaddaş zəifliyi — parazitar mənşə araşdırması.",
    fullDesc: `6 aydan artıq davam edən yorğunluq, baş ağrısı, yaddaş zəifliyi, boğaz ağrısı, saç tökülməsi, dırnaq qırılması, oynaq ağrıları, yuxu pozğunluqları kimi şikayətlərin parazitar və infeksion mənşəli səbəblərinin araşdırılması.`,
  },
  {
    slug:  "antibiotik",
    icon:  Pill,
    title: "Antibiotik / Antifungal müalicə",
    desc:  "Rezistentliyə qarşı düzgün preparat seçimi, yaş və çəkiyə uyğun doza hesablaması.",
    fullDesc: `Rezistentlik problemlərinin qarşısının alınması, dozaların yaş və çəkiyə əsasən hesablanması, qaraciyər və böyrək funksional testlərinə əsasən preparat seçimi.\n\nAntifungallar yalnız yüksək risk qrupları üçün — hər antibiotik alan xəstəyə antifungal təyini səhv yanaşmadır.\n\nRamazan ayında oruc tutan xəstələrə iftar-sahur rejiminə uyğun müalicə planı.`,
  },
  {
    slug:  "laboratoriya",
    icon:  TestTube,
    title: "Laboratoriya xidmətləri",
    desc:  "08:00–17:00 arası PZR, seroloji testlər, mikroskopiya, qaraciyər paneli, hemoqram.",
    fullDesc: `Klinikanın öz laboratoriyasında 08:00–17:00 saatları arasında:\n\nQaraciyər funksional paneli, hemoqram, EÇS, CRP, anti-HCV, HBsAg, anticisim testləri (İgG, İgM, İgE), mikroskopiya, seroloji testlər, PZR analizləri, sümük iliyinin morfoloji müayinəsi, nəcis ümumi analizi yüksək keyfiyyətdə həyata keçirilir.`,
  },
];