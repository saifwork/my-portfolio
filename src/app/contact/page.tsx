import { buildMetadata, siteConfig } from '@/config/site.config';
import ContactCard from '@/components/sections/contact-card';

export const metadata = buildMetadata({
  title: `Contact ${siteConfig.author} | Let's Connect`,
  description:
    'Get in touch with me about software development opportunities, projects, and collaboration.',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <ContactCard />
    </div>
  );
}