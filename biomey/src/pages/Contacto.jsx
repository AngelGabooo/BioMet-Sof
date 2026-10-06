import { getWhatsAppLink } from '../utils/whatsapp';

/* ═══════════ ICONOS ═══════════ */
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.82 9.87z" />
    </svg>
  );
}

function MailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
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

/* ═══════════ DATOS ═══════════ */
const CONTACT_ITEMS = [
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '+52 814 438 4806',
    href: getWhatsAppLink(),
    description: 'La forma más rápida de contactarnos',
  },
  {
    icon: <MailIcon />,
    label: 'Correo electrónico',
    value: 'soporte-biomey-tux@outlook.com',
    href: 'mailto:soporte-biomey-tux@outlook.com',
    description: 'Para consultas detalladas',
  },
  {
    icon: <MapPinIcon />,
    label: 'Ubicación',
    value: 'Tapachula, Chiapas',
    href: null,
    description: 'Atendemos en toda la región',
  },
  {
    icon: <FacebookIcon />,
    label: 'Facebook',
    value: 'BioMey - Tux',
    href: 'https://www.facebook.com/share/1J3AAbSkNh/?mibextid=wwXIfr',
    description: 'Síguenos para más novedades',
  },
];

/* ═══════════ PÁGINA ═══════════ */
export default function Contacto() {
  return (
    <>
      {/* Hero */}
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
              <span className="text-xs font-medium text-muted">
                Estamos disponibles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Hablemos de tu <span className="text-accent">proyecto</span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas con
              una propuesta clara.
            </p>

            <a
              href={getWhatsAppLink(
                'Hola BioMey 👋, quiero platicar sobre un proyecto.'
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
              <WhatsAppIcon className="w-4 h-4" />
              Escribir por WhatsApp
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Grid de contacto */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_ITEMS.map((item) => {
              const Component = item.href ? 'a' : 'div';
              const extraProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith('http') ? '_blank' : undefined,
                    rel: item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined,
                  }
                : {};

              return (
                <Component
                  key={item.label}
                  {...extraProps}
                  className={`
                    group relative flex flex-col
                    bg-surface border border-border rounded-2xl
                    p-6
                    transition-all duration-300
                    ${item.href ? 'hover:border-accent/40 hover:-translate-y-1 hover:shadow-card' : ''}
                  `}
                >
                  <div
                    className="
                      inline-flex items-center justify-center
                      w-11 h-11 rounded-xl
                      bg-accent/10 text-accent
                      mb-4
                      transition-colors duration-300
                      group-hover:bg-accent group-hover:text-white
                    "
                  >
                    {item.icon}
                  </div>

                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted mb-1.5">
                    {item.label}
                  </p>

                  <p className="text-sm font-semibold text-foreground mb-2 break-words">
                    {item.value}
                  </p>

                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloque de horario */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <div className="max-w-2xl mx-auto text-center bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Horario de atención
            </h2>
            <div className="space-y-1.5 text-sm md:text-base text-muted">
              <p>Lunes a Viernes: 9:00 am – 7:00 pm</p>
              <p>Sábados: 9:00 am – 2:00 pm</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}