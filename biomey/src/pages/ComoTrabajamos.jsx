import { getWhatsAppLink } from '../utils/whatsapp';
import Reveal from '../components/ui/Reveal';

/* ═══════════ ICONOS ═══════════ */
function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3 text-accent shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ═══════════ DATOS CON IMÁGENES ═══════════ */
const POLICIES = [
  {
    image: '/img/trabajamos/desarrollo.jpg',
    badge: 'Proyectos de desarrollo',
    title: '50% de anticipo para iniciar',
    description:
      'Todos los proyectos de desarrollo (páginas web, sistemas, tiendas en línea, landing pages, etc.) se trabajan con un 50% de anticipo para comenzar. El otro 50% se liquida al entregar el proyecto terminado y aprobado.',
    bullets: [
      'Aplica a todos los proyectos de software',
      'Sin costos ocultos ni sorpresas',
      'Cotización clara antes de empezar',
      'Entrega con pruebas y validación',
    ],
  },
  {
    image: '/img/trabajamos/puntos-venta.jpg',
    badge: 'Puntos de venta',
    title: 'Con o sin equipo, tú decides',
    description:
      'Los puntos de venta los ofrecemos con o sin equipo (computadora, impresora de tickets, cajón de dinero, lector de código de barras, etc.). El precio varía según los componentes que necesites.',
    bullets: [
      'Cotización personalizada según requerimientos',
      'Puedes usar tu propio equipo existente',
      'Instalación y configuración incluidas',
      'Capacitación para ti y tu personal',
    ],
  },
  {
    image: '/img/trabajamos/camaras.jpg',
    badge: 'Cámaras de seguridad',
    title: '50% de anticipo para agendar instalación',
    description:
      'Para las instalaciones de cámaras de seguridad se solicita un 50% de anticipo que permite reservar la fecha y adquirir el equipo necesario. El otro 50% se liquida al finalizar la instalación.',
    bullets: [
      'Asesoría previa sin costo',
      'Diseño del sistema según tu espacio',
      'Equipos de calidad garantizada',
      'Configuración de acceso remoto',
    ],
  },
  {
    image: '/img/trabajamos/mantenimiento.jpg',
    badge: 'Mantenimiento',
    title: 'Correctivo y preventivo',
    description:
      'El costo del mantenimiento depende del detalle y estado del equipo. Realizamos un diagnóstico previo para identificar el problema y ofrecerte una solución clara antes de proceder.',
    bullets: [
      'Mantenimiento correctivo: solución de fallas específicas',
      'Mantenimiento preventivo: limpieza y optimización periódica',
      'Diagnóstico previo antes de cotizar',
      'Sin cargos ocultos por revisión',
    ],
  },
  {
    image: '/img/trabajamos/software.jpg',
    badge: 'Instalación de software',
    title: 'Office, programas y drivers',
    description:
      'Instalamos paquetes de Office (originales o alternativas), programas de ofimática, diseño, utilidades, drivers de impresoras y periféricos, y cualquier software que necesites para trabajar.',
    bullets: [
      'Instalación de Microsoft Office o alternativas',
      'Programas de diseño, ofimática y utilidades',
      'Drivers de impresoras, escáneres y periféricos',
      'Optimización y limpieza del sistema',
    ],
  },
  {
    image: '/img/trabajamos/garantia.jpg',
    badge: 'Garantía y soporte',
    title: 'Respaldamos lo que hacemos',
    description:
      'Todos nuestros trabajos incluyen un período de soporte después de la entrega. Si algo no funciona como debería dentro de ese plazo, lo resolvemos sin costo adicional.',
    bullets: [
      'Soporte post-entrega sin costo',
      'Atención directa por WhatsApp',
      'Respuesta en menos de 24 horas',
      'Compromiso con la calidad',
    ],
  },
];

/* ═══════════ PÁGINA ═══════════ */
export default function ComoTrabajamos() {
  return (
    <>
      {/* ═══ Hero ═══ */}
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
                Cómo trabajamos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Transparencia en cada{' '}
              <span className="text-accent">proyecto</span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Queremos que sepas exactamente cómo trabajamos, cómo se manejan los
              pagos y qué esperar de cada servicio. Sin letras chiquitas.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Grid de políticas con imágenes ═══ */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {POLICIES.map((policy, index) => (
              <Reveal key={policy.title} delay={index * 80}>
                <article
                  className="
                    group relative flex flex-col h-full
                    bg-surface border border-border rounded-2xl
                    overflow-hidden
                    transition-all duration-300
                    hover:border-accent/40 hover:-translate-y-1
                    hover:shadow-card
                  "
                >
                  {/* Imagen */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-background">
                    <img
                      src={policy.image}
                      alt={policy.title}
                      loading="lazy"
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                      "
                      onError={(e) => {
                        // Fallback: si la imagen falla, se ve un gradiente
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.classList.add(
                          'bg-gradient-to-br',
                          'from-accent/[0.08]',
                          'to-accent/[0.15]'
                        );
                      }}
                    />

                    {/* Overlay de gradiente para mejor contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Badge categoría */}
                    <span
                      className="
                        absolute top-4 left-4
                        inline-flex items-center
                        px-3 py-1.5 rounded-lg
                        bg-background/95 backdrop-blur-sm
                        border border-border
                        text-[10px] font-semibold tracking-[0.1em] uppercase text-accent
                      "
                    >
                      {policy.badge}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-1 p-6 md:p-7">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 leading-snug">
                      {policy.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {policy.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mt-auto">
                      {policy.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-xs md:text-sm text-foreground/80"
                        >
                          <CheckIcon />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Bloque de cotización ═══ */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <Reveal>
            <div
              className="
                relative overflow-hidden
                bg-surface border-2 border-accent/20 rounded-2xl
                p-8 md:p-12
              "
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[11px] font-semibold text-accent tracking-[0.15em] uppercase">
                    Cotización personalizada
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Cada proyecto es{' '}
                  <span className="text-accent">único</span>
                </h2>

                <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                  No manejamos precios fijos porque cada proyecto tiene
                  necesidades distintas. Escríbenos por WhatsApp, cuéntanos qué
                  necesitas y te enviamos una cotización clara en menos de 24
                  horas. Sin compromiso.
                </p>

                <a
                  href={getWhatsAppLink(
                    'Hola BioMey 👋, quiero una cotización personalizada para mi proyecto.'
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
                  Solicitar cotización
                  <ArrowRight />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA final ═══ */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                ¿Listo para empezar?
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                Cuéntanos tu idea y te ayudaremos a hacerla realidad con la
                transparencia que mereces.
              </p>
              <a
                href={getWhatsAppLink(
                  'Hola BioMey 👋, leí cómo trabajan y quiero empezar un proyecto.'
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