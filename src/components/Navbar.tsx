import { useState } from 'react';
import { Sprout, Calendar, Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';

export const NAV_LINKS = [
  { href: '#metodologia', label: 'Metodología' },
  { href: '#alimentos', label: 'Alimentos' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#pagos', label: 'Pagos' },
  { href: '#registro', label: 'Inscripción' }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
}
