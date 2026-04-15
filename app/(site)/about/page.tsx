"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import certImg from "@/public/assets/images/aboutImg.png"

interface Props {
  locale?: "az" | "en";
}

const content = {
  az: {
    about: {
      badge: "HAQQIMIZDA",
      title:
        "Ürək-damar cərrahı Dr. Beyrək Abbaszadə haqqında",
      desc: `Dr. Beyrək Abbaszadə Azərbaycanın aparıcı ürək-damar cərrahlarından biridir. Açıq və minimal invaziv ürək əməliyyatları, koronar bypass, aorta və anadangəlmə ürək qüsurlarının müalicəsində ixtisaslaşmışdır. O, müasir cərrahi texnologiyaların tətbiqi və mürəkkəb klinik halların uğurlu idarə olunması ilə tanınır.

Hazırda Lux International Hospital, Mərkəzi Klinika və digər aparıcı tibb müəssisələrində fəaliyyət göstərir. Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyətinin (AÜDCC) tam üzvüdür.`,
      features: [
        {
          title: "Açıq ürək əməliyyatları",
          desc: "Koronar bypass, qapaq təmiri və dəyişdirilməsi"
        },
        {
          title: "Minimal invaziv cərrahiyyə",
          desc: "Kiçik kəsiklərlə müasir əməliyyat üsulları"
        },
        {
          title: "Aorta cərrahiyyəsi",
          desc: "Anevrizma, diseksiya və kompleks rekonstruksiyalar"
        },
        {
          title: "Anadangəlmə qüsurlar",
          desc: "Uşaq və böyüklərdə ürək qüsurlarının müalicəsi"
        }
      ],
      cta: "Konsultasiya üçün müraciət et",
      contact: "24/7 Əlaqə Mərkəzi",
      licenseBadge: "Rəsmi tibb fəaliyyəti"
    },

    story: {
      title: "Peşəkar fəaliyyət",
      desc: `Dr. Abbaszadə fəaliyyətində yüksək riskli və mürəkkəb ürək əməliyyatlarını uğurla icra etməsi ilə tanınır. Onun rəhbərliyi ilə icra edilən əməliyyatlar beynəlxalq standartlara uyğun şəkildə həyata keçirilir.

O, həmçinin beynəlxalq tibbi əməkdaşlıqlarda iştirak etmiş, qonaq cərrah kimi xarici klinikalarda təcrübə mübadiləsi aparmışdır.`
    },

    testimonials: {
      title: "Pasiyent rəyləri",
      items: [
        {
          name: "Pasiyent ailəsi",
          text:
            "Xaricdə əməliyyatdan imtina etdilər, amma Dr. Beyrək bizi xilas etdi. Qısa zamanda normal həyata qayıtdıq."
        },
        {
          name: "Hüseynqulu baba",
          text:
            "82 yaşımda bypass əməliyyatı oldum. 6 gün sonra evə çıxdım. Sonsuz təşəkkür edirəm."
        },
        {
          name: "Pasiyent",
          text:
            "Çox riskli əməliyyatı uğurla keçirdim. Özümü yenidən doğulmuş kimi hiss edirəm."
        }
      ]
    },
    education: {
  title: "Təhsil və Mentorluq",

  mentor: {
    title: "Mentor",
    desc: "Prof. Kamran Kazımoğlu Musayev – Azərbaycanda ürək-damar cərrahiyyəsinin ən böyük nüfuzlarından biri"
  },

  society: {
    title: "Elmi Cəmiyyət",
    desc: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyəti (AÜDCC) – tam üzv"
  },

  international: {
    title: "Beynəlxalq Fəaliyyət",
    desc: "Azərbaycan-Özbəkistan tibbi əməkdaşlığı çərçivəsində Shox Med Hospital (Daşkənd) qonaq cərrahı"
  }
},

achievements: {
  title: "Əsas Nailiyyətlər",

  items: [
    {
      title: "Tarixi Əməliyyat",
      desc: "21 fevral 2024-cü ildə Şirvan Diaqnostik Mərkəzdə TƏBİB nəzarəti altında ilk açıq ürək əməliyyatı icra edildi. 55 yaşlı xəstə uğurla sağaldı."
    },
    {
      title: "AÜDCC 20-illik Yubileyi",
      desc: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyətinin 20-illik yubiley tədbirində iştirak."
    },
    {
      title: "Bakı Ürək Günləri VIII",
      desc: "VIII Beynəlxalq Konqresdə Prof. Kamran Kazımoğlu Musayev ilə birlikdə iştirak."
    },
    {
      title: "Bakı Ürək Günləri IX",
      desc: "BÜG2025 IX Beynəlxalq Konqresində iştirak."
    },
    {
      title: "AÜDCC Seminari",
      desc: "Aorta patologiyalarının müalicəsi üzrə mühazirə və mürəkkəb aorta qövsü rekonstruksiyası."
    },
    {
      title: "Beynəlxalq Dəvət",
      desc: "Daşkənd Shox Med Hospital-da qonaq cərrah kimi fəaliyyət və pulsuz konsultasiyalar."
    },
    {
      title: "Nadir Əməliyyat",
      desc: "CABG x4 + nefrektomiya + vena cava trombektomiya kimi kompleks kombinə əməliyyat."
    }
  ]
},

philosophy: {
  title: "Klinik Fəlsəfə",
  quotes: [
    "Əsərinin üzərində imzası olmayan yeganə sənətkar müəllimdir. – M.K. Atatürk",
    "Hər bir həyat bizim üçün dəyərlidir. Pasiyentin üzündəki gülüş – bizim ən böyük mükafatımızdır."
  ],
  desc: "Dr. Abbaszadənin yanaşması təkcə texniki cərrahiyyə deyil, insana dəyər verən tibbi fəlsəfəyə əsaslanır. Hər uğurun arxasında güclü mentorluq, komanda işi və məsuliyyət dayanır."
}
  },

  en: {
    about: {
      badge: "ABOUT",
      title: "About Cardiovascular Surgeon Dr. Beyrək Abbaszadə",
      desc: `Dr. Beyrək Abbaszadə is one of Azerbaijan’s leading cardiovascular surgeons. He specializes in open-heart surgery, minimally invasive cardiac procedures, coronary bypass, aortic surgery, and congenital heart defect corrections.

He is known for applying modern surgical technologies and successfully managing complex clinical cases. He currently practices at leading medical institutions including Lux International Hospital and Mərkəzi Klinika.`,
      features: [
        {
          title: "Open-heart surgery",
          desc: "Bypass surgery and valve repair/replacement"
        },
        {
          title: "Minimally invasive surgery",
          desc: "Advanced small-incision cardiac procedures"
        },
        {
          title: "Aortic surgery",
          desc: "Aneurysm, dissection, and complex reconstructions"
        },
        {
          title: "Congenital heart defects",
          desc: "Treatment for children and adults"
        }
      ],
      cta: "Request consultation",
      contact: "24/7 Contact Center",
      licenseBadge: "Licensed medical practice"
    },

    story: {
      title: "Professional Practice",
      desc: `Dr. Abbaszadə is recognized for successfully performing high-risk and complex cardiac surgeries.

His work is aligned with international medical standards, and he has participated in international collaborations as a visiting surgeon, sharing experience and expertise with foreign clinics.`
    },

    testimonials: {
      title: "Patient Reviews",
      items: [
        {
          name: "Patient family",
          text:
            "They refused surgery abroad, but Dr. Beyrək saved us. We returned to normal life quickly."
        },
        {
          name: "Huseynqulu",
          text:
            "I had bypass surgery at 82 and was discharged in 6 days. Deep gratitude."
        },
        {
          name: "Patient",
          text:
            "A very high-risk surgery was performed successfully. I feel like I was reborn."
        }
      ]
    }
  }

};

