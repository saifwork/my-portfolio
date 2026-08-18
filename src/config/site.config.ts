
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string;
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img: string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    email: string;
    hashnode?: string;
    medium?: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string;
    imageAlt?: string;
    locale?: string;
    type?: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    robots?: string;
    themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'Md Saif',
  domain: 'saifwork.vercel.app',
  author: 'Md Saif',
  description:
    'Software Developer with 3.5+ years of experience building production-grade cross-platform applications, scalable APIs, and microservices.',
  about:
    'Software Developer with 3.5+ years of experience building production-grade applications across Web, Android, and iOS. Experienced in cross-platform development, backend services, REST APIs, real-time features, and scalable application architecture, with strong expertise in Flutter and Golang.',
  author_img: '/profile.png',
  keywords: [
    'MasirJafri',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
    'Machine Learning',
    'AI',
    'Oracle Certified Generative AI Professional',
    'Oracle Agentic AI Certified',
    'Oracle Cloud Certified',
    'Certifications',
    'Verified Credentials'
  ],
  ogImage: '/favicon.ico',
  twitterHandle: '',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    github: 'https://github.com/saifwork?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/saifwork',
    email: 'saifwork30@gmail.com',
    twitter: '',
    hashnode: '',
    medium: '',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/saifwork?tab=repositories', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saifwork', icon: 'linkedin' },    
  ],
  navigation: [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
],

  seo: {
    title: 'Md Saif | Software Developer',
    description: 'Software Developer with 3.5+ years of experience building cross-platform applications, scalable APIs, and microservices.',
    keywords: [
      'Md Saif',
      'Software Developer',
      'Cross-Platform Developer',
      'Flutter',
      'Dart',
      'Golang',
      'Flutter Web',
      'Android',
      'iOS',
      'REST APIs',
      'Microservices',
      'WebSocket',
      'WebRTC',
      'Firebase',
      'MongoDB',
      'Redis',
      'Clean Architecture',
      'Portfolio'
    ],
    canonical: 'https://saifwork.vercel.app/',
    image: '/favicon.ico',
    imageAlt: 'Md Saif - Software Developer',
    locale: 'en_US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    authors: [{ name: siteConfig.author, url: `https://${domain}` }],
    metadataBase: new URL(`https://${domain}`),
    alternates: {
      canonical: seo.canonical ?? `https://${domain}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      type: (seo.type as "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "video.movie" | "video.episode" | "video.tv_show" | "video.other") ?? 'website',
      locale: seo.locale ?? 'en_US',
      images: seo.image
        ? [
          {
            url: seo.image,
            alt: seo.imageAlt || seo.title,
          },
        ]
        : [],
    },
    twitter: {
      card: (seo.twitterCard as "summary" | "summary_large_image" | "app" | "player") ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : undefined,
      site: `@${siteConfig.twitterHandle.replace('@', '')}`,
      creator: `@${siteConfig.twitterHandle.replace('@', '')}`,
    },
    other: {
      robots: seo.robots ?? 'index,follow',
      'theme-color': seo.themeColor ?? '#0f172a',
    },
    icons: {
      icon: siteConfig.author_img,
      apple: siteConfig.author_img,
    },
  };

  return { ...base, ...overrides };
}

export type { Metadata };
