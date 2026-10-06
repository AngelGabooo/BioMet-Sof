import { useState, useMemo } from 'react';
import { PROJECTS } from '../data/projects';
import { getWhatsAppLink } from '../utils/whatsapp';
import Reveal from '../components/ui/Reveal';

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

// 👇 Añadimos "App Móvil" a las categorías
const CATEGORIES = ['Todos', 'Página Web', 'Sistema Web', 'Punto de Venta', 'E-commerce', 'Landing Page', 'App Móvil'];

function ProjectCard({ project }) {
  return (
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

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-base md:text-lg font-semibold mb-1.5 leading-snug">
          {project.name}
        </h3>

        <div className="inline-flex items-center gap-1.5 text-xs text-muted mb-3">
          <MapPinIcon />
          {project.location}
        </div>

        <p className="text-sm text-muted leading-relaxed flex-1">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = useMemo(() => {
    if (activeCategory === 'Todos') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="
              absolute inset-0
              [background-image:linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)]
              [background-size:56px_56px]
              [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]
              opacity-50
            "
          />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-biomey">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border shadow-soft mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-muted">Portafolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Nuestros <span className="text-accent">proyectos</span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Trabajos reales que hemos desarrollado para negocios, instituciones
              y emprendedores de la región.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="container-biomey">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-accent text-white shadow-soft'
                        : 'bg-surface border border-border text-muted hover:text-foreground hover:border-accent/40'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <p className="text-sm text-muted text-center mb-8">
            Mostrando{' '}
            <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'proyecto' : 'proyectos'}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((project, index) => (
                <Reveal key={project.id} delay={index * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted py-12">
              No hay proyectos en esta categoría todavía.
            </p>
          )}
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                ¿Quieres ser nuestro próximo proyecto?
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                Cuéntanos tu idea y la convertimos en realidad.
              </p>
              <a
                href={getWhatsAppLink(
                  'Hola BioMey 👋, vi sus proyectos y quiero que trabajen en el mío.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center justify-center gap-2
                  bg-accent hover:bg-accent-hover
                  text-white text-sm font-semibold
                  px-6 py-3.5 rounded-xl
                  transition-all duration-200
                  shadow-soft hover:shadow-glow
                  active:scale-[0.98]
                "
              >
                Hablar por WhatsApp
                <ArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}