import { ArrowUpRight, Check } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalServices({ business }) {
  const { services } = architecturalContent;

  return (
    <section id="arch-services" className="py-20 lg:py-28 border-b arch-border arch-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
              WHAT WE BUILD
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight">
              Specialist Interior Services.
            </h2>
          </div>
          <p className="max-w-md text-sm arch-text-muted leading-relaxed font-normal">
            Every unit is manufactured using computerized CNC edge-banding in our factory, then assembled by in-house carpenters under strict civil engineering supervision.
          </p>
        </div>

        {/* 6 Image-Led Service Compositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="group rounded-3xl overflow-hidden border arch-border arch-card hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image */}
                <div className="aspect-[16/10] overflow-hidden relative arch-bg-subtle">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 py-1 px-3 rounded-full arch-card shadow-sm text-[10px] font-bold arch-text uppercase tracking-wider border arch-border">
                    SERVICE 0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="font-serif-display text-2xl font-bold arch-text group-hover:text-[var(--accent)] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs arch-accent font-semibold">
                    {srv.subtitle}
                  </p>

                  <p className="text-xs arch-text-muted leading-relaxed font-normal">
                    {srv.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-3 border-t arch-border space-y-2">
                    {srv.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium arch-text">
                        <Check size={14} className="text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href="#arch-contact"
                  className="w-full py-3 px-5 rounded-2xl border arch-border hover:border-[var(--accent)] hover:arch-bg-accent hover:text-white text-xs font-bold flex items-center justify-center gap-2 arch-text transition-all"
                >
                  <span>Enquire For This Service</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
