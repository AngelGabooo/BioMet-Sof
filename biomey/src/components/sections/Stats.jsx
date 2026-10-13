import Reveal from '../ui/Reveal';

/* ═══════════ TECNOLOGÍAS ═══════════ */
const TECHS = [
  'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL',
  'JavaScript', 'TypeScript', 'MySQL', 'MongoDB',
  'Express', 'Vite', 'Git', 'Figma',
];

function TechChip({ name }) {
  return (
    <span className="
      inline-flex items-center gap-2
      px-4 py-2.5 rounded-full
      bg-background border border-border
      text-sm font-medium text-foreground
      whitespace-nowrap
      transition-colors duration-200
      hover:border-accent/40 hover:text-accent
    ">
      <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
      {name}
    </span>
  );
}

function MarqueeRow({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={hidden || undefined}
    >
      {TECHS.map((t) => (
        <li key={t}>
          <TechChip name={t} />
        </li>
      ))}
    </ul>
  );
}

export default function Stats() {
  return (
    <section className="relative py-14 md:py-20 border-y border-border bg-surface overflow-hidden">
      <style>{`
        @keyframes tech-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tech-marquee {
          animation: tech-marquee 40s linear infinite;
          will-change: transform;
        }
        .tech-marquee:hover { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .tech-marquee { animation: none; }
        }
      `}</style>

      <div className="container-biomey mb-8 md:mb-10">
        <Reveal>
          <div className="text-center">
            <span className="
              inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              bg-background border border-accent/20
              text-xs font-semibold text-foreground
            ">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Tecnologías que dominamos
            </span>
          </div>
        </Reveal>
      </div>

      {/* Franja infinita */}
      <div
        className="
          overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]
        "
      >
        <div className="tech-marquee flex w-max">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>
    </section>
  );
}