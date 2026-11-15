import { ArrowUp } from 'lucide-react';

export function LuxuryFooter({ business }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="luxury-footer py-20 px-6 md:px-12 bg-current/5 border-t border-current/10 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-current/10">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="luxury-insignia w-7 h-7 text-xs">
                {business.initials}
              </span>
              <span className="font-serif text-xl tracking-wider">
                {business.name}
              </span>
            </div>
            <p className="max-w-sm text-xs font-light opacity-75 leading-relaxed mb-6">
              An independent private atelier dedicated to quiet luxury, rare stone materiality and architectural sanctuaries that endure across generations.
            </p>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-60 font-sans">
              HYDERABAD · MILAN · LONDON
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-2">
            <span className="block text-[10px] uppercase tracking-[0.25em] opacity-50 font-sans mb-3">
              Atelier Portfolios
            </span>
            <ul className="space-y-2 font-serif text-sm">
              <li><a href="#luxury-about" className="hover:opacity-60 transition-opacity">Provenance & Legacy</a></li>
              <li><a href="#luxury-projects" className="hover:opacity-60 transition-opacity">Selected Residences</a></li>
              <li><a href="#luxury-philosophy" className="hover:opacity-60 transition-opacity">Design Philosophy</a></li>
              <li><a href="#luxury-services" className="hover:opacity-60 transition-opacity">Atelier Disciplines</a></li>
              <li><a href="#luxury-contact" className="hover:opacity-60 transition-opacity">Private Consultation</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 font-light text-xs">
            <span className="block text-[10px] uppercase tracking-[0.25em] opacity-50 font-sans mb-3">
              Direct Inquiries
            </span>
            <p className="opacity-80">{business.address}</p>
            <p><a href={`mailto:${business.email}`} className="underline hover:opacity-60">{business.email}</a></p>
            <p><a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="underline hover:opacity-60">{business.phone}</a></p>
            <div className="pt-2">
              <a href={business.instagram} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] underline font-sans opacity-70 hover:opacity-100">
                Instagram Monograph ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] opacity-60 font-sans">
          <div>
            © {new Date().getFullYear()} {business.name}. All Rights Reserved. Quiet Luxury Interiors.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <span>Return to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
