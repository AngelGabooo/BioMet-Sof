import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function NotFound() {
  return (
    <div className="container-biomey pt-32 pb-24 text-center min-h-[70vh] flex items-center justify-center">
      <div>
        <p className="text-7xl md:text-9xl font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Página no encontrada
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="
              inline-flex items-center justify-center
              bg-accent hover:bg-accent-hover
              text-white text-sm font-semibold
              px-6 py-3.5 rounded-xl
              transition-all duration-200
              shadow-soft hover:shadow-glow
              active:scale-[0.98]
            "
          >
            Volver al inicio
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              bg-surface border border-border
              hover:bg-background
              text-foreground text-sm font-semibold
              px-6 py-3.5 rounded-xl
              transition-colors
              active:scale-[0.98]
            "
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}