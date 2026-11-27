import {
  Calculator,
  PieChart as PieChartIcon,
  UtensilsCrossed,
  Smartphone,
  Target
} from 'lucide-react';

const LEARNING_STEPS = [
  {
    step: '01',
    title: 'Cálculo metabólico exacto',
    icon: Calculator
  },
  {
    step: '02',
    title: 'Distribución en gramos',
    icon: PieChartIcon
  },
  {
    step: '03',
    title: 'Pesaje crudo vs. cocido',
    icon: UtensilsCrossed
  },
  {
    step: '04',
    title: 'Dominio de MyFitnessPal',
    icon: Smartphone
  },
  {
    step: '05',
    title: 'Adaptación según objetivos',
    icon: Target
  }
];

export function Methodology() {
  return (
    <section id="metodologia" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header con estilo simple y directo */}
        <div className="text-center">
          <span className="inline-block rounded-lg bg-lime-brand/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-forest-950 sm:text-sm">
            Temario oficial
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-forest-950 sm:text-4xl lg:text-5xl uppercase">
            ¿Qué aprenderás acá?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-muted sm:text-base">
            Los 5 pilares clave para calcular, medir y ajustar tu alimentación con precisión.
          </p>
        </div>

        {/* Tarjetas limpias y minimalistas al estilo solicitado */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {LEARNING_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group flex w-[calc(50%-0.6rem)] flex-col items-center justify-between rounded-2xl border border-cream-200 bg-white p-6 text-center shadow-[0_10px_25px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-forest-950 hover:shadow-card sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)]"
              >
                {/* Ícono circular grande */}
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-forest-950 bg-cream-50 text-forest-950 transition-all duration-300 group-hover:scale-105 group-hover:bg-lime-brand group-hover:shadow-glow sm:h-24 sm:w-24">
                  <Icon className="h-10 w-10 sm:h-11 sm:w-11" strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Texto claro y directo en mayúsculas */}
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-xs font-black uppercase tracking-wider text-forest-950 sm:text-sm">
                    {item.title}
                  </h3>
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-forest-600/70">
                    Parte {item.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
