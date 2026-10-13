import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const FORM_MS = 3600;      // duración total de la carga
const LETTER_START = 200;  // cuándo cae la primera letra
const LETTER_MS = 1700;    // duración del giro de cada letra (5 vueltas)
const STAGGER_MS = 190;    // espera entre letras

const INK = '#171717';
const BLUE = '#2563EB';

// Estados del cargador según el progreso
const STATUS = ['Iniciando', 'Cargando tu panel', 'Casi listo'];

// Trazos de circuito bajo la palabra (guiño al logo)
const TRACES = [
  'M146 8 H96 L86 2 H30',
  'M146 14 H120 L110 19 H70',
  'M154 8 H204 L214 2 H270',
  'M154 14 H180 L190 19 H230',
];
// [x, y, azul?]
const NODES = [
  [30, 2, true],
  [70, 19, false],
  [270, 2, true],
  [230, 19, false],
];

const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

// NOTA: El componente ahora se llama `Loader` en lugar de `Splash`.
export default function Loader() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState('forming'); // 'forming' | 'greeting'
  const [greeting] = useState(getGreeting);
  const [p, setP] = useState(0); // progreso 0..1

  // La duración ahora es fija, ya que no viene por props.
  const formTime = FORM_MS + 300;
  const hold = 2000; // Tiempo que se muestra el saludo

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const formTime = reduce ? 0 : FORM_MS + 300;

    const t1 = setTimeout(() => setPhase('greeting'), formTime);
    // El `navigate` ahora se maneja desde el Layout, no desde aquí.
    // const t2 = setTimeout(() => navigate(to, { replace: true }), formTime + hold);
    
    // La animación de salida se manejará en el Layout.
    const t2 = setTimeout(() => setPhase('finished'), formTime + hold);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hold]);

  // Progreso de la barra
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setP(1);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / FORM_MS);
      setP(easeInOutSine(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const forming = phase === 'forming';
  const percent = Math.round(p * 100);
  const statusIdx = p < 0.35 ? 0 : p < 0.85 ? 1 : 2;

  return (
    <div className="bm-root min-h-screen bg-white flex flex-col items-center justify-center
                    relative overflow-hidden text-[#171717]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Inter:wght@400;500;600;700&display=swap');

        .bm-root  { font-family: 'Inter', system-ui, sans-serif; }
        .bm-brush { font-family: 'Rubik Dirt', 'Impact', 'Arial Black', sans-serif; font-weight: 400; }

        @keyframes bm-stamp {
          0%   { opacity: 0; transform: rotateY(1800deg) rotate(-180deg) scale(2.6); filter: blur(12px); }
          25%  { opacity: 1; }
          30%  { opacity: .2; }
          36%  { opacity: 1; }
          42%  { opacity: .3; }
          48%  { opacity: 1; }
          75%  { transform: rotateY(60deg) rotate(-20deg) scale(1.15); filter: blur(1px); }
          88%  { opacity: 1; }
          91%  { opacity: .25; }
          94%  { opacity: 1; }
          100% { opacity: 1; transform: rotateY(0deg) rotate(0deg) scale(1); filter: blur(0); }
        }
        .bm-letter {
          display: inline-block;
          opacity: 0;
          will-change: transform, opacity, filter;
          animation: bm-stamp ${LETTER_MS}ms cubic-bezier(.25,.8,.25,1) both;
        }

        @keyframes bm-flick {
          0%, 100% { opacity: 1; }
          45% { opacity: 1; } 50% { opacity: .3; } 55% { opacity: 1; } 70% { opacity: .65; } 75% { opacity: 1; }
        }
        .bm-flick { animation: bm-flick 1.6s steps(1) infinite; }
        .bm-glow  { display: inline-block; animation: bm-flick 2.4s steps(1) infinite; }

        @keyframes bm-draw { to { stroke-dashoffset: 0; } }
        .bm-draw {
          stroke-dasharray: 1 1;
          stroke-dashoffset: 1;
          animation: bm-draw 800ms ease-out forwards;
          animation-delay: var(--d);
        }
        @keyframes bm-nodeblink {
          0%, 55%   { opacity: 1; }
          56%, 70%  { opacity: .1; }
          71%, 80%  { opacity: 1; }
          81%, 90%  { opacity: .1; }
          91%, 100% { opacity: 1; }
        }
        .bm-node {
          opacity: 0;
          animation: bm-nodeblink 1.3s steps(1) infinite;
          animation-delay: var(--d);
        }

        @keyframes bm-shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
        .bm-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          animation: bm-shimmer 1.1s ease-in-out infinite;
        }
        @keyframes bm-tick {
          0%, 100% { opacity: 1; box-shadow: 0 0 14px 2px rgba(37,99,235,.7); }
          50%      { opacity: .35; box-shadow: 0 0 6px 0 rgba(37,99,235,.35); }
        }
        .bm-tick { animation: bm-tick .9s steps(2) infinite; }

        @keyframes bm-swap {
          0%   { opacity: 0; transform: translateY(4px); }
          30%  { opacity: 1; }
          40%  { opacity: .3; }
          55%  { opacity: 1; transform: none; }
          100% { opacity: 1; transform: none; }
        }
        .bm-swap { animation: bm-swap .5s ease-out both; }

        @keyframes bm-pop {
          0%   { opacity: 0; transform: scale(.92); }
          20%  { opacity: 1; }
          30%  { opacity: .2; }
          40%  { opacity: 1; }
          50%  { opacity: .5; }
          60%  { opacity: 1; transform: scale(1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .bm-pop { animation: bm-pop .9s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .bm-letter { animation: none; opacity: 1; }
          .bm-flick, .bm-glow, .bm-shimmer, .bm-tick, .bm-swap, .bm-pop { animation: none; }
          .bm-node { animation: none; opacity: 1; }
          .bm-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="pointer-events-none absolute -top-40 -left-24 w-[420px] h-[420px]
                      rounded-full bg-[#2563EB]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-[480px] h-[480px]
                      rounded-full bg-[#171717]/[0.06] blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(${INK} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        <h1
          aria-label="BioMey"
          className="bm-brush relative flex text-[72px] sm:text-[120px] leading-none tracking-[0.02em]"
          style={{ perspective: '800px' }}
        >
          {LETTERS.map((c, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="bm-letter"
              style={{
                color: i < 3 ? INK : BLUE,
                animationDelay: `${LETTER_START + i * STAGGER_MS}ms`,
              }}
            >
              <span
                className="bm-glow"
                style={{ animationDelay: `${LETTER_START + i * STAGGER_MS + LETTER_MS + 300}ms` }}
              >
                {c}
              </span>
            </span>
          ))}
        </h1>

        <svg
          viewBox="0 0 300 24"
          className="mt-5 w-[300px] sm:w-[380px] h-auto"
          fill="none"
          aria-hidden="true"
        >
          <g stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {TRACES.map((d, i) => (
              <path key={i} d={d} pathLength="1" className="bm-draw"
                    style={{ '--d': `${1500 + i * 150}ms` }} />
            ))}
          </g>
          {NODES.map(([x, y, blue], i) => (
            <circle key={i} cx={x} cy={y} r="3.5"
                    fill={blue ? BLUE : INK}
                    className="bm-node"
                    style={{ '--d': `${2200 + i * 150}ms` }} />
          ))}
        </svg>

        <div className="relative mt-12 h-[96px] w-[280px] sm:w-[340px]" role="status" aria-live="polite">
          <div
            className={`absolute inset-0 flex flex-col justify-center gap-3 transition-opacity duration-500
                        ${forming ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="flex items-baseline justify-between text-[13px]">
              <span key={statusIdx} className="bm-swap font-medium text-[#171717]/70">
                {STATUS[statusIdx]}
              </span>
              <span className="font-semibold tabular-nums text-[#171717]">{percent}%</span>
            </div>

            <div className="relative" aria-hidden="true">
              <div className="h-[6px] w-full rounded-full bg-[#171717]/[0.08] overflow-hidden">
                <div
                  className="relative h-full rounded-full overflow-hidden"
                  style={{
                    width: `${p * 100}%`,
                    background: `linear-gradient(90deg, ${INK} 0%, ${BLUE} 100%)`,
                  }}
                >
                  <span className="bm-shimmer absolute inset-0" />
                </div>
              </div>
              <span
                className="bm-tick absolute top-1/2 -translate-y-1/2 block h-[14px] w-[3px] rounded-full bg-[#2563EB]"
                style={{ left: `calc(${p * 100}% - 1.5px)`, opacity: p > 0.01 && p < 1 ? undefined : 0 }}
              />
            </div>
          </div>

          {!forming && (
            <div className="bm-pop absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
              <span className="text-[#2563EB] bm-flick">
                <PeriodIcon period={greeting.period} />
              </span>
              <p className="bm-brush text-[34px] leading-none tracking-wide">{greeting.text}</p>
              <p className="text-[14px] text-[#171717]/60">Te damos la bienvenida a BioMey</p>
            </div>
          )}
        </div>
      </div>

      <p className="absolute bottom-8 text-[12px] text-[#171717]/40">© 2025 BioMey</p>
    </div>
  );
}