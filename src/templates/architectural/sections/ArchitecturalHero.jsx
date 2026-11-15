import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MessageCircle, Star, Menu, X, ShieldCheck } from 'lucide-react';
import { architecturalContent } from '../../../data/content';
import { ThemeToggle } from '../../../components/shared/ThemeToggle';

export function ArchitecturalHero({ business, theme, setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { hero } = architecturalContent;

  const cleanPhone = (business.whatsapp || business.phone || '').replace(/[^0-9]/g, '');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${business.name}, I came across your website and would like to get a quote for home interior design in ${business.location}.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-[92svh] flex flex-col justify-between arch-bg">
      {/* 01. Brand Header Navigation — First Proper Interface Element at Top */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'arch-card backdrop-blur-md shadow-md py-3.5 border-b'
            : 'arch-bg/95 backdrop-blur-sm py-5 arch-border border-b'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Mark with Monogram */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl arch-bg-accent text-white flex items-center justify-center font-bold text-base shadow-md">
              {business.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight arch-text leading-tight">
                {business.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold arch-accent">
                Interiors & Turnkey Developers
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide arch-text">
            <a href="#arch-about" className="hover:text-[var(--accent)] transition-colors">About Us</a>
            <a href="#arch-services" className="hover:text-[var(--accent)] transition-colors">Services</a>
            <a href="#arch-projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
            <a href="#arch-why-us" className="hover:text-[var(--accent)] transition-colors">Why Choose Us</a>
            <a href="#arch-process" className="hover:text-[var(--accent)] transition-colors">Work Process</a>
            <a href="#arch-gallery" className="hover:text-[var(--accent)] transition-colors">Gallery</a>
            <a href="#arch-reviews" className="hover:text-[var(--accent)] transition-colors">Reviews</a>
            <a href="#arch-contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle theme={theme} setTheme={setTheme} className="theme-toggle-btn" />
            <a
              href="#arch-contact"
              className="hidden md:inline-flex items-center gap-2 nav-cta-bronze"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border arch-border arch-text"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-full arch-card border-b arch-border px-6 py-6 shadow-2xl space-y-4 overflow-hidden"
            >
              <nav className="flex flex-col gap-3 font-semibold text-sm arch-text">
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-about" className="hover:text-[var(--accent)]">About The Company</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-services" className="hover:text-[var(--accent)]">Services & Modular Units</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-projects" className="hover:text-[var(--accent)]">Featured Client Homes</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-why-us" className="hover:text-[var(--accent)]">Why Choose Us</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-process" className="hover:text-[var(--accent)]">Our 4-Step Process</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-gallery" className="hover:text-[var(--accent)]">Interior Gallery</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-reviews" className="hover:text-[var(--accent)]">Google Reviews (5.0 ★)</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#arch-contact" className="arch-accent font-bold">Get Free Quote →</a>
              </nav>
              <div className="pt-3 border-t arch-border flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => { setMobileMenuOpen(false); handleWhatsApp(); }}
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp Directly</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 02. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 sm:pt-32 pb-16 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-1">
        {/* Left Column: Value Proposition & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Trust Rating Badge */}
          <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 arch-accent text-xs font-bold">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
            <span>5.0 Google Rating · 67+ Homeowners in {business.location.split(',')[0]}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight arch-text"
          >
            {hero.headingLead}
            <br />
            <span className="arch-accent italic font-normal">
              {hero.headingAccent}
            </span>
          </motion.h1>

          <p className="text-base sm:text-lg leading-relaxed arch-text-muted max-w-xl font-normal">
            {hero.subtext}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#arch-contact"
              className="inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full arch-bg-accent hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-[var(--accent)]/20 transition-all hover:scale-105"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2.5 py-3.5 px-6 rounded-full border arch-border hover:border-[var(--accent)] font-bold text-sm arch-text transition-all"
            >
              <MessageCircle size={17} className="text-emerald-500" />
              <span>{hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Trust Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t arch-border">
            {hero.stats.map((st) => (
              <div key={st.label}>
                <span className="text-2xl sm:text-3xl font-extrabold arch-text block">
                  {st.val}
                </span>
                <span className="text-[11px] font-semibold arch-text-muted tracking-wide uppercase">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Interior Image with Quality Badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 arch-card aspect-[4/3] sm:aspect-[5/4] arch-bg-subtle">
            <motion.img
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src={hero.image}
              alt="Premium modular kitchen and living room interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Overlaid Verified Quality Stamp */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl arch-card backdrop-blur-md shadow-xl text-xs flex items-center justify-between border arch-border">
              <div>
                <span className="font-bold arch-text block text-sm">
                  {business.name} Turnkey Standard
                </span>
                <span className="arch-text-muted text-[11px]">
                  BWR Plywood · Hafele Hardware · Quartz Tops
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 ml-3">
                <ShieldCheck size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
