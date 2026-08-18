import { Suspense } from 'react';
import { CertificationsGrid } from '@/components/sections/certifications-grid';
import { CertificationsHeader } from '@/components/sections/certifications-header';
import { siteConfig, buildMetadata } from '@/config/site.config';
import { certificationsData } from '@/config/certifications.config';

export default function CertificationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': `${siteConfig.author} - Professional Certifications & Credentials`,
    'itemListElement': certificationsData.map((cert, index) => ({
      '@type': 'EducationalOccupationalCredential',
      'position': index + 1,
      'name': cert.title,
      'credentialCategory': 'certification',
      'recognizedBy': {
        '@type': 'Organization',
        'name': cert.issuer,
      },
      'url': cert.credentialUrl || `https://${siteConfig.domain}/certifications`,
    })),
  };

  return (
    <div className="min-h-screen py-16">
      {/* Search Engine JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
        <CertificationsHeader />
        <Suspense fallback={<CertificationsLoading />}>
          <CertificationsGrid />
        </Suspense>
      </div>
    </div>
  );
}

function CertificationsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-64 bg-muted/30 rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
}
