import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { TechMatrix } from '@/components/TechMatrix';
import { DiagnosticSection } from '@/components/DiagnosticSection';
import { EngagementFooter } from '@/components/EngagementFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030812] text-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Capabilities />
      <TechMatrix />
      <DiagnosticSection />
      <EngagementFooter />
    </main>
  );
}

