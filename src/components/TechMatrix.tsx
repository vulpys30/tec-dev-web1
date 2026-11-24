import React from 'react';
import { TECH_STACK } from '@/data/catalog';

export function TechMatrix() {
  return (
    <section id="stack" className="py-20 border-b border-[#132542] bg-[#040A16]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider mb-2">
            // FRAMEWORKS, METODOLOGÍAS Y HERRAMIENTAS
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Arsenal técnico de grado empresarial
          </h2>
        </div>

        <div className="border border-[#132542] rounded-lg overflow-hidden bg-[#071326]">
          {TECH_STACK.map((row, index) => (
            <div
              key={row.domain}
              className={`grid md:grid-cols-12 px-6 py-4 gap-2 md:gap-6 items-center ${
                index !== TECH_STACK.length - 1 ? 'border-b border-[#132542]' : ''
              }`}
            >
              <div className="md:col-span-3 font-semibold text-sm text-white">
                {row.domain}
              </div>
              <div className="md:col-span-9 font-mono text-xs sm:text-sm text-[#00E5FF]">
                {row.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
