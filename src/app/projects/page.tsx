import { Suspense } from 'react';
import { ProjectsGrid } from '@/components/sections/projects-grid';
import { ProjectsHeader } from '@/components/sections/projects-header';
import { siteConfig } from '@/config/site.config';
import { projectsData } from '@/config/projects.config';

export const metadata = {
  title: `Projects | ${siteConfig.siteName}`,
  description:
    'Explore a selection of applications and backend systems built across mobile, web, and distributed systems.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
        <ProjectsHeader />

        <Suspense fallback={<ProjectsLoading />}>
          <ProjectsGrid initialProjects={projectsData} />
        </Suspense>
      </div>
    </div>
  );
}

function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-64 bg-muted/30 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}