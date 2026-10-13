import { useEffect, useRef, useState } from 'react';
import { getWhatsAppLink } from '../../utils/whatsapp';

/* ═══════════ ÍCONOS ═══════════ */
const Svg = ({ children, className = 'w-4 h-4', sw = 2 }) => (
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

const CheckIcon = () => (
  <Svg className="w-4 h-4 text-accent shrink-0" sw={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </Svg>
);

const ArrowRight = () => (
  <Svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Svg>
);

const GlobeIcon = () => (
  <Svg className="w-3.5 h-3.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
  </Svg>
);
const CartIcon = () => (
  <Svg className="w-3.5 h-3.5">
    <path d="M3 4h2l2.4 11h10.2L20 7H6" />
    <circle cx="9" cy="19" r="1.2" />
    <circle cx="17" cy="19" r="1.2" />
  </Svg>
);
const BoltIcon = () => (
  <Svg className="w-3.5 h-3.5">
    <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
  </Svg>
);
const LockIcon = () => (
  <Svg className="w-3 h-3" sw={2.2}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
);

/* ═══════════ TYPEWRITER (cicla palabras) ═══════════ */
const WORDS = ['hacer crecer', 'digitalizar', 'automatizar', 'impulsar'];

function Typewriter({ words, delay = 0, speed = 70, deleteSpeed = 35, pause = 1700 }) {
  const [reduce] = useState(
    () => typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [started, setStarted] = useState(false);
  const [wi, setWi] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Esperar el delay inicial (para que el loader termine)
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  // Escribir y borrar
  useEffect(() => {
    if (!started || reduce) return undefined;
    const word = words[wi];
    let t;

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWi((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteSpeed : speed
      );
    }
    return () => clearTimeout(t);
  }, [started, reduce, words, wi, text, deleting, speed, deleteSpeed, pause]);

  return (
    <span className="inline">
      {reduce ? words[0] : text}
      <span
        className="
          inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle rounded-full
          animate-[blink_0.8s_ease-in-out_infinite]
        "
        aria-hidden="true"
      />
    </span>
  );
}

/* ═══════════ CHIP FLOTANTE ═══════════ */
function Chip({ icon, label, className = '', delay = '0s' }) {
  return (
    <div className={`absolute z-20 animate-float ${className}`} style={{ animationDelay: delay }}>
      <div
        className="
          flex items-center gap-2 rounded-xl border border-border
          bg-surface/90 backdrop-blur px-3 py-2 shadow-soft
          text-xs font-semibold text-foreground whitespace-nowrap
        "
      >
        <span className="grid place-items-center w-6 h-6 rounded-lg bg-accent/10 text-accent">
          {icon}
        </span>
        {label}
      </div>
    </div>
  );
}

/* ═══════════ MOCKUP: ventana de navegador ═══════════ */
const BARS = [38, 55, 42, 70, 52, 84, 66, 92];

function Mockup() {
  const tiltRef = useRef(null);

  const onMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = 'transform .12s ease-out';
    el.style.transform = `rotateY(${px * 9}deg) rotateX(${-py * 9}deg)`;
  };
  const onLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
    el.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[520px] px-3 sm:px-0"
      style={{ perspective: '1200px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Brillo detrás */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" aria-hidden="true" />

      <div ref={tiltRef} className="relative" style={{ transformStyle: 'preserve-3d' }}>
        <div className="rounded-2xl border border-border bg-surface shadow-glow overflow-hidden">
          {/* Barra del navegador */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background/60">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-surface border border-border px-3 py-1 text-[11px] text-muted">
              <LockIcon />
              tunegocio.com
            </div>
          </div>

          {/* Contenido */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Web en esqueleto */}
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 space-y-2.5 pt-1">
                <div className="h-2 w-14 rounded-full bg-accent/40" />
                <div className="h-3.5 w-full rounded-full bg-border" />
                <div className="h-3.5 w-4/5 rounded-full bg-border" />
                <div className="h-2 w-3/5 rounded-full bg-border/70 mt-3" />
                <div className="flex gap-2 pt-2">
                  <div className="h-7 w-20 rounded-lg bg-accent" />
                  <div className="h-7 w-14 rounded-lg border border-border" />
                </div>
              </div>
              <div className="col-span-2 relative rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 border border-accent/20 grid place-items-center overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/20 blur-xl" aria-hidden="true" />
                <Svg className="w-9 h-9 text-accent relative" sw={1.6}>
                  <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                  <path d="m3 13 9 5 9-5" />
                </Svg>
              </div>
            </div>

            {/* Gráfico */}
            <div className="rounded-xl border border-border bg-background/70 p-3.5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-foreground">Rendimiento</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  En línea
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className={`hx-bar flex-1 rounded-t-md ${i >= BARS.length - 3 ? 'bg-accent' : 'bg-accent/25'}`}
                    style={{ height: `${h}%`, animationDelay: `${900 + i * 90}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chips flotantes */}
        <Chip icon={<GlobeIcon />} label="Páginas web" className="-top-4 -left-1 sm:-left-8" delay="0s" />
        <Chip icon={<CartIcon />} label="Tienda en línea" className="top-1/3 -right-1 sm:-right-9" delay="1.5s" />
        <Chip icon={<BoltIcon />} label="Sistemas a medida" className="-bottom-4 left-2 sm:-left-6" delay="3s" />

        {/* Aviso tipo notificación */}
        <div className="absolute z-20 -bottom-7 right-2 sm:-right-4 animate-float hidden sm:block" style={{ animationDelay: '2.2s' }}>
          <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface/90 backdrop-blur pl-2.5 pr-3.5 py-2 shadow-soft">
            <span className="relative grid place-items-center w-7 h-7 rounded-lg bg-green-500/10 text-green-600">
              <Svg className="w-3.5 h-3.5" sw={2.6}><polyline points="20 6 9 17 4 12" /></Svg>
              <span className="absolute -top-0.5 -right-0.5 flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
              </span>
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-foreground">Nuevo pedido</p>
              <p className="text-[10px] text-muted">hace 1 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════ FRANJA DE SERVICIOS ═══════════ */
const SERVICES = [
  'Páginas web',
  'Sistemas en línea',
  'Tiendas en línea',
  'Desarrollo a medida',
  'Soporte continuo',
  'Soluciones tecnológicas',
];

function MarqueeGroup({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {SERVICES.map((s) => (
        <li key={s} className="inline-flex items-center gap-6 pr-6 text-sm font-medium text-muted whitespace-nowrap">
          {s}
          <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
        </li>
      ))}
    </ul>
  );
}

/* ═══════════ HERO ═══════════ */
export default function Hero() {
  const spotRef = useRef(null);

  // Luz suave que sigue al mouse (solo escritorio)
  const onMove = (e) => {
    const el = spotRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    el.style.transform = `translate(${e.clientX - r.left - 210}px, ${e.clientY - r.top - 210}px)`;
  };

  return (
    <section
      id="inicio"
      onMouseMove={onMove}
      className="relative overflow-hidden pt-32 md:pt-40 pb-14 md:pb-20"
    >
      <style>{`
        @keyframes hx-bar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .hx-bar { transform-origin: bottom; transform: scaleY(0); animation: hx-bar .8s cubic-bezier(.2,.8,.2,1) forwards; }

        @keyframes hx-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hx-marquee { animation: hx-marquee 32s linear infinite; }
        .hx-marquee:hover { animation-play-state: paused; }

        @keyframes hx-shine { 0%, 60% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        .hx-shine { animation: hx-shine 3.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hx-bar { animation: none; transform: scaleY(1); }
          .hx-marquee, .hx-shine { animation: none; }
        }
      `}</style>

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
        {/* Blob inferior izquierdo animado */}
        <div
          className="absolute bottom-0 -left-32 w-[280px] h-[280px] bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
        {/* Luz que sigue al mouse */}
        <div
          ref={spotRef}
          className="hidden md:block absolute top-0 left-0 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl transition-transform duration-500 ease-out"
        />
      </div>

      <div className="container-biomey">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* ============ TEXTO ============ */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-accent/20 shadow-lg shadow-accent/5 mb-7">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-foreground">
                Disponibles para nuevos proyectos
              </span>
            </div>

            {/* Título con typewriter (3 líneas fijas para que nada salte) */}
            <h1
              className="animate-fade-up text-[2.6rem] sm:text-6xl lg:text-[4.1rem] font-bold tracking-tight leading-[1.05] mb-6"
              style={{ animationDelay: '80ms' }}
            >
              <span className="block">Soluciones digitales para</span>
              <span className="block min-h-[1.1em] bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                <Typewriter words={WORDS} delay={1500} speed={70} />
              </span>
              <span className="block">tu negocio</span>
            </h1>

            {/* Subtítulo */}
            <p
              className="animate-fade-up text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9"
              style={{ animationDelay: '160ms' }}
            >
              Desarrollamos páginas web, sistemas, tiendas en línea y soluciones
              tecnológicas adaptadas a las necesidades de tu negocio.
            </p>

            {/* Botones */}
            <div
              className="animate-fade-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10"
              style={{ animationDelay: '240ms' }}
            >
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
                  px-7 py-4 rounded-xl
                  transition-all duration-200
                  shadow-soft hover:shadow-glow
                  active:scale-[0.98]
                "
              >
                {/* Destello automático */}
                <span className="hx-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
                <span className="relative z-10">Solicitar cotización</span>
                <span className="relative z-10"><ArrowRight /></span>
              </a>

              <a
                href="#servicios"
                className="
                  group relative overflow-hidden
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-2
                  bg-surface/80 backdrop-blur border border-border
                  hover:border-accent/40 hover:bg-background
                  text-foreground text-sm font-semibold
                  px-7 py-4 rounded-xl
                  transition-all duration-200
                  shadow-soft
                  active:scale-[0.98]
                "
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-accent/5 to-transparent" aria-hidden="true" />
                <span className="relative z-10">Ver nuestros servicios</span>
              </a>
            </div>

            {/* Features */}
            <div
              className="animate-fade-up flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
              style={{ animationDelay: '320ms' }}
            >
              {['Desarrollo a medida', 'Sistemas en línea', 'Soporte continuo'].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-3.5 py-1.5 text-[13px] text-muted"
                >
                  <CheckIcon />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* ============ VISUAL ============ */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Mockup />
          </div>
        </div>
      </div>

      {/* ============ FRANJA DE SERVICIOS ============ */}
      <div
        className="
          mt-20 md:mt-24 border-y border-border bg-surface/40 backdrop-blur-sm py-4 overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]
        "
      >
        <div className="hx-marquee flex w-max">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}