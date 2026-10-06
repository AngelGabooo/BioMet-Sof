import { useState, useMemo } from 'react';
import { SERVICES, CATEGORIES } from '../data/services';
import { ServiceIcons } from '../components/icons/ServiceIcons';
import { getWhatsAppLink } from '../utils/whatsapp';
import Reveal from '../components/ui/Reveal';

/* ═══════════ ICONOS UI ═══════════ */
function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      className="w-3 h-3 text-accent shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
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

/* ═══════════ TARJETA ═══════════ */
function ServiceCard({ service }) {
  return (
    <article
      className="
        group relative flex flex-col h-full
        bg-surface border border-border rounded-2xl
        p-6 md:p-7
        transition-all duration-300
        hover:border-accent/40 hover:-translate-y-1
        hover:shadow-card
      "
    >
      <div
        className="
          inline-flex items-center justify-center
          w-11 h-11 rounded-xl
          bg-accent/10 text-accent
          mb-5
          transition-colors duration-300
          group-hover:bg-accent group-hover:text-white
        "
      >
        {ServiceIcons[service.id]}
      </div>

      <span
        className="
          inline-flex items-center self-start
          px-2 py-0.5 rounded-md
          bg-background border border-border
          text-[10px] font-medium text-muted uppercase tracking-wider
          mb-3
        "
      >
        {service.category}
      </span>

      <h3 className="text-base md:text-lg font-semibold mb-2 leading-snug">
        {service.title}
      </h3>

      <p className="text-sm text-muted leading-relaxed mb-5">
        {service.description}
      </p>

      <ul className="space-y-2 mb-6 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={getWhatsAppLink(
          `Hola BioMey 👋, me interesa el servicio de "${service.title}". ¿Me pueden dar más información?`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group inline-flex items-center gap-2
          text-sm font-semibold text-accent hover:text-accent-hover
          transition-colors duration-200
        "
      >
        Solicitar información
        <ArrowRight />
      </a>
    </article>
  );
}

/* ═══════════ PÁGINA ═══════════ */
export default function Servicios() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = useMemo(() => {
    if (activeCategory === 'Todos') return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Mostrar banners solo cuando estamos viendo "Todos"
  const showBanners = activeCategory === 'Todos';

  const development = filtered.filter((s) => s.category === 'Desarrollo');
  const support = filtered.filter((s) => s.category === 'Soporte');

  return (
    <>
      {/* Hero de la página */}
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
              <span className="text-xs font-medium text-muted">Nuestros servicios</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Todo lo que podemos{' '}
              <span className="text-accent">hacer por ti</span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Desde desarrollo de software a medida hasta soporte técnico
              especializado. Soluciones digitales y tecnológicas para personas,
              emprendedores y negocios.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
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

      {/* Grid de servicios */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <p className="text-sm text-muted text-center mb-8">
            Mostrando{' '}
            <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'servicio' : 'servicios'}
          </p>

          {/* Bloque Desarrollo */}
          {development.length > 0 && (
            <div className={showBanners ? 'mb-16' : ''}>
              {showBanners && (
                <Reveal>
                  <div className="relative overflow-hidden rounded-2xl h-40 sm:h-48 md:h-56 mb-8 border border-border">
                    <img
                      src="/img/servicios/desarrollo.jpg"
                      alt="Desarrollo de software"
                      className="absolute inset-0 w-full h-full object-cover"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                    <div className="relative h-full flex items-center px-6 md:px-10">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                          Desarrollo de software
                        </h3>
                        <p className="text-sm md:text-base text-white/80 max-w-md">
                          Creamos páginas web, sistemas, tiendas en línea y aplicaciones a la medida.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {development.map((service, index) => (
                  <Reveal key={service.id} delay={index * 60}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Bloque Soporte */}
          {support.length > 0 && (
            <div>
              {showBanners && (
                <Reveal>
                  <div className="relative overflow-hidden rounded-2xl h-40 sm:h-48 md:h-56 mb-8 border border-border">
                    <img
                      src="/img/servicios/soporte.jpg"
                      alt="Soporte técnico"
                      className="absolute inset-0 w-full h-full object-cover"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                    <div className="relative h-full flex items-center px-6 md:px-10">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                          Soporte técnico
                        </h3>
                        <p className="text-sm md:text-base text-white/80 max-w-md">
                          Mantenimiento, reparación e instalación de equipos y soluciones.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {support.map((service, index) => (
                  <Reveal key={service.id} delay={index * 60}>
                    <ServiceCard service={service} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                Cuéntanos qué necesitas y te ayudaremos a encontrar la solución
                adecuada para tu negocio.
              </p>
              <a
                href={getWhatsAppLink(
                  'Hola BioMey 👋, tengo una necesidad específica y quiero saber si pueden ayudarme.'
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
      </section>l
    </>
  );
}