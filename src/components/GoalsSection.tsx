import { useState } from 'react';
import { CheckCircle2, Users, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import { GOALS_DATA, type GoalData } from '../data/masterclass';

export function GoalsSection() {
  const [activeGoalTab, setActiveGoalTab] = useState<'musculo' | 'mantenimiento' | 'grasa'>('grasa');

  const selectedGoal: GoalData = GOALS_DATA.find((g) => g.id === activeGoalTab) || GOALS_DATA[2];

  return (
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
  );
}
