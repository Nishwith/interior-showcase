import { ArrowRight, Ruler, Eye, Factory, KeyRound } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalProcess({ business }) {
  const { process } = architecturalContent;

  const stepIcons = [Ruler, Eye, Factory, KeyRound];

  return (
    <section id="arch-process" className="py-20 lg:py-28 border-b arch-border arch-bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
              OUR 4-STEP ROADMAP
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight">
              From Bare Shell to Dream Home.
            </h2>
          </div>
          <p className="max-w-md text-sm arch-text-muted leading-relaxed font-normal">
            A structured, stress-free execution workflow. 80% of fabrication happens in our factory, minimizing noise, mess, and delays inside your apartment.
          </p>
        </div>

        {/* 4 Step Visual Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, idx) => {
            const Icon = stepIcons[idx] || Ruler;

            return (
              <div
                key={p.step}
                className="p-7 sm:p-8 rounded-3xl border arch-border arch-card shadow-md flex flex-col justify-between group hover:border-[var(--accent)] hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold arch-accent font-serif-display">
                      {p.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 arch-accent flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold arch-text mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs arch-text-muted leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t arch-border flex items-center justify-between text-[11px] font-bold arch-accent">
                  <span>Phase {p.step} of 04</span>
                  {idx < 3 ? <ArrowRight size={14} className="opacity-60" /> : <span className="text-emerald-500">Handover ✓</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
