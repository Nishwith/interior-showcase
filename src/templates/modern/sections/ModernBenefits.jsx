import { ShieldCheck, Clock, Award, Hammer } from 'lucide-react';
import { modernContent } from '../../../data/content';

export function ModernBenefits({ business }) {
  const { benefits } = modernContent;
  const icons = [ShieldCheck, Clock, Award, Hammer];

  return (
    <section id="modern-benefits" className="modern-benefits-section py-24 lg:py-32 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Card */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block">
              THE {business.name.toUpperCase()} ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Why 180+ Homeowners Trust Us In {business.location.split(',')[0]}.
            </h2>
            <p className="text-sm opacity-80 leading-relaxed font-normal">
              Interior design shouldn't be stressful or filled with surprise cost escalations. We engineered a predictable, transparent process backed by solid warranties.
            </p>
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300">
              <span className="font-extrabold text-lg block mb-1">100% Fixed Quote Contract</span>
              <span className="text-xs font-medium">Once signed, your budget is locked. If we make an estimate error, we absorb the cost.</span>
            </div>
          </div>

          {/* Right Column: Layered Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = icons[i] || ShieldCheck;
              return (
                <div
                  key={b.title}
                  className="p-7 rounded-3xl border border-current/10 bg-current/5 hover:bg-current/10 transition-all hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs opacity-75 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
