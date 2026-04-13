"use client";
import { projects } from "@/components/home/ourProjects/projes";
import { useState, useRef, useEffect, use } from "react";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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