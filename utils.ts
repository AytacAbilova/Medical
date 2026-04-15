export type Locale = "az";

export type ServiceSection = {
  title: string;
  items: string[];
};

export type ServiceItem = {
  title: string;
  slug: string;
  icon: string;
  desc: string;
  sections: ServiceSection[];
  img?: string;
};

export const servicesContent: Record<Locale, ServiceItem[]> = {
  az: [
    {
      title: "Açıq Ürək Əməliyyatı",
      slug: "aciq-urek-emeliyyati",
      icon: "❤️",
      desc:
        "Kardiopulmoner bypass (heart-lung machine) altında icra olunan kompleks ürək əməliyyatları. Qapaq xəstəlikləri və struktur ürək qüsurlarının cərrahi müalicəsi.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "Aorta və mitral qapaqların təmiri və ya protezləşdirilməsi icra olunur.",
            "ASD və VSD kimi anadangəlmə ürək dəlikləri cərrahi yolla bağlanır.",
            "Ciddi ürək çatışmazlığı və struktur pozğunluqlarda əsas cərrahi seçim metodudur.",
            "Əməliyyat zamanı ürək müvəqqəti dayandırılır və qan dövranı süni aparatla təmin edilir.",
          ],
        },
      ],
    },

    {
      title: "Koronar Bypass (CABG)",
      slug: "koronar-bypass",
      icon: "🔬",
      desc:
        "Koronar arteriyalarda daralma və tıxanma nəticəsində ürək əzələsinə qan axınının bərpası üçün aparılan revaskulyarizasiya əməliyyatı.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "2–4 damar şuntlaması ilə ürəyə alternativ qan axını yaradılır.",
            "LIMA, radial arteriya və safen vena greftləri istifadə olunur.",
            "LMCA yüksək stenozunda (80–85%) əsas cərrahi seçim sayılır.",
            "EF aşağı olan (hətta 30% və aşağı) xəstələrdə belə tətbiq oluna bilir.",
            "Məqsəd infarkt riskini azaltmaq və həyat keyfiyyətini artırmaqdır.",
          ],
        },
      ],
    },

    {
      title: "Minimal İnvaziv Cərrahiyyə",
      slug: "minimal-invaziv-cerrrahiyye",
      icon: "⚡",
      desc:
        "Kiçik kəsiklər və endoskopik texnologiyalarla aparılan, daha az travmatik ürək əməliyyatları.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "Döş sümüyü tam açılmadan əməliyyat icra edilir.",
            "Endoskopik qapaq təmiri və minimal bypass prosedurları daxildir.",
            "Qan itkisi və infeksiya riski klassik əməliyyatlara görə daha azdır.",
            "Xəstəxanada qalma müddəti və sağalma prosesi daha qısadır.",
          ],
        },
      ],
    },

    {
      title: "Anadangəlmə Ürək Qüsurları",
      slug: "anadangelme-urek-qusurlari",
      icon: "🧬",
      desc:
        "Uşaqlarda və böyüklərdə rast gəlinən struktur ürək qüsurlarının cərrahi korreksiyası.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "ASD və VSD kimi septal defektlər bağlanır.",
            "Pulmonar venoz dönüş anomaliyaları cərrahi olaraq düzəldilir.",
            "Perikard yamağı və rekonstruktiv texnikalar istifadə olunur.",
            "Məqsəd normal qan dövranı və ürək funksiyasının bərpasıdır.",
          ],
        },
      ],
    },

    {
      title: "Aorta Cərrahiyyəsi",
      slug: "aorta-cerrrahiyyesi",
      icon: "🫀",
      desc:
        "Aortanın genişlənməsi, diseksiyası və digər həyati riskli patologiyalarının açıq və endovaskulyar müalicəsi.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "Aorta anevrizmalarının açıq rezeksiyası icra olunur.",
            "Aorta diseksiyası təcili cərrahi müdaxilə tələb edən vəziyyətdir.",
            "EVAR və TEVAR kimi endovaskulyar stent metodları tətbiq edilir.",
            "Aorta qövsünün kompleks rekonstruksiyası həyata keçirilə bilir.",
          ],
        },
      ],
    },

    {
      title: "Periferik Damar Cərrahiyyəsi",
      slug: "periferik-damar-cerrrahiyyesi",
      icon: "🦵",
      desc:
        "Beyin, ürək və aşağı ətraflara qan axınının bərpasına yönəlmiş damar əməliyyatları.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "Aorta-bifemoral bypass ilə aşağı ətraf qan dövranı bərpa edilir.",
            "Karotid endarterektomiya ilə insult riski azaldılır.",
            "Periferik damar tıxanmaları cərrahi və ya rekonstruktiv üsullarla açılır.",
            "Xəstələrdə ağrı, keyimə və qan dövranı pozğunluğu aradan qaldırılır.",
          ],
        },
      ],
    },

    {
      title: "Varikoz Vena Müalicəsi",
      slug: "varikoz-vena-mualicesi",
      icon: "🔵",
      desc:
        "Ayaqlarda genişlənmiş venaların minimal invaziv və estetik cərrahi üsullarla müalicəsi.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "EVLA lazer ablasiyası ilə damar içəridən bağlanır.",
            "Skleroterapiya ilə kiçik venalar kimyəvi yolla obliterasiya edilir.",
            "Fleboektomiya ilə genişlənmiş damarlar çıxarılır.",
            "Estetik nəticə və simptomların (ağrı, şişkinlik) azalması hədəflənir.",
          ],
        },
      ],
    },

    {
      title: "Birləşdirilmiş Əməliyyatlar",
      slug: "birlestirilmis-emeliyyatlar",
      icon: "🔗",
      desc:
        "Bir neçə ixtisasın iştirak etdiyi kompleks və yüksək riskli kombinə cərrahi əməliyyatlar.",
      sections: [
        {
          title: "Klinik Açıqlama",
          items: [
            "Eyni seansda ürək və digər orqan əməliyyatları icra edilə bilər.",
            "Məsələn: CABG + damar əməliyyatı + əlavə cərrahi müdaxilə.",
            "Multidisipliner komanda yanaşması ilə həyata keçirilir.",
            "Yüksək riskli xəstələr üçün fərdi planlaşdırma aparılır.",
          ],
        },
      ],
    },
  ],
};
