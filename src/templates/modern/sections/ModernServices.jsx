import { ArrowUpRight, Check, Clock } from 'lucide-react';
import { modernContent } from '../../../data/content';

export function ModernServices({ business }) {
  const { services } = modernContent;

  return (
    <section id="modern-services" className="modern-services-section py-24 lg:py-32 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-2">
              TURNKEY PACKAGES & EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Designed, Built & Styled.
              <br />
              All Under One Roof.
            </h2>
          </div>
          <p className="max-w-md text-sm opacity-75 font-normal">
            No juggling between separate carpenters, electricians and designers. {business.name} takes single-point responsibility for your whole home.
          </p>
        </div>

        {/* Distinctive Service Panels with Hover Interactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={srv.title}
              className="group rounded-3xl p-8 border border-current/15 bg-current/5 hover:bg-current/10 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold py-1 px-3 rounded-full bg-orange-600 text-white">
                    PACKAGE 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold opacity-70">
                    <Clock size={13} />
                    <span>{srv.timeline}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight mb-2 group-hover:text-orange-600 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs opacity-75 mb-6 font-medium">
                  {srv.subtitle}
                </p>

                <div className="space-y-3 pt-4 border-t border-current/10">
                  {srv.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs font-medium">
                      <Check size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10">
                <a
                  href="#modern-contact"
                  className="w-full py-3.5 px-5 rounded-2xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-bold text-xs flex items-center justify-center gap-2 group-hover:bg-orange-600 group-hover:text-white transition-colors"
                >
                  <span>Select Package</span>
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
