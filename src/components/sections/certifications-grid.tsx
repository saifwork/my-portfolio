"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ExternalLink,
  Search,
  X,
  Award,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Sparkles,
  ShieldCheck,
  Tag,
  Star,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { toast } from 'sonner';
import { Certification, certificationsData } from '@/config/certifications.config';

const categories = ['All', 'Full Stack', 'Software Engineering'] as const;

export function CertificationsGrid() {
  const [selectedCertId, setSelectedCertId] = useState<string>(certificationsData[0].id);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const topSpotlightRef = useRef<HTMLDivElement>(null);

  // Active highlighted certificate object
  const activeCert = certificationsData.find((c) => c.id === selectedCertId) || certificationsData[0];

  // Filter certifications logic for bottom gallery
  const filteredCertifications = certificationsData.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(search.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())) ||
      (cert.credentialId && cert.credentialId.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || cert.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopyId = (e: React.MouseEvent, id: string, credentialId: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(credentialId);
    setCopiedId(id);
    toast.success('Credential ID copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSelectCert = (id: string) => {
    setSelectedCertId(id);
    topSpotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-16">
      {/* 🌟 TOP FEATURED CERTIFICATE SPOTLIGHT */}
      <div ref={topSpotlightRef} className="scroll-mt-28">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-amber-500" /> Highlighted Certificate
          </Badge>
          <span className="text-xs text-muted-foreground font-medium">
            Select any certificate below to showcase it here
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCert.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden ring-1 ring-primary/20"
          >
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center relative z-10">
              {/* Left Column: Full Crisp Landscape Certificate Document View */}
              <div className="lg:col-span-7 space-y-3">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border/60 bg-background/80 p-2.5 sm:p-4 shadow-inner group">
                  {activeCert.image ? (
                    <Image
                      src={activeCert.image}
                      alt={activeCert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-1 rounded-xl transition-transform duration-300"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-muted/30 rounded-xl">
                      <Award className="h-16 w-16 sm:h-20 sm:w-20 text-primary mb-3" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">{activeCert.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{activeCert.issuer}</p>
                    </div>
                  )}

                  {/* Corner Category Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-md border border-border/60 text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-sm">
                      {activeCert.category}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Certificate Information & Actions */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs px-2.5 py-0.5 font-semibold">
                      {activeCert.category}
                    </Badge>
                    {activeCert.featured && (
                      <Badge className="bg-amber-500/90 text-slate-950 font-bold text-[10px] uppercase px-2 py-0.5 border-none flex items-center gap-1">
                        <Sparkles className="h-2.5 w-2.5 fill-slate-950" /> Top Specialty
                      </Badge>
                    )}
                  </div>

                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    {activeCert.title}
                  </h2>

                  <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground/90">
                    <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span>{activeCert.issuer}</span>
                  </div>

                  {activeCert.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed bg-muted/40 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-border/50">
                      {activeCert.description}
                    </p>
                  )}

                  {/* Issue Date, Expiry Date & Credential ID Box */}
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      <div className="flex items-center gap-2 bg-muted/40 p-2.5 sm:p-3 rounded-xl border border-border/40">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                        <div className="truncate">
                          <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase font-medium">Issue Date</div>
                          <div className="font-semibold text-foreground text-[11px] sm:text-xs truncate">{activeCert.issueDate}</div>
                        </div>
                      </div>

                      {activeCert.expiryDate && (
                        <div className="flex items-center gap-2 bg-muted/40 p-2.5 sm:p-3 rounded-xl border border-border/40">
                          <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-500 shrink-0" />
                          <div className="truncate">
                            <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase font-medium">Validity / Expiry</div>
                            <div className="font-semibold text-foreground text-[11px] sm:text-xs truncate">{activeCert.expiryDate}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {activeCert.credentialId && (
                      <div className="flex items-center justify-between bg-muted/40 p-2.5 sm:p-3 rounded-xl border border-border/40">
                        <div className="truncate pr-1">
                          <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase font-medium">Credential ID</div>
                          <div className="font-mono font-semibold text-foreground text-[10px] sm:text-xs truncate">{activeCert.credentialId}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => handleCopyId(e, activeCert.id, activeCert.credentialId!)}
                          className="h-7 w-7 p-0 hover:bg-primary/10 hover:text-primary shrink-0"
                          title="Copy Credential ID"
                        >
                          {copiedId === activeCert.id ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Skills Badges */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">Certified Competencies</div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {activeCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold"
                        >
                          <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-3 sm:pt-4 border-t border-border/50 flex items-center gap-4">
                  {activeCert.credentialUrl ? (
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto rounded-xl shadow-lg font-semibold text-xs sm:text-sm gap-2 px-5 sm:px-6 h-11 sm:h-12"
                    >
                      <a
                        href={activeCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ShieldCheck className="h-4 w-4" />
                        Verify Credential Online
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  ) : (
                    <Badge variant="outline" className="text-xs text-muted-foreground px-4 py-2">
                      Official Verified Record
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔍 SEARCH & CATEGORY SELECTOR FOR GALLERY */}
      <div className="pt-8 space-y-6 border-t border-border/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">Certifications Gallery</h3>
            <p className="text-xs text-muted-foreground">Click any certificate card below to feature it in the spotlight above</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search by name, issuer, skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-10 h-10 bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary/50 transition-all rounded-full text-xs"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 h-8 text-xs transition-all ${
                selectedCategory === cat
                  ? 'shadow-md bg-primary text-primary-foreground font-semibold'
                  : 'bg-background/50 hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* 📚 BOTTOM CERTIFICATE GALLERY LIST (2 IN A ROW, HORIZONTAL CARDS) */}
      {filteredCertifications.length === 0 ? (
        <div className="text-center py-16 bg-muted/20 rounded-2xl border border-dashed border-border/60">
          <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h4 className="text-base font-semibold text-foreground">No matching certificates found</h4>
          <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
            Try adjusting your search criteria or switching category filters.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 rounded-full text-xs"
            onClick={() => {
              setSearch('');
              setSelectedCategory('All');
            }}
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredCertifications.map((cert) => {
            const isSelected = cert.id === activeCert.id;
            return (
              <motion.div
                key={cert.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleSelectCert(cert.id)}
                className="cursor-pointer h-full"
              >
                <Card
                  className={`group h-full flex flex-row overflow-hidden border transition-all duration-300 relative rounded-2xl ${
                    isSelected
                      ? 'border-primary ring-2 ring-primary/40 bg-primary/5 shadow-xl'
                      : 'border-border/60 bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-lg'
                  }`}
                >
                  {/* Selected Indicator Badge */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 z-20">
                      <Badge className="bg-primary text-primary-foreground font-bold text-[9px] sm:text-[10px] uppercase px-1.5 sm:px-2 py-0.5 flex items-center gap-1 shadow-md">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Featured
                      </Badge>
                    </div>
                  )}

                  {/* Left Side: Certificate Image Frame (Always Side-by-Side Horizontal) */}
                  <div className="w-5/12 relative bg-background/80 border-r border-border/50 flex items-center justify-center p-2 sm:p-3 shrink-0 min-h-[140px]">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-1 rounded transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-3 text-center bg-muted/20">
                        <Award className="h-8 w-8 sm:h-10 sm:w-10 text-primary/70" />
                      </div>
                    )}
                  </div>

                  {/* Right Side: Horizontal Details & Info */}
                  <div className="w-7/12 p-3 sm:p-5 flex flex-col justify-between space-y-2 sm:space-y-3 flex-grow min-w-0">
                    <div className="space-y-1.5 sm:space-y-2 min-w-0">
                      <div className="flex items-center justify-between gap-1 pr-14 sm:pr-16">
                        <Badge variant="secondary" className="text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 truncate">
                          {cert.category}
                        </Badge>
                      </div>

                      <h4 className="text-xs sm:text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight sm:leading-snug">
                        {cert.title}
                      </h4>

                      <div className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground font-semibold pt-0.5 truncate">
                        <Building2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </div>

                      {/* Dates & Credential ID Box */}
                      <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-[11px] bg-muted/40 p-2 sm:p-2.5 rounded-xl border border-border/40 mt-1.5">
                        <div className="flex items-center justify-between text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary shrink-0" /> Issued:
                          </span>
                          <strong className="text-foreground font-semibold truncate">{cert.issueDate}</strong>
                        </div>

                        {cert.expiryDate && (
                          <div className="flex items-center justify-between text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-500 shrink-0" /> Expiry:
                            </span>
                            <span className="text-foreground font-medium truncate max-w-[100px] sm:max-w-[130px]">{cert.expiryDate}</span>
                          </div>
                        )}

                        {cert.credentialId && (
                          <div className="flex items-center justify-between text-muted-foreground pt-0.5 border-t border-border/40">
                            <span className="font-medium text-muted-foreground">ID:</span>
                            <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-foreground font-semibold min-w-0">
                              <span className="truncate max-w-[80px] sm:max-w-[110px]">{cert.credentialId}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => handleCopyId(e, cert.id, cert.credentialId!)}
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4 p-0 hover:bg-primary/10 hover:text-primary shrink-0"
                                title="Copy ID"
                              >
                                {copiedId === cert.id ? (
                                  <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-500" />
                                ) : (
                                  <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                )}
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Skills Tags */}
                      {cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {cert.skills.slice(0, 2).map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1 rounded bg-muted/60 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-muted-foreground"
                            >
                              <Tag className="h-2 w-2 text-primary/60" />
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 2 && (
                            <span className="inline-flex items-center rounded bg-muted/60 px-1 py-0.5 text-[9px] font-medium text-muted-foreground">
                              +{cert.skills.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-2 border-t border-border/40 flex items-center justify-between gap-1 mt-auto">
                      <span className="text-[10px] sm:text-xs text-primary font-semibold flex items-center gap-0.5 sm:gap-1">
                        {isSelected ? 'Viewing' : 'Feature'}
                        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>

                      {cert.credentialUrl && (
                        <Button
                          asChild
                          variant="secondary"
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                          className="h-6 sm:h-7 text-[10px] sm:text-[11px] px-2 sm:px-2.5 rounded-lg gap-1 font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            Verify
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
