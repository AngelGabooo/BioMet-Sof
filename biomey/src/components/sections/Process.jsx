import { useEffect, useRef, useState } from 'react';
import { getWhatsAppLink } from '../../utils/whatsapp';
import Reveal from '../ui/Reveal';

/* ═══════════ ICONOS ═══════════ */
const Svg = ({ children, className = 'w-5 h-5', sw = 2 }) => (
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

const IdeaIcon = () => (
  <Svg>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.6 1 1.4 1 2.3h6c0-.9.4-1.7 1-2.3A7 7 0 0 0 12 2z" />
  </Svg>
);

const SearchIcon = () => (
  <Svg>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Svg>
);

const CodeIcon = () => (
  <Svg>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Svg>
);

const RocketIcon = () => (
  <Svg>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Svg>
);

const ArrowRight = () => (
  <Svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" sw={2.5}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Svg>
);

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

const STEP_MS = 600; // tiempo que tarda la línea en llegar de un paso al siguiente

/* ═══════════ Detecta cuándo la sección entra en pantalla (una vez) ═══════════ */
function useInView(ref, threshold = 0.25) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  return inView;
}

/* ═══════════ PASO ═══════════ */
function Step({ step, index, isLast, inView }) {
  const delay = `${index * STEP_MS}ms`;

  return (
    <li className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-0">
      {/* Segmento de línea hacia el siguiente paso (celular: vertical) */}
      {!isLast && (
        <span
          className="lg:hidden absolute left-[21px] top-[44px] -bottom-6 w-[2px] bg-border overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="block h-full w-full bg-accent origin-top motion-reduce:transition-none"
            style={{
              transform: inView ? 'scaleY(1)' : 'scaleY(0)',
              transition: `transform ${STEP_MS}ms linear`,
              transitionDelay: delay,
            }}
          />
        </span>
      )}

      {/* Segmento de línea hacia el siguiente paso (escritorio: horizontal) */}
      {!isLast && (
        <span
          className="hidden lg:block absolute top-[21px] left-1/2 h-[2px] w-[calc(100%+1.5rem)] bg-border overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="block h-full w-full bg-accent origin-left motion-reduce:transition-none"
            style={{
              transform: inView ? 'scaleX(1)' : 'scaleX(0)',
              transition: `transform ${STEP_MS}ms linear`,
              transitionDelay: delay,
            }}
          />
        </span>
      )}

      {/* Nodo */}
      <div className="relative z-10 shrink-0">
        <div
          className={`
            grid place-items-center w-11 h-11 rounded-full border-2
            transition-all duration-500 motion-reduce:transition-none
            ${inView
              ? 'bg-accent border-accent text-white shadow-glow scale-100'
              : 'bg-surface border-border text-accent scale-90'}
          `}
          style={{ transitionDelay: delay }}
        >
          {step.icon}
        </div>
        {/* Pulso en el último paso */}
        {isLast && inView && (
          <span
            className="absolute inset-0 rounded-full bg-accent/30 animate-ping motion-reduce:hidden"
            style={{ animationDelay: `${index * STEP_MS + 600}ms` }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Tallo (solo escritorio) */}
      <span className="hidden lg:block w-px h-6 bg-border" aria-hidden="true" />

      {/* Tarjeta */}
      <div
        className={`
          group relative flex-1 min-w-0 lg:w-full overflow-hidden
          bg-surface/80 backdrop-blur border border-border rounded-2xl
          p-5 md:p-6 lg:text-center
          transition-all duration-500 motion-reduce:transition-none
          hover:border-accent/40 hover:-translate-y-1 hover:shadow-card
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        style={{ transitionDelay: inView ? delay : '0ms' }}
      >
        <span
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />

        <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent mb-3">
          Paso {step.number}
        </span>

        <h3 className="text-base md:text-lg font-semibold mb-2 leading-snug">
          {step.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed">
          {step.description}
        </p>
      </div>
    </li>
  );
}

/* ═══════════ COMPONENTE ═══════════ */
export default function Process() {
  const listRef = useRef(null);
  const inView = useInView(listRef);

  return (
    <section id="proceso" className="relative py-20 md:py-28 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="
            absolute inset-0
            [background-image:linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)]
            [background-size:56px_56px]
            [mask-image:radial-gradient(ellipse_60%_45%_at_50%_30%,#000_50%,transparent_100%)]
            opacity-30
          "
        />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="container-biomey">

        {/* Encabezado */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
            <span
              className="
                inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full
                bg-surface/80 backdrop-blur-sm border border-accent/20
              "
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase">
                Cómo trabajamos
              </span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              De una idea a una{' '}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                solución
              </span>
            </h2>
            <p className="text-muted leading-relaxed md:text-lg">
              Un proceso simple y transparente para llevar tu proyecto del concepto
              a la realidad.
            </p>
          </div>
        </Reveal>

        {/* Línea de tiempo */}
        <ol
          ref={listRef}
          className="relative max-w-md mx-auto lg:max-w-none flex flex-col gap-6 lg:grid lg:grid-cols-4 lg:gap-6"
        >
          {STEPS.map((step, index) => (
            <Step
              key={step.number}
              step={step}
              index={index}
              isLast={index === STEPS.length - 1}
              inView={inView}
            />
          ))}
        </ol>

        {/* Llamada final */}
        <Reveal>
          <div
            className="
              relative overflow-hidden isolate
              mt-16 md:mt-20 max-w-4xl mx-auto
              rounded-3xl bg-accent text-white
              px-6 py-9 sm:px-10 sm:py-11
              shadow-glow
            "
          >
            {/* Decoración */}
            <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-28 -left-10 w-72 h-72 rounded-full bg-black/10 blur-3xl" aria-hidden="true" />
            <div
              className="
                absolute inset-0 opacity-[0.12]
                [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                [background-size:36px_36px]
                [mask-image:linear-gradient(120deg,#000,transparent_65%)]
              "
              aria-hidden="true"
            />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
              <div className="max-w-lg">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
                  ¿Tienes una idea en mente?
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Escríbenos por WhatsApp y empecemos a darle forma a tu proyecto.
                </p>
              </div>

              <a
                href={getWhatsAppLink(
                  'Hola BioMey 👋, quiero empezar un proyecto con ustedes.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group shrink-0 inline-flex items-center justify-center gap-2
                  bg-white text-accent
                  text-sm font-semibold
                  px-7 py-4 rounded-xl
                  shadow-soft
                  hover:bg-white/90
                  transition-all duration-200
                  active:scale-[0.98]
                "
              >
                Empezar mi proyecto
                <ArrowRight />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}