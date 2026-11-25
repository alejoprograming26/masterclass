import { useState } from 'react';
import {
  Bitcoin,
  Landmark,
  CreditCard,
  Wallet,
  ChevronDown,
  Check,
  Copy,
  CheckCircle2
} from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';
import { PAYMENT_METHODS } from '../data/masterclass';

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

export function PaymentsSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openPaymentId, setOpenPaymentId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
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
                              className={`inline-flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-extrabold transition-all ${isCopied
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
      </div>
    </section>
  );
}
