import { useState } from 'react';
import { Flame, Dumbbell, Shield, ArrowRight } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import { GOALS_DATA } from '../data/masterclass';

const GOAL_ICONS: Record<string, React.ElementType> = {
  musculo: Dumbbell,
  mantenimiento: Shield,
  grasa: Flame
};

export function GoalsSection() {
  const [activeGoalTab, setActiveGoalTab] = useState<'musculo' | 'mantenimiento' | 'grasa'>('grasa');

  const selectedGoal = GOALS_DATA.find((g) => g.id === activeGoalTab) || GOALS_DATA[2];

  return (
    <section id="objetivos" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Eyebrow>Estrategia por objetivo</Eyebrow>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl">
            Adapta tu estrategia a tu meta
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Selecciona tu objetivo y descubre tu reparto exacto de macros y calorías.
          </p>
        </div>

        {/* Selector de metas en 3 tarjetas interactivas */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {GOALS_DATA.map((goal) => {
            const Icon = GOAL_ICONS[goal.id] || Flame;
            const isActive = activeGoalTab === goal.id;

            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => setActiveGoalTab(goal.id as 'musculo' | 'mantenimiento' | 'grasa')}
                aria-pressed={isActive}
                className={`relative flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? 'border-forest-900 bg-forest-900 text-cream-50 shadow-card ring-2 ring-lime-brand/70'
                    : 'border-cream-200 bg-white text-forest-950 hover:border-forest-300 hover:shadow-sm'
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? 'bg-lime-brand text-forest-950 shadow-glow' : 'bg-cream-100 text-forest-800'
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="block truncate text-sm font-extrabold">
                      {goal.id === 'musculo' ? 'Masa Muscular' : goal.id === 'mantenimiento' ? 'Mantenimiento' : 'Pérdida de Grasa'}
                    </span>
                    <span
                      className={`text-[10px] font-bold ${
                        isActive ? 'text-lime-brand' : 'text-sage-500'
                      }`}
                    >
                      {goal.targetKcal} kcal
                    </span>
                  </div>
                  <span
                    className={`block text-[11px] ${
                      isActive ? 'text-cream-100/70' : 'text-muted'
                    }`}
                  >
                    {goal.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel del objetivo seleccionado: limpio, directo y optimizado */}
        <div className="mt-5 overflow-hidden rounded-[2rem] border border-cream-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(8,36,20,0.25)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            {/* Columna izquierda: métricas y macros */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-forest-200 bg-lime-mist px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-forest-800">
                  {selectedGoal.badge}
                </span>
                <span className="font-mono text-xs font-bold text-forest-700">
                  {selectedGoal.caloriesAdjustment}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-extrabold text-forest-950 sm:text-3xl">
                {selectedGoal.title}
              </h3>

              {/* Barra visual de distribución de macronutrientes */}
              <div className="mt-5 rounded-2xl border border-cream-200 bg-cream-50 p-4">
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-forest-950">
                  <span>Reparto recomendado</span>
                  <span className="font-mono text-forest-700">
                    {selectedGoal.macroSplit.protein}% P · {selectedGoal.macroSplit.carbs}% C · {selectedGoal.macroSplit.fat}% G
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

                {/* Gramos exactos en píldoras */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-cream-200 bg-white p-2 text-center">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-sage-500">
                      Proteína
                    </span>
                    <span className="font-mono text-xs font-extrabold text-forest-950">
                      {selectedGoal.macroSplit.grams.protein} g
                    </span>
                  </div>
                  <div className="rounded-xl border border-cream-200 bg-white p-2 text-center">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-sage-500">
                      Carbohidratos
                    </span>
                    <span className="font-mono text-xs font-extrabold text-forest-950">
                      {selectedGoal.macroSplit.grams.carbs} g
                    </span>
                  </div>
                  <div className="rounded-xl border border-cream-200 bg-white p-2 text-center">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-sage-500">
                      Grasas
                    </span>
                    <span className="font-mono text-xs font-extrabold text-forest-950">
                      {selectedGoal.macroSplit.grams.fat} g
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: plato ejemplo y botón rápido */}
            <div className="flex flex-col justify-between rounded-2xl border border-cream-200 bg-cream-100/60 p-5 sm:p-6 lg:col-span-5">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-forest-800">
                  Plato ejemplo para este objetivo
                </span>
                <h4 className="mt-2 text-base font-extrabold text-forest-950">
                  {selectedGoal.mealExample.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {selectedGoal.mealExample.description}
                </p>
                <div className="mt-3 inline-block rounded-lg border border-forest-200 bg-white px-3 py-1 font-mono text-[11px] font-bold text-forest-800">
                  {selectedGoal.mealExample.macros}
                </div>
              </div>

              <a
                href="#registro"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-5 py-3.5 text-xs font-extrabold text-lime-brand shadow-sm transition-all hover:bg-forest-800"
              >
                Inscribirme con este objetivo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
