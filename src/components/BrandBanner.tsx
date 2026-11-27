import { ArrowRight, Beef, Wheat, Nut, Apple } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import bannerPlato from '../assets/banner-plato.jpg';

export function BrandBanner() {
  return (
    <section className="bg-cream-50 py-12 sm:py-16">
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
  );
}
