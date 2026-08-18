"use client";

import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '@/config/site.config';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const socialLinks = [
  {
    label: 'GitHub',
    description: 'Explore my projects and code',
    url: siteConfig.links.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    description: 'Connect with me professionally',
    url: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    label: 'Email',
    description: 'Drop me a message',
    url: `mailto:${siteConfig.links.email}`,
    icon: Mail,
  },
];

export default function ContactCard() {
  return (
    <section className="relative w-full max-w-4xl mx-auto">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        {/* Header Section */}
        <section className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 md:mb-6 bg-primary/5 text-primary border-primary/20"
            >
              <MessageCircle className="mr-1 h-3 w-3" />
              Get in Touch
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m open to software development opportunities,
              interesting projects, and collaborations. If you&apos;d like
              to discuss an opportunity or simply connect, feel free to
              reach out.
            </p>
          </motion.div>
        </section>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.url}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={
                  social.label !== 'Email'
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground">
                    {social.label}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {social.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8 md:mt-12"
        >
          Looking forward to hearing from you.
        </motion.p>
      </motion.div>
    </section>
  );
}