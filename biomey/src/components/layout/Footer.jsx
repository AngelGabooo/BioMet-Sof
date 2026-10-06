import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Cómo trabajamos', to: '/como-trabajamos' },
  { label: 'Contacto', to: '/contacto' },
];

const CONTACT = {
  email: 'soporte-biomey-tux@outlook.com',
  facebook: 'https://www.facebook.com/share/1J3AAbSkNh/?mibextid=wwXIfr',
};

/* ═══════════ ICONOS ═══════════ */
function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.87 9.87 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.82 9.87z" />
    </svg>
  );
}

function MailIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

/* ═══════════ LOGO BIOMEY (Mismo diseño que el Header) ═══════════ */
function BioMeyLogo() {
  return (
    <div className="biomey-logo-mark">
      {/* Imagen del logo */}
      <div className="biomey-logo-icon">
        <img 
          src="/logo-biomey.png" 
          alt="Logo BioMey" 
          className="w-full h-full object-contain dark:invert"
        />
      </div>
      {/* Nombre con la fuente Bowlby One SC */}
      <span className="biomey-logo-text">
        BioMey
      </span>
    </div>
  );
}

/* ═══════════ COMPONENTE ═══════════ */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-biomey">

        {/* Fila 1: Logo + Redes */}
        <div className="flex items-center justify-between gap-4 py-5 md:py-7">
          
          {/* Logo actualizado */}
          <Link 
            to="/" 
            className="biomey-logo-link group" 
            aria-label="BioMey - Inicio"
          >
            <BioMeyLogo />
          </Link>

          <div className="flex items-center gap-1.5">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de BioMey"
              className="
                inline-flex items-center justify-center
                w-8 h-8 rounded-lg
                bg-background border border-border
                text-muted hover:text-accent hover:border-accent/40
                transition-colors duration-200
              "
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de BioMey"
              className="
                inline-flex items-center justify-center
                w-8 h-8 rounded-lg
                bg-background border border-border
                text-muted hover:text-accent hover:border-accent/40
                transition-colors duration-200
              "
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Correo de BioMey"
              className="
                inline-flex items-center justify-center
                w-8 h-8 rounded-lg
                bg-background border border-border
                text-muted hover:text-accent hover:border-accent/40
                transition-colors duration-200
              "
            >
              <MailIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Fila 2: Nav + Contacto */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 py-4 md:py-5">
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            {NAV_LINKS.map((link, i) => (
              <span key={link.to} className="flex items-center gap-4">
                <Link
                  to={link.to}
                  className="
                    text-xs md:text-sm text-muted hover:text-accent
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span className="hidden md:block w-1 h-1 rounded-full bg-border" />
                )}
              </span>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-xs md:text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5" />
              Tapachula, Chiapas
            </span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5" />
              soporte-biomey-tux@outlook.com
            </a>
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Fila 3: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 py-3 md:py-4">
          <p className="text-[10px] md:text-xs text-muted text-center sm:text-left">
            © {year} <span className="font-semibold text-foreground">BioMey</span>. Todos los derechos reservados.
          </p>
          <p className="text-[10px] md:text-xs text-muted text-center sm:text-right">
            Hecho en Tapachula, Chiapas.
          </p>
        </div>
      </div>
    </footer>
  );
}