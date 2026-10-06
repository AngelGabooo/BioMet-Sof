import { getWhatsAppLink } from '../../utils/whatsapp';
import Reveal from '../ui/Reveal';

/* ═══════════ ICONOS ═══════════ */
function IdeaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.4 1 2.3h6c0-.9.4-1.7 1-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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

const STEPS = [
  {
    number: '01',
    icon: <IdeaIcon />,
    title: 'Cuéntanos tu idea',
    description:
      'Nos contactas por WhatsApp y nos compartes qué necesitas, sin complicaciones.',
  },
  {
    number: '02',
    icon: <SearchIcon />,
    title: 'Analizamos tus necesidades',
    description:
      'Estudiamos tu proyecto, definimos el alcance y te enviamos una cotización clara.',
  },
  {
    number: '03',
    icon: <CodeIcon />,
    title: 'Desarrollamos la solución',
    description:
      'Construimos tu sistema con avances periódicos para que veas el progreso real.',
  },
  {
    number: '04',
    icon: <RocketIcon />,
    title: 'Entregamos y damos soporte',
    description:
      'Ponemos todo en marcha y te acompañamos con soporte continuo cuando lo necesites.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="container-biomey">

        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/[0.04] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase">
                Cómo trabajamos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              De una idea a una <span className="text-accent">solución</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Un proceso simple y transparente para llevar tu proyecto del concepto
              a la realidad.
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="
              hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2
              w-px bg-gradient-to-b from-transparent via-border to-transparent
            "
            aria-hidden="true"
          />

          <div className="space-y-8 lg:space-y-16">
            {STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={step.number} delay={index * 100}>
                  <div className="relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
                    <div className={`${isLeft ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                      <div
                        className="
                          group relative
                          bg-surface border border-border rounded-2xl
                          p-6 md:p-7
                          transition-all duration-300
                          hover:border-accent/40 hover:-translate-y-1
                          hover:shadow-card
                        "
                      >
                        <span
                          className={`
                            pointer-events-none select-none
                            absolute top-3 ${isLeft ? 'right-5' : 'left-5'}
                            text-6xl md:text-7xl font-bold
                            text-accent/[0.08]
                            leading-none
                          `}
                        >
                          {step.number}
                        </span>

                        <div className="relative">
                          <div
                            className={`
                              inline-flex items-center justify-center
                              w-11 h-11 rounded-xl
                              bg-accent/10 text-accent
                              mb-4
                              transition-colors duration-300
                              group-hover:bg-accent group-hover:text-white
                            `}
                          >
                            {step.icon}
                          </div>

                          <h3 className="text-lg font-semibold mb-2 leading-snug">
                            {step.title}
                          </h3>

                          <p className="text-sm text-muted leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="
                        hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        items-center justify-center
                        w-5 h-5 rounded-full
                        bg-background border-2 border-accent
                        z-10
                      "
                      aria-hidden="true"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>

                    <div
                      className={`hidden lg:block ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <a
              href={getWhatsAppLink(
                'Hola BioMey 👋, quiero empezar un proyecto con ustedes.'
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
              Empezar mi proyecto
              <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}