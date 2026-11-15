import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, MessageCircle, Menu, X, ArrowDownRight, Compass } from 'lucide-react';
import { modernContent } from '../../../data/content';
import { ThemeToggle } from '../../../components/shared/ThemeToggle';

export function ModernHero({ business, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { hero, marquee } = modernContent;

  return (
    <div className="modern-hero-wrap relative overflow-hidden">
      {/* Modern Top Header Navigation */}
      <header className="modern-nav relative z-30 max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="modern-logo-chip w-10 h-10 rounded-xl bg-orange-600/15 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 flex items-center justify-center font-bold text-sm tracking-tight border border-orange-600/20">
            {business.initials}
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight block">
              {business.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase opacity-60 font-semibold">
              Contemporary Living Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wide">
          <a href="#modern-about" className="modern-nav-pill">About</a>
          <a href="#modern-projects" className="modern-nav-pill">Spaces</a>
          <a href="#modern-approach" className="modern-nav-pill">Approach</a>
          <a href="#modern-services" className="modern-nav-pill">Services</a>
          <a href="#modern-journey" className="modern-nav-pill">Journey</a>
          <a href="#modern-benefits" className="modern-nav-pill">Why Us</a>
          <a href="#modern-contact" className="modern-nav-pill">Contact</a>
        </nav>

        {/* Nav Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} setTheme={setTheme} className="modern-theme-toggle" />
          <a
            href="#modern-contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold py-3 px-5 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20 transition-all hover:scale-105"
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg border border-current/20"
            aria-label="Open Mobile Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden relative z-30 px-6 py-6 border-b border-current/15 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-4 text-base font-bold">
              <a onClick={() => setMenuOpen(false)} href="#modern-about">About Studio</a>
              <a onClick={() => setMenuOpen(false)} href="#modern-projects">Featured Spaces</a>
              <a onClick={() => setMenuOpen(false)} href="#modern-approach">Design Pillars</a>
              <a onClick={() => setMenuOpen(false)} href="#modern-services">Turnkey Packages</a>
              <a onClick={() => setMenuOpen(false)} href="#modern-journey">Project Journey</a>
              <a onClick={() => setMenuOpen(false)} href="#modern-benefits">Why Choose Us</a>
              <a onClick={() => setMenuOpen(false)} href="#modern-contact" className="text-orange-600">Get Free Estimate</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split-Screen Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Typography & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wide">
            <Sparkles size={13} />
            <span>{hero.badge} · {business.location.toUpperCase()}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02]"
          >
            {hero.headingLead}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 dark:from-orange-400 dark:via-amber-400 dark:to-rose-400">
              {hero.headingAccent}
            </span>
          </motion.h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-80 max-w-lg font-normal">
            {hero.subtext}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#modern-projects"
              className="inline-flex items-center gap-2.5 py-4 px-7 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-bold text-sm shadow-xl hover:opacity-90 transition-all hover:scale-105"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={`https://wa.me/${(business.whatsapp || business.phone).replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 py-4 px-7 rounded-full border border-current/25 hover:border-current font-bold text-sm transition-all"
            >
              <MessageCircle size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span>{hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 border-t border-current/15 grid grid-cols-2 gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider opacity-60 font-semibold block mb-1">
                Handover Timeline
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-orange-600 dark:text-orange-400">
                45 Days Guaranteed
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider opacity-60 font-semibold block mb-1">
                Active Studio
              </span>
              <span className="text-xl sm:text-2xl font-extrabold">
                {business.location.split(',')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase with Floating Card */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[4/3] sm:aspect-[16/11]">
            <motion.img
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4 }}
              src={hero.images.main}
              alt="Warm contemporary modern living interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Floating Project Pill Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute -bottom-6 -left-4 sm:-left-8 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 p-5 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 max-w-[260px]"
          >
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-orange-600 dark:text-orange-400 mb-1">
              <Compass size={13} />
              <span>{hero.floatingCard.city}</span>
            </div>
            <div className="font-extrabold text-base leading-tight">
              {hero.floatingCard.title}
            </div>
            <div className="text-xs opacity-60 font-medium mt-1">
              {hero.floatingCard.sqft} · Handover 2025
            </div>
          </motion.div>

          {/* Floating Secondary Mini Image */}
          <div className="hidden sm:block absolute -top-8 -right-6 w-36 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
            <img
              src={hero.images.secondary}
              alt="Interior detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="modern-marquee-wrap py-4 bg-orange-600/10 dark:bg-orange-500/15 border-y border-orange-600/20 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-8 items-center text-xs font-bold tracking-widest uppercase text-orange-700 dark:text-orange-300 animate-marquee">
          {marquee.concat(marquee).map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
