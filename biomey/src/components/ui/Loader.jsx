import { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('biomey-loaded');
  });
  const [hiding, setHiding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Cargando...');

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem('biomey-loaded', '1');

    // 1. Animación de la barra de progreso (0 a 100 en 4 segundos)
    const startTime = Date.now();
    const duration = 4000; // 4 segundos

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      // Cambiar el texto según el progreso
      if (newProgress < 30) setStatusText('Cargando...');
      else if (newProgress < 70) setStatusText('Preparando experiencia...');
      else if (newProgress < 100) setStatusText('Casi listo...');
      else setStatusText('¡Bienvenido!');

      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, 50);

    // 2. Temporizador para ocultar el loader (4s + 0.8s de fade out)
    const hideTimer = setTimeout(() => setHiding(true), 4000);
    const removeTimer = setTimeout(() => setVisible(false), 4800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [visible]);

  if (!visible) return null;

  // Cálculo del círculo SVG
  const radius = 60;
  const circumference = 2 * Math.PI * radius; // ~377
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-background
        transition-all duration-700 ease-out
        ${hiding ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}
      `}
      aria-hidden="true"
    >
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface opacity-60" />

      <div className="relative flex flex-col items-center gap-8">

        {/* Contenedor del Logo con Anillo de Progreso */}
        <div className="relative flex items-center justify-center w-40 h-40">

          {/* Anillo de progreso SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 140 140">
            {/* Círculo de fondo */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="rgb(var(--border))"
              strokeWidth="4"
              className="opacity-30"
            />
            {/* Círculo de progreso */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="rgb(var(--accent))"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-100 ease-linear"
            />
          </svg>

          {/* Logo en el centro */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            <div className="biomey-logo-icon !w-12 !h-12">
              <img 
                src="/logo-biomey.png" 
                alt="Logo BioMey" 
                className="w-full h-full object-contain dark:invert"
              />
            </div>
            <span className="biomey-logo-text !text-lg">
              BioMey
            </span>
          </div>
        </div>

        {/* Porcentaje y texto de estado */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl font-bold text-foreground tabular-nums">
            {Math.round(progress)}%
          </span>
          <p className="text-xs text-muted tracking-widest uppercase transition-all duration-300">
            {statusText}
          </p>
        </div>
      </div>
    </div>
  );
}