export default function About({ locale = "az" }: Props) {
  const t = content[locale];

  return (
    <main className="bg-gray-50">
      {/* ABOUT */}
      <section className="max-w-[1300px] justify-between mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 flex flex-col lg:flex-row items-center gap-20">

        {/* TEXT */}
        <div className="flex-1 flex flex-col gap-10">
          <span className="text-[#C49B63] uppercase tracking-[0.2em] font-bold text-sm md:text-[16px] ">
            {t.about.badge}
          </span>

          <h1 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {t.about.title}
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {t.about.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {t.about.features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <h3 className="text-[#C49B63] font-bold mb-3 text-lg">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-6">
            <Button text={t.about.cta} link="/contact" type={2} />
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {t.about.contact}
              </span>
              <div className="font-bold text-[#C49B63] text-lg mt-1">
                +994 50 312 76 57
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-end relative w-full h-[400px] sm:h-[500px] lg:h-[900px] rounded-3xl">
          <Image
            src={certImg}
            alt="Turan İnşaat hovuz və spa layihəsi"
            width={500}
            height={400}
            className="object-contain transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* LICENSE BADGE */}
          <div className="absolute top-4 right-4 bg-[#C49B63]/90 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
            {t.about.licenseBadge}
          </div>
        </div>
      </section>

      {/* STORY + TESTIMONIALS COMBINED */}
      <section className="bg-white">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24  ">

          {/* STORY */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              {t.story.title}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[800px] mx-auto">
              {t.story.desc}
            </p>
          </div>

          {/* TESTIMONIALS */}
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-12">
            {t.testimonials.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <p className="text-slate-600 mb-4 leading-relaxed">
                  "{item.text}"
                </p>
                <strong className="text-[#C49B63]">{item.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}