import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from '../ui/ThemeToggle';
import { getWhatsAppLink } from '../../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Cómo trabajamos', to: '/como-trabajamos' },
  { label: 'Contacto', to: '/contacto' },
];

/* =========================================================
   ICONO WHATSAPP
   ========================================================= */

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.82 9.87z" />
    </svg>
  );
}

/* =========================================================
   LOGO BIOMEY
   ========================================================= */

function BioMeyLogo() {
  return (
    <div className="biomey-logo-mark">

      {/* IMAGEN DEL LOGO (Reemplaza al SVG) */}
      <div className="biomey-logo-icon">
        <img 
          src="/logo-biomey.png" 
          alt="Logo BioMey" 
          className="w-full h-full object-contain dark:invert"
        />
      </div>

      {/* NOMBRE (Mantiene la fuente Bowlby One SC) */}
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
  const [menuOpen, setMenuOpen] = useState(false);

  /* Detectar scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

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
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-300

          ${
            scrolled || menuOpen
              ? 'bg-background/85 backdrop-blur-xl border-b border-border'
              : 'bg-transparent border-b border-transparent'
          }
        `}
      >

        <div className="container-biomey">

          <div className="flex items-center justify-between h-16 md:h-20">

            {/* =================================================
                LOGO
                ================================================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="biomey-logo-link group"
              aria-label="BioMey - Inicio"
            >
              <BioMeyLogo />
            </Link>


            {/* =================================================
                NAV DESKTOP
                ================================================= */}

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


            {/* =================================================
                DESKTOP: TEMA + WHATSAPP
                ================================================= */}

            <div className="hidden md:flex items-center gap-3">

              <ThemeToggle />

              {/* 🔽 BOTÓN DE WHATSAPP VERDE 🔽 */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  bg-[#25D366]
                  hover:bg-[#20bd5a]

                  text-white
                  text-sm
                  font-semibold

                  px-4
                  py-2.5

                  rounded-xl

                  transition-all
                  duration-200

                  shadow-lg
                  shadow-green-500/30
                  hover:shadow-green-500/50
                "
              >

                <WhatsAppIcon />

                <span>
                  Hablar por WhatsApp
                </span>

              </a>

            </div>


            {/* =================================================
                MÓVIL
                ================================================= */}

            <div className="flex md:hidden items-center gap-2">

              {/* 🔽 WHATSAPP MÓVIL VERDE 🔽 */}

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hablar por WhatsApp"
                className="
                  inline-flex
                  items-center
                  justify-center

                  w-10
                  h-10

                  rounded-xl

                  bg-[#25D366]
                  hover:bg-[#20bd5a]

                  text-white

                  shadow-lg
                  shadow-green-500/30

                  transition-colors
                "
              >
                <WhatsAppIcon />
              </a>


              {/* Botón menú */}

              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={
                  menuOpen
                    ? 'Cerrar menú'
                    : 'Abrir menú'
                }
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

                      ${
                        menuOpen
                          ? 'top-1/2 -translate-y-1/2 rotate-45'
                          : 'top-0'
                      }
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

                      ${
                        menuOpen
                          ? 'opacity-0 scale-x-0'
                          : 'opacity-100 scale-x-100'
                      }
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

                      ${
                        menuOpen
                          ? 'bottom-1/2 translate-y-1/2 -rotate-45'
                          : 'bottom-0'
                      }
                    `}
                  />

                </span>

              </button>

            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          MENÚ MÓVIL FULLSCREEN
          ===================================================== */}

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

          ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }
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


          {/* CTA */}

          <div className="mt-auto pt-8">

            {/* 🔽 BOTÓN GRANDE DE WHATSAPP VERDE 🔽 */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                flex
                items-center
                justify-center
                gap-2

                w-full

                bg-[#25D366]
                hover:bg-[#20bd5a]

                text-white
                text-base
                font-semibold

                px-4
                py-4

                rounded-2xl

                transition-all
                duration-200

                shadow-lg
                shadow-green-500/30
                hover:shadow-green-500/50
              "
            >

              <WhatsAppIcon className="w-5 h-5" />

              Hablar por WhatsApp

            </a>


            <p className="text-center text-xs text-muted mt-4">
              BioMey · Soluciones digitales y tecnológicas
            </p>

          </div>

        </div>

      </div>
    </>
  );
}