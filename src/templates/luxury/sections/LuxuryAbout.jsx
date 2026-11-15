import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { luxuryContent } from '../../../data/content';

export function LuxuryAbout({ business }) {
  const { about, statement } = luxuryContent;

  return (
    <section id="luxury-about" className="luxury-about-section py-28 md:py-36 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Full-width editorial statement banner */}
        <div className="mb-24 pb-16 border-b border-current/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70">
            {statement.kicker}
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.25]">
              “{statement.quote}”
            </p>
          </div>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Secondary Architectural Vignette Image with Gold/Tonal Frame */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              <div className="overflow-hidden bg-neutral-200 aspect-[4/5] shadow-2xl">
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                  src={about.image}
                  alt={about.caption}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Editorial Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase opacity-75">
                <span>{about.caption}</span>
                <span className="font-serif italic text-xs">{business.name}</span>
              </div>

              {/* Floating Pill Accent */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-current text-inverted py-3 px-6 shadow-xl text-[9px] uppercase tracking-[0.25em] font-sans">
                {about.statsPill}
              </div>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-sans opacity-70 mb-5">
                <span className="w-5 h-[1px] bg-current" />
                <span>{about.eyebrow}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-8">
                {about.heading}
                <br />
                <em className="font-serif italic font-light">{about.headingAccent}</em>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed opacity-85 mb-6 font-light">
                {about.body1}
              </p>

              <p className="text-sm sm:text-base leading-relaxed opacity-85 mb-10 font-light">
                {about.body2}
              </p>

              <div className="pt-6 border-t border-current/15 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] opacity-60">Principal Atelier</span>
                  <span className="font-serif text-base">{business.name}</span>
                </div>
                <a
                  href="#luxury-philosophy"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans pb-1 border-b border-current/40 hover:border-current transition-colors"
                >
                  <span>Our Craft Philosophy</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
