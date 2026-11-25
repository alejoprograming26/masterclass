import React, { useState, useId } from 'react';
import {
  Calendar,
  CheckCircle2,
  BadgeCheck,
  Clock3,
  MessageCircle
} from 'lucide-react';
import { Eyebrow } from './ui/Eyebrow';

const INCLUDES = [
  'Sesión en vivo con preguntas y respuestas',
  'Guía paso a paso de cálculo de macros',
  'Plantilla para configurar MyFitnessPal',
  'Grabación de la clase para repasar'
];

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    goal: 'Pérdida de grasa',
    paymentMethod: 'Binance Pay / USDT',
    reference: '',
    comments: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fullNameId = useId();
  const emailId = useId();
  const goalId = useId();
  const paymentMethodId = useId();
  const referenceId = useId();
  const commentsId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName) return;

    const message = [
      '¡Hola! Quiero inscribirme en la Masterclass *Gobierna tus macros*.',
      '',
      `*Nombre:* ${formData.fullName}`,
      formData.email ? `*Correo:* ${formData.email}` : '',
      `*Objetivo:* ${formData.goal}`,
      `*Método de pago:* ${formData.paymentMethod}`,
      formData.reference ? `*Comprobante/Ref:* ${formData.reference}` : '',
      formData.comments ? `*Consulta:* ${formData.comments}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/584121570679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm font-medium text-forest-950 placeholder:text-sage-400 transition focus:border-forest-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest-500/20';

  return (
    <section id="registro" className="scroll-mt-24 bg-cream-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left info panel */}
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-950 p-7 text-cream-50 sm:p-8 lg:col-span-2">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime-brand/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" aria-hidden="true" />

            <div className="relative">
              <Eyebrow tone="dark">Inscripción oficial</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Asegura tu cupo
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/65">
                Sesión en vivo confirmada para el lunes 18 de enero de 2027. Cupos con interacción en directo.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-brand text-forest-950">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream-100/60">
                    Fecha confirmada
                  </p>
                  <p className="text-sm font-extrabold text-cream-50">Lunes 18 de enero · 2027</p>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-lime-brand">
                  Tu cupo incluye
                </p>
                <ul className="mt-3 space-y-3">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-cream-100/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-brand" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime-brand" aria-hidden="true" />
                <p className="text-[11px] leading-relaxed text-cream-100/65">
                  <strong className="font-extrabold text-cream-50">Plaza confirmada</strong> al validar tu pago y
                  completar el registro.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cream-100/60">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Acceso inmediato al aula virtual</span>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="rounded-[2rem] border border-cream-200 bg-white p-6 shadow-[0_30px_70px_-45px_rgba(8,36,20,0.35)] sm:p-8 lg:col-span-3">
            {formSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-glow">
                  <MessageCircle className="h-8 w-8 stroke-[2.5]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-forest-950">¡Redirigiendo a WhatsApp!</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  Se ha abierto tu chat de WhatsApp con los datos de tu inscripción para{' '}
                  <strong className="font-bold text-forest-950">Gobierna tus macros</strong>.
                </p>

                <a
                  href={`https://wa.me/584121570679?text=${encodeURIComponent(
                    `¡Hola! Quiero inscribirme en la Masterclass Gobierna tus macros.\n\n*Nombre:* ${formData.fullName}\n*Correo:* ${formData.email}\n*Objetivo:* ${formData.goal}\n*Método de pago:* ${formData.paymentMethod}\n*Referencia:* ${formData.reference || 'Pendiente'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-extrabold text-white shadow-md transition hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Reabrir chat de WhatsApp
                </a>

                <div className="mt-6 w-full max-w-md space-y-1.5 rounded-2xl border border-cream-200 bg-cream-50 p-4 text-left text-xs text-muted">
                  <div>
                    <strong className="text-forest-950">Participante:</strong> {formData.fullName}
                  </div>
                  <div>
                    <strong className="text-forest-950">Meta elegida:</strong> {formData.goal}
                  </div>
                  <div>
                    <strong className="text-forest-950">Método de pago:</strong> {formData.paymentMethod}
                  </div>
                  <div>
                    <strong className="text-forest-950">WhatsApp de contacto:</strong> +58 412-1570679
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 rounded-full border border-cream-200 bg-cream-100 px-5 py-2.5 text-xs font-extrabold text-forest-800 transition hover:border-forest-300 hover:bg-forest-900 hover:text-lime-brand"
                >
                  Editar datos o enviar otra inscripción
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <Eyebrow>Registro</Eyebrow>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-forest-950">
                    Tus datos de inscripción
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    Completa el formulario y te redirigiremos a WhatsApp para confirmar tu cupo directamente.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={fullNameId}
                        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                      >
                        Nombre completo *
                      </label>
                      <input
                        id={fullNameId}
                        type="text"
                        required
                        placeholder="Ej. Alejandro Martínez"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={emailId}
                        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor={goalId}
                        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                      >
                        Objetivo prioritario
                      </label>
                      <select
                        id={goalId}
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className={`${inputClass} bg-white`}
                      >
                        <option value="Aumento de masa muscular">Aumento de masa muscular (Superávit)</option>
                        <option value="Mantenimiento">Mantenimiento y recomposición corporal</option>
                        <option value="Pérdida de grasa">Pérdida de grasa corporal (Déficit)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={paymentMethodId}
                        className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                      >
                        Método de pago
                      </label>
                      <select
                        id={paymentMethodId}
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className={`${inputClass} bg-white`}
                      >
                        <option value="Binance Pay / USDT">Binance Pay / USDT</option>
                        <option value="Zelle">Zelle</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Pago Móvil">Pago Móvil</option>
                        <option value="Otro">Otro medio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor={referenceId}
                      className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                    >
                      Comprobante / TxID / Referencia
                    </label>
                    <input
                      id={referenceId}
                      type="text"
                      placeholder="Ej. TxID: 984321... o correo asociado al pago"
                      value={formData.reference}
                      onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                      className={inputClass}
                    />
                    <span className="mt-1 block text-[10px] font-medium text-sage-500">
                      Si aún no pagas, reserva ahora y adjunta el comprobante por WhatsApp.
                    </span>
                  </div>

                  <div>
                    <label
                      htmlFor={commentsId}
                      className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-forest-800"
                    >
                      Duda o consulta inicial (opcional)
                    </label>
                    <textarea
                      id={commentsId}
                      rows={2}
                      placeholder="¿Tienes alguna duda sobre alimentos, báscula o la app?"
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-extrabold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Enviar inscripción por WhatsApp
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-center text-xs font-semibold text-forest-800">
                    <span>O si tienes dudas previas:</span>
                    <a
                      href="https://wa.me/584121570679?text=%C2%A1Hola!%20Tengo%20una%20consulta%20sobre%20la%20Masterclass%20Gobierna%20tus%20macros."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-600 underline hover:text-emerald-700"
                    >
                      Escribir al +58 412-1570679
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
