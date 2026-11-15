import { luxuryContent } from '../../../data/content';

export function LuxuryProcess({ business }) {
  const { process } = luxuryContent;

  return (
    <section id="luxury-process" className="luxury-process-section py-28 md:py-36 border-b border-current/10 bg-current/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mb-4">
              <span className="w-6 h-[1px] bg-current" />
              <span>THE ATELIER PROTOCOL</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05]">
              A Rigorous Journey
              <br />
              <em className="font-serif italic font-light">to Perfection.</em>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-xs sm:text-sm font-light opacity-80 leading-relaxed">
            Every {business.name} commission progresses through 4 disciplined phases, guaranteeing creative transcendence with absolute delivery certainty.
          </p>
        </div>

        {/* Horizontal Luxury Timeline */}
        <div className="relative">
          {/* Subtle Hairline Connecting Ribbon */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-current/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {process.map((item, idx) => (
              <div
                key={item.step}
                className="luxury-timeline-card pt-8 lg:pt-14 relative group"
              >
                {/* Node Milestone Mark */}
                <div className="w-8 h-8 rounded-full border border-current bg-background flex items-center justify-center font-serif text-xs mb-8 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <div className="text-[10px] uppercase tracking-[0.25em] font-sans opacity-60 mb-2">
                  {item.period}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal mb-4 group-hover:italic transition-all">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-light opacity-80 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-current/10 text-[9px] uppercase tracking-[0.2em] opacity-40 font-sans">
                  Stage 0{idx + 1} of 04
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
