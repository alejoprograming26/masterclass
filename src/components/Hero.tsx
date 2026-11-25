import {
  ArrowRight,
  Star,
  UtensilsCrossed,
  Beef,
  Wheat,
  Nut,
  CheckCircle2,
  Scale,
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import heroPlato from '../assets/hero-plato.jpg';
import heroDetalle from '../assets/hero-detalle.jpg';

const HERO_BENEFITS = [
  { icon: CheckCircle2, title: '100% ciencia aplicada', detail: 'Sin dietas milagro' },
  { icon: Scale, title: 'Crudo vs. cocido', detail: 'Precisión real en báscula' },
  { icon: Smartphone, title: 'MyFitnessPal', detail: 'Registro en menos de 4 min' },
  { icon: ShieldCheck, title: 'Autonomía total', detail: 'Aprende una vez, para siempre' }
];

const AVATARS = ['MC', 'LR', 'JS', 'AP'];
const AVATAR_STYLES = [
  'bg-lime-brand text-forest-950',
  'bg-forest-300 text-forest-950',
  'bg-cream-100 text-forest-900',
  'bg-forest-600 text-cream-50'
];

export function Hero() {
  return (
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
              Aprende a preparar tu plato para aumentar o perder peso
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#registro"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-brand px-7 py-4 text-sm font-extrabold text-forest-950 shadow-glow transition-all hover:-translate-y-0.5 hover:bg-lime-soft"
              >
                Asegurar mi cupo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                  Saber que estoy comiendo exactamente para perder o aumentar de peso.
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
                  <Icon className="h-5 w-5" aria-hidden="true" />
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
  );
}
