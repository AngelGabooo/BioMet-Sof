import { PROJECTS } from '../../data/projects';
import Reveal from '../ui/Reveal';

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-3.5 h-3.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function Projects() {
  // 👇 Solo mostramos los primeros 4 proyectos
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="proyectos" className="relative py-20 md:py-28">
      <div className="container-biomey">

        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Algunos de nuestros <span className="text-accent">proyectos</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Trabajos reales que hemos desarrollado para negocios, instituciones
              y emprendedores de la región.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <article
                className="
                  group relative flex flex-col overflow-hidden h-full
                  bg-surface border border-border rounded-2xl
                  transition-all duration-300
                  hover:border-accent/30 hover:-translate-y-1
                  hover:shadow-card
                "
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-background">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                  <span
                    className="
                      absolute top-3 left-3
                      inline-flex items-center
                      px-2.5 py-1 rounded-lg
                      bg-background/90 backdrop-blur-sm
                      border border-border
                      text-[11px] font-medium text-foreground
                    "
                  >
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-semibold mb-1.5 leading-snug">
                    {project.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs text-muted mb-3">
                    <MapPinIcon />
                    {project.location}
                  </div>

                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            {/* 👇 Cambiamos el enlace para que lleve a la página completa */}
            <a
              href="/proyectos"
              className="
                group inline-flex items-center justify-center gap-2
                bg-surface border border-border
                hover:bg-background hover:border-accent/40
                text-foreground text-sm font-semibold
                px-6 py-3.5 rounded-xl
                transition-all duration-200
                shadow-soft
                active:scale-[0.98]
              "
            >
              Ver todos los proyectos
              <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}