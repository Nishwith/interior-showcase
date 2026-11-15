import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalTestimonials({ business }) {
  const { testimonials } = architecturalContent;

  return (
    <section id="arch-reviews" className="py-20 lg:py-28 border-b arch-border arch-bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Overall Google Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight">
              What Homeowners Say.
            </h2>
          </div>

          {/* Google Review Score Card */}
          <div className="p-5 rounded-2xl arch-card border arch-border shadow-md flex items-center gap-4 self-start md:self-auto">
            <span className="text-4xl font-extrabold arch-text font-serif-display">
              5.0
            </span>
            <div>
              <div className="flex items-center text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-bold arch-text block">
                67+ Verified Google Reviews
              </span>
              <span className="text-[10px] arch-text-muted">
                100% Recommended in {business.location.split(',')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 sm:p-8 rounded-3xl border arch-border arch-card shadow-lg flex flex-col justify-between relative group hover:border-[var(--accent)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-amber-500">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={24} className="arch-accent opacity-30" />
                </div>

                <p className="text-xs sm:text-sm leading-relaxed arch-text-muted font-normal mb-8">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 border-t arch-border flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-sm arch-text">
                    <span>{t.name}</span>
                    <CheckCircle2 size={13} className="text-emerald-500" />
                  </div>
                  <span className="text-[11px] arch-text-muted block font-medium">
                    {t.location}
                  </span>
                </div>
                <span className="py-1 px-2.5 rounded-full bg-[var(--accent)]/10 arch-accent font-bold text-[10px] uppercase tracking-wider">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
