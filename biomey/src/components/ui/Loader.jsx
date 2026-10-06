import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('biomey-loaded');
  });
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem('biomey-loaded', '1');

    // 1.2s visible + 0.3s de fade out = 1.5 segundos total
    const hideTimer = setTimeout(() => setHiding(true), 1200);
    const removeTimer = setTimeout(() => setVisible(false), 1500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-background
        transition-opacity duration-300 ease-out
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

        {/* Logo + Nombre */}
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

        {/* Barra de progreso - 100% CSS, ultra fluida */}
        <div className="w-full">
          <div className="relative w-full h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="
                absolute inset-y-0 left-0 w-full
                bg-accent rounded-full
                origin-left
                animate-progress-bar
              "
              style={{ willChange: 'transform' }}
            />
          </div>

          {/* Texto debajo */}
          <p className="text-center text-xs text-muted tracking-widest uppercase mt-4 animate-pulse">
            Cargando
          </p>
        </div>

      </div>
    </div>
  );
}