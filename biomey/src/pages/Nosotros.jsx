import { getWhatsAppLink } from '../utils/whatsapp';
import Reveal from '../components/ui/Reveal';

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
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

const VALUES = [
  {
    icon: <HeartIcon />,
    title: 'Compromiso',
    description:
      'Cada proyecto lo tratamos como propio. Nos involucramos de lleno con los objetivos de tu negocio.',
  },
  {
    icon: <TargetIcon />,
    title: 'Calidad',
    description:
      'No entregamos hasta que esté perfecto. Código limpio, diseño cuidado y atención al detalle.',
  },
  {
    icon: <UsersIcon />,
    title: 'Cercanía',
    description:
      'Hablas directo con quien desarrolla. Sin intermediarios, sin vueltas, sin esperas.',
  },
  {
    icon: <RocketIcon />,
    title: 'Innovación',
    description:
      'Usamos tecnologías actuales para que tu solución sea rápida, escalable y a prueba de futuro.',
  },
];

export default function Nosotros() {
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
              <span className="text-xs font-medium text-muted">Sobre nosotros</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Tecnología hecha en <span className="text-accent">Tapachula</span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Somos un equipo apasionado por la tecnología, dedicado a crear
              soluciones digitales que ayuden a crecer a personas, emprendedores
              y negocios de la región.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Nuestra <span className="text-accent">historia</span>
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    BioMey nació en Tapachula, Chiapas, con una idea simple:
                    acercar la tecnología de calidad a negocios locales y
                    emprendedores que no encontraban soluciones a la medida de sus
                    necesidades.
                  </p>
                  <p>
                    Empezamos desarrollando páginas web y sistemas pequeños, y con
                    el tiempo nos expandimos a ofrecer soporte técnico completo:
                    desde mantenimiento de equipos hasta instalación de cámaras de
                    seguridad.
                  </p>
                  <p>
                    Hoy trabajamos con clientes de toda la región, tanto de forma
                    presencial como remota, y seguimos creciendo con el mismo
                    compromiso del primer día.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[80%] h-[80%] bg-accent/[0.10] rounded-full blur-3xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0}>
                  <div className="bg-surface border border-border rounded-2xl p-6 shadow-soft">
                    <div className="text-3xl font-bold text-accent mb-1">+50</div>
                    <div className="text-xs text-muted">Proyectos entregados</div>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="bg-surface border border-border rounded-2xl p-6 shadow-soft mt-6">
                    <div className="text-3xl font-bold text-accent mb-1">+30</div>
                    <div className="text-xs text-muted">Clientes satisfechos</div>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="bg-surface border border-border rounded-2xl p-6 shadow-soft">
                    <div className="text-3xl font-bold text-accent mb-1">5</div>
                    <div className="text-xs text-muted">Años de experiencia</div>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className="bg-surface border border-border rounded-2xl p-6 shadow-soft mt-6">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-xs text-muted">Soporte disponible</div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Nuestros <span className="text-accent">valores</span>
              </h2>
              <p className="text-muted leading-relaxed">
                Lo que nos define y guía cada proyecto que emprendemos.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div
                  className="
                    group relative h-full
                    bg-surface border border-border rounded-2xl
                    p-6
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
                    {value.icon}
                  </div>

                  <h3 className="text-base font-semibold mb-2">
                    {value.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-biomey">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                ¿Trabajamos juntos?
              </h2>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-6">
                Cuéntanos tu idea y hagámosla realidad.
              </p>
              <a
                href={getWhatsAppLink(
                  'Hola BioMey 👋, leí sobre ustedes y quiero trabajar con ustedes.'
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