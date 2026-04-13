import Button from "@/components/common/Button";
import { projects } from "./projes";

export default function OurProjects() {


  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="uppercase tracking-[0.15em] text-sm md:text-[16px] font-extrabold text-[#C49B63]">
            Layihələrimiz
          </h3>

          <h2 className="mt-4 text-[56px] font-extrabold leading-tight">
            Real hovuz və SPA layihələrimiz
          </h2>

          <p className="mt-6 text-gray-500">
            Tamamladığımız real layihələr ilə keyfiyyət, estetik və funksionallığı bir araya gətiririk.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(3,6).map((project) => (
            <article
              key={project.title}
              className="relative overflow-hidden rounded-[24px] cursor-pointer group"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black rounded-[24px]" />

              <div className="absolute bottom-0 left-4 right-4 p-4 z-20 transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-sm mt-6 text-slate-200">
                  {project.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-[#C49B63] font-semibold">
                  Ətraflı →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Button text="Bütün Layihələr" link="/projects" type={2} />
        </div>

      </div>
    </section>
  );
}