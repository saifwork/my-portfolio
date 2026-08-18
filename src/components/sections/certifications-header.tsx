"use client";

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '@/config/certifications.config';

export function CertificationsHeader() {
  const totalCertifications = certificationsData.length;
  const totalVerified = certificationsData.filter(c => !!c.credentialUrl).length;

  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20 px-3 py-1 text-xs">
          <Award className="mr-1.5 h-3.5 w-3.5" />
          Certifications & Credentials
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          Verified Technical{' '}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Certifications
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of my professional certifications, verified credentials, and specialized engineering courseworks across Full-Stack Development, Generative AI, and Cloud Infrastructure.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-6 mt-8 flex-wrap"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/40">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          <span><strong className="text-foreground font-semibold">{totalCertifications}</strong> Specializations & Certificates</span>
        </div>
      </motion.div>
    </div>
  );
}
