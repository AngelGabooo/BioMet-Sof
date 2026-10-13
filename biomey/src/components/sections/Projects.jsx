import { PROJECTS } from '../../data/projects';
import Reveal from '../ui/Reveal';

/* ═══════════ ICONOS ═══════════ */
const Svg = ({ children, className = 'w-4 h-4', sw = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MapPinIcon = () => (
  <Svg className="w-3.5 h-3.5 shrink-0">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

const ArrowRight = () => (
  <Svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" sw={2.5}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Svg>
);

const StarIcon = () => (
  <Svg className="w-3 h-3" sw={2.2}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  </Svg>
);

// Respaldo si una imagen no carga
const handleImgError = (e) => {
  e.currentTarget.style.display = 'none';
  e.currentTarget.parentElement.classList.add(
    'bg-gradient-to-br',
    'from-accent/[0.10]',
    'to-accent/[0.25]'
  );
};

const CLAMP_2 =
  '[display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden';

/* ═══════════ TARJETA DESTACADA ═══════════ */
function FeaturedProject({ project }) {
  return (
    <article
      className="
        group relative isolate overflow-hidden
        h-[420px] sm:h-[460px] lg:h-[500px]
        rounded-3xl border border-border bg-background
        shadow-soft
        transition-all duration-300
        hover:border-accent/30 hover:shadow-card
      "
    >
      {/* Imagen */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onError={handleImgError}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100
          "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-between p-5 sm:p-7 lg:p-8">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white">
              <StarIcon />
              Destacado
            </span>
          </div>
          <span className="text-xs font-semibold tabular-nums text-white/70">01</span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            {project.name}
          </h3>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90 mb-3">
            <MapPinIcon />
            {project.location}
          </div>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ═══════════ TARJETA COMPACTA ═══════════ */
function CompactProject({ project, index }) {
  return (
    <article
      className="
        group relative flex items-stretch gap-4
        p-3 lg:h-[156px]
        bg-surface/80 backdrop-blur border border-border rounded-2xl
        transition-all duration-300
        hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-card
        motion-reduce:transition-none
      "
    >
      {/* Miniatura */}
      <div className="relative w-28 sm:w-44 lg:w-40 min-h-[104px] shrink-0 overflow-hidden rounded-xl bg-background">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          onError={handleImgError}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100
          "
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col min-w-0 flex-1 py-0.5 pr-1">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent truncate">
            {project.category}
          </span>
          <span className="text-[11px] font-semibold tabular-nums text-muted/70">
            {String(index + 2).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-[15px] font-semibold leading-snug mb-1 truncate">
          {project.name}
        </h3>

        <div className="inline-flex items-center gap-1.5 text-xs text-muted mb-2 min-w-0">
          <MapPinIcon />
          <span className="truncate">{project.location}</span>
        </div>

        <p className={`text-xs text-muted leading-relaxed ${CLAMP_2}`}>
          {project.description}
        </p>
      </div>
    </article>
  );
}

/* ═══════════ COMPONENTE ═══════════ */
export default function Projects() {
  // 👇 Solo mostramos los primeros 4 proyectos
  const featuredProjects = PROJECTS.slice(0, 4);
  const [main, ...rest] = featuredProjects;

  return (
    <section id="proyectos" className="relative overflow-hidden py-20 md:py-28">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 -left-40 w-[360px] h-[360px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-biomey">

        {/* Encabezado */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <span
                className="
                  inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full
                  bg-surface/80 backdrop-blur-sm border border-accent/20
                  text-xs font-semibold text-foreground
                "
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                </span>
                Portafolio
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                Algunos de nuestros{' '}
                <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  proyectos
                </span>
              </h2>
              <p className="text-muted leading-relaxed md:text-lg">
                Trabajos reales que hemos desarrollado para negocios, instituciones
                y emprendedores de la región.
              </p>
            </div>

            {/* Enlace en el encabezado (tablet y escritorio) */}
            <a
              href="/proyectos"
              className="
                group hidden md:inline-flex shrink-0 items-center justify-center gap-2
                rounded-full border border-border bg-surface/80 backdrop-blur
                px-6 py-3 text-sm font-semibold text-foreground
                shadow-soft
                hover:border-accent/40 hover:bg-background
                active:scale-[0.98]
                transition-all duration-200
              "
            >
              Ver todos los proyectos
              <ArrowRight />
            </a>
          </div>
        </Reveal>

        {/* Proyectos */}
        {main && (
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            <div className="lg:col-span-7">
              <Reveal>
                <FeaturedProject project={main} />
              </Reveal>
            </div>

            {rest.length > 0 && (
              <div className="lg:col-span-5 flex flex-col gap-4">
                {rest.map((project, index) => (
                  <Reveal key={project.id} delay={(index + 1) * 80}>
                    <CompactProject project={project} index={index} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Enlace inferior (celular) */}
        <Reveal>
          <div className="mt-10 md:hidden">
            <a
              href="/proyectos"
              className="
                group flex w-full items-center justify-center gap-2
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