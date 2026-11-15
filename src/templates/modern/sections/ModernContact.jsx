import { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export function ModernContact({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '3BHK Apartment',
    budget: '$20,000—$40,000',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const cleanPhone = (business.whatsapp || business.phone || '').replace(/[^0-9]/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');

    // Pre-fill WhatsApp message
    const waText = encodeURIComponent(
      `Hello ${business.name}!\nI'd like to get an interior estimate for my home.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nHome Type: ${formData.propertyType}\nBudget: ${formData.budget}\nNotes: ${formData.notes}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  const handleQuickWhatsApp = () => {
    const waText = encodeURIComponent(
      `Hello ${business.name}, I want a quick quote for an interior project in ${business.location}.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${waText}`, '_blank');
  };

  return (
    <section id="modern-contact" className="modern-contact-section py-24 lg:py-32 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information & Direct WhatsApp Hero */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block mb-2">
                LET'S TALK ABOUT YOUR HOME
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Get an Instant Quote & 3D Consultation.
              </h2>
              <p className="text-sm opacity-80 leading-relaxed font-normal">
                Drop by our experience centre or chat directly with our senior designers. No sales push, just helpful advice for your floorplan.
              </p>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/25 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <span className="font-extrabold text-sm block">Fastest Reply: WhatsApp</span>
                  <span className="text-xs opacity-75 font-medium">Avg response time: 5 minutes</span>
                </div>
              </div>
              <p className="text-xs opacity-80 leading-relaxed">
                Send us your floorplan PDF or photos directly on WhatsApp for an immediate ball-park quotation.
              </p>
              <button
                type="button"
                onClick={handleQuickWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageCircle size={15} />
                <span>Chat with Senior Designer</span>
              </button>
            </div>

            {/* Studio Info List */}
            <div className="space-y-4 pt-4 text-xs font-semibold">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-600 flex-shrink-0" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-600 flex-shrink-0" />
                <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="hover:underline">{business.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-600 flex-shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:underline">{business.email}</a>
              </div>
            </div>
          </div>

          {/* Right Column: Attractive Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-current/5 border border-current/15 shadow-2xl">
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                Estimate Calculator Brief
              </h3>
              <p className="text-xs opacity-70 mb-6 font-medium">
                Fill in your home details to receive a customized scope breakdown.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
                  <h4 className="text-2xl font-extrabold">Estimate Requested!</h4>
                  <p className="text-xs opacity-80 max-w-sm mx-auto leading-relaxed">
                    WhatsApp has launched with your enquiry directed to {business.name}. Our lead design architect will respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-orange-600 underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="text-xs text-red-500 p-3 rounded-lg bg-red-500/10 border border-red-500/20 font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border border-current/20 bg-background text-sm focus:border-orange-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border border-current/20 bg-background text-sm focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border border-current/20 bg-background text-sm focus:border-orange-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1.5">
                        Property Configuration
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full py-3 px-4 rounded-xl border border-current/20 bg-background text-sm focus:border-orange-500 outline-none cursor-pointer"
                      >
                        <option value="2BHK Apartment">2BHK Apartment (1,100—1,500 sq.ft)</option>
                        <option value="3BHK Apartment">3BHK Apartment (1,600—2,400 sq.ft)</option>
                        <option value="4BHK / Penthouse">4BHK / Penthouse (2,500+ sq.ft)</option>
                        <option value="Independent Villa">Independent Villa / Duplex</option>
                        <option value="Kitchen Only Renovation">Modular Kitchen Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl border border-current/20 bg-background text-sm focus:border-orange-500 outline-none cursor-pointer"
                    >
                      <option value="$12,000—$20,000">$12,000 — $20,000 (Essential Turnkey)</option>
                      <option value="$20,000—$40,000">$20,000 — $40,000 (Premium Residential)</option>
                      <option value="$40,000—$75,000">$40,000 — $75,000 (Luxury Signature)</option>
                      <option value="$75,000+">$75,000+ (High-End Villa)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1.5">
                      Your Needs / Floorplan Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your possession date, style preferences..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full py-3 px-4 rounded-xl border border-current/20 bg-background text-sm focus:border-orange-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.02]"
                  >
                    <Send size={16} />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
