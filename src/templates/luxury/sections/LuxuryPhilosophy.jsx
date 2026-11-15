import { luxuryContent } from '../../../data/content';

export function LuxuryPhilosophy({ business }) {
  const { philosophy } = luxuryContent;

  return (
    <section id="luxury-philosophy" className="luxury-philosophy-section py-28 md:py-36 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mb-5">
            <span className="w-8 h-[1px] bg-current" />
            <span>{philosophy.kicker}</span>
            <span className="w-8 h-[1px] bg-current" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6">
            {philosophy.title}
          </h2>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl font-light opacity-85 leading-relaxed">
            “{philosophy.quote}”
          </p>
        </div>

        {/* 3 Refined Sensory Pillars with Decorative Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-12 border-t border-current/15">
          {philosophy.elements.map((elem) => (
            <div key={elem.num} className="relative group">
              {/* Roman Numeral */}
              <div className="font-serif text-3xl sm:text-4xl font-light opacity-40 mb-6 flex items-center justify-between">
                <span>{elem.num}</span>
                <span className="w-12 h-[1px] bg-current/30 group-hover:w-20 transition-all duration-500" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-normal mb-3">
                {elem.label}
              </h3>

              <p className="text-xs sm:text-sm font-light leading-relaxed opacity-80">
                {elem.desc}
              </p>

              <div className="mt-8 pt-4 border-t border-current/10 text-[9px] uppercase tracking-[0.25em] opacity-60 font-sans">
                {business.name} Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
