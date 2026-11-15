import { ShieldCheck, HardHat, Factory, Clock, Award, Users } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalWhyUs({ business }) {
  const { whyChooseUs } = architecturalContent;

  const icons = [HardHat, Factory, ShieldCheck, Clock, Award, Users];

  return (
    <section id="arch-why-us" className="py-20 lg:py-28 border-b arch-border arch-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
            WHY {business.name.toUpperCase()}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight mb-4">
            Built On Engineering Trust.
          </h2>
          <p className="text-sm arch-text-muted leading-relaxed font-normal">
            We don't gamble with your home. Our engineering foundation, dedicated factory, and direct supervision ensure total peace of mind.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={item.title}
                className="p-7 sm:p-8 rounded-3xl border arch-border arch-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/15 arch-accent flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest arch-accent block mb-2">
                    {item.badge}
                  </span>

                  <h3 className="font-serif-display text-xl font-bold arch-text mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs arch-text-muted leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t arch-border flex items-center justify-between text-[11px] font-semibold arch-text-muted">
                  <span>{business.name} Standard</span>
                  <span className="text-emerald-500 font-bold">✓ Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
