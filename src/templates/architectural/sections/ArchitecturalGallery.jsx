import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Filter } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalGallery({ business }) {
  const { gallery } = architecturalContent;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', 'Kitchens', 'Living & TV Units', 'Bedrooms', 'False Ceilings', 'Dining & Crockery'];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return gallery;
    return gallery.filter((item) => item.category === selectedCategory);
  }, [gallery, selectedCategory]);

  return (
    <section id="arch-gallery" className="py-20 lg:py-28 border-b arch-border arch-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
              INTERIOR LOOKBOOK
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight">
              Craftsmanship In Detail.
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs arch-text-muted font-semibold mr-2 flex items-center gap-1">
              <Filter size={13} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'arch-bg-accent text-white shadow-md'
                    : 'arch-card border arch-border hover:border-[var(--accent)] arch-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group cursor-pointer rounded-3xl overflow-hidden border arch-border arch-bg-subtle shadow-md relative aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-4 left-4 py-1 px-3 rounded-full arch-card text-[10px] font-bold arch-text uppercase tracking-wider border arch-border shadow-sm">
                  {item.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <span className="font-serif-display text-base font-semibold leading-tight pr-4">
                    {item.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:arch-bg-accent group-hover:text-white transition-colors">
                    <Eye size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Full-Screen Inspection */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setActivePhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full arch-card arch-text rounded-3xl overflow-hidden border arch-border shadow-2xl relative"
              >
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Close image"
                >
                  <X size={18} />
                </button>

                <div className="aspect-[16/10] overflow-hidden arch-bg">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="arch-accent font-bold uppercase tracking-wider text-[10px] block mb-1">
                      {activePhoto.category} · {business.name} Turnkey Craft
                    </span>
                    <span className="font-serif-display text-xl arch-text font-bold">
                      {activePhoto.title}
                    </span>
                  </div>
                  <a
                    href="#arch-contact"
                    onClick={() => setActivePhoto(null)}
                    className="py-2.5 px-5 rounded-full arch-bg-accent text-white font-bold text-xs shadow-md"
                  >
                    Enquire for this design
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
