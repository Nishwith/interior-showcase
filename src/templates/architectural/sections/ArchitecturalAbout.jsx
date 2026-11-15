import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Factory, HardHat, FileSpreadsheet } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalAbout({ business }) {
  const { about } = architecturalContent;

  const highlightIcons = [Factory, HardHat, FileSpreadsheet, ShieldCheck];

  return (
    <section id="arch-about" className="py-20 lg:py-28 border-b arch-border arch-bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 arch-card aspect-[4/5] arch-bg">
              <motion.img
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2 }}
                src={about.image}
                alt="Living room interior with marble wall panelling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Card — Responsive Flow & Placement */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 lg:-bottom-6 lg:-right-6 arch-card p-5 sm:p-6 rounded-2xl shadow-xl border arch-border max-w-full sm:max-w-[260px]">
              <span className="text-3xl font-extrabold arch-accent block mb-1">
                15+ Years
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider arch-text-muted block">
                Civil Engineering & Turnkey Provenance
              </span>
            </div>
          </div>

          {/* Right Column: Company Story & Technical Superiority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block py-1 px-3.5 rounded-full bg-[var(--accent)]/10 arch-accent font-bold text-xs tracking-wider uppercase">
              {about.kicker}
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight">
              {about.title}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed arch-text-muted font-normal">
              {about.story1}
            </p>

            <p className="text-sm sm:text-base leading-relaxed arch-text-muted font-normal">
              {about.story2}
            </p>

            {/* 4 Feature Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {about.highlights.map((h, i) => {
                const Icon = highlightIcons[i] || CheckCircle2;
                return (
                  <div key={h.title} className="p-4 rounded-2xl border arch-border arch-card shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5 arch-accent font-bold text-xs">
                      <Icon size={16} />
                      <span>{h.title}</span>
                    </div>
                    <p className="text-xs arch-text-muted leading-relaxed font-normal">
                      {h.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Founder Quote Card */}
            <div className="p-5 rounded-2xl arch-card border-l-4 border-[var(--accent)] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs italic arch-text font-medium mb-1.5">
                  {about.founder.quote}
                </p>
                <span className="font-bold text-xs arch-text block">
                  — {about.founder.name}
                </span>
                <span className="text-[10px] arch-text-muted uppercase">
                  {about.founder.credentials}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
