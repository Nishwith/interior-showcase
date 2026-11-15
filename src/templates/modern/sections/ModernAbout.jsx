import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { modernContent } from '../../../data/content';

export function ModernAbout({ business }) {
  const { about } = modernContent;

  return (
    <section id="modern-about" className="modern-about-section py-24 lg:py-32 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Modern Image Collage with Layered Photos */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-neutral-200">
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1 }}
                  src={about.collage[0].url}
                  alt={about.collage[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-4 flex flex-col justify-end">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-neutral-200 mb-4">
                  <img
                    src={about.collage[1].url}
                    alt={about.collage[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-orange-600/10 border border-orange-600/20 text-orange-700 dark:text-orange-400 text-xs font-bold">
                  <span>Custom Millwork & Smart Layouts</span>
                </div>
              </div>
            </div>

            {/* Experience Pill Overlay */}
            <div className="absolute -bottom-6 left-6 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 py-3.5 px-6 rounded-2xl shadow-2xl text-xs font-extrabold flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Live Studio in {business.location.split(',')[0]}</span>
            </div>
          </div>

          {/* Right Column: Brand Philosophy & Key Feature Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block py-1 px-3 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wider uppercase">
              {about.tag}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {about.title}
            </h2>

            <p className="text-base leading-relaxed opacity-80 font-normal">
              {about.body}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-current/10 bg-current/5"
                >
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-semibold">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="#modern-approach"
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 hover:gap-3 transition-all"
              >
                <span>Discover our 3 design pillars</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
