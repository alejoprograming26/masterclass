import React, { useState, useId } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Beef,
  Bitcoin,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  CreditCard,
  Landmark,
  Menu,
  Nut,
  Scale,
  Send,
  ShieldCheck,
  Smartphone,
  Sprout,
  Star,
  Users,
  UtensilsCrossed,
  Wallet,
  Wheat,
  X,
  Apple
} from 'lucide-react';
import {
  PAYMENT_METHODS,
  SYLLABUS_STEPS,
  GOALS_DATA,
  NUTRITION_CATEGORIES,
  type GoalData
} from './data/masterclass';
import heroPlato from './assets/hero-plato.jpg';
import heroDetalle from './assets/hero-detalle.jpg';
import catProteinas from './assets/cat-proteinas.jpg';
import catCarbohidratos from './assets/cat-carbohidratos.jpg';
import catGrasas from './assets/cat-grasas.jpg';
import bannerPlato from './assets/banner-plato.jpg';

const NAV_LINKS = [
  { href: '#metodologia', label: 'Metodología' },
  { href: '#alimentos', label: 'Alimentos' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#pagos', label: 'Pagos' },
  { href: '#registro', label: 'Inscripción' }
];

const HERO_BENEFITS = [
  { icon: CheckCircle2, title: '100% ciencia aplicada', detail: 'Sin dietas milagro' },
  { icon: Scale, title: 'Crudo vs. cocido', detail: 'Precisión real en báscula' },
  { icon: Smartphone, title: 'MyFitnessPal', detail: 'Registro en menos de 4 min' },
  { icon: ShieldCheck, title: 'Autonomía total', detail: 'Aprende una vez, para siempre' }
];

const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  proteinas: {
    src: catProteinas,
    alt: 'Bowl con pollo a la plancha, huevos y verduras frescas como ejemplo de proteína magra'
  },
  carbohidratos: {
    src: catCarbohidratos,
    alt: 'Bol de avena con fresas, arándanos y semillas como ejemplo de carbohidratos complejos'
  },
  grasas: {
    src: catGrasas,
    alt: 'Aguacate, aceite de oliva y semillas sobre mármol como ejemplo de grasas saludables'
  }
};

const PAYMENT_ICONS: Record<string, React.ElementType> = {
  binance: Bitcoin,
  zelle: Landmark,
  paypal: CreditCard,
  transferencia: Wallet
};

interface PaymentTheme {
  border: string;
  badge: string;
  iconBg: string;
  iconText: string;
  fieldsBg: string;
  fieldBorder: string;
  fieldCardBg: string;
  copyBtn: string;
  hoverGlow: string;
}

const PAYMENT_THEMES: Record<string, PaymentTheme> = {
  binance: {
    border: 'border-amber-300/80 hover:border-amber-400',
    badge: 'border-amber-300 bg-amber-50 text-amber-800',
    iconBg: 'bg-amber-500 text-white shadow-sm',
    iconText: 'text-amber-500',
    fieldsBg: 'bg-amber-50/60 border-amber-200/70',
    fieldBorder: 'border-amber-200/80',
    fieldCardBg: 'bg-white',
    copyBtn: 'bg-amber-100/80 text-amber-900 hover:bg-amber-500 hover:text-white',
    hoverGlow: 'hover:shadow-[0_20px_45px_-20px_rgba(245,158,11,0.35)]'
  },
  zelle: {
    border: 'border-purple-300/80 hover:border-purple-400',
    badge: 'border-purple-300 bg-purple-50 text-purple-800',
    iconBg: 'bg-purple-600 text-white shadow-sm',
    iconText: 'text-purple-600',
    fieldsBg: 'bg-purple-50/60 border-purple-200/70',
    fieldBorder: 'border-purple-200/80',
    fieldCardBg: 'bg-white',
    copyBtn: 'bg-purple-100/80 text-purple-900 hover:bg-purple-600 hover:text-white',
    hoverGlow: 'hover:shadow-[0_20px_45px_-20px_rgba(147,51,234,0.35)]'
  },
  paypal: {
    border: 'border-sky-300/80 hover:border-sky-400',
    badge: 'border-sky-300 bg-sky-50 text-sky-800',
    iconBg: 'bg-sky-600 text-white shadow-sm',
    iconText: 'text-sky-600',
    fieldsBg: 'bg-sky-50/60 border-sky-200/70',
    fieldBorder: 'border-sky-200/80',
    fieldCardBg: 'bg-white',
    copyBtn: 'bg-sky-100/80 text-sky-900 hover:bg-sky-600 hover:text-white',
    hoverGlow: 'hover:shadow-[0_20px_45px_-20px_rgba(2,132,199,0.35)]'
  },
  transferencia: {
    border: 'border-emerald-300/80 hover:border-emerald-400',
    badge: 'border-emerald-300 bg-emerald-50 text-emerald-800',
    iconBg: 'bg-emerald-600 text-white shadow-sm',
    iconText: 'text-emerald-600',
    fieldsBg: 'bg-emerald-50/60 border-emerald-200/70',
    fieldBorder: 'border-emerald-200/80',
    fieldCardBg: 'bg-white',
    copyBtn: 'bg-emerald-100/80 text-emerald-900 hover:bg-emerald-600 hover:text-white',
    hoverGlow: 'hover:shadow-[0_20px_45px_-20px_rgba(16,185,129,0.35)]'
  }
};

