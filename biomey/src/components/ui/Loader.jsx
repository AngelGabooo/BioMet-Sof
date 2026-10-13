import { useEffect, useState, useRef } from 'react';

/* ------------------------------------------------------------------ */
/*  Saludo según la hora                                              */
/* ------------------------------------------------------------------ */
export function getGreeting(date = new Date()) {
  const h = date.getHours();
  if (h >= 6 && h < 12) return { text: 'Buenos días', period: 'day' };
  if (h >= 12 && h < 19) return { text: 'Buenas tardes', period: 'afternoon' };
  return { text: 'Buenas noches', period: 'night' };
}

const PeriodIcon = ({ period }) => {
  const common = {
    viewBox: '0 0 24 24',
    className: 'w-8 h-8',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (period === 'day') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    );
  }
  if (period === 'afternoon') {
    return (
      <svg {...common}>
        <path d="M6.5 16a5.5 5.5 0 0 1 11 0" />
        <path d="M2.5 16h19M5 20h14M12 4.5v2.5M4.6 9.6l1.7 1.2M19.4 9.6l-1.7 1.2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*  Configuración                                                      */
/* ------------------------------------------------------------------ */
const LETTERS = ['B', 'I', 'O', 'M', 'E', 'Y'];

const FORM_MS = 2200;
const LETTER_START = 100;
const LETTER_MS = 1100;
const STAGGER_MS = 130;

const STATUS = ['Iniciando', 'Cargando tu panel', 'Casi listo'];

const TRACES = [
  'M146 8 H96 L86 2 H30',
  'M146 14 H120 L110 19 H70',
  'M154 8 H204 L214 2 H270',
  'M154 14 H180 L190 19 H230',
];
const NODES = [
  [30, 2, true],
  [70, 19, false],
  [270, 2, true],
  [230, 19, false],
];

const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  return isMobile || cores <= 4 || memory <= 2;
};

export default function Loader() {
  const [phase, setPhase] = useState('forming');
  const [greeting] = useState(getGreeting);
  const [percent, setPercent] = useState(0);
  const lowEnd = useRef(isLowEndDevice());

  const hold = lowEnd.current ? 1400 : 1800;

  /* Fases: forming → greeting */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const formTime = reduce ? 0 : FORM_MS + 300;

    const t1 = setTimeout(() => setPhase('greeting'), formTime);
    return () => clearTimeout(t1);
  }, []);

  /* Barra de progreso */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPercent(100);
      return;
    }

    const fps = lowEnd.current ? 15 : 30;
    const intervalMs = 1000 / fps;
    const start = performance.now();

    const id = setInterval(() => {
      const elapsed = performance.now() - start;
      const t = Math.min(1, elapsed / FORM_MS);
      const eased = easeInOutSine(t);
      setPercent(Math.round(eased * 100));
      if (t >= 1) clearInterval(id);
    }, intervalMs);

    return () => clearInterval(id);
  }, []);

  const forming = phase === 'forming';
  const statusIdx = percent < 35 ? 0 : percent < 85 ? 1 : 2;

  return (
    <div className="
      bm-root
      min-h-screen
      flex flex-col items-center justify-center
      relative overflow-hidden
      bg-background text-foreground
    ">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Inter:wght@400;500;600;700&display=swap');

        .bm-root {
          font-family: 'Inter', system-ui, sans-serif;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .bm-brush {
          font-family: 'Rubik Dirt', 'Impact', 'Arial Black', sans-serif;
          font-weight: 400;
        }

        /* ---------- LETRAS ---------- */
        @keyframes bm-stamp {
          0%   { opacity: 0; transform: rotateY(1800deg) scale(2.4); }
          25%  { opacity: 1; }
          30%  { opacity: .2; }
          36%  { opacity: 1; }
          42%  { opacity: .3; }
          48%  { opacity: 1; }
          75%  { transform: rotateY(60deg) scale(1.1); }
          88%  { opacity: 1; }
          91%  { opacity: .25; }
          94%  { opacity: 1; }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }
        .bm-letter {
          display: inline-block;
          opacity: 0;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
          animation: bm-stamp ${LETTER_MS}ms cubic-bezier(.25,.8,.25,1) both;
        }

        @keyframes bm-flick {
          0%, 100% { opacity: 1; }
          45% { opacity: 1; } 50% { opacity: .35; } 55% { opacity: 1; }
        }
        .bm-glow { display: inline-block; animation: bm-flick 2.4s steps(1) infinite; }

        /* ---------- CIRCUITO ---------- */
        @keyframes bm-draw { to { stroke-dashoffset: 0; } }
        .bm-draw {
          stroke-dasharray: 1 1;
          stroke-dashoffset: 1;
          animation: bm-draw 700ms ease-out forwards;
          animation-delay: var(--d);
        }
        @keyframes bm-nodeblink {
          0%, 60%   { opacity: 1; }
          61%, 80%  { opacity: .15; }
          81%, 100% { opacity: 1; }
        }
        .bm-node {
          opacity: 0;
          animation: bm-nodeblink 1.4s steps(1) infinite;
          animation-delay: var(--d);
        }

        /* ---------- BARRA ---------- */
        @keyframes bm-shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
        .bm-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
          animation: bm-shimmer 1.4s ease-in-out infinite;
        }

        @keyframes bm-swap {
          0%   { opacity: 0; transform: translateY(4px); }
          40%  { opacity: 1; transform: none; }
          100% { opacity: 1; transform: none; }
        }
        .bm-swap { animation: bm-swap .4s ease-out both; }

        @keyframes bm-pop {
          0%   { opacity: 0; transform: scale(.94); }
          40%  { opacity: 1; }
          60%  { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .bm-pop { animation: bm-pop .7s ease-out both; }

        /* ---------- MÓVIL ---------- */
        @media (max-width: 640px) {
          .bm-letter { animation-duration: 900ms; }
          .bm-shimmer { animation: none; }
          .bm-node { animation: none; opacity: 1; }
          .bm-draw { animation-duration: 500ms; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bm-letter { animation: none; opacity: 1; }
          .bm-flick, .bm-glow, .bm-shimmer, .bm-swap, .bm-pop { animation: none; }
          .bm-node { animation: none; opacity: 1; }
          .bm-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Halos decorativos (usan --accent del tema) */}
      <div
        className="pointer-events-none absolute -top-40 -left-24 w-[420px] h-[420px] rounded-full blur-[80px] sm:blur-[120px]"
        style={{ background: 'rgb(var(--accent) / 0.07)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 w-[480px] h-[480px] rounded-full blur-[90px] sm:blur-[140px]"
        style={{ background: 'rgb(var(--foreground) / 0.05)' }}
      />

      {/* Grid de puntos (usa --foreground del tema) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] hidden sm:block"
        style={{
          backgroundImage: `radial-gradient(rgb(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        {/* ============ PALABRA BIOMEY ============ */}
        <h1
          aria-label="BioMey"
          className="bm-brush relative flex text-[72px] sm:text-[120px] leading-none tracking-[0.02em]"
          style={{ perspective: '800px', transform: 'translateZ(0)' }}
        >
          {LETTERS.map((c, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="bm-letter"
              style={{
                color:
                  i < 3
                    ? 'rgb(var(--foreground))'
                    : 'rgb(var(--accent))',
                animationDelay: `${LETTER_START + i * STAGGER_MS}ms`,
              }}
            >
              <span
                className="bm-glow"
                style={{ animationDelay: `${LETTER_START + i * STAGGER_MS + LETTER_MS + 200}ms` }}
              >
                {c}
              </span>
            </span>
          ))}
        </h1>

        {/* Circuito */}
        <svg
          viewBox="0 0 300 24"
          className="mt-5 w-[300px] sm:w-[380px] h-auto"
          fill="none"
          aria-hidden="true"
          style={{ color: 'rgb(var(--foreground))' }}
        >
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {TRACES.map((d, i) => (
              <path
                key={i}
                d={d}
                pathLength="1"
                className="bm-draw"
                style={{ '--d': `${1000 + i * 100}ms` }}
              />
            ))}
          </g>
          {NODES.map(([x, y, blue], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.5"
              fill={blue ? 'rgb(var(--accent))' : 'currentColor'}
              className="bm-node"
              style={{ '--d': `${1500 + i * 100}ms` }}
            />
          ))}
        </svg>

        {/* ============ BARRA / SALUDO ============ */}
        <div
          className="relative mt-12 h-[96px] w-[280px] sm:w-[340px]"
          role="status"
          aria-live="polite"
        >
          <div
            className={`absolute inset-0 flex flex-col justify-center gap-3 transition-opacity duration-500
                        ${forming ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="flex items-baseline justify-between text-[13px]">
              <span
                key={statusIdx}
                className="bm-swap font-medium text-muted"
              >
                {STATUS[statusIdx]}
              </span>
              <span className="font-semibold tabular-nums text-foreground">
                {percent}%
              </span>
            </div>

            <div className="relative" aria-hidden="true">
              <div className="h-[6px] w-full rounded-full bg-foreground/10 overflow-hidden">
                <div
                  className="relative h-full rounded-full overflow-hidden"
                  style={{
                    width: `${percent}%`,
                    background: `linear-gradient(90deg, rgb(var(--foreground)) 0%, rgb(var(--accent)) 100%)`,
                    transition: 'width 80ms linear',
                    willChange: 'width',
                  }}
                >
                  <span className="bm-shimmer absolute inset-0" />
                </div>
              </div>
            </div>
          </div>

          {!forming && (
            <div className="bm-pop absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
              <span className="text-accent">
                <PeriodIcon period={greeting.period} />
              </span>
              <p className="bm-brush text-[34px] leading-none tracking-wide text-foreground">
                {greeting.text}
              </p>
              <p className="text-[14px] text-muted">
                Te damos la bienvenida a BioMey
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="absolute bottom-8 text-[12px] text-muted">
        © 2025 BioMey
      </p>
    </div>
  );
}