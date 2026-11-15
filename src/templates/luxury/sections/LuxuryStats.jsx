import { luxuryContent } from '../../../data/content';

export function LuxuryStats({ business }) {
  const { stats } = luxuryContent;

  return (
    <section className="luxury-stats-section py-24 md:py-32 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {stats.map((st, i) => (
            <div key={st.label} className="text-center md:text-left relative">
              <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight block mb-3">
                {st.value}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans opacity-70 block max-w-[200px]">
                {st.label}
              </span>
              <div className="mt-6 w-8 h-[1px] bg-current/20 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
