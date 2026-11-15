import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { luxuryContent } from '../../../data/content';

export function LuxuryTestimonials({ business }) {
  const { testimonials } = luxuryContent;
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => setCurrentIdx((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrentIdx((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[currentIdx];

  return (
    <section className="luxury-testimonials-section py-28 md:py-40 border-b border-current/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mb-8">
          <span className="w-8 h-[1px] bg-current" />
          <span>CLIENT MONOGRAPHS</span>
          <span className="w-8 h-[1px] bg-current" />
        </div>

        {/* Editorial Full-width Serif Quotation */}
        <div className="min-h-[220px] flex items-center justify-center">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.3] mb-12">
            “{t.quote}”
          </blockquote>
        </div>

        <div className="pt-8 border-t border-current/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="font-serif text-lg sm:text-xl block">{t.author}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-70 block">
              {t.title} · {t.year}
            </span>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-current/30 flex items-center justify-center hover:bg-current hover:text-inverted hover:border-transparent transition-all"
              aria-label="Previous Monograph"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="text-xs font-serif italic px-2">
              0{currentIdx + 1} / 0{testimonials.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-current/30 flex items-center justify-center hover:bg-current hover:text-inverted hover:border-transparent transition-all"
              aria-label="Next Monograph"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
