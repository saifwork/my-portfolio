"use client";

import { motion } from 'motion/react';

export function AboutContent() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-12 pt-12 lg:pt-8"
    >
      <div className="text-muted-foreground font-light text-lg space-y-8">

        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Hi, I&apos;m Md Saif
          </h2>

          <p className="leading-relaxed">
            I&apos;m a <span className="border-b border-primary/40 text-foreground">
              Software Developer
            </span> with 3.5+ years of experience building production-grade
            applications across Web, Android, and iOS.
          </p>

          <p className="leading-relaxed">
            My experience spans <span className="border-b border-primary/40 text-foreground">
              cross-platform application development
            </span>, backend services, REST APIs, real-time features, and
            scalable application architecture. I work primarily with Flutter
            and Golang, with a focus on building reliable and maintainable
            software.
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            My Journey
          </h2>

          <p className="leading-relaxed">
            I started my professional journey in software development after
            completing my BCA. Since then, I&apos;ve worked across application
            development, backend engineering, and database systems.
          </p>

          <p className="leading-relaxed">
            At <span className="border-b border-primary/40 text-foreground">
              Prudent Gaming
            </span>, I have worked on production applications using a
            shared cross-platform architecture for Android, iOS, and Web.
            I have also developed Golang microservices for campaign
            management, slot reel generation, and payment processing,
            supporting scalable and real-time workloads.
          </p>

          <p className="leading-relaxed">
            Previously, at <span className="border-b border-primary/40 text-foreground">
              NextGen Samvaad
            </span>, I worked on a cross-platform e-commerce application,
            while also developing REST APIs using Golang and Gin and working
            with Redis for performance improvements.
          </p>
        </section>

        {/* What I Work With */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            What I Work With
          </h2>

          <ul className="list-disc pl-5 space-y-2 marker:text-primary">
            <li>
              Cross-platform application development for Web, Android, and iOS
            </li>
            <li>
              REST APIs, backend services, and microservices
            </li>
            <li>
              Real-time communication using WebSocket and WebRTC
            </li>
            <li>
              Databases and caching with MongoDB and Redis
            </li>
            <li>
              Firebase, authentication, notifications, and payment integrations
            </li>
            <li>
              Clean Architecture, reusable components, and performance optimization
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Education
          </h2>

          <p className="leading-relaxed">
            I am currently pursuing a <span className="border-b border-primary/40 text-foreground">
              Master of Computer Applications (MCA)
            </span> from Indira Gandhi National Open University, with expected
            completion in 2026.
          </p>

          <p className="leading-relaxed">
            I completed my Bachelor of Computer Applications (BCA) from
            Veer Bahadur Singh Purvanchal University in 2022.
          </p>
        </section>

        {/* Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            What I Believe In
          </h2>

          <ul className="list-disc pl-5 space-y-2 marker:text-primary">
            <li>Clean, readable, and maintainable code</li>
            <li>Thoughtful architecture before implementation</li>
            <li>Building scalable solutions rather than quick fixes</li>
            <li>Continuous learning through real-world development</li>
          </ul>
        </section>

        {/* Connect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Let&apos;s Connect
          </h2>

          <p className="leading-relaxed">
            I&apos;m always open to interesting projects, collaboration, and
            opportunities to build useful software.
            <a
              href="/contact"
              className="ml-1 text-primary hover:underline underline-offset-4 decoration-primary/50 transition-all"
            >
              Let&apos;s connect
            </a>
            .
          </p>
        </section>

      </div>
    </motion.article>
  );
}