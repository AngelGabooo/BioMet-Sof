import { getWhatsAppLink } from '../../utils/whatsapp';
import Reveal from '../ui/Reveal';

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.82 9.87z" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section id="contacto" className="relative py-16 md:py-28">
      <div className="container-biomey">

        <Reveal>
          <div className="relative rounded-2xl md:rounded-[28px] overflow-hidden p-[2px]">
            <div
              className="absolute inset-[-100%] animate-border-spin"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(37,99,235,0.9) 60deg, rgba(96,165,250,1) 120deg, transparent 180deg, transparent 360deg)',
              }}
              aria-hidden="true"
            />

            <div className="relative rounded-2xl md:rounded-[28px] bg-surface overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
                <div className="lg:col-span-3 p-6 md:p-12 lg:p-14">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-5 md:mb-6">
                    <span className="relative flex w-2 h-2 shrink-0">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                      <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold text-accent tracking-wide whitespace-nowrap">
                      HABLEMOS DE TU PROYECTO
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] md:leading-[1.08] mb-4 md:mb-5">
                    ¿Tienes una idea?{' '}
                    <span className="text-accent">Hagámosla realidad.</span>
                  </h2>

                  <p className="text-sm md:text-lg text-muted leading-relaxed max-w-xl mb-6 md:mb-8">
                    Cuéntanos qué necesitas y te ayudaremos a encontrar la solución
                    adecuada para tu negocio. Sin compromiso.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 md:mb-8">
                    <a
                      href={getWhatsAppLink(
                        'Hola BioMey 👋, tengo una idea y quiero que me ayuden a hacerla realidad.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group w-full sm:w-auto
                        inline-flex items-center justify-center gap-2
                        bg-accent hover:bg-accent-hover
                        text-white text-sm font-semibold
                        px-5 md:px-6 py-3.5 rounded-xl
                        transition-all duration-200
                        shadow-soft hover:shadow-glow
                        active:scale-[0.98]
                      "
                    >
                      <WhatsAppIcon />
                      Hablar por WhatsApp
                      <ArrowRight />
                    </a>

                    <a
                      href="#servicios"
                      className="
                        w-full sm:w-auto
                        inline-flex items-center justify-center gap-2
                        bg-transparent hover:bg-background
                        border border-border
                        text-foreground text-sm font-semibold
                        px-5 md:px-6 py-3.5 rounded-xl
                        transition-all duration-200
                        active:scale-[0.98]
                      "
                    >
                      Ver servicios
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] md:text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Cotización sin costo
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Atención personalizada
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Respuesta en 24h
                    </span>
                  </div>
                </div>

                <div
                  className="
                    hidden lg:block lg:col-span-2 relative
                    lg:h-full lg:min-h-[320px]
                    bg-gradient-to-br from-accent/[0.06] to-accent/[0.12]
                    border-l border-border
                  "
                >
                  <div
                    className="
                      absolute inset-0
                      [background-image:linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)]
                      [background-size:32px_32px]
                      opacity-50
                    "
                  />
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="absolute inset-0 -m-16 rounded-full border border-accent/10" />
                      <div className="absolute inset-0 -m-10 rounded-full border border-accent/15" />
                      <div className="absolute inset-0 -m-4 rounded-full border border-accent/20" />

                      <div className="relative w-28 h-28 rounded-full bg-accent flex items-center justify-center shadow-glow">
                        <WhatsAppIcon className="w-14 h-14 text-white" />
                      </div>

                      <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-accent/40" />
                      <span className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full bg-accent/60" />
                      <span className="absolute top-1/2 -right-8 w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}