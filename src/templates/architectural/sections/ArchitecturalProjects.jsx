import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, X } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalProjects({ business }) {
  const { projects } = architecturalContent;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="arch-projects" className="py-20 lg:py-28 border-b arch-border arch-bg-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
              RECENT REALISATIONS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight">
              Featured Client Homes.
            </h2>
          </div>
          <p className="max-w-md text-sm arch-text-muted leading-relaxed font-normal">
            Take a look inside actual flats, penthouses and villas completed across {business.location}. Every home delivered on time within contracted budget.
          </p>
        </div>

        {/* Dynamic Project Grid with Varied Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((p, index) => {
            const colSpan =
              index === 0
                ? 'lg:col-span-8'
                : index === 1
                ? 'lg:col-span-4'
                : index === 2
                ? 'lg:col-span-4'
                : index === 3
                ? 'lg:col-span-8'
                : 'lg:col-span-12';

            return (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className={`${colSpan} group cursor-pointer rounded-3xl overflow-hidden border arch-border arch-card shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="relative overflow-hidden aspect-[16/10] arch-bg">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 1 }}
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 py-1 px-3 rounded-full arch-card text-[10px] font-bold arch-text uppercase tracking-wider border arch-border shadow-sm">
                    {p.category}
                  </div>

                  {/* Bottom Location & Scope Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin size={13} className="text-amber-400" />
                      {p.location}
                    </span>
                    <span className="font-bold">{p.scope}</span>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold arch-text group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {p.highlights.map((h) => (
                        <span key={h} className="text-[10px] py-0.5 px-2.5 rounded-full arch-bg-subtle arch-text-muted font-medium border arch-border">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border arch-border flex items-center justify-center group-hover:arch-bg-accent group-hover:text-white group-hover:border-transparent transition-all flex-shrink-0 ml-4">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Project Inspection */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="arch-card arch-text max-w-3xl w-full p-6 sm:p-8 md:p-10 rounded-3xl border arch-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full border arch-border hover:bg-[var(--accent)]/10 arch-text"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <span className="text-xs font-bold uppercase tracking-wider arch-accent block mb-1">
                  PROJECT SPECIFICATION // {business.name}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2 arch-text">
                  {selectedProject.title}
                </h3>
                <div className="text-xs arch-text-muted mb-5 font-medium">
                  {selectedProject.location} · {selectedProject.scope}
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 arch-bg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 pt-2 border-t arch-border text-xs">
                  <span className="font-bold arch-text block">Key Features Installed:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((h) => (
                      <span key={h} className="py-1 px-3 rounded-lg bg-[var(--accent)]/15 arch-accent font-bold">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t arch-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xs arch-text-muted">Turnkey delivery by in-house engineering team.</span>
                  <a
                    href="#arch-contact"
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-bold arch-accent underline uppercase"
                  >
                    Get quote for similar home →
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
