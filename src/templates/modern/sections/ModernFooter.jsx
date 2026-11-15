import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';

export function ModernFooter({ business }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer py-16 px-6 lg:px-12 bg-current/5 border-t border-current/10 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-current/10">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-xs">
                {business.initials}
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                {business.name}
              </span>
            </div>
            <p className="text-xs opacity-75 leading-relaxed font-normal max-w-sm">
              Contemporary residential interior architecture studio specializing in warm minimal apartments, turnkey executions and spaces designed around real human lives.
            </p>
            <div className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold">
              45-Day Handover Guarantee Active
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-semibold">
            <span className="text-xs uppercase tracking-wider opacity-60 font-bold block mb-1">
              Explore Spaces
            </span>
            <ul className="space-y-2">
              <li><a href="#modern-about" className="hover:text-orange-600 transition-colors">About Our Studio</a></li>
              <li><a href="#modern-projects" className="hover:text-orange-600 transition-colors">Residential Projects</a></li>
              <li><a href="#modern-approach" className="hover:text-orange-600 transition-colors">Design Pillars</a></li>
              <li><a href="#modern-services" className="hover:text-orange-600 transition-colors">Turnkey Packages</a></li>
              <li><a href="#modern-benefits" className="hover:text-orange-600 transition-colors">Warranty & Guarantees</a></li>
            </ul>
          </div>

          {/* Turnkey Services */}
          <div className="lg:col-span-2 space-y-3 font-semibold">
            <span className="text-xs uppercase tracking-wider opacity-60 font-bold block mb-1">
              Our Offerings
            </span>
            <ul className="space-y-2">
              <li><span className="opacity-80">Full-Home Fitout</span></li>
              <li><span className="opacity-80">Modular Kitchens</span></li>
              <li><span className="opacity-80">Living & Dining Hubs</span></li>
              <li><span className="opacity-80">Smart Lighting</span></li>
              <li><span className="opacity-80">3D VR Walkthroughs</span></li>
            </ul>
          </div>

          {/* Studio Office Coordinates */}
          <div className="lg:col-span-3 space-y-3 font-medium">
            <span className="text-xs uppercase tracking-wider opacity-60 font-bold block mb-1">
              Visit Studio
            </span>
            <p className="opacity-80">{business.address}</p>
            <p><a href={`mailto:${business.email}`} className="text-orange-600 dark:text-orange-400 hover:underline">{business.email}</a></p>
            <p><a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="font-bold">{business.phone}</a></p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href={`https://wa.me/${(business.whatsapp || business.phone).replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60 font-medium">
          <div>
            © {new Date().getFullYear()} {business.name}. Modern Living Showcase.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-orange-600 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
