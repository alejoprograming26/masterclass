import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { FoodsSection } from './components/FoodsSection';
import { BrandBanner } from './components/BrandBanner';
import { GoalsSection } from './components/GoalsSection';
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
        <FoodsSection />
        <BrandBanner />
        <GoalsSection />
        <PaymentsSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
