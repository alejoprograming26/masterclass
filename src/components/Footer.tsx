import { Sprout, Calendar } from 'lucide-react';
import { NAV_LINKS } from './Navbar';

export function Footer() {
  return (
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
  );
}
