"use client";
import { useState, useRef, useEffect, use } from "react";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Hyatt Regency – Çöl Hovuz",
      slug: "hyatt-pool",
      description: "Otellər üçün geniş açıq hovuz layihəsi.",
      images: [
        "/assets/projects/hyattRegency/hovuz1.jpg",
        "/assets/projects/hyattRegency/hyattVideo.mp4",
        "/assets/projects/hyattRegency/hovuz2.jpeg",

      ],
    },
    {
      title: "Goradil layihəsi",
      slug: "goradil",
      description: "Tikinti prosesi və hovuz tamamlanma mərhələləri.",
      images: [
        "/assets/projects/goradil/tikintiprocess2.png",
        "/assets/projects/goradil/hovuz1.png",
        "/assets/projects/goradil/hovuz2.png",
        "/assets/projects/goradil/tikintiprocess1.png",
      ],
    },
    {
      title: "Villa Badam layihəsi",
      slug: "villa-badam",
      description: "Tikinti prosesi və hovuz tamamlanma mərhələləri.",
      images: [
        "/assets/projects/villabadam/video4.mp4",
        "/assets/projects/villabadam/video3.mp4",
        "/assets/projects/villabadam/video2.mp4",
      ],
    },
    {
      title: "Daşma hovuz (Badamdar layihəsi)",
      slug: "badamdar",
      description: "Tikinti prosesi və hovuz tamamlanma mərhələləri.",
      images: [
        "/assets/projects/badamdar/hovuz1.jpeg",
        "/assets/projects/badamdar/hovuz2.jpeg",
        "/assets/projects/badamdar/hovuz3.jpeg",
      ],
    },
    {
      title: "Daşma hovuz (Bilgəh Mircəlal küç.)",
      slug: "bilgeh",
      description: "Tikinti prosesi və hovuz tamamlanma mərhələləri.",
      images: [
        "/assets/projects/bilgeh/hovuz.JPG",
        "/assets/projects/bilgeh/hovuz1.jpeg",
        "/assets/projects/bilgeh/hovuz3.jpeg",
        "/assets/projects/bilgeh/hovuz4.jpeg",
        "/assets/projects/bilgeh/hovuz5.jpeg",
        "/assets/projects/bilgeh/hovuz6.jpeg",



      ],
    },
    {
      title: "My Class (Yasamal) – Hovuz",
      slug: "myclass-hovuz",
      description: "Fitness mərkəzi üçün müasir filtrasiya sistemi ilə qurulmuş hovuz layihəsi.",
      images: [
        "/assets/projects/myclass/hovuz.jpg",
        "/assets/projects/myclass/hovuz2.jpg",
        "/assets/projects/myclass/hovuz3.jpg",
        "/assets/projects/myclass/hovuz4.jpg",
      ],
    },
    {
      title: "My Class (Yasamal) – Cakuzi",
      slug: "myclass-cakuzi",
      description: "Relaks və hidromasaj üçün premium jacuzzi sistemi.",
      images: [
        "/assets/projects/myclass/cakuzi.jpg",
        "/assets/projects/myclass/cakuzi2.jpg",
        "/assets/projects/myclass/cakuzi3.jpg",
        "/assets/projects/myclass/cakuzi4.jpg",
      ],
    },
    {
      title: "My Class (Yasamal) – Sauna",
      slug: "myclass-sauna",
      description: "Fin sauna texnologiyası ilə hazırlanmış zona.",
      images: [
        "/assets/projects/myclass/sauna.jpg",
        "/assets/projects/myclass/sauna2.jpg",
        "/assets/projects/myclass/sauna3.jpg",
        "/assets/projects/myclass/sauna4.jpg",
      ],
    },
    {
      title: "My Class (Yasamal) – Türk Hamamı",
      slug: "myclass-hamam",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/myclass/turkhamami.jpg",
        "/assets/projects/myclass/turkhamami2.jpg",
      ],
    }
    ,
    {
      title: "My Class (Yasamal) – buixar otagi ",
      slug: "myclass-buxar",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/myclass/buxarotagi.jpg",
      ],
    },
    {
      title: "My Class (Yasamal) – duzotagi",
      slug: "myclass-duzotagi",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/myclass/duzotagi.jpg",
        "/assets/projects/myclass/duzotagi2.jpg",
        "/assets/projects/myclass/duzotagi3.jpg",
        "/assets/projects/myclass/duzotagi4.jpg",

      ],
    },
    {
      title: "My Class (Yasamal) – masaj otagi",
      slug: "myclass-masaj",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/myclass/masajotagi.jpg",
        "/assets/projects/myclass/masajotagi 2.jpg",

      ],
    }
    ,
    {
      title: "My Class (Yasamal) – kise otagi",
      slug: "myclass-kise",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [

        "/assets/projects/myclass/turkhamami3.jpg",

      ],
    },
    {
      title: "Buzovna - Hovuz",
      slug: "buzovna-hovuz",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [

        "/assets/projects/buzovna/hovuz.jpeg",
        "/assets/projects/buzovna/hovuz2.jpeg",
        "/assets/projects/buzovna/hovuz3.jpeg",
        "/assets/projects/buzovna/hovuz4.jpeg",
        "/assets/projects/buzovna/hovuz5.jpeg",

      ],
    }
    ,
    {
      title: "makfit - Hovuz",
      slug: "makfit-hovuz",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/makfit/hovuzfinal.Webp",

        "/assets/projects/makfit/hovuz.jpeg",
        "/assets/projects/makfit/hovuz2.jpeg",
        "/assets/projects/makfit/hovuz3.jpeg",
        "/assets/projects/makfit/hovuz4.jpeg",
        "/assets/projects/makfit/hovuz5.jpeg",
        "/assets/projects/makfit/hovuz6.jpeg",
        "/assets/projects/makfit/hovuz7.jpeg",
        "/assets/projects/makfit/hovuz8.jpeg",
        "/assets/projects/makfit/hovuz9.jpeg",

      ],
    }
    ,
    {
      title: "crown - buxar",
      slug: "crown-buxar",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/crown/buxar.webp",
        "/assets/projects/crown/buxar2.jpeg"
      ],
    },
    {
      title: "crown - buz hovuzu",
      slug: "crown-buz",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/crown/Buz-hovuzu.webp",
      ]
    },
    {
      title: "crown - kise",
      slug: "crown-kise",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/crown/Kis.webp",
        "/assets/projects/crown/kise2.jpeg",

      ],
    }, {
      title: "crown - rus hamami",
      slug: "crown-rus",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/crown/rushamam1.webp",
      ],
    }, {
      title: "crown - sauna",
      slug: "crown-saunaa",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/crown/Sauna.webp",
        "/assets/projects/crown/Sauna.webp",
      ],
    }
    , {
      title: "crown - Turk hamami",
      slug: "crown-turk",
      description: "Mərmər interyer və buxar sistemi ilə klassik hamam.",
      images: [
        "/assets/projects/crown/Trkhamami1.webp",
        "/assets/projects/crown/Trkhamami2.webp",
        "/assets/projects/crown/Trkhamami3.webp",
        "/assets/projects/crown/Trkhamami4.webp",
        "/assets/projects/crown/turkhamami5.webp",
      ],
    }
  ];
  const openModal = (index: number) => {
    setActiveIndex(index);
    setSelectedMedia(null);
    setCurrentImageIndex(1);
    setModalOpen(true);
  };

  const project = projects[activeIndex];
  const mediaList = project.images || []

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + mediaList.length) % mediaList.length
    );
    setSelectedMedia(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mediaList.length);
    setSelectedMedia(null);
  };

  // Klaviatura Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;

      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, currentImageIndex]);

  return (
    <section ref={sectionRef} className="py-16 bg-white text-gray-900">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              onClick={() => openModal(i)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-2xl">
                {project.images?.[0]?.endsWith(".mp4") ? (
                  <video
                    src={project.images[0]}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img
                    src={project.images?.[0]}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              <h3 className="mt-4 text-xl font-bold group-hover:text-[#C49B63] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">{project.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-1000 p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-black w-full max-w-6xl h-[80vh] flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left - Video/Image */}
            <div className="w-full  bg-black flex items-center justify-center relative">
              <div className="w-full bg-black flex items-center justify-center relative">
                {selectedMedia ? (
                  selectedMedia.endsWith(".mp4") ? (
                    <video
                      src={selectedMedia}
                      controls
                      autoPlay
                      className="w-full h-full object-contain rounded-l-2xl"
                    />
                  ) : (
                    <img
                      src={selectedMedia}
                      alt="Selected"
                      className="w-full h-full object-contain rounded-l-2xl"
                    />
                  )
                ) : mediaList.length ? (
                  mediaList[currentImageIndex].endsWith(".mp4") ? (
                    <video
                      src={mediaList[currentImageIndex]}
                      controls
                      autoPlay
                      className="w-full h-full object-contain rounded-l-2xl"
                    />
                  ) : (
                    <img
                      src={mediaList[currentImageIndex]}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-l-2xl"
                    />
                  )
                ) : null}

                {mediaList.length > 1 && (
                  <>
                    <button onClick={prevImage} className="...">&#10094;</button>
                    <button onClick={nextImage} className="...">&#10095;</button>
                  </>
                )}
              </div>
              {mediaList.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white text-2xl md:text-3xl rounded-full shadow-lg hover:bg-[#C49B63] hover:scale-110 transition-all duration-300"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white text-2xl md:text-3xl rounded-full shadow-lg hover:bg-[#C49B63] hover:scale-110 transition-all duration-300"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>

            {/* Right - Info & Thumbnails */}
            <div className="md:w-1/3 bg-gray-900 p-6 flex flex-col justify-start">
              {mediaList.length > 1 && (
                <div className="flex gap-3 mb-6 overflow-x-auto">
                  {mediaList.map((media, i) => (
                    media.endsWith(".mp4") ? (
                      <video
                        key={i}
                        src={media}
                        onClick={() => {
                          setCurrentImageIndex(i);
                          setSelectedMedia(null);
                        }}
                        className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 transition ${i === currentImageIndex
                          ? "border-[#C49B63]"
                          : "border-gray-700 hover:border-[#C49B63]"
                          }`}
                        muted
                      />
                    ) : (
                      <img
                        key={i}
                        src={media}
                        onClick={() => {
                          setCurrentImageIndex(i);
                          setSelectedMedia(null);
                        }}
                        className={`w-20 h-20 object-cover cursor-pointer rounded-lg border-2 transition ${i === currentImageIndex
                          ? "border-[#C49B63]"
                          : "border-gray-700 hover:border-[#C49B63]"
                          }`}
                      />
                    )
                  ))}
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {selectedMedia && (
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="mt-auto px-4 py-2 bg-[#C49B63] rounded-lg text-black font-semibold hover:bg-yellow-500 transition"
                >
                  Show Video
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}