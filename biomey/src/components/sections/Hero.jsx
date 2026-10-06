import { useEffect, useState } from 'react';
import { getWhatsAppLink } from '../../utils/whatsapp';

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-accent shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* ═══════════ TYPEWRITER ═══════════ */
function Typewriter({ text, delay = 0, speed = 70 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  // Esperar el delay inicial (para que el loader termine)
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Escribir letra por letra
  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, started, text, speed]);

  return (
    <span className="inline">
      {displayed}
      <span
        className="
          inline-block w-[2px] h-[0.9em] bg-accent ml-1 align-middle
          animate-[blink_0.8s_ease-in-out_infinite]
        "
        aria-hidden="true"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
    >
      {/* 🎨 Fondo decorativo con Blobs Animados */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid sutil */}
        <div
          className="
            absolute inset-0
            [background-image:linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)]
            [background-size:56px_56px]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]
            opacity-50
          "
        />
        {/* Blob azul superior animado */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-accent/10 rounded-full blur-3xl animate-float" />
        {/* Blob secundario animado */}
        <div 
          className="absolute top-40 -right-32 w-[320px] h-[320px] bg-accent/5 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }} 
        />
        {/* Nuevo Blob inferior izquierdo animado */}
        <div 
          className="absolute bottom-0 -left-32 w-[280px] h-[280px] bg-accent/5 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '4s' }} 
        />
      </div>

      <div className="container-biomey">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge Mejorado */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-accent/20 shadow-lg shadow-accent/5 mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-foreground">
              Disponibles para nuevos proyectos
            </span>
          </div>

          {/* Título CON TYPEWRITER */}
          <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Soluciones digitales para{' '}
            <span className="text-accent">
              <Typewriter text="hacer crecer" delay={1500} speed={70} />
            </span>{' '}
            tu negocio
          </h1>

          {/* Subtítulo */}
          <p className="animate-fade-up text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Desarrollamos páginas web, sistemas, tiendas en línea y soluciones
            tecnológicas adaptadas a las necesidades de tu negocio.
          </p>

          {/* Botones con Efecto Shimmer */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={getWhatsAppLink('Hola BioMey 👋, quiero solicitar una cotización para un proyecto.')}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                bg-accent hover:bg-accent-hover
                text-white text-sm font-semibold
                px-6 py-3.5 rounded-xl
                transition-all duration-200
                shadow-soft hover:shadow-glow
                active:scale-[0.98]
              "
            >
              {/* Efecto Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <span className="relative z-10">Solicitar cotización</span>
              <ArrowRight />
            </a>

            <a
              href="#servicios"
              className="
                group relative overflow-hidden
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                bg-surface border border-border
                hover:bg-background
                text-foreground text-sm font-semibold
                px-6 py-3.5 rounded-xl
                transition-all duration-200
                shadow-soft
                active:scale-[0.98]
              "
            >
              {/* Efecto Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
              
              <span className="relative z-10">Ver nuestros servicios</span>
            </a>
          </div>

          {/* Features */}
          <div className="animate-fade-up flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <CheckIcon />
              Desarrollo a medida
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckIcon />
              Sistemas en línea
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckIcon />
              Soporte continuo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}