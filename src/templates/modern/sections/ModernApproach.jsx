import { useState } from 'react';
import { Sun, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { modernContent } from '../../../data/content';

export function ModernApproach({ business }) {
  const { approachPillars } = modernContent;
  const [activePillar, setActivePillar] = useState(0);

  const icons = [Sun, Sparkles, Layers];

  return (
    <section id="modern-approach" className="modern-approach-section py-24 lg:py-32 border-b border-current/10 bg-current/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-2">
            DESIGN PHILOSOPHY IN ACTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Three Pillars of Modern Living.
          </h2>
          <p className="text-base opacity-75 font-normal">
            We focus on how a space feels at 7:00 AM on a Monday morning and 8:00 PM on a Friday evening.
          </p>
        </div>

        {/* 3 Interactive Visual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachPillars.map((p, index) => {
            const Icon = icons[index] || Sparkles;
            const isSelected = activePillar === index;

            return (
              <div
                key={p.id}
                onClick={() => setActivePillar(index)}
                className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-background shadow-2xl border-orange-500/40 ring-2 ring-orange-500/20'
                    : 'bg-background/60 hover:bg-background border-current/10 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <span className="text-xs uppercase font-extrabold tracking-wider text-orange-600 dark:text-orange-400 block mb-1">
                    {p.subtitle}
                  </span>

                  <h3 className="text-2xl font-extrabold tracking-tight mb-4">
                    {p.title}
                  </h3>

                  <p className="text-sm opacity-80 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-current/10 flex items-center justify-between text-xs font-bold">
                  <span className="opacity-60">{business.name} Standard</span>
                  <span className="text-orange-600 dark:text-orange-400 flex items-center gap-1">
                    <span>Explore Pillar</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
