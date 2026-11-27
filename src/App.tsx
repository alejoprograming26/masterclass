import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { BrandBanner } from './components/BrandBanner';
import { PaymentsSection } from './components/PaymentsSection';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-cream-50 font-sans text-ink antialiased">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Methodology />
        <BrandBanner />
        <PaymentsSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
