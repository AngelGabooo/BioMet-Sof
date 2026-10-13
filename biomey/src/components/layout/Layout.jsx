import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from '../ui/Loader';
import TestimonialsToast from '../ui/TestimonialsToast';
import WhatsAppFloat from '../ui/WhatsAppFloat';

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 👇 Nueva duración: coincide con el Loader optimizado.
    // - Desktop: FORM_MS (2200) + 300 + hold (1800) = 4300ms
    // - Móvil:   FORM_MS (2200) + 300 + hold (1400) = 3900ms
    //
    // Usamos 4300ms como valor único para asegurar que el Loader
    // termine su animación completa antes de desaparecer.
    const loaderDuration = 4300;

    const timer = setTimeout(() => setIsLoading(false), loaderDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
          <TestimonialsToast />
          <WhatsAppFloat />
        </>
      )}
    </div>
  );
}