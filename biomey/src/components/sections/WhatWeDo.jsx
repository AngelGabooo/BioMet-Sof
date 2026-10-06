import Reveal from '../ui/Reveal';

// Iconos SVG minimalistas
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

function CloudIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

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

// NUEVO: Icono real de WhatsApp (estilo sólido)
function WhatsAppIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" // Usamos fill porque el icono de WhatsApp es sólido
      className="w-5 h-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

const FEATURES = [
  {
    icon: <CodeIcon />,
    title: 'Desarrollo a medida',
    description: 'Creamos soluciones digitales adaptadas a cada proyecto.',
  },
  {
    icon: <CloudIcon />,
    title: 'Sistemas en línea',
    description: 'Sistemas accesibles desde cualquier dispositivo y lugar.',
  },
  {
    icon: <GlobeIcon />,
    title: 'Presencia digital',
    description: 'Creamos páginas web profesionales para negocios y proyectos.',
  },
  {
    // CAMBIO: Usamos el nuevo icono de WhatsApp aquí
    icon: <WhatsAppIcon />,
    title: 'Soporte tecnológico',
    description:
      'También ofrecemos mantenimiento, reparación e instalación de soluciones tecnológicas.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="relative py-20 md:py-28">
      <div className="container-biomey">

        {/* Encabezado */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tecnología creada para <span className="text-accent">tu negocio</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Desde una página web hasta un sistema completo de administración,
              creamos soluciones pensadas para resolver necesidades reales.
            </p>
          </div>
        </Reveal>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 80}>
              <div
                className="
                  group relative h-full
                  bg-surface border border-border rounded-2xl
                  p-4 md:p-6
                  transition-all duration-300
                  hover:border-accent/30 hover:-translate-y-1
                  hover:shadow-card
                "
              >
                {/* Icono */}
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
                  {feature.icon}
                </div>

                {/* Título */}
                <h3 className="text-sm md:text-base font-semibold mb-2">
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}