'use client';

import React, { useState } from 'react';
import { CAPABILITIES, CapabilityId } from '@/data/catalog';
import { ShieldAlert, Shield, GitBranch, Cpu, Check } from 'lucide-react';

const TAB_ICONS: Record<CapabilityId, React.ReactNode> = {
    offensive: <ShieldAlert className="w-4 h-4" />,
    defensive: <Shield className="w-4 h-4" />,
    devsecops: <GitBranch className="w-4 h-4" />,
    software: <Cpu className="w-4 h-4" />,
};

export function Capabilities() {
    const [selected, setSelected] = useState<CapabilityId>('offensive');
    const activeTab = CAPABILITIES.find((c) => c.id === selected) ?? CAPABILITIES[0];

    return (
        <section id="capacidades" className="py-24 border-b border-[#132542]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <p className="font-mono text-xs text-[#00E5FF] tracking-wider uppercase mb-3">
            // CATÁLOGO DE CAPACIDADES TÉCNICAS
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        Soluciones especializadas por dominio
                    </h2>
                    <p className="text-[#94A9C9] mt-3 text-base">
                        Cada engagement se diseña a medida tras una reunión de alcance según el contexto, tamaño y madurez de su organización.
                    </p>
                </div>

                {/* Selector de Pestañas */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                    {CAPABILITIES.map((tab) => {
                        const isActive = tab.id === selected;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setSelected(tab.id)}
                                className={`text-left p-4 rounded-lg border transition-all cursor-pointer ${isActive
                                        ? 'bg-[#071326] border-[#00E5FF] text-white'
                                        : 'bg-[#040B18] border-[#132542] text-[#94A9C9] hover:border-[#0077FF]/60 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center justify-between font-mono text-[11px] text-[#00E5FF] mb-1.5">
                                    <span>{tab.code}</span>
                                    {TAB_ICONS[tab.id]}
                                </div>
                                <div className="font-bold text-sm sm:text-base">{tab.label}</div>
                            </button>
                        );
                    })}
                </div>

                {/* Cabecera de la Categoría Activa */}
                <div className="bg-[#071326] border border-[#132542] rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-white">{activeTab.headline}</h3>
                    <p className="text-sm text-[#94A9C9] mt-1.5">{activeTab.summary}</p>
                </div>

                {/* Grilla de Servicios */}
                <div className="grid md:grid-cols-2 gap-6">
                    {activeTab.groups.map((group) => (
                        <div
                            key={group.title}
                            className="bg-[#071326]/70 border border-[#132542] hover:border-[#0077FF]/50 transition-colors rounded-lg p-6"
                        >
                            <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#132542]">
                                <h4 className="font-bold text-base text-white">{group.title}</h4>
                                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#030812] border border-[#132542] text-[#00E5FF] shrink-0">
                                    {group.tag}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#94A9C9]">
                                        <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
