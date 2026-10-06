import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from '../ui/Loader';
import TestimonialsToast from '../ui/TestimonialsToast';
import WhatsAppFloat from '../ui/WhatsAppFloat';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <TestimonialsToast />
      <WhatsAppFloat />
    </div>
  );
}