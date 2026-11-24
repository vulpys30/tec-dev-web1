'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Capacidades', href: '#capacidades' },
    { label: 'Stack Técnico', href: '#stack' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Guía Ejecutiva', href: '#guia' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#030812]/85 backdrop-blur-md border-b border-[#132542]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Identidad Visual */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center">
            <img
              src="/isotipo-tecdev.png"
              alt="TEC_DEV"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-xl tracking-tight text-white leading-none">
              TEC<span className="text-[#00E5FF]">_</span>DEV
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#7E96B8] mt-1">
              SECURITY &amp; SOFTWARE
            </span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#94A9C9] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Principal */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-1.5 bg-[#0077FF] hover:bg-[#0066DB] text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors border border-[#00E5FF]/30"
          >
            Diagnóstico Sin Costo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Botón Móvil */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#94A9C9] hover:text-white p-2"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-[#071326] border-b border-[#132542] px-6 py-5 space-y-4">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-[#94A9C9] hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#diagnostico"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-[#0077FF] text-white text-sm font-medium py-2.5 rounded-md"
          >
            Solicitar Diagnóstico Sin Costo
          </a>
        </div>
      )}
    </header>
  );
}
