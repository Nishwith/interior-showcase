import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { luxuryContent } from '../../../data/content';

export function LuxuryServices({ business }) {
  const { services } = luxuryContent;
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="luxury-services" className="luxury-services-section py-28 md:py-36 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mb-4">
              <span className="w-6 h-[1px] bg-current" />
              <span>ATELIER DISCIPLINES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05]">
              Tailored For Discerning
              <br />
              <em className="font-serif italic font-light">Commissions.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm font-light opacity-80 leading-relaxed">
            From comprehensive volumetric remodeling to bespoke collectible furniture acquisition, {business.name} orchestrates every craft with sovereign discretion.
          </div>
        </div>

        {/* Elegant Numbered Service Rows */}
        <div className="border-t border-current/15">
          {services.map((srv, idx) => (
            <div
              key={srv.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`luxury-service-item py-10 md:py-14 border-b border-current/15 transition-all duration-500 group ${
                hoveredIdx === idx ? 'bg-current/5 pl-4 md:pl-8' : ''
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Number */}
                <div className="md:col-span-2 flex items-center gap-4">
                  <span className="font-serif text-2xl sm:text-3xl font-light opacity-40 group-hover:opacity-100 transition-opacity">
                    {srv.num}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] font-sans py-1 px-2 border border-current/20 opacity-70">
                    {srv.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal group-hover:italic transition-all">
                    {srv.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-xs sm:text-sm font-light opacity-80 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-1 text-right flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-current/30 flex items-center justify-center group-hover:bg-current group-hover:text-inverted group-hover:border-transparent transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
