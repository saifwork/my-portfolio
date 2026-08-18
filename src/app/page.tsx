import { HeroSection } from '@/components/sections/hero';
import dynamic from 'next/dynamic';

const ExperienceSection = dynamic(() => import('@/components/sections/experience').then(mod => mod.ExperienceSection));
const BentoSection = dynamic(() => import('@/components/sections/bento').then(mod => mod.BentoSection));

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ExperienceSection />
      <BentoSection />
    </main>
  );
}

