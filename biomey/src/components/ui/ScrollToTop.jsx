import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop global
 * - Sube al top cada vez que cambia la ruta (instantáneo).
 * - Escucha el evento `biomey:scroll-top` para subir suavemente
 *   cuando alguien lo pida (ej: clic en el logo estando ya en la home).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Al cambiar de ruta → scroll instantáneo
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  // 2. Escuchar el evento global → scroll suave
  useEffect(() => {
    const handleScrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    window.addEventListener('biomey:scroll-top', handleScrollTop);
    return () => {
      window.removeEventListener('biomey:scroll-top', handleScrollTop);
    };
  }, []);

  return null;
}