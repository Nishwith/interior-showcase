import { ArrowUp, Phone, Mail, MapPin, Star } from 'lucide-react';

export function ArchitecturalFooter({ business }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 sm:py-20 px-6 lg:px-12 arch-footer text-xs border-t arch-border">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 sm:pb-16 border-b border-current/15">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl arch-bg-accent text-white flex items-center justify-center font-bold text-sm">
                {business.initials}
              </div>
              <span className="font-serif-display text-2xl font-bold tracking-tight">
                {business.name}
              </span>
            </div>
            <p className="text-xs opacity-75 leading-relaxed font-normal max-w-sm">
              Established interior design company & turnkey developers in Hyderabad. Specializing in modular kitchens, wardrobes, false ceilings, TV wall panelling and complete residential home interiors.
            </p>
            <div className="flex items-center gap-2 pt-2 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="font-bold text-xs ml-1 opacity-90">5.0 on Google (67+ Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-semibold">
            <span className="text-xs uppercase tracking-wider arch-accent font-bold block mb-1">
              Quick Directory
            </span>
            <ul className="space-y-2 opacity-75">
              <li><a href="#arch-about" className="hover:opacity-100 hover:text-[var(--accent)] transition-colors">About Company & Founder</a></li>
              <li><a href="#arch-services" className="hover:opacity-100 hover:text-[var(--accent)] transition-colors">Modular Kitchens & Services</a></li>
              <li><a href="#arch-projects" className="hover:opacity-100 hover:text-[var(--accent)] transition-colors">Recent Client Homes</a></li>
              <li><a href="#arch-why-us" className="hover:opacity-100 hover:text-[var(--accent)] transition-colors">Engineering & Guarantees</a></li>
              <li><a href="#arch-process" className="hover:opacity-100 hover:text-[var(--accent)] transition-colors">4-Step Execution Process</a></li>
              <li><a href="#arch-gallery" className="hover:text-[var(--accent)] transition-colors">Interior Photo Lookbook</a></li>
              <li><a href="#arch-contact" className="hover:text-[var(--accent)] transition-colors">Get Free On-Site Quote</a></li>
            </ul>
          </div>

          {/* Office Contact Coordinates */}
          <div className="lg:col-span-4 space-y-3 font-medium opacity-85">
            <span className="text-xs uppercase tracking-wider arch-accent font-bold block mb-1">
              Office & Factory Address
            </span>
            <p className="opacity-80 leading-relaxed">
              {business.address}
            </p>
            <div className="pt-2 space-y-2">
              <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:opacity-100 hover:text-[var(--accent)] transition-colors">
                <Phone size={13} className="arch-accent" />
                <span>{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:opacity-100 hover:text-[var(--accent)] transition-colors">
                <Mail size={13} className="arch-accent" />
                <span>{business.email}</span>
              </a>
              <div className="flex items-center gap-2 opacity-70 pt-1">
                <MapPin size={13} className="arch-accent" />
                <span>Kukatpally Housing Board Colony, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60 font-medium">
          <div>
            © {new Date().getFullYear()} {business.name} & Turnkey Developers. All Rights Reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:opacity-100 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
