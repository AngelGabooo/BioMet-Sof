import { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../../data/testimonials';

/* ═══════════ Iconos ═══════════ */
function StarIcon({ filled = true }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* Iniciales del nombre para el avatar */
function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

/* ═══════════ Componente ═══════════ */
export default function TestimonialsToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Primera aparición después de 6 segundos
  useEffect(() => {
    if (dismissed) return;

    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => clearTimeout(initialTimer);
  }, [dismissed]);

  // Ciclo: mostrar 5s, ocultar 2s, avanzar, repetir
  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      // Ocultar
      setVisible(false);

      // Después de 2s, avanzar al siguiente y mostrar
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setVisible(true);
      }, 700);
    }, 12000);

    return () => clearInterval(interval);
  }, [dismissed]);

  // Ocultar también después de 5s de estar visible
  useEffect(() => {
    if (!visible) return;

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [visible, currentIndex]);

  if (dismissed) return null;

  const current = TESTIMONIALS[currentIndex];

  return (
    <div
      className={`
        fixed z-40
        bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6
        sm:max-w-sm
        transition-all duration-500 ease-out
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      role="status"
      aria-live="polite"
    >
      <div
        className="
          relative
          bg-surface border border-border rounded-2xl
          shadow-card
          p-4 pr-10
          backdrop-blur-sm
        "
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Cerrar testimonio"
          className="
            absolute top-3 right-3
            w-6 h-6 rounded-lg
            inline-flex items-center justify-center
            text-muted hover:text-foreground
            hover:bg-background
            transition-colors
          "
        >
          <CloseIcon />
        </button>

        {/* Estrellas */}
        <div className="flex items-center gap-0.5 text-yellow-500 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled />
          ))}
        </div>

        {/* Mensaje */}
        <p className="text-sm text-foreground leading-relaxed mb-3">
          “{current.message}”
        </p>

        {/* Autor */}
        <div className="flex items-center gap-3">
          {/* Avatar con iniciales */}
          <div
            className="
              flex items-center justify-center
              w-9 h-9 rounded-full
              bg-accent/10 text-accent
              text-xs font-bold
              shrink-0
            "
          >
            {getInitials(current.name)}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold text-foreground truncate">
              {current.name}
            </p>
            <p className="text-[11px] text-muted truncate">
              {current.business} · {current.location}
            </p>
          </div>
        </div>

        {/* Indicador de progreso */}
        <div className="mt-3 flex gap-1">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`
                h-0.5 flex-1 rounded-full transition-colors duration-300
                ${i === currentIndex ? 'bg-accent' : 'bg-border'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}