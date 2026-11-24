'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/data/catalog';
import { Briefcase, Clock, Zap, ChevronDown, Mail, MapPin, Camera } from 'lucide-react';

const ENGAGEMENT_MODES = [
  {
    title: 'Por Proyecto',
    code: 'ALCANCE DEFINIDO · PRECIO FIJO',
    desc: 'Ideal para pentests puntuales, gap analysis regulatorio (BCP / ISO 27001) y desarrollo de sistemas o MVPs con entregables cerrados.',
    icon: <Briefcase className="w-5 h-5 text-[#00E5FF]" />,
  },
  {
    title: 'Retainer Mensual',
    code: 'HORAS RESERVADAS · CONTINUIDAD',
    desc: 'Disponibilidad garantizada de nuestro equipo de ingeniería para monitoreo SOC, gestión de vulnerabilidades, DevSecOps y desarrollo iterativo.',
    icon: <Clock className="w-5 h-5 text-[#00E5FF]" />,
  },
  {
    title: 'On-Demand',
    code: 'ATENCIÓN PRIORITARIA · SLA',
    desc: 'Intervención rápida ante incidentes de seguridad activos, análisis forense digital, contención de amenazas y soporte técnico especializado.',
    icon: <Zap className="w-5 h-5 text-[#00E5FF]" />,
  },
];

const EXECUTIVE_GUIDE = [
  {
    q: '¿Por qué realizar un Pentest si nuestra empresa nunca sufrió un ataque?',
    a: 'Que no se haya detectado un incidente no significa que no haya ocurrido: el promedio global para detectar una brecha de seguridad es de 287 días. Un pentest actúa como un simulacro controlado para descubrir y cerrar fallas críticas antes que un atacante real.',
  },
  {
    q: '¿Qué documentación entregamos al finalizar una evaluación?',
    a: 'Siempre entregamos dos reportes: un Reporte Ejecutivo dirigido a gerencia y directorio (riesgos expresados en impacto de negocio y prioridades de inversión) y un Reporte Técnico detallado para el equipo de TI con evidencia de explotación, puntaje CVSS y guía exacta de remediación.',
  },
  {
    q: '¿Cuál es el retorno de inversión (ROI) de integrar DevSecOps y seguridad temprana?',
    a: 'Corregir una vulnerabilidad cuando un sistema ya está en producción cuesta hasta 10 veces más que detectarla en etapa de desarrollo, sin contar el costo de una brecha de datos (que promedia más de USD 2.8 millones en LATAM) o sanciones regulatorias.',
  },
  {
    q: '¿Cómo protegemos la confidencialidad e integridad de sus sistemas?',
    a: 'La firma de un Acuerdo de Confidencialidad (NDA) es requisito previo y no negociable antes de compartir información técnica. Asimismo, ninguna prueba de seguridad ofensiva se ejecuta sin una autorización formal firmada por representantes legales de su empresa.',
  },
];

export function EngagementFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Modalidades */}
      <section id="modalidades" className="py-24 border-b border-[#132542]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider mb-2">
              // FORMATOS DE CONTRATACIÓN
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Modalidades adaptadas a su operación
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODES.map((mode) => (
              <div
                key={mode.title}
                className="bg-[#071326] border border-[#132542] rounded-lg p-7 space-y-4"
              >
                <div className="w-10 h-10 rounded bg-[#030812] border border-[#132542] flex items-center justify-center">
                  {mode.icon}
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#00E5FF] block mb-1">
                    {mode.code}
                  </span>
                  <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                </div>
                <p className="text-sm text-[#94A9C9] leading-relaxed">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guía Ejecutiva */}
      <section id="guia" className="py-24 border-b border-[#132542] bg-[#040A16]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider mb-2">
              // GUÍA DE CONCEPTOS PARA DIRECTIVOS Y SOCIOS
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Seguridad y tecnología en lenguaje de negocio
            </h2>
          </div>

          <div className="space-y-3">
            {EXECUTIVE_GUIDE.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="bg-[#071326] border border-[#132542] rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00E5FF] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-4 text-sm text-[#94A9C9] leading-relaxed border-t border-[#132542]/70">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 bg-[#030812]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="grid md:grid-cols-12 gap-8 items-start justify-between">
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/isotipo-tecdev.png"
                  alt="TEC_DEV"
                  className="h-9 w-auto object-contain"
                />
                <span className="font-extrabold text-xl text-white">
                  TEC<span className="text-[#00E5FF]">_</span>DEV
                </span>
              </div>
              <p className="text-sm text-[#94A9C9] max-w-md">
                Seguridad ofensiva, seguridad defensiva, DevSecOps y desarrollo de software inteligente con IA para empresas en Paraguay.
              </p>
            </div>

            <div className="md:col-span-6 md:text-right space-y-2.5 text-sm text-[#94A9C9]">
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 text-[#00E5FF]" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Mail className="w-4 h-4 text-[#00E5FF]" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Camera className="w-4 h-4 text-[#00E5FF]" />
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {SITE_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#132542] flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#7E96B8]">
            <p>© 2026 {SITE_CONFIG.brand} Paraguay. Todos los derechos reservados.</p>
            <p className="max-w-xl sm:text-right">
              Toda la información compartida durante nuestros servicios está protegida bajo Acuerdo de Confidencialidad (NDA). Los servicios de seguridad ofensiva requieren autorización firmada antes de iniciar.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
