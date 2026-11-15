import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, ArrowDown } from 'lucide-react';
import { luxuryContent } from '../../../data/content';
import { ThemeToggle } from '../../../components/shared/ThemeToggle';

export function LuxuryHero({ business, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { hero } = luxuryContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="luxury-hero-wrapper relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Editorial Luxury Header / Navigation */}
      <header
        className={`luxury-nav fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? 'luxury-nav-scrolled' : 'luxury-nav-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          {/* Brand Mark with Insignia */}
          <a href="#top" className="luxury-brand group flex items-center gap-3">
            <span className="luxury-insignia">
              {business.initials}
            </span>
            <div className="flex flex-col">
              <span className="luxury-brand-name font-serif text-lg tracking-wider">
                {business.name}
              </span>
              <span className="luxury-brand-sub text-[10px] tracking-[0.25em] uppercase opacity-70">
                ATELIER · {business.location.split(',')[0]}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] font-sans font-medium">
            <a href="#luxury-about" className="luxury-nav-link">Provenance</a>
            <a href="#luxury-projects" className="luxury-nav-link">Portfolio</a>
            <a href="#luxury-philosophy" className="luxury-nav-link">Philosophy</a>
            <a href="#luxury-services" className="luxury-nav-link">Services</a>
            <a href="#luxury-process" className="luxury-nav-link">Process</a>
            <a href="#luxury-contact" className="luxury-nav-link">Contact</a>
          </nav>

          {/* Nav Right Actions */}
          <div className="flex items-center gap-5">
            <ThemeToggle theme={theme} setTheme={setTheme} className="luxury-theme-toggle" />
            <a
              href="#luxury-contact"
              className="hidden sm:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans py-2.5 px-5 border border-current/40 hover:border-current transition-colors"
            >
              <span>Commission Estate</span>
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-current"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 luxury-mobile-drawer flex flex-col justify-center px-10 pt-20"
          >
            <nav className="flex flex-col gap-6 text-2xl font-serif">
              <a onClick={() => setMenuOpen(false)} href="#luxury-about" className="hover:opacity-60 transition-opacity">
                01. Provenance
              </a>
              <a onClick={() => setMenuOpen(false)} href="#luxury-projects" className="hover:opacity-60 transition-opacity">
                02. Portfolio
              </a>
              <a onClick={() => setMenuOpen(false)} href="#luxury-philosophy" className="hover:opacity-60 transition-opacity">
                03. Philosophy
              </a>
              <a onClick={() => setMenuOpen(false)} href="#luxury-services" className="hover:opacity-60 transition-opacity">
                04. Services
              </a>
              <a onClick={() => setMenuOpen(false)} href="#luxury-process" className="hover:opacity-60 transition-opacity">
                05. Process
              </a>
              <a onClick={() => setMenuOpen(false)} href="#luxury-contact" className="hover:opacity-60 transition-opacity">
                06. Private Consultation
              </a>
            </nav>
            <div className="mt-12 pt-8 border-t border-current/10 text-xs font-sans tracking-widest uppercase opacity-75">
              {business.name} — {business.location}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Background with Cinematic Image & Subtle Gradient Shades */}
      <div className="luxury-hero-bg absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <img
            src={hero.image}
            alt="Luxury architectural interior with warm travertine"
            className="w-full h-full object-cover object-center filter brightness-[0.88]"
          />
        </motion.div>
        <div className="luxury-hero-overlay absolute inset-0" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-40 pb-20 flex-1 flex flex-col justify-end">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-85 mb-6"
          >
            <span className="w-8 h-[1px] bg-current" />
            <span>{hero.eyebrow} · {business.location.toUpperCase()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.94] tracking-tight mb-8"
          >
            {hero.headingMain}
            <br />
            <em className="font-serif italic font-light">{hero.headingItalic}</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg font-light leading-relaxed max-w-xl opacity-90 mb-10"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#luxury-projects"
              className="luxury-hero-cta group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans pb-2 border-b border-current"
            >
              <span>{hero.ctaText}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#luxury-contact"
              className="text-xs uppercase tracking-[0.25em] font-sans pb-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              Request Monograph
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Footnotes / Scroll Cue */}
      <div className="relative z-10 border-t border-white/20 py-5 px-6 md:px-12 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase opacity-75">
        <div className="flex items-center gap-4">
          <ArrowDown size={14} className="animate-bounce" />
          <span>Scroll To Explore</span>
        </div>
        <div className="hidden sm:block">
          <span>{hero.meta.index}</span>
        </div>
        <div>
          <span>{business.name} © MMXXV</span>
        </div>
      </div>
    </div>
  );
}
