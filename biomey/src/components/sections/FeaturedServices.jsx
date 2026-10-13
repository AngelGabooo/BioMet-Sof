import { useRef } from 'react';
import { SERVICES } from '../../data/services';
import Reveal from '../ui/Reveal';

/* ═══════════ ICONOS SVG ═══════════ */
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

const GlobeIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Svg>
);

const TargetIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Svg>
);

const CartIcon = () => (
  <Svg>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </Svg>
);

const SettingsIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Svg>
);

const CreditCardIcon = () => (
  <Svg>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </Svg>
);

const DumbbellIcon = () => (
  <Svg>
    <path d="M6.5 6.5h11v11h-11z" />
    <path d="M3 8v8M21 8v8M6 3h12M6 21h12" />
  </Svg>
);

const RadioIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
  </Svg>
);

const LaptopIcon = () => (
  <Svg>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </Svg>
);

const SmartphoneIcon = () => (
  <Svg>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </Svg>
);

const PrinterIcon = () => (
  <Svg>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </Svg>
);

const WrenchIcon = () => (
  <Svg>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Svg>
);

const CameraIcon = () => (
  <Svg>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </Svg>
);

const ArrowRight = () => (
  <Svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" sw={2.5}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Svg>
);

const ArrowUpRight = () => (
  <Svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" sw={2.4}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
);

/* ═══════════ MAPA DE ICONOS ═══════════ */
const ICONS = {
  1: <GlobeIcon />,
  2: <TargetIcon />,
  3: <CartIcon />,
  4: <SettingsIcon />,
  5: <CreditCardIcon />,
  6: <DumbbellIcon />,
  7: <RadioIcon />,
  8: <LaptopIcon />,
  9: <SmartphoneIcon />,
  10: <PrinterIcon />,
  11: <WrenchIcon />,
  12: <CameraIcon />,
};

/* ═══════════ TARJETA ═══════════ */
function ServiceCard({ service, index }) {
  const blobRef = useRef(null);

  // Luz suave que sigue al cursor dentro de la tarjeta
  const onMove = (e) => {
    const el = blobRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    el.style.transform = `translate(${e.clientX - r.left - 80}px, ${e.clientY - r.top - 80}px)`;
  };

  return (
    <a
      href="#contacto"
      onMouseMove={onMove}
      className="
        group relative flex flex-col h-full overflow-hidden
        bg-surface/80 backdrop-blur border border-border rounded-2xl
        p-4 md:p-6
        transition-all duration-300
        hover:border-accent/40 hover:-translate-y-1
        hover:shadow-card
      "
    >
      {/* Línea de acento superior */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Luz que sigue al cursor */}
      <div
        ref={blobRef}
        className="
          pointer-events-none absolute top-0 left-0 w-40 h-40 rounded-full
          bg-accent/15 blur-2xl opacity-0 group-hover:opacity-100
          transition-opacity duration-300 motion-reduce:hidden
        "
        aria-hidden="true"
      />

      {/* Cabecera: ícono + número */}
      <div className="relative flex items-start justify-between mb-4 md:mb-5">
        <div
          className="
            inline-flex items-center justify-center
            w-10 h-10 md:w-11 md:h-11 rounded-xl
            bg-accent/10 text-accent
            transition-all duration-300
            group-hover:bg-accent group-hover:text-white
            group-hover:-rotate-6 group-hover:scale-105
          "
        >
          {ICONS[service.id]}
        </div>
        <span className="text-[11px] font-semibold tabular-nums text-muted/70">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative text-sm md:text-base font-semibold mb-1.5 leading-snug">
        {service.title}
      </h3>

      <p className="relative text-xs md:text-sm text-muted leading-relaxed">
        {service.description}
      </p>

      {/* Pie: texto + botón circular */}
      <div className="relative mt-auto pt-5 flex items-center justify-between">
        <span className="hidden md:inline text-xs font-medium text-muted transition-colors duration-200 group-hover:text-accent">
          Más información
        </span>
        <span
          className="
            ml-auto grid place-items-center w-8 h-8 rounded-full
            border border-border text-muted
            transition-all duration-300
            group-hover:bg-accent group-hover:border-accent group-hover:text-white
          "
        >
          <ArrowUpRight />
        </span>
      </div>
    </a>
  );
}

