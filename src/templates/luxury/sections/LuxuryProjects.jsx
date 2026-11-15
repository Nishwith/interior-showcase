import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { luxuryContent } from '../../../data/content';

export function LuxuryProjects({ business }) {
  const { projects } = luxuryContent;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="luxury-projects" className="luxury-projects-section py-28 md:py-36 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-current/10">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mb-4">
              <span className="w-6 h-[1px] bg-current" />
              <span>FOLIO N° 01 — PRIVATE COMMISSIONS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05]">
              Curated Estates &
              <br />
              <em className="font-serif italic font-light">Sanctuaries.</em>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <span className="text-[11px] uppercase tracking-[0.2em] opacity-70 font-sans block">
              Global Portfolios · 2024—2025
            </span>
            <span className="font-serif text-sm italic">{business.name} Archive</span>
          </div>
        </div>

        {/* Magazine-Style Staggered Project Layout with Overlapping Detail Cards */}
        <div className="space-y-32">
          {projects.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="luxury-project-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Large Magazine Image Composition */}
                <div
                  className={`lg:col-span-8 ${
                    isEven ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div
                    onClick={() => setActiveProject(item)}
                    className="group relative cursor-pointer overflow-hidden shadow-2xl bg-neutral-900/10"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.img
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                        src={item.image}
                        alt={`${item.title} interior design by ${business.name}`}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Subtle Overlay & View Cue */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white/95 text-neutral-900 py-3 px-6 text-[10px] tracking-[0.25em] uppercase font-sans flex items-center gap-2 shadow-xl">
                        <span>Inspect Monograph</span>
                        <ArrowUpRight size={13} />
                      </div>
                    </div>

                    {/* Bottom Metadata bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-sans">
                      <span>{item.category}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Project Details Column */}
                <div
                  className={`lg:col-span-4 ${
                    isEven ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="luxury-project-meta p-6 lg:p-8 border border-current/15 bg-current/5 backdrop-blur-sm relative">
                    {/* Index Number */}
                    <span className="font-serif text-3xl sm:text-4xl opacity-30 font-light block mb-4">
                      0{index + 1}
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight mb-3">
                      {item.title}
                    </h3>

                    <div className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-5 font-sans">
                      {item.category} · {item.year}
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed opacity-80 mb-6 font-light">
                      {item.summary}
                    </p>

                    {/* Material Palette Chips */}
                    <div className="mb-8 pt-4 border-t border-current/10">
                      <span className="block text-[9px] uppercase tracking-[0.25em] opacity-60 mb-2 font-sans">
                        Material Palette:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.palette.map((mat) => (
                          <span
                            key={mat}
                            className="text-[10px] tracking-wider py-1 px-2.5 border border-current/20 bg-current/5"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProject(item)}
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans pb-1 border-b border-current hover:opacity-70 transition-opacity"
                    >
                      <span>View Specifications</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-depth Specification View */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900 text-neutral-100 max-w-3xl w-full p-8 md:p-12 border border-neutral-700 shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="text-[10px] uppercase tracking-[0.3em] text-amber-300 mb-2">
                  MONOGRAPH DOSSIER · {business.name}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-2">
                  {activeProject.title}
                </h3>
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
                  {activeProject.category} · {activeProject.location} · {activeProject.year}
                </div>

                <div className="aspect-[16/9] overflow-hidden mb-6">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  {activeProject.summary} This commission harmonized client lifestyle routines with natural daylit orientation, handcrafted stone elements and custom concealed millwork engineered by {business.name}.
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-800 text-xs">
                  <span className="text-neutral-400">Available for confidential private walkthrough.</span>
                  <a
                    href="#luxury-contact"
                    onClick={() => setActiveProject(null)}
                    className="text-amber-200 border-b border-amber-200 pb-0.5 tracking-wider uppercase text-[10px]"
                  >
                    Enquire on this typology
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
