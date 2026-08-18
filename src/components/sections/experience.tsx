"use client";

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "Software Developer",
    company: "Prudent Gaming",
    period: "Oct 2023 – Present",
    description:
      "Working on production software across frontend and backend systems, building cross-platform applications, REST APIs, real-time functionality, and scalable services. Focused on writing maintainable code and delivering reliable features from development to deployment.",
    skills: [
      "Flutter",
      "Dart",
      "Flutter Web",
      "Provider | BLoC",
      "Golang",
      "REST APIs",
      "WebSocket",
      "Microservices",
    ],
  },
  {
    title: "Software Developer (Flutter)",
    company: "NextGen Samvaad",
    period: "Jan 2023 – Sep 2023",
    description:
      "Worked on application development and backend integration, contributing to feature development, API integration, debugging, and improving application functionality through hands-on software development.",
    skills: [
      "Flutter",
      "Dart",
      "REST APIs",
      "Backend Integration",
      "Git",
    ],
  },
  {
    title: "Junior DBA",
    company: "Cashpor India",
    period: "Sep 2022 – Dec 2022",
    description:
      "Worked with SQL databases, focusing on database maintenance, data integrity, monitoring, troubleshooting, and query optimization to support reliable database operations.",
    skills: [
      "SQL",
      "Database Management",
      "Query Optimization",
      "Data Integrity",
      "Troubleshooting",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-20 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="absolute bottom-0 left-0 p-20 opacity-20 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Experience & Expertise
          </h2>

          <p className="text-lg text-muted-foreground">
            My experience spans application development, backend services,
            databases, and building reliable software solutions.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="mb-2 bg-primary/5 text-primary border-primary/20"
                  >
                    {exp.period}
                  </Badge>

                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-foreground/70 font-medium">
                    {exp.company}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/50 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}