/* ═══════════ BANNER DE CATEGORÍA ═══════════ */
function CategoryBanner({ image, title, subtitle, label, count }) {
  return (
    <Reveal>
      <div
        className="
          group relative overflow-hidden isolate
          rounded-3xl
          h-56 sm:h-64 lg:h-[460px]
          border border-border
          shadow-soft
        "
      >
        {/* Imagen de fondo */}
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.classList.add(
              'bg-gradient-to-br',
              'from-accent/[0.10]',
              'to-accent/[0.20]'
            );
          }}
        />

        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

        {/* Brillo de acento */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />

        {/* Cuadrícula sutil */}
        <div
          className="
            absolute inset-0 opacity-[0.12]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:40px_40px]
            [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]
          "
          aria-hidden="true"
        />

        {/* Contenido */}
        <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
          <span
            className="
              self-start inline-flex items-center gap-2
              rounded-full border border-white/20 bg-white/10 backdrop-blur
              px-3 py-1.5 text-xs font-semibold text-white
            "
          >
            <span className="tabular-nums">{label}</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            {count} {count === 1 ? 'servicio' : 'servicios'}
          </span>

          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
              {title}
            </h3>
            <p className="text-sm md:text-base text-white/80 max-w-md leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ═══════════ BLOQUE (banner + tarjetas) ═══════════ */
function CategoryBlock({ banner, items, reverse = false }) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      {/* Banner (sticky en escritorio) */}
      <div className={`lg:col-span-5 lg:sticky lg:top-28 ${reverse ? 'lg:order-2' : ''}`}>
        <CategoryBanner {...banner} count={items.length} />
      </div>

      {/* Tarjetas */}
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {items.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════ COMPONENTE ═══════════ */
export default function FeaturedServices() {
  const development = SERVICES.filter((s) => s.category === 'Desarrollo');
  const support = SERVICES.filter((s) => s.category === 'Soporte');

  return (
    <section id="servicios" className="relative overflow-hidden py-20 md:py-28">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[360px] h-[360px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[320px] h-[320px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-biomey">

        {/* Encabezado principal */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
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
              Nuestros servicios
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              Lo que podemos{' '}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                hacer por ti
              </span>
            </h2>
            <p className="text-muted leading-relaxed md:text-lg">
              Desarrollo de software a medida y soporte técnico especializado,
              todo en un mismo lugar.
            </p>
          </div>
        </Reveal>

        {/* ═════ BLOQUE 1: DESARROLLO ═════ */}
        <div className="mb-16 md:mb-24">
          <CategoryBlock
            banner={{
              image: '/img/servicios/desarrollo.jpg',
              title: 'Desarrollo de software',
              subtitle:
                'Creamos páginas web, sistemas, tiendas en línea y aplicaciones a la medida de tu negocio.',
              label: '01',
            }}
            items={development}
          />
        </div>

        {/* ═════ BLOQUE 2: SOPORTE ═════ */}
        <CategoryBlock
          reverse
          banner={{
            image: '/img/servicios/soporte.jpg',
            title: 'Soporte técnico',
            subtitle:
              'Mantenimiento, reparación e instalación de equipos y soluciones tecnológicas.',
            label: '02',
          }}
          items={support}
        />

        {/* Link */}
        <Reveal>
          <div className="mt-16 flex justify-center">
            <a
              href="/servicios"
              className="
                group inline-flex items-center gap-2
                rounded-full border border-border bg-surface/80 backdrop-blur
                px-6 py-3 text-sm font-semibold text-accent
                shadow-soft
                hover:border-accent/40 hover:bg-background hover:text-accent-hover
                active:scale-[0.98]
                transition-all duration-200
              "
            >
              Ver todos nuestros servicios
              <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}