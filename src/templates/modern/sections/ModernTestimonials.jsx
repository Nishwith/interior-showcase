import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { modernContent } from '../../../data/content';

export function ModernTestimonials({ business }) {
  const { testimonials } = modernContent;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const curr = testimonials[index];

  return (
    <section className="modern-testimonials-section py-24 lg:py-32 border-b border-current/10 bg-current/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-1">
              CLIENT EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Stories from Real Homes.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="w-11 h-11 rounded-full border border-current/20 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:border-transparent transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-11 h-11 rounded-full border border-current/20 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:border-transparent transition-all"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Modern Testimonial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-background border border-current/15 shadow-2xl relative">
          <div className="flex items-center gap-1 text-amber-500 mb-6">
            {[...Array(curr.rating || 5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>

          <p className="text-xl sm:text-2xl font-bold leading-relaxed mb-8">
            “{curr.quote}”
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-current/10">
            <div>
              <span className="font-extrabold text-base block">{curr.name}</span>
              <span className="text-xs opacity-60 font-medium">{curr.location}</span>
            </div>
            <div className="py-1 px-3 rounded-full bg-orange-600/10 text-orange-600 dark:text-orange-400 text-xs font-extrabold self-start sm:self-auto">
              {curr.project}
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                index === i ? 'w-8 bg-orange-600' : 'w-2.5 bg-current/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
