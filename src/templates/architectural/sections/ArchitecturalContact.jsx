import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { architecturalContent } from '../../../data/content';

export function ArchitecturalContact({ business }) {
  const { officeInfo } = architecturalContent;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: ['Modular Kitchens', 'Wardrobes & Bedrooms'],
    propertyType: '3BHK Apartment',
    possession: 'Immediate / Ready',
    budget: '₹5 Lakhs — ₹10 Lakhs',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const serviceOptions = [
    'Modular Kitchens',
    'Wardrobes & Bedrooms',
    'TV Units & Wall Panelling',
    'False Ceilings & Lighting',
    'Crockery Units & Partitions',
    'Complete Turnkey Interiors'
  ];

  const cleanPhone = (business.whatsapp || business.phone || '').replace(/[^0-9]/g, '');

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    const cleanUserPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanUserPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (formData.services.length === 0) {
      setError('Please choose at least one service you need.');
      return;
    }
    setError('');

    // Pre-fill WhatsApp message
    const waText = encodeURIComponent(
      `Hello ${business.name}!\nI would like an interior design estimate for my home.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Services Needed:* ${formData.services.join(', ')}\n*Property:* ${formData.propertyType}\n*Possession Horizon:* ${formData.possession}\n*Estimated Budget:* ${formData.budget}\n*Notes:* ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  const handleQuickWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${business.name}, I want a quick quote for an interior project in ${business.location}.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="arch-contact" className="py-20 lg:py-28 border-b arch-border arch-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Credentials & Office Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase arch-accent block mb-2">
                TALK TO OUR CIVIL ENGINEERS
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight arch-text leading-tight mb-4">
                Visit Our Office or Call Today.
              </h2>
              <p className="text-sm arch-text-muted leading-relaxed font-normal">
                Drop by our Kukatpally office or invite us for a free site inspection and laser measurement at your flat or villa.
              </p>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 rounded-3xl bg-emerald-600/10 border border-emerald-600/25 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <span className="font-bold text-sm arch-text block">Instant WhatsApp Support</span>
                  <span className="text-xs arch-text-muted">Direct reach to business owner</span>
                </div>
              </div>
              <p className="text-xs arch-text-muted leading-relaxed font-normal">
                Share your floorplan PDF or rough room dimensions directly on WhatsApp for an immediate quotation.
              </p>
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 transition-all"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp Directly</span>
              </button>
            </div>

            {/* Office Coordinates List */}
            <div className="p-6 rounded-3xl border arch-border arch-card space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="arch-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold arch-text block mb-0.5">Office Address</span>
                  <p className="arch-text-muted leading-relaxed">{business.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t arch-border">
                <Phone size={18} className="arch-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold arch-text block mb-0.5">Direct Phone Lines</span>
                  <div className="space-y-1">
                    <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="arch-text-muted hover:text-[var(--accent)] font-semibold block">
                      {business.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t arch-border">
                <Mail size={18} className="arch-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold arch-text block mb-0.5">Email Address</span>
                  <a href={`mailto:${business.email}`} className="arch-text-muted hover:text-[var(--accent)] font-semibold">
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t arch-border">
                <Clock size={18} className="arch-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold arch-text block mb-0.5">Working Hours</span>
                  <p className="arch-text-muted">{officeInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Estimation Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl border arch-border arch-card shadow-2xl">
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold arch-text mb-2">
                Tell Us What You Need.
              </h3>
              <p className="text-xs arch-text-muted mb-8 font-medium">
                Fill this in and it opens WhatsApp with everything written out. Press send, and your brief reaches the owner directly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
                  <h4 className="font-serif-display text-2xl font-bold arch-text">Details Prepared!</h4>
                  <p className="text-xs arch-text-muted max-w-sm mx-auto leading-relaxed">
                    WhatsApp has launched with your project parameters directed to {business.name}. Our lead civil engineer will respond promptly with preliminary budget guidance.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold arch-accent underline uppercase tracking-wider"
                  >
                    Submit another estimate enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-xs text-red-600 bg-red-500/10 border border-red-500/25 p-3 rounded-xl font-semibold">
                      {error}
                    </div>
                  )}

                  {/* Service Toggle Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider arch-text-muted mb-2.5">
                      Services You Need (Select all that apply) *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = formData.services.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`py-2 px-3.5 rounded-xl text-xs font-semibold transition-all ${
                              isSelected
                                ? 'arch-bg-accent text-white shadow-sm'
                                : 'arch-bg-subtle border arch-border arch-text hover:border-[var(--accent)]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Phone Input */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider arch-text-muted mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Prabhakar Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border arch-border arch-bg arch-text text-sm focus:border-[var(--accent)] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider arch-text-muted mb-1.5">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 96032 24391"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border arch-border arch-bg arch-text text-sm focus:border-[var(--accent)] outline-none"
                      />
                    </div>
                  </div>

                  {/* Property Type and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider arch-text-muted mb-1.5">
                        Property Configuration
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border arch-border arch-bg arch-text text-sm focus:border-[var(--accent)] outline-none cursor-pointer"
                      >
                        <option value="2BHK Apartment">2BHK Apartment (1,000—1,400 sq.ft)</option>
                        <option value="3BHK Apartment">3BHK Apartment (1,600—2,400 sq.ft)</option>
                        <option value="4BHK / Duplex">4BHK / Duplex (2,500+ sq.ft)</option>
                        <option value="Independent Villa">Independent Villa (3,000+ sq.ft)</option>
                        <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider arch-text-muted mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border arch-border arch-bg arch-text text-sm focus:border-[var(--accent)] outline-none cursor-pointer"
                      >
                        <option value="₹3 Lakhs — ₹5 Lakhs">₹3 Lakhs — ₹5 Lakhs</option>
                        <option value="₹5 Lakhs — ₹10 Lakhs">₹5 Lakhs — ₹10 Lakhs (Popular)</option>
                        <option value="₹10 Lakhs — ₹18 Lakhs">₹10 Lakhs — ₹18 Lakhs (Premium)</option>
                        <option value="₹18 Lakhs+">₹18 Lakhs+ (Luxury Villa)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Comments */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider arch-text-muted mb-1.5">
                      Anything Else We Should Know (Floorplan, location...)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. My flat is in Kukatpally / Hitec City, possession next month..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl border arch-border arch-bg arch-text text-sm focus:border-[var(--accent)] outline-none resize-none"
                    />
                  </div>

                  {/* Submission CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl arch-bg-accent hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[var(--accent)]/20 transition-all hover:scale-[1.01]"
                  >
                    <Send size={16} />
                    <span>Send Details on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center arch-text-muted font-medium">
                    Zero spam. Message connects directly to our lead civil engineer on WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
