import { Award, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import { SYLLABUS_STEPS } from '../data/masterclass';

export function Methodology() {
  return (
    <section id="metodologia" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Temario oficial</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">
              Cinco pasos para dejar de adivinar
            </h2>
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
  );
}
