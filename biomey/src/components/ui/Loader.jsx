import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('biomey-loaded');
  });
  const [hiding, setHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem('biomey-loaded', '1');

    // Animación de progreso: 0% → 100% en 1.5 segundos
    const startTime = Date.now();
    const duration = 1500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const value = Math.min((elapsed / duration) * 100, 100);
      setProgress(value);

      if (value >= 100) clearInterval(interval);
    }, 16);

    // Ocultar después de 1.8s (1.5s de progreso + 0.3s de pausa)
    const hideTimer = setTimeout(() => setHiding(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [visible]);

  if (!visible) return null;

  // Texto según el progreso
  const statusText =
    progress < 30 ? 'Iniciando...' :
    progress < 70 ? 'Cargando recursos...' :
    progress < 100 ? 'Casi listo...' :
    '¡Bienvenido!';

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-background
        transition-all duration-500 ease-out
        ${hiding ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
      aria-hidden="true"
    >
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface opacity-60" />

      {/* Grid sutil */}
      <div
        className="
          absolute inset-0
          [background-image:linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]
          opacity-30
        "
      />

      <div className="relative flex flex-col items-center gap-10 w-full max-w-sm px-6">

        {/* Logo + Nombre MÁS GRANDES */}
        <div className="flex items-center gap-4">
          <div className="biomey-logo-icon !w-20 !h-20 md:!w-24 md:!h-24">
            <img 
              src="/logo-biomey.png" 
              alt="Logo BioMey" 
              className="w-full h-full object-contain dark:invert"
            />
          </div>
          <span className="biomey-logo-text !text-4xl md:!text-5xl">
            BioMey
          </span>
        </div>

        {/* Barra de progreso */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-2 text-xs">
            <span className="text-muted tracking-wider uppercase">
              {statusText}
            </span>
            <span className="text-foreground font-bold tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="relative w-full h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-accent rounded-full"
              style={{
                width: `${progress}%`,
                transition: 'width 0.1s linear',
              }}
            />
          </div>
        </div>

        {/* Puntos animados */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '200ms' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>

      </div>
    </div>
  );
}