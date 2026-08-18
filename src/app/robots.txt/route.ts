import { siteConfig } from '@/config/site.config';

export default function robots() {
  const host = siteConfig.domain;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${host}/sitemap.xml`,
  };
}