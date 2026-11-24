'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lock, FileText } from 'lucide-react';

const STANDARDS = ['OWASP', 'MITRE ATT&CK', 'ISO 27001', 'BCP Paraguay'];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      gsap.to(artworkRef.current, {
        scale: 1.05,
        rotationX: -1.5,
        rotationY: 3,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(glowRef.current, {
        opacity: 0.9,
        scale: 1.08,
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      scrollTimeline
        .to(
          sceneRef.current,
          {
            scale: 1.18,
            yPercent: 8,
            rotationX: 3,
            rotationY: -5,
            opacity: 0.12,
            ease: 'none',
          },
          0,
        )
        .to(
          contentRef.current,
          { y: -64, opacity: 0.48, ease: 'none' },
          0,
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!tiltRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(tiltRef.current, {
      rotationX: y * -3,
      rotationY: x * 4,
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handlePointerLeave = () => {
    if (!tiltRef.current) return;
    gsap.to(tiltRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 1.1,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-[#132542]/70 bg-[#030812] pt-28 pb-8 md:pt-36"
    >
      <div
        ref={sceneRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 [perspective:1400px] will-change-transform"
      >
        <div ref={tiltRef} className="absolute inset-0 [transform-style:preserve-3d]">
          <div ref={artworkRef} className="absolute inset-0 will-change-transform">
            <Image
              src="/logo-full.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-image-mask object-contain object-right opacity-90 md:object-[right_48%]"
            />
          </div>
          <div
            ref={glowRef}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_44%,rgba(0,119,255,0.22),transparent_48%),radial-gradient(ellipse_at_77%_56%,rgba(16,185,129,0.16),transparent_58%)] opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030812] via-[#030812]/85 to-[#030812]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-transparent to-[#030812]/65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030812_0%,transparent_22%,transparent_78%,#030812_100%)] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] max-w-7xl flex-col justify-between px-6 md:min-h-[calc(100svh-12rem)]">
        <div ref={contentRef} className="max-w-3xl py-10 md:py-12">
          <div className="mb-7 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-[#A6C6E9] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_14px_rgba(16,185,129,0.8)]" />
            </span>
            PARAGUAY <span className="text-[#0077FF]">/</span> SEGURIDAD &amp; INGENIERÍA
          </div>

          <h1 className="max-w-[13ch] text-[clamp(2.65rem,6.2vw,5.6rem)] font-extrabold leading-[0.99] tracking-[-0.055em] text-white [text-wrap:balance]">
            Blindamos su infraestructura crítica y desarrollamos software inteligente a medida.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#B2C2D8] sm:text-lg sm:leading-8">
            Integramos Red Team, defensa activa, DevSecOps e ingeniería backend con IA desde la primera línea de código. Operamos bajo estricto acuerdo de confidencialidad (NDA).
          </p>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-sm bg-[#0077FF] px-6 text-sm font-semibold text-white shadow-[0_12px_42px_rgba(0,119,255,0.18)] transition duration-300 hover:bg-[#1684FF] hover:shadow-[0_14px_48px_rgba(0,119,255,0.32)]"
            >
              Evaluación Externa Sin Costo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#capacidades"
              className="group inline-flex min-h-12 items-center gap-2 self-start text-sm font-medium text-[#D4E1F2] transition-colors hover:text-white sm:px-2"
            >
              Explorar Servicios
              <span className="h-px w-8 bg-[#0077FF] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>

          <div className="mt-9 flex max-w-2xl flex-col gap-4 border-t border-white/10 pt-5 text-xs leading-5 text-[#A1B3CC] sm:flex-row sm:gap-8">
            <div className="flex items-start gap-2.5">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#36B8FF]" />
              <p>
                <span className="font-semibold text-[#E4EDF8]">Doble entregable auditado.</span>{' '}
                Reporte Ejecutivo para directorio + Reporte Técnico CVSS para TI.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
              <p>Toda prueba ofensiva requiere autorización escrita previa del cliente.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:gap-x-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6F87A8]">
                Marcos de referencia
              </span>
              {STANDARDS.map((standard) => (
                <span key={standard} className="text-xs font-medium tracking-wide text-[#C3D0E0]">
                  {standard}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[#10B981]">
              <Lock className="h-3.5 w-3.5" />
              NDA OBLIGATORIO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}