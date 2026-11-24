'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/data/catalog';
import { Radar, Send, CheckCircle2, AlertTriangle, MessageSquare } from 'lucide-react';

export function DiagnosticSection() {
  const [formData, setFormData] = useState({
    nombre_cargo: '',
    empresa: '',
    dominio_web: '',
    contacto: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setFeedback('');

    try {
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'No se pudo procesar la solicitud.');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setFeedback(
        err instanceof Error
          ? err.message
          : 'Ocurrió un problema de conexión. Puede escribirnos directo por WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappLink = `https://wa.me{SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hola TEC_DEV, soy ${formData.nombre_cargo || 'interesado'} de ${
      formData.empresa || 'mi organización'
    }. Solicito la Evaluación Externa de Reconocimiento Sin Costo para: ${
      formData.dominio_web || '(dominio)'
    }`
  )}`;

  return (
    <section id="diagnostico" className="py-24 border-b border-[#132542]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#071326] border border-[#0077FF]/60 rounded-xl p-8 md:p-12 grid lg:grid-cols-12 gap-10 items-center">
          {/* Información de Valor */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0077FF]/15 border border-[#00E5FF]/30 font-mono text-xs text-[#00E5FF]">
              <Radar className="w-4 h-4" />
              EVALUACIÓN EXTERNA DE RECONOCIMIENTO — SIN COSTO
            </div>

            <h2 className="text-3xl font-bold text-white tracking-tight">
              Conozca su superficie de ataque visible antes que un atacante.
            </h2>

            <p className="text-[#94A9C9] text-sm sm:text-base leading-relaxed">
              Analizamos externamente los activos públicos de su organización (dominios, subdominios, puertos, certificados y exposición de servicios) y le entregamos un reporte ejecutivo con hallazgos preliminares reales.
            </p>

            <ul className="space-y-2.5 text-sm text-white pt-1">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Reconocimiento pasivo no intrusivo (cero impacto operativo).
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Reporte preliminar accionable sin compromiso de compra.
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Confidencialidad garantizada bajo acuerdo NDA.
              </li>
            </ul>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-6 bg-[#030812] border border-[#132542] rounded-lg p-6 sm:p-8">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#10B981] mx-auto" />
                <h3 className="text-xl font-bold text-white">
                  Solicitud registrada en nuestro sistema
                </h3>
                <p className="text-sm text-[#94A9C9] max-w-md mx-auto">
                  Iniciaremos el análisis externo sobre{' '}
                  <span className="font-mono text-[#00E5FF]">{formData.dominio_web}</span> y nos pondremos en contacto con los hallazgos preliminares.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#0EA572] text-[#030812] font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Confirmar también por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#94A9C9] mb-1.5">
                    NOMBRE Y CARGO *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Lic. Marcos Villalba — Gerente de TI"
                    value={formData.nombre_cargo}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre_cargo: e.target.value })
                    }
                    className="w-full bg-[#071326] border border-[#132542] focus:border-[#00E5FF] rounded-md px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#94A9C9] mb-1.5">
                      EMPRESA *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de su organización"
                      value={formData.empresa}
                      onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                      }
                      className="w-full bg-[#071326] border border-[#132542] focus:border-[#00E5FF] rounded-md px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#94A9C9] mb-1.5">
                      DOMINIO CORPORATIVO *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="suempresa.com.py"
                      value={formData.dominio_web}
                      onChange={(e) =>
                        setFormData({ ...formData, dominio_web: e.target.value })
                      }
                      className="w-full bg-[#071326] border border-[#132542] focus:border-[#00E5FF] rounded-md px-3.5 py-2.5 text-sm text-white font-mono outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#94A9C9] mb-1.5">
                    CORREO CORPORATIVO O WHATSAPP *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="gerencia@suempresa.com.py / +595 9XX XXX XXX"
                    value={formData.contacto}
                    onChange={(e) =>
                      setFormData({ ...formData, contacto: e.target.value })
                    }
                    className="w-full bg-[#071326] border border-[#132542] focus:border-[#00E5FF] rounded-md px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded bg-red-950/40 border border-red-800/60 flex items-start gap-2.5 text-xs text-red-200">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                    <div>
                      <p>{feedback}</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold text-white mt-1 inline-block"
                      >
                        Enviar por WhatsApp directo →
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0077FF] hover:bg-[#0066DB] disabled:opacity-50 text-white font-semibold py-3 rounded-md transition-colors cursor-pointer"
                >
                  {loading ? 'Procesando solicitud...' : 'Solicitar Reporte Preliminar'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
