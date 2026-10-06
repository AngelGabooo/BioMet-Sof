import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from '../ui/ThemeToggle';

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Cómo trabajamos', to: '/como-trabajamos' },
];

/* =========================================================
   LOGO BIOMEY
   ========================================================= */

function BioMeyLogo() {
  return (
    <div className="biomey-logo-mark">
      {/* IMAGEN DEL LOGO */}
      <div className="biomey-logo-icon">
        <img 
          src="/logo-biomey.png" 
          alt="Logo BioMey" 
          className="w-full h-full object-contain dark:invert"
        />
      </div>

      {/* NOMBRE */}
      <span className="biomey-logo-text">
        BioMey
      </span>
    </div>
  );
}

/* =========================================================
   HEADER
   ========================================================= */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false); // 👈 Nuevo estado para ocultar
  const [menuOpen, setMenuOpen] = useState(false);

  /* Detectar scroll: ocultar al bajar, mostrar al subir */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Actualizamos el estado "scrolled" (para el fondo del header)
      setScrolled(currentScrollY > 8);

      // Lógica para ocultar/mostrar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Bajando y pasamos los 80px → ocultamos
        setHidden(true);
      } else {
        // Subiendo → mostramos
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* Cerrar menú con ESC */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  /* Bloquear scroll cuando menú móvil está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300 ease-in-out

          ${
            scrolled || menuOpen
              ? 'bg-background/85 backdrop-blur-xl border-b border-border'
              : 'bg-transparent border-b border-transparent'
          }

          ${hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="container-biomey">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="biomey-logo-link group"
              aria-label="BioMey - Inicio"
            >
              <BioMeyLogo />
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="
                    px-4 py-2
                    rounded-lg
                    text-sm
                    font-medium
                    text-muted

                    hover:text-foreground
                    hover:bg-surface

                    transition-colors
                    duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* DESKTOP: SOLO TEMA */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
            </div>

            {/* MÓVIL */}
            <div className="flex md:hidden items-center gap-2">
              {/* Botón menú */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                className="
                  inline-flex
                  items-center
                  justify-center

                  w-10
                  h-10

                  rounded-xl

                  bg-surface
                  border
                  border-border

                  hover:bg-background

                  active:scale-95

                  transition-all
                  duration-200
                "
              >
                <span className="relative w-[22px] h-[18px]">
                  {/* Línea 1 */}
                  <span
                    className={`
                      absolute
                      left-0
                      w-full
                      h-[2px]

                      bg-foreground
                      rounded-full

                      transition-all
                      duration-300
                      ease-out

                      ${menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}
                    `}
                  />

                  {/* Línea 2 */}
                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2
                      -translate-y-1/2

                      w-full
                      h-[2px]

                      bg-foreground
                      rounded-full

                      transition-all
                      duration-200
                      ease-out

                      ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
                    `}
                  />

                  {/* Línea 3 */}
                  <span
                    className={`
                      absolute
                      left-0
                      w-full
                      h-[2px]

                      bg-foreground
                      rounded-full

                      transition-all
                      duration-300
                      ease-out

                      ${menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}
                    `}
                  />
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`
          fixed
          inset-0
          z-40

          md:hidden

          bg-background

          transition-all
          duration-300
          ease-out

          ${menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        {/* Espacio del header */}
        <div className="h-16" />

        <div
          className="
            container-biomey
            pt-4
            pb-8

            h-[calc(100%-4rem)]

            flex
            flex-col
          "
        >
          {/* Navegación */}
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="
                  px-4
                  py-4

                  rounded-2xl

                  text-lg
                  font-medium
                  text-foreground

                  hover:bg-surface
                  active:bg-surface

                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Separador */}
          <div className="h-px bg-border my-6" />

          {/* Tema */}
          <div
            className="
              flex
              items-center
              justify-between

              px-4
              py-3

              rounded-2xl

              bg-surface
            "
          >
            <span className="text-sm font-medium text-muted">
              Apariencia
            </span>
            <ThemeToggle />
          </div>

        </div>
      </div>
    </>
  );
}