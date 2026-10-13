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
    const loaderDuration = 5900;
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