import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TEC_DEV | Ingeniería de Software & Ciberseguridad en Paraguay',
  description:
    'Seguridad ofensiva, seguridad defensiva, DevSecOps y desarrollo de software inteligente con IA. Operamos bajo estricto acuerdo de confidencialidad (NDA).',
  icons: {
    icon: '/isotipo-tecdev.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${jakarta.variable} ${jetbrains.variable} font-sans bg-[#030812] text-[#F8FAFC] antialiased selection:bg-[#0077FF]/30 selection:text-[#00E5FF]`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
