"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Github, Linkedin, Globe, Coffee, Twitter, ChevronRight, Download, BookOpen, Rss } from 'lucide-react';
import { toast } from 'sonner';

import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from './theme-toggle';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
  coffee: Coffee,
  twitter: Twitter,
  hashnode: BookOpen,
  medium: Rss,
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group font-bold text-lg tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border/60 shadow-sm shrink-0">
            <Image
              src={siteConfig.author_img}
              alt={siteConfig.author}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span>{siteConfig.siteName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 focus:text-foreground/80',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Social Links */}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex h-8 w-8 p-0"
          >
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex h-8 w-8 p-0"
          >
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 hover:bg-accent rounded-xl"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm p-0 flex flex-col h-full bg-background/95 backdrop-blur-2xl border-l border-border/60">
              <SheetHeader className="p-6 pb-4 border-b border-border/40 text-left">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border/60 shadow-sm shrink-0">
                    <Image
                      src={siteConfig.author_img}
                      alt={siteConfig.author}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <SheetTitle className="text-base font-bold text-foreground">
                      {siteConfig.author}
                    </SheetTitle>
                    <p className="text-xs text-muted-foreground">Software Developer</p>
                  </div>
                </div>
                <SheetDescription className="sr-only">
                  Mobile navigation menu drawer
                </SheetDescription>
              </SheetHeader>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2">
                    Navigation
                  </div>
                  <nav className="space-y-1">
                    {siteConfig.navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            'flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all',
                            isActive
                              ? 'bg-primary/15 text-primary border border-primary/20 shadow-xs'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          )}
                        >
                          <span>{item.label}</span>
                          {isActive ? (
                            <ChevronRight className="h-4 w-4 text-primary" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-muted-foreground/40" />
                          )}
                        </Link>
                      );
                    })}

                    <a
                      href="/resume.pdf"
                      download="md_saif_Resume.pdf"
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        toast.success("Resume Downloaded", {
                          description: "Thanks for your interest in my work!",
                          duration: 4000,
                          icon: <Download className="h-5 w-5 text-primary" />,
                        });
                      }}
                    >
                      <span className="flex items-center gap-2">
                        Resume
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0.2 h-4 font-bold border-primary/30 text-primary">
                          PDF
                        </Badge>
                      </span>
                      <Download className="h-4 w-4 text-muted-foreground/60" />
                    </a>
                  </nav>
                </div>

                <Separator className="bg-border/50" />

                {/* Social Connect Links */}
                <div className="space-y-3">
                  <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2">
                    Connect & Socials
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {siteConfig.social.map((social) => {
                      const Icon = social.icon ? iconMap[social.icon as keyof typeof iconMap] : null;
                      return (
                        <Button
                          key={social.url}
                          variant="outline"
                          size="sm"
                          asChild
                          className="justify-start h-9 text-xs rounded-xl border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all"
                        >
                          <Link
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {Icon && <Icon className="mr-2 h-3.5 w-3.5 shrink-0" />}
                            <span className="truncate">{social.label}</span>
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="p-4 border-t border-border/50 bg-muted/20 flex items-center justify-between text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} {siteConfig.author}</span>
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
