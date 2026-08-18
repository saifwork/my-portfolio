"use client";

import { motion } from 'motion/react';
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Layers3,
  Wrench,
} from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Application Development',
    description:
      'Building responsive and production-ready applications with a focus on clean architecture, reusable components, maintainable code, and a consistent user experience across platforms.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description:
      'Developing backend services and REST APIs with Golang, designing reliable service communication, handling business logic, and building systems that can scale with application requirements.',
  },
  {
    icon: Database,
    title: 'Databases & Data',
    description:
      'Working with SQL and NoSQL databases including PostgreSQL and MongoDB, with experience in database management, query optimization, data integrity, and efficient data access.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Development',
    description:
      'Building applications for Web, Android, and iOS using a shared development approach, while maintaining reusable components and consistent application behavior across platforms.',
  },
  {
    icon: Layers3,
    title: 'System Integration',
    description:
      'Integrating frontend applications with backend services, third-party APIs, authentication systems, real-time communication, and other services required to deliver complete applications.',
  },
  {
    icon: Wrench,
    title: 'Problem Solving',
    description:
      'Enjoy solving practical engineering problems, debugging production issues, improving existing implementations, and continuously learning new technologies through hands-on development.',
  },
];

export function BentoSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
            Technical Focus
          </h2>

          <p className="text-lg text-muted-foreground">
            Areas I work across while building reliable and maintainable
            software solutions.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border/50 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24" />
                </div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}