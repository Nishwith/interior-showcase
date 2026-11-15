import { modernContent } from '../../../data/content';

export function ModernJourney({ business }) {
  const { journey } = modernContent;

  return (
    <section id="modern-journey" className="modern-journey-section py-24 lg:py-32 border-b border-current/10 bg-current/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-2">
            STEP-BY-STEP ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            How Your Dream Home Happens.
          </h2>
          <p className="text-sm opacity-75 font-normal">
            Clear milestones, zero guesswork. We guide you from the initial floorplan review to keys in hand.
          </p>
        </div>

        {/* Alternating Vertical Timeline with Visual Connectors */}
        <div className="relative">
          {/* Central Vertical Connector Line on MD+ screens */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-orange-600/30" />

          <div className="space-y-12 md:space-y-16">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  {/* Left Content Column */}
                  <div
                    className={`md:col-span-5 ${
                      isEven
                        ? 'md:text-right order-2 md:order-1'
                        : 'order-2 md:order-3 md:col-start-8'
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-background border border-current/10 shadow-lg">
                      <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400 block mb-1">
                        STAGE {item.step}
                      </span>
                      <h3 className="text-xl font-extrabold tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-75 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="md:col-span-2 flex justify-center order-1 md:order-2">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white font-extrabold text-sm flex items-center justify-center shadow-lg shadow-orange-600/30 ring-4 ring-background">
                      {item.step}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Alternating Balance */}
                  <div
                    className={`hidden md:block md:col-span-5 ${
                      isEven ? 'order-3 md:col-start-8' : 'order-1'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
