export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  category: 'Full Stack' | 'Software Engineering';
  description?: string;
  featured?: boolean;
  image?: string;
}

export const certificationsData: Certification[] = [
  {
    id: 'excellence-certificate-nextgen-samvaad',
    title: 'Excellence Certificate',
    issuer: 'NextGen Samvaad Pvt. Ltd.',
    issueDate: '2023',
    skills: [
      'Software Development',
      'Flutter',
      'Golang',
      'Team Contribution',
    ],
    category: 'Software Engineering',
    description:
      'Recognized for dedication, commitment, and consistent contribution to team objectives.',
    featured: true,
    image: '/certifications/excellence-certificate-nextgen-samvaad.jpg',
  },
];
