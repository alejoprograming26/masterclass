import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import { NUTRITION_CATEGORIES } from '../data/masterclass';
import catProteinas from '../assets/cat-proteinas.jpg';
import catCarbohidratos from '../assets/cat-carbohidratos.jpg';
import catGrasas from '../assets/cat-grasas.jpg';

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

export function FoodsSection() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string | null>(null);

  const handleToggle = (categoryId: string) => {
    setActiveCategoryTab((prev) => (prev === categoryId ? null : categoryId));
  };

  const selectedCategory = activeCategoryTab
    ? NUTRITION_CATEGORIES.find((c) => c.id === activeCategoryTab) || null
    : null;
  const selectedCategoryImage = selectedCategory ? CATEGORY_IMAGES[selectedCategory.id] : null;

  return (
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
          </a>
        </div>

        {/* CONTENEDOR: En móvil lista vertical con su detalle pegado debajo; en PC (md) grilla 3 columnas */}
        <div className="mt-10 flex flex-col gap-4 md:grid md:grid-cols-3">
          {NUTRITION_CATEGORIES.map((cat) => {
            const CatIcon = cat.icon;
            const active = activeCategoryTab === cat.id;

            return (
              <div key={cat.id} className="flex flex-col">
                {/* Tarjeta de la categoría (con sus fotos grandes originales) */}
                <button
                  type="button"
                  onClick={() => handleToggle(cat.id)}
                  aria-expanded={active}
                  className={`group relative flex w-full flex-col overflow-hidden rounded-[1.75rem] border p-5 text-left transition-all sm:p-6 ${
                    active
                      ? 'border-forest-900 bg-forest-900 text-cream-50 shadow-card ring-2 ring-lime-brand/70'
                      : 'border-cream-200 bg-white hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-[0_24px_50px_-32px_rgba(8,36,20,0.45)]'
                  }`}
                >
                  <div className="relative -mx-5 -mt-5 mb-4 h-44 overflow-hidden sm:-mx-6 sm:-mt-6 sm:h-48">
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
                        active ? 'bg-lime-brand text-forest-950 shadow-glow' : 'bg-cream-50/90 text-forest-800'
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

                  <div className="flex items-center justify-between gap-2">
                    <h3 className={`text-lg font-extrabold ${active ? 'text-cream-50' : 'text-forest-950'}`}>
                      {cat.name}
                    </h3>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                        active
                          ? 'rotate-180 bg-lime-brand text-forest-950'
                          : 'bg-cream-100 text-forest-800 group-hover:bg-forest-900 group-hover:text-lime-brand'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <p
                    className={`mt-1.5 flex-1 text-xs leading-relaxed ${
                      active ? 'text-cream-100/65' : 'text-muted'
                    }`}
                  >
                    {cat.subtitle}
                  </p>
                </button>

                {/* SOLO EN CELULAR (md:hidden): Se abre INMEDIATAMENTE DEBAJO de la tarjeta tocada */}
                {active && (
                  <div className="mt-3 overflow-hidden rounded-[1.75rem] border border-cream-200 bg-white p-5 shadow-sm md:hidden">
                    <div className="mb-3 flex items-center justify-between border-b border-cream-200 pb-2">
                      <span className="text-[10px] font-extrabold uppercase text-forest-700">
                        Alimentos destacados
                      </span>
                      <span className="rounded-full border border-forest-200 bg-lime-mist px-2.5 py-0.5 text-[9px] font-extrabold text-forest-800">
                        {cat.macroFocus}
                      </span>
                    </div>

                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {cat.items.map((food) => (
                        <article
                          key={food.name}
                          className="rounded-2xl border border-cream-200 bg-cream-50 p-3.5 transition hover:bg-white"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-xs font-extrabold text-forest-950">{food.name}</h4>
                              <p className="text-[10px] font-medium text-muted">{food.portion}</p>
                            </div>
                            <span className="rounded-md bg-forest-900 px-1.5 py-0.5 font-mono text-[9px] font-bold text-lime-brand">
                              {food.calories}
                            </span>
                          </div>

                          <div className="mt-2 grid grid-cols-3 gap-1">
                            {[
                              { label: 'Prot', value: food.protein },
                              { label: 'Carb', value: food.carbs },
                              { label: 'Grasa', value: food.fats }
                            ].map((macro) => (
                              <div
                                key={macro.label}
                                className="rounded-md border border-cream-200 bg-white p-1 text-center"
                              >
                                <span className="block text-[8px] font-bold uppercase text-sage-500">
                                  {macro.label}
                                </span>
                                <span className="font-mono text-[10px] font-extrabold text-forest-950">
                                  {macro.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-forest-700">
                            <Star className="h-2.5 w-2.5 shrink-0 fill-lime-brand text-lime-brand" aria-hidden="true" />
                            {food.tag}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SOLO EN COMPUTADORA / TABLET (hidden md:block): Panel general de ancho completo elegante abajo de las 3 columnas */}
        {selectedCategory && selectedCategoryImage && (
          <div
            id="categoria-detalle-desktop"
            className="mt-6 hidden rounded-[2rem] border border-cream-200 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(8,36,20,0.35)] sm:p-8 md:block"
          >
            <div className="flex items-center justify-between border-b border-cream-200 pb-5">
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
                    Alimentos seleccionados
                  </span>
                  <h3 className="text-xl font-extrabold text-forest-950 sm:text-2xl">{selectedCategory.name}</h3>
                  <p className="text-[11px] font-medium text-muted">{selectedCategory.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-full border border-forest-200 bg-lime-mist px-3.5 py-1.5 text-[11px] font-extrabold text-forest-800">
                  {selectedCategory.macroFocus}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveCategoryTab(null)}
                  className="rounded-full bg-cream-100 px-3 py-1.5 text-xs font-bold text-forest-800 hover:bg-forest-900 hover:text-white"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {selectedCategory.items.map((food) => (
                <article
                  key={food.name}
                  className="rounded-2xl border border-cream-200 bg-cream-50 p-4 transition-all hover:border-forest-300 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-extrabold text-forest-950">{food.name}</h4>
                      <p className="mt-0.5 text-[10px] font-medium text-muted">Porción: {food.portion}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-forest-900 px-2 py-0.5 font-mono text-[10px] font-bold text-lime-brand">
                      {food.calories}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {[
                      { label: 'Prot', value: food.protein },
                      { label: 'Carb', value: food.carbs },
                      { label: 'Grasa', value: food.fats }
                    ].map((macro) => (
                      <div
                        key={macro.label}
                        className="rounded-lg border border-cream-200 bg-white p-1 text-center"
                      >
                        <span className="block text-[8px] font-bold uppercase text-sage-500">
                          {macro.label}
                        </span>
                        <span className="font-mono text-[10px] font-extrabold text-forest-950">
                          {macro.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-2.5 flex items-center gap-1 text-[10px] font-semibold text-forest-700">
                    <Star className="h-3 w-3 shrink-0 fill-lime-brand text-lime-brand" aria-hidden="true" />
                    {food.tag}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
