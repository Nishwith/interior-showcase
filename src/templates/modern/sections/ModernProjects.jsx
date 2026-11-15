import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { modernContent } from '../../../data/content';

export function ModernProjects({ business }) {
  const { projects } = modernContent;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    return ['All', 'Apartments', 'Villas', 'Kitchens', 'Outdoor', 'Bedrooms'];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="modern-projects" className="modern-projects-section py-24 lg:py-32 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-2">
              REAL LIVING SPACES · 2024—2025
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured Spaces &
              <br />
              Residential Transformations.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs opacity-60 font-medium mr-2 flex items-center gap-1">
              <Filter size={13} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                    : 'bg-current/5 hover:bg-current/10 text-current'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asymmetric Grid with Filter Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((p, index) => {
              // Asymmetric sizing for visual interest: first card spans 2 cols on lg if in All
              const isLarge = selectedCategory === 'All' && index === 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={p.id}
                  className={`group relative rounded-3xl overflow-hidden shadow-lg border border-current/10 bg-current/5 flex flex-col ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className={`overflow-hidden relative ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                    <img
                      src={p.image}
                      alt={`${p.title} - ${business.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-[10px] font-extrabold tracking-wider uppercase">
                      {p.tag}
                    </div>

                    {/* Sqft Badge */}
                    <div className="absolute bottom-4 right-4 py-1 px-3 rounded-full bg-black/70 text-white text-[10px] font-semibold">
                      {p.sqft}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-orange-600 dark:text-orange-400 mb-1">
                        {p.category} · {p.place}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-orange-600 transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    <div className="pt-4 mt-2 border-t border-current/10 flex items-center justify-between">
                      <span className="text-xs opacity-70 font-medium">Turnkey Fitout by {business.name}</span>
                      <a
                        href="#modern-contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 dark:text-orange-400 hover:gap-2 transition-all"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
