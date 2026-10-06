import { SERVICES } from '../../data/services';
import Reveal from '../ui/Reveal';

/* ═══════════ ICONOS SVG ═══════════ */
function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M6.5 6.5h11v11h-11z" />
      <path d="M3 8v8M21 8v8M6 3h12M6 21h12" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
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
function ServiceCard({ service }) {
  return (
    <a
      href="#contacto"
      className="
        group relative flex flex-col h-full
        bg-surface border border-border rounded-2xl
        p-4 md:p-6
        transition-all duration-300
        hover:border-accent/40 hover:-translate-y-1
        hover:shadow-card
      "
    >
      <div
        className="
          inline-flex items-center justify-center
          w-10 h-10 md:w-11 md:h-11 rounded-xl
          bg-accent/10 text-accent
          mb-4 md:mb-5
          transition-colors duration-300
          group-hover:bg-accent group-hover:text-white
        "
      >
        {ICONS[service.id]}
      </div>

      <h3 className="text-sm md:text-base font-semibold mb-1.5 leading-snug">
        {service.title}
      </h3>

      <p className="text-xs md:text-sm text-muted leading-relaxed">
        {service.description}
      </p>

      <div
        className="
          hidden md:inline-flex items-center gap-1
          mt-4 text-xs font-medium text-accent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
        "
      >
        Más información
        <ArrowRight />
      </div>
    </a>
  );
}

/* ═══════════ BANNER DE CATEGORÍA ═══════════ */
function CategoryBanner({ image, title, subtitle }) {
  return (
    <Reveal>
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          h-40 sm:h-48 md:h-56
          mb-8
          border border-border
        "
      >
        {/* Imagen de fondo */}
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 w-full h-full object-cover
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

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido */}
        <div className="relative h-full flex items-center px-6 md:px-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {title}
            </h3>
            <p className="text-sm md:text-base text-white/80 max-w-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ═══════════ COMPONENTE ═══════════ */
export default function FeaturedServices() {
  const development = SERVICES.filter((s) => s.category === 'Desarrollo');
  const support = SERVICES.filter((s) => s.category === 'Soporte');

  return (
    <section id="servicios" className="relative py-20 md:py-28">
      <div className="container-biomey">

        {/* Encabezado principal */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Lo que podemos <span className="text-accent">hacer por ti</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Desarrollo de software a medida y soporte técnico especializado,
              todo en un mismo lugar.
            </p>
          </div>
        </Reveal>

        {/* ═════ BLOQUE 1: DESARROLLO ═════ */}
        <div className="mb-16 md:mb-20">
          <CategoryBanner
            image="/img/servicios/desarrollo.jpg"
            title="Desarrollo de software"
            subtitle="Creamos páginas web, sistemas, tiendas en línea y aplicaciones a la medida de tu negocio."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {development.map((service, index) => (
              <Reveal key={service.id} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ═════ BLOQUE 2: SOPORTE ═════ */}
        <div>
          <CategoryBanner
            image="/img/servicios/soporte.jpg"
            title="Soporte técnico"
            subtitle="Mantenimiento, reparación e instalación de equipos y soluciones tecnológicas."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {support.map((service, index) => (
              <Reveal key={service.id} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Link */}
        <Reveal>
          <div className="mt-14 flex justify-center">
            <a
              href="/servicios"
              className="
                group inline-flex items-center gap-2
                text-sm font-semibold text-accent
                hover:text-accent-hover
                transition-colors duration-200
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