const INCLUDES = [
  'Sesión en vivo con preguntas y respuestas',
  'Guía paso a paso de cálculo de macros',
  'Plantilla para configurar MyFitnessPal',
  'Grabación de la clase para repasar'
];

const AVATARS = ['MC', 'LR', 'JS', 'AP'];
const AVATAR_STYLES = [
  'bg-lime-brand text-forest-950',
  'bg-forest-300 text-forest-950',
  'bg-cream-100 text-forest-900',
  'bg-forest-600 text-cream-50'
];

function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] ${
        tone === 'dark'
          ? 'border-white/15 bg-white/5 text-cream-100'
          : 'border-forest-100 bg-forest-50 text-forest-700'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-lime-brand" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function App() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openPaymentId, setOpenPaymentId] = useState<string | null>('binance');
  const [activeGoalTab, setActiveGoalTab] = useState<'musculo' | 'mantenimiento' | 'grasa'>('grasa');
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('proteinas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    goal: 'Pérdida de grasa',
    paymentMethod: 'Binance Pay / USDT',
    reference: '',
    comments: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Accessible IDs
  const fullNameId = useId();
  const emailId = useId();
  const goalId = useId();
  const paymentMethodId = useId();
  const referenceId = useId();
  const commentsId = useId();

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setFormSubmitted(true);
  };

  const selectedGoal: GoalData = GOALS_DATA.find((g) => g.id === activeGoalTab) || GOALS_DATA[2];
  const selectedCategory =
    NUTRITION_CATEGORIES.find((c) => c.id === activeCategoryTab) || NUTRITION_CATEGORIES[0];
  const selectedCategoryImage = CATEGORY_IMAGES[selectedCategory.id];

  const inputClass =
    'w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm font-medium text-forest-950 placeholder:text-sage-400 transition focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500/20';

  return (
    <div id="top" className="min-h-screen bg-cream-50 font-sans text-ink antialiased">
      {/* Sticky navigation — deep forest green */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-forest-950/95 text-cream-50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-brand text-forest-950 shadow-glow">
              <Sprout className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[15px] font-extrabold leading-none tracking-tight sm:text-base">
                Gobierna tus macros
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-brand/80">
                Nutrición aplicada
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            <a
              href="#top"
              className="text-xs font-semibold text-lime-brand transition-colors hover:text-lime-soft"
            >
              Inicio
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-cream-100/70 transition-colors hover:text-lime-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-semibold text-cream-100/80 xl:flex">
              <Calendar className="h-3.5 w-3.5 text-lime-brand" aria-hidden="true" />
              <span>18 de enero, 2027</span>
            </div>
            <a
              href="#registro"
              className="hidden items-center justify-center rounded-full bg-lime-brand px-5 py-2.5 text-xs font-extrabold text-forest-950 transition-all hover:bg-lime-soft hover:shadow-glow sm:inline-flex"
            >
              Reservar cupo
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cream-50 transition hover:bg-white/10 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-nav" className="border-t border-white/10 bg-forest-950 lg:hidden">
            <nav className="mx-auto max-w-6xl space-y-1 px-4 py-4" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-cream-100/80 transition hover:bg-white/5 hover:text-lime-brand"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
              <a
                href="#registro"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-lime-brand px-4 py-3 text-sm font-extrabold text-forest-950"
              >
                Reservar mi cupo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content">
      {/* HERO — deep forest with lime accents */}
      <section className="relative overflow-hidden bg-forest-950 text-cream-50">
        <div
          className="pointer-events-none absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-lime-brand/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-forest-400/20 blur-[110px]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-10 top-6 hidden select-none text-[26rem] font-extrabold leading-none text-lime-brand/[0.05] lg:block"
          aria-hidden="true"
        >
          G
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left copy */}
            <div className="lg:col-span-7">
              <Eyebrow tone="dark">Masterclass en vivo · 18 de enero</Eyebrow>

              <h1 className="mt-6 text-balance text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.15rem]">
                Nutrición precisa.
                <br />
                <span className="text-lime-brand">Gobierna tus macros.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream-100/70 sm:text-base">
                Aprende a calcular tus macronutrientes con exactitud según tu meta. Domina la báscula en crudo vs.
                cocido y automatiza MyFitnessPal sin restricciones insostenibles.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#registro"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-brand px-7 py-4 text-sm font-extrabold text-forest-950 shadow-glow transition-all hover:-translate-y-0.5 hover:bg-lime-soft"
                >
                  Asegurar mi cupo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#metodologia"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-cream-50 transition-all hover:border-white/25 hover:bg-white/10"
                >
                  Ver el temario
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex -space-x-2.5">
                  {AVATARS.map((initials, index) => (
                    <span
                      key={initials}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-forest-950 text-[10px] font-extrabold ${AVATAR_STYLES[index]}`}
                    >
                      {initials}
                    </span>
                  ))}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-forest-950 bg-white/10 text-[9px] font-extrabold text-cream-100">
                    +1k
                  </span>
                </div>
                <div className="h-8 w-px bg-white/10" aria-hidden="true" />
                <div>
                  <div className="flex items-center gap-1" aria-label="Valoración de 4.9 sobre 5">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3.5 w-3.5 fill-lime-brand text-lime-brand" aria-hidden="true" />
                    ))}
                    <span className="ml-1.5 text-xs font-extrabold text-cream-50">4.9/5</span>
                  </div>
                  <p className="mt-0.5 text-[11px] font-medium text-cream-100/55">
                    Valoración de la comunidad
                  </p>
                </div>
              </div>
            </div>

            {/* Right: photo composition */}
            <div className="relative lg:col-span-5">
              <div
                className="pointer-events-none absolute -inset-5 rounded-[3rem] bg-lime-brand/10 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative mx-auto w-full max-w-[30rem]">
                <figure className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_45px_90px_-45px_rgba(0,0,0,0.95)]">
                  <img
                    src={heroPlato}
                    alt="Mesa con un bowl de quinoa, verduras asadas, aguacate y frutos secos: ejemplo de un plato con macros equilibrados"
                    width={1200}
                    height={800}
                    className="h-[19rem] w-full object-cover object-[68%_50%] sm:h-[23rem]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/5 to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-lime-brand px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-forest-950 shadow-glow">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-950 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest-950" />
                    </span>
                    En vivo · 18 de enero
                  </span>

                  <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cream-50/90">
                    <UtensilsCrossed className="h-3.5 w-3.5 text-lime-brand" aria-hidden="true" />
                    Comida real, números reales
                  </figcaption>
                </figure>

                {/* Small overlapping photo */}
                <figure className="absolute -right-3 -top-6 z-20 hidden w-28 rotate-2 overflow-hidden rounded-2xl border-4 border-forest-950 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)] sm:block">
                  <img
                    src={heroDetalle}
                    alt="Bowl con huevos, aguacate y verduras frescas"
                    width={600}
                    height={450}
                    loading="lazy"
                    className="h-28 w-full object-cover"
                  />
                </figure>

                {/* Caption card */}
                <div className="relative z-10 mx-2 -mt-12 rounded-[1.5rem] border border-white/15 bg-forest-900/95 p-5 backdrop-blur sm:mx-4 sm:-mt-14 sm:p-6">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-lime-brand">
                    El objetivo de la clase
                  </p>
                  <p className="mt-2 text-lg font-extrabold leading-snug text-cream-50 sm:text-xl">
                    Mirar tu plato y saber exactamente qué hay dentro.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      { Icon: Beef, label: 'Proteína' },
                      { Icon: Wheat, label: 'Carbohidratos' },
                      { Icon: Nut, label: 'Grasas' }
                    ].map(({ Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-cream-100"
                      >
                        <Icon className="h-3 w-3 text-lime-brand" aria-hidden="true" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid grid-cols-2 gap-2 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur sm:gap-3 sm:p-4 lg:grid-cols-4">
            {HERO_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-center gap-3 rounded-2xl p-2 sm:p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-brand/15 text-lime-brand">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold text-cream-50 sm:text-xs">{benefit.title}</p>
                    <p className="mt-0.5 text-[10px] font-medium text-cream-100/60">{benefit.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="metodologia" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Temario oficial</Eyebrow>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">
                Cinco pasos para dejar de adivinar
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Una estructura pedagógica paso a paso para que salgas de la sesión aplicando tu plan el mismo día, con
                total seguridad.
              </p>
            </div>
            <a
              href="#registro"
              className="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-forest-200 bg-white px-5 py-2.5 text-xs font-bold text-forest-800 transition-all hover:border-forest-700 hover:bg-forest-900 hover:text-lime-brand"
            >
              Reservar cupo
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 space-y-4">
            {SYLLABUS_STEPS.map((item, index) => {
              const IconComp = item.icon;
              const featured = index === 0;
              return (
                <article
                  key={item.step}
                  className={`group relative overflow-hidden rounded-[1.75rem] border p-6 transition-all sm:p-8 ${
                    featured
                      ? 'border-forest-800 bg-forest-900 text-cream-50 shadow-card'
                      : 'border-cream-200 bg-white hover:border-forest-300 hover:shadow-[0_26px_60px_-36px_rgba(8,36,20,0.5)]'
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -right-4 -top-10 select-none text-[9rem] font-extrabold leading-none ${
                      featured ? 'text-lime-brand/10' : 'text-forest-50'
                    }`}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex items-center gap-3 sm:block">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          featured
                            ? 'bg-lime-brand text-forest-950'
                            : 'border border-forest-100 bg-forest-50 text-forest-700'
                        }`}
                      >
                        <IconComp className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-widest sm:hidden ${
                          featured ? 'text-lime-brand' : 'text-forest-700'
                        }`}
                      >
                        Parte {item.step}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3
                          className={`text-lg font-extrabold sm:text-xl ${
                            featured ? 'text-cream-50' : 'text-forest-950'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <span
                          className={`w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            featured
                              ? 'bg-white/10 text-lime-soft'
                              : 'border border-forest-100 bg-forest-50 text-forest-700'
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <p
                        className={`mt-1 text-[11px] font-semibold uppercase tracking-wide ${
                          featured ? 'text-cream-100/60' : 'text-sage-500'
                        }`}
                      >
                        {item.subtitle}
                      </p>

                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          featured ? 'text-cream-100/70' : 'text-muted'
                        }`}
                      >
                        {item.description}
                      </p>

                      <div
                        className={`mt-4 grid gap-2 border-t pt-4 sm:grid-cols-3 ${
                          featured ? 'border-white/10' : 'border-cream-200'
                        }`}
                      >
                        {item.keyPoints.map((point) => (
                          <div key={point} className="flex items-start gap-2 text-[11px] font-medium leading-snug">
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                                featured ? 'bg-lime-brand' : 'bg-forest-400'
                              }`}
                              aria-hidden="true"
                            />
                            <span className={featured ? 'text-cream-100/75' : 'text-muted'}>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        className={`mt-4 flex items-start gap-2 border-t border-dashed pt-3 text-[11px] font-semibold ${
                          featured ? 'border-white/10 text-lime-brand' : 'border-cream-200 text-forest-700'
                        }`}
                      >
                        <Award className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Aplicación real: {item.practicalApplication}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOODS */}
      <section
        id="alimentos"
        className="relative scroll-mt-24 overflow-hidden border-y border-cream-200 bg-cream-100 py-16 sm:py-20"
      >
        <div
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-lime-brand/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Guía visual de alimentos</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">
                Construye platos con macros reales
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Identifica las densidades de cada grupo de alimentos para balancear tus comidas sin pasar hambre ni
                sufrir escasez de energía.
              </p>
            </div>
            <a
              href="#objetivos"
              className="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-forest-200 bg-white px-5 py-2.5 text-xs font-bold text-forest-800 transition-all hover:border-forest-700 hover:bg-forest-900 hover:text-lime-brand"
            >
              Ver metas
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Category cards */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {NUTRITION_CATEGORIES.map((cat) => {
              const CatIcon = cat.icon;
              const active = activeCategoryTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryTab(cat.id)}
                  aria-pressed={active}
                  className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border p-5 text-left transition-all sm:p-6 ${
                    active
                      ? 'border-forest-900 bg-forest-900 text-cream-50 shadow-card ring-2 ring-lime-brand/70'
                      : 'border-cream-200 bg-white hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-[0_24px_50px_-32px_rgba(8,36,20,0.45)]'
                  }`}
                >
                  <div className="relative -mx-5 -mt-5 mb-4 h-36 overflow-hidden sm:-mx-6 sm:-mt-6">
                    <img
                      src={CATEGORY_IMAGES[cat.id].src}
                      alt={CATEGORY_IMAGES[cat.id].alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-forest-950/65 via-forest-950/5 to-transparent"
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl backdrop-blur ${
                        active ? 'bg-lime-brand text-forest-950' : 'bg-cream-50/90 text-forest-800'
                      }`}
                    >
                      <CatIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span
                      className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold backdrop-blur ${
                        active ? 'bg-forest-950/70 text-lime-soft' : 'bg-cream-50/90 text-forest-800'
                      }`}
                    >
                      {cat.items.length} alimentos
                    </span>
                  </div>

                  <h3 className={`text-lg font-extrabold ${active ? 'text-cream-50' : 'text-forest-950'}`}>
                    {cat.name}
                  </h3>
                  <p
                    className={`mt-1 flex-1 text-xs leading-relaxed ${
                      active ? 'text-cream-100/65' : 'text-muted'
                    }`}
                  >
                    {cat.subtitle}
                  </p>

                  <div
                    className={`mt-4 flex items-center justify-between border-t pt-3 text-[11px] font-bold ${
                      active ? 'border-white/10 text-lime-brand' : 'border-cream-200 text-forest-700'
                    }`}
                  >
                    <span>{cat.macroFocus}</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active category detail */}
          <div
            id="categoria-detalle"
            className="mt-5 scroll-mt-28 rounded-[2rem] border border-cream-200 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(8,36,20,0.35)] sm:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-cream-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedCategoryImage.src}
                  alt={selectedCategoryImage.alt}
                  width={120}
                  height={120}
                  className="h-14 w-14 shrink-0 rounded-2xl object-cover ring-1 ring-cream-200"
                />
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest-600">
                    Enfoque macronutricional
                  </span>
                  <h3 className="text-xl font-extrabold text-forest-950 sm:text-2xl">{selectedCategory.name}</h3>
                  <p className="text-[11px] font-medium text-muted">{selectedCategory.subtitle}</p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-forest-200 bg-lime-mist px-3.5 py-1.5 text-[11px] font-extrabold text-forest-800">
                {selectedCategory.macroFocus}
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {selectedCategory.items.map((food) => (
                <article
                  key={food.name}
                  className="rounded-2xl border border-cream-200 bg-cream-50 p-5 transition-all hover:border-forest-300 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-extrabold text-forest-950">{food.name}</h4>
                      <p className="mt-0.5 text-[11px] font-medium text-muted">Porción: {food.portion}</p>
                    </div>
                    <span className="shrink-0 rounded-lg bg-forest-900 px-2 py-1 font-mono text-[10px] font-bold text-lime-brand">
                      {food.calories}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { label: 'Prot', value: food.protein },
                      { label: 'Carbos', value: food.carbs },
                      { label: 'Grasas', value: food.fats }
                    ].map((macro) => (
                      <div
                        key={macro.label}
                        className="rounded-lg border border-cream-200 bg-white px-2 py-1.5 text-center"
                      >
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-sage-500">
                          {macro.label}
                        </span>
                        <span className="font-mono text-xs font-extrabold text-forest-950">{macro.value}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-forest-700">
                    <Star className="h-3 w-3 shrink-0 fill-lime-brand text-lime-brand" aria-hidden="true" />
                    {food.tag}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DARK BRAND BANNER */}
      <section className="bg-cream-100 pb-16 pt-4 sm:pb-20 sm:pt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 p-7 text-cream-50 sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-lime-brand/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" aria-hidden="true" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Eyebrow tone="dark">De la teoría a tu plato</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Aprende a mirar tu plato{' '}
                  <span className="text-lime-brand">y saber qué hay dentro.</span>
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream-100/70 sm:text-base">
                  Cada alimento tiene una densidad distinta. En la masterclass conviertes esa información en decisiones
                  rápidas: qué comer, cuánto pesar y cómo ajustar tu día sin complicarte.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#registro"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-brand px-6 py-3.5 text-sm font-extrabold text-forest-950 transition-all hover:-translate-y-0.5 hover:bg-lime-soft"
                  >
                    Reservar mi cupo
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#pagos"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-cream-50 transition-all hover:bg-white/10"
                  >
                    Ver métodos de pago
                  </a>
                </div>

                <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  {[
                    { value: '5', label: 'partes' },
                    { value: '3', label: 'metas' },
                    { value: '100%', label: 'práctico' }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="text-2xl font-extrabold text-lime-brand sm:text-3xl">{stat.value}</dd>
                      <dd className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cream-100/60">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Real plate photo */}
              <div className="relative mx-auto aspect-square w-full max-w-[23rem]">
                <div className="absolute inset-0 rounded-full border border-white/10" aria-hidden="true" />
                <div
                  className="absolute inset-3 animate-spin-slower rounded-full border border-dashed border-lime-brand/25"
                  aria-hidden="true"
                />
                <div className="absolute inset-6 overflow-hidden rounded-full shadow-[0_35px_70px_-30px_rgba(0,0,0,0.85)] ring-4 ring-white/10">
                  <img
                    src={bannerPlato}
                    alt="Plato equilibrado con aguacate, huevos, garbanzos, verduras y semillas"
                    width={900}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest-950/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute -left-1 top-8 flex animate-float-slow items-center gap-1.5 rounded-2xl border border-white/10 bg-cream-50 px-3 py-2 text-forest-950 shadow-card">
                  <Beef className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[10px] font-extrabold">34 g proteína</span>
                </div>
                <div className="absolute -right-2 top-24 flex animate-float-delayed items-center gap-1.5 rounded-2xl border border-white/10 bg-cream-50 px-3 py-2 text-forest-950 shadow-card">
                  <Wheat className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[10px] font-extrabold">45 g carbos</span>
                </div>
                <div className="absolute -left-2 bottom-12 flex animate-float-delayed items-center gap-1.5 rounded-2xl border border-white/10 bg-cream-50 px-3 py-2 text-forest-950 shadow-card">
                  <Nut className="h-3.5 w-3.5 text-forest-600" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[10px] font-extrabold">15 g grasas</span>
                </div>
                <div className="absolute bottom-0 right-0 flex animate-float-slow items-center gap-1.5 rounded-2xl border border-lime-brand/30 bg-lime-brand px-3 py-2 text-forest-950 shadow-glow">
                  <Apple className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="whitespace-nowrap text-[10px] font-extrabold">1.800 kcal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section id="objetivos" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>Estrategia por objetivo</Eyebrow>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">
                Adapta tu estrategia a tu meta
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                Los porcentajes no son idénticos para todos. Selecciona tu meta y descubre el reparto ideal de macros.
              </p>
            </div>

            <div className="grid w-full grid-cols-3 rounded-full border border-cream-200 bg-white p-1.5 shadow-sm sm:inline-flex sm:w-auto">
              {GOALS_DATA.map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => setActiveGoalTab(goal.id)}
                  aria-pressed={activeGoalTab === goal.id}
                  className={`whitespace-nowrap rounded-full px-3 py-2.5 text-[11px] font-extrabold transition-all sm:px-4 sm:text-xs ${
                    activeGoalTab === goal.id
                      ? 'bg-forest-900 text-lime-brand shadow-sm'
                      : 'text-muted hover:text-forest-950'
                  }`}
                >
                  <span className="sm:hidden">
                    {goal.id === 'musculo' ? 'Músculo' : goal.id === 'mantenimiento' ? 'Mantener' : 'Grasa'}
                  </span>
                  <span className="hidden sm:inline">{goal.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-cream-200 bg-white shadow-[0_30px_70px_-45px_rgba(8,36,20,0.35)]">
            <div className="grid lg:grid-cols-[1.45fr_1fr]">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-forest-200 bg-lime-mist px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-forest-800">
                    {selectedGoal.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-sage-500">
                    Objetivo: {selectedGoal.targetKcal} kcal
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-forest-950">
                  {selectedGoal.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-sage-500">{selectedGoal.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-muted">{selectedGoal.summary}</p>

                {/* Macro distribution */}
                <div className="mt-6 rounded-2xl border border-cream-200 bg-cream-50 p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-1 text-[11px] font-bold text-forest-950">
                    <span>Distribución porcentual</span>
                    <span className="font-mono text-forest-700">
                      {selectedGoal.macroSplit.protein}% P · {selectedGoal.macroSplit.carbs}% C ·{' '}
                      {selectedGoal.macroSplit.fat}% G
                    </span>
                  </div>
                  <div className="flex h-3 w-full overflow-hidden rounded-full bg-cream-200">
                    <div
                      className="h-full bg-forest-700"
                      style={{ width: `${selectedGoal.macroSplit.protein}%` }}
                      title={`Proteína ${selectedGoal.macroSplit.protein}%`}
                    />
                    <div
                      className="h-full bg-lime-brand"
                      style={{ width: `${selectedGoal.macroSplit.carbs}%` }}
                      title={`Carbohidratos ${selectedGoal.macroSplit.carbs}%`}
                    />
                    <div
                      className="h-full bg-sage-300"
                      style={{ width: `${selectedGoal.macroSplit.fat}%` }}
                      title={`Grasas ${selectedGoal.macroSplit.fat}%`}
                    />
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold text-muted">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-forest-700" aria-hidden="true" />
                      Proteína ({selectedGoal.macroSplit.grams.protein} g)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-lime-brand" aria-hidden="true" />
                      Carbohidratos ({selectedGoal.macroSplit.grams.carbs} g)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-sage-300" aria-hidden="true" />
                      Grasas ({selectedGoal.macroSplit.grams.fat} g)
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest-700">
                    Puntos clave a dominar
                  </span>
                  <ul className="mt-3 space-y-2.5">
                    {selectedGoal.focusKeys.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="flex flex-col gap-4 border-t border-cream-200 bg-cream-100/70 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="rounded-2xl border border-cream-200 bg-white p-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sage-500">
                    Balance calórico
                  </span>
                  <p className="mt-2 font-mono text-2xl font-extrabold text-forest-950">
                    {selectedGoal.caloriesAdjustment}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Ajuste sobre tu gasto energético total diario.
                  </p>
                </div>

                <div className="rounded-2xl border border-cream-200 bg-white p-5">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-forest-600" aria-hidden="true" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest-700">
                      Ideal para
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{selectedGoal.suitableFor}</p>
                </div>

                <div className="rounded-2xl border border-lime-soft bg-lime-mist p-5">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4 text-forest-700" aria-hidden="true" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-forest-800">
                      Plato ejemplo
                    </span>
                  </div>
                  <h4 className="mt-2 text-sm font-extrabold text-forest-950">{selectedGoal.mealExample.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-forest-800/80">
                    {selectedGoal.mealExample.description}
                  </p>
                  <span className="mt-3 inline-block rounded-lg border border-forest-200 bg-white px-2.5 py-1 font-mono text-[10px] font-bold text-forest-800">
                    {selectedGoal.mealExample.macros}
                  </span>
                </div>

                <a
                  href="#registro"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-5 py-3 text-xs font-extrabold text-lime-brand transition-all hover:-translate-y-0.5 hover:bg-forest-800"
                >
                  Quiero este plan
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section id="pagos" className="scroll-mt-24 border-y border-cream-200 bg-cream-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <Eyebrow>Inversión del cupo</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">
              Métodos de pago disponibles
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Abona tu cupo con total comodidad. Pulsa el botón de copiar para transferir con datos exactos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PAYMENT_METHODS.map((method) => {
              const MethodIcon = PAYMENT_ICONS[method.id] ?? Wallet;
              const theme = PAYMENT_THEMES[method.id] ?? {
                border: 'border-cream-200 hover:border-forest-300',
                badge: 'border-forest-200 bg-lime-mist text-forest-800',
                iconBg: 'bg-forest-900 text-lime-brand shadow-sm',
                iconText: 'text-forest-900',
                fieldsBg: 'bg-cream-50 border-cream-200',
                fieldBorder: 'border-cream-200',
                fieldCardBg: 'bg-white',
                copyBtn: 'bg-cream-100 text-forest-800 hover:bg-forest-900 hover:text-lime-brand',
                hoverGlow: 'hover:shadow-[0_26px_60px_-38px_rgba(8,36,20,0.45)]'
              };
              const isOpen = openPaymentId === method.id;

              return (
                <article
                  key={method.id}
                  className={`flex min-w-0 flex-col self-start rounded-[1.75rem] border bg-white transition-all duration-200 ${theme.border} ${theme.hoverGlow}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenPaymentId(isOpen ? null : method.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 p-5 text-left sm:p-6"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg}`}>
                        <MethodIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-extrabold text-forest-950 sm:text-lg">{method.name}</h3>
                          <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${theme.badge}`}>
                            {method.badge}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-xs font-semibold text-muted">
                          {method.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pl-2">
                      <span className="hidden text-xs font-bold text-forest-700 sm:inline">
                        {isOpen ? 'Ocultar' : 'Ver datos'}
                      </span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-forest-900 text-white' : 'text-forest-700'}`}>
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-cream-100 px-5 pb-6 pt-2 sm:px-6 sm:pb-7">
                      <p className="mt-1 text-xs leading-relaxed text-muted">{method.description}</p>

                      <div className={`mt-4 space-y-2 rounded-2xl border p-3 ${theme.fieldsBg}`}>
                        {method.fields.map((field, fieldIndex) => {
                          const copyId = `${method.id}-${fieldIndex}`;
                          const isCopied = copiedKey === copyId;
                          return (
                            <div
                              key={field.label}
                              className={`flex items-center justify-between gap-2 rounded-xl border p-2.5 ${theme.fieldBorder} ${theme.fieldCardBg}`}
                            >
                              <div className="min-w-0 flex-1">
                                <span className="block text-[9px] font-bold uppercase tracking-wider text-sage-500">
                                  {field.label}
                                </span>
                                <span className="block truncate font-mono text-[11px] font-semibold text-forest-950">
                                  {field.value}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(field.value, copyId);
                                }}
                                className={`inline-flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-extrabold transition-all ${
                                  isCopied
                                    ? 'bg-forest-900 text-lime-brand'
                                    : theme.copyBtn
                                }`}
                                title="Copiar dato"
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                                    Copiado
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                                    Copiar
                                  </>
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 flex items-start gap-2 border-t border-cream-100 pt-3 text-[11px] leading-relaxed text-muted">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-600" aria-hidden="true" />
                        <span>{method.instructions}</span>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex max-w-3xl items-start gap-3.5 rounded-2xl border border-lime-soft bg-lime-mist p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-lime-brand">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-extrabold text-forest-950">
                Garantiza tu cupo para el lunes 18 de enero de 2027
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-forest-800/80">
                Una vez realizado tu pago, completa el formulario con tu número de comprobante o TxID. Recibirás la
                confirmación de ingreso al aula en vivo con los materiales de la sesión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registro" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Left info panel */}
            <div className="relative overflow-hidden rounded-[2rem] bg-forest-950 p-7 text-cream-50 sm:p-8 lg:col-span-2">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime-brand/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" aria-hidden="true" />

              <div className="relative">
                <Eyebrow tone="dark">Inscripción oficial</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Asegura tu cupo
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/65">
                  Sesión en vivo confirmada para el lunes 18 de enero de 2027. Cupos con interacción en directo.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-brand text-forest-950">
                    <Calendar className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream-100/60">
                      Fecha confirmada
                    </p>
                    <p className="text-sm font-extrabold text-cream-50">Lunes 18 de enero · 2027</p>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime-brand">
                    Tu cupo incluye
                  </p>
                  <ul className="mt-3 space-y-3">
                    {INCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-cream-100/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-brand" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-lime-brand" aria-hidden="true" />
                  <p className="text-[11px] leading-relaxed text-cream-100/65">
                    <strong className="font-extrabold text-cream-50">Plaza confirmada</strong> al validar tu pago y
                    completar el registro.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cream-100/60">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Acceso inmediato al aula virtual</span>
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div className="rounded-[2rem] border border-cream-200 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(8,36,20,0.35)] sm:p-8 lg:col-span-3">
              {formSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-brand text-forest-950 shadow-glow">
                    <Check className="h-8 w-8 stroke-[2.5]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-forest-950">¡Inscripción registrada!</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    Guardamos tu plaza para <strong className="font-bold text-forest-950">Gobierna tus macros</strong>.
                    Enviamos un correo de bienvenida a{' '}
                    <span className="font-bold text-forest-950">{formData.email}</span> para la sesión del lunes 18 de
                    enero de 2027.
                  </p>

                  <div className="mt-6 w-full max-w-md space-y-1.5 rounded-2xl border border-cream-200 bg-cream-50 p-4 text-left text-xs text-muted">
                    <div>
                      <strong className="text-forest-950">Participante:</strong> {formData.fullName}
                    </div>
                    <div>
                      <strong className="text-forest-950">Meta elegida:</strong> {formData.goal}
                    </div>
                    <div>
                      <strong className="text-forest-950">Método de pago:</strong> {formData.paymentMethod}
                    </div>
                    <div>
                      <strong className="text-forest-950">Referencia:</strong>{' '}
                      {formData.reference || 'Comprobante pendiente de confirmación directa'}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 rounded-full border border-cream-200 bg-cream-100 px-5 py-2.5 text-xs font-extrabold text-forest-800 transition hover:border-forest-300 hover:bg-forest-900 hover:text-lime-brand"
                  >
                    Registrar otro participante
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <Eyebrow>Registro</Eyebrow>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-forest-950">
                      Tus datos de inscripción
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      Completa el formulario y guarda tu plaza en la masterclass.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor={fullNameId}
                          className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                        >
                          Nombre completo *
                        </label>
                        <input
                          id={fullNameId}
                          type="text"
                          required
                          placeholder="Ej. Alejandro Martínez"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor={emailId}
                          className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                        >
                          Correo electrónico *
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          required
                          placeholder="tu@correo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor={goalId}
                          className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                        >
                          Objetivo prioritario
                        </label>
                        <select
                          id={goalId}
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className={`${inputClass} bg-white`}
                        >
                          <option value="Aumento de masa muscular">Aumento de masa muscular (Superávit)</option>
                          <option value="Mantenimiento">Mantenimiento y recomposición corporal</option>
                          <option value="Pérdida de grasa">Pérdida de grasa corporal (Déficit)</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor={paymentMethodId}
                          className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                        >
                          Método de pago
                        </label>
                        <select
                          id={paymentMethodId}
                          value={formData.paymentMethod}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                          className={`${inputClass} bg-white`}
                        >
                          <option value="Binance Pay / USDT">Binance Pay / USDT</option>
                          <option value="Zelle">Zelle</option>
                          <option value="PayPal">PayPal</option>
                          <option value="Transferencia / Pago Móvil">Transferencia / Pago Móvil</option>
                          <option value="Otro">Otro medio</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor={referenceId}
                        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                      >
                        Comprobante / TxID / Referencia
                      </label>
                      <input
                        id={referenceId}
                        type="text"
                        placeholder="Ej. TxID: 984321... o correo asociado al pago"
                        value={formData.reference}
                        onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                        className={inputClass}
                      />
                      <span className="mt-1 block text-[10px] font-medium text-sage-500">
                        Si aún no pagas, reserva ahora y adjunta el comprobante después.
                      </span>
                    </div>

                    <div>
                      <label
                        htmlFor={commentsId}
                        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                      >
                        Duda o consulta inicial (opcional)
                      </label>
                      <textarea
                        id={commentsId}
                        rows={2}
                        placeholder="¿Tienes alguna duda sobre alimentos, báscula o la app?"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-lime-brand px-6 py-4 text-sm font-extrabold text-forest-950 shadow-glow transition-all hover:-translate-y-0.5 hover:bg-lime-soft"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Confirmar mi inscripción
                    </button>

                    <p className="text-center text-[10px] font-medium text-sage-500">
                      Al registrarte aceptas recibir la información de acceso a la masterclass.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-forest-950 py-12 text-cream-100/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a href="#top" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-brand text-forest-950">
                  <Sprout className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-extrabold leading-none text-cream-50">
                    Gobierna tus macros
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-brand/80">
                    Nutrición aplicada
                  </span>
                </span>
              </a>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-cream-100/55">
                Masterclass de nutrición aplicada para aprender a calcular tus macronutrientes y construir resultados
                sostenibles.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-cream-100/60">
                  Instagram
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-cream-100/60">
                  YouTube
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-cream-100/60">
                  TikTok
                </span>
              </div>
            </div>

            <nav aria-label="Contenido">
              <h3 className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime-brand">Contenido</h3>
              <ul className="mt-4 space-y-2.5 text-xs font-semibold">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-lime-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Inscripción">
              <h3 className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime-brand">Inscripción</h3>
              <ul className="mt-4 space-y-2.5 text-xs font-semibold">
                <li>
                  <a href="#pagos" className="transition-colors hover:text-lime-brand">
                    Métodos de pago
                  </a>
                </li>
                <li>
                  <a href="#registro" className="transition-colors hover:text-lime-brand">
                    Registro
                  </a>
                </li>
                <li>
                  <a href="#objetivos" className="transition-colors hover:text-lime-brand">
                    Objetivos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-[11px] font-medium text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2027 Gobierna tus macros. Todos los derechos reservados.</p>
            <div className="flex items-center gap-5">
              <a href="#top" className="transition-colors hover:text-lime-brand">
                Privacidad
              </a>
              <a href="#top" className="transition-colors hover:text-lime-brand">
                Términos
              </a>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                18 de enero, 2027
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
