import { useEffect, useRef, useState } from 'react';
import Reveal from '../ui/Reveal';

/* ═══════════ HOOK: contar al entrar en viewport ═══════════ */
function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(start + (end - start) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(end);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration, start]);

  return { count, ref };
}

/* ═══════════ COMPONENTE STAT ITEM ═══════════ */
function StatItem({ value, suffix, prefix, label, delay }) {
  const numericValue = parseInt(value, 10);
  const { count, ref } = useCountUp(numericValue, 1800 + delay);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-1">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted leading-tight">
        {label}
      </div>
    </div>
  );
}

/* ═══════════ DATOS ═══════════ */
const STATS = [
  { value: 50, prefix: '+', suffix: '', label: 'Proyectos entregados', delay: 0 },
  { value: 30, prefix: '+', suffix: '', label: 'Clientes satisfechos', delay: 100 },
  { value: 5, prefix: '', suffix: ' años', label: 'De experiencia', delay: 200 },
  { value: 24, prefix: '', suffix: '/7', label: 'Soporte disponible', delay: 300 },
];

/* ═══════════ SECCIÓN ═══════════ */
export default function Stats() {
  return (
    <section className="relative py-14 md:py-20 border-y border-border bg-surface">
      <div className="container-biomey">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <StatItem
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}