import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';

export function LuxuryContact({ business }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '$50,000—$150,000+',
    scope: 'Full Estate Architecture',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and contact email.');
      return;
    }
    setError('');

    // Functional dispatch via mailto / WhatsApp link
    const subject = encodeURIComponent(`Estate Commission Enquiry — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProperty Location: ${formData.location}\nScope: ${formData.scope}\nBudget Range: ${formData.budget}\n\nProject Notes:\n${formData.message}`
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const cleanPhone = (business.whatsapp || business.phone || '').replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello ${business.name}, I would like to schedule a private consultation regarding an interior architecture project in ${business.location}.`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="luxury-contact" className="luxury-contact-section py-28 md:py-36 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Premium Invitation */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-sans opacity-70 mb-4">
              <span className="w-6 h-[1px] bg-current" />
              <span>PRIVATE CONSULTATION</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] mb-8">
              Commission an
              <br />
              <em className="font-serif italic font-light">Atelier Estate.</em>
            </h2>

            <p className="text-sm font-light leading-relaxed opacity-80 mb-12">
              We accept a limited number of residential commissions each calendar year to ensure uncompromised devotion to every spatial detail.
            </p>

            <div className="space-y-6 pt-8 border-t border-current/15 text-xs font-light">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.25em] opacity-60 font-sans mb-1">
                  Atelier Address
                </span>
                <p className="opacity-90">{business.address}</p>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.25em] opacity-60 font-sans mb-1">
                  Private Enquiries
                </span>
                <a href={`mailto:${business.email}`} className="opacity-90 underline hover:opacity-100">
                  {business.email}
                </a>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.25em] opacity-60 font-sans mb-1">
                  Direct Line
                </span>
                <a href={`tel:${business.phone.replace(/\s+/g, '')}`} className="opacity-90 underline hover:opacity-100">
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-sans py-3 px-5 border border-current hover:bg-current hover:text-inverted transition-colors"
              >
                <MessageCircle size={15} />
                <span>Instant Concierge Chat</span>
              </button>
            </div>
          </div>

          {/* Right Column: Understated Underline Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 border border-current/15 bg-current/5 backdrop-blur-sm">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-2">
                Initiate Dialogue
              </h3>
              <p className="text-xs font-light opacity-75 mb-8">
                Share an outline of your estate or apartment. We review every brief within 24 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 size={40} className="mx-auto text-amber-500 opacity-90" />
                  <h4 className="font-serif text-2xl">Consultation Prepared</h4>
                  <p className="text-xs max-w-md mx-auto opacity-80 leading-relaxed font-light">
                    Your email client has been opened with your project brief directed to {business.email}. Alternatively, reach our studio directly via WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] uppercase tracking-[0.2em] underline font-sans"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-xs text-red-500 py-2 border-b border-red-500/30">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.2em] opacity-60 font-sans mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-transparent border-b border-current/30 focus:border-current py-2 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.2em] opacity-60 font-sans mb-2">
                        Private Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@estate.com"
                        className="w-full bg-transparent border-b border-current/30 focus:border-current py-2 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.2em] opacity-60 font-sans mb-2">
                        Property Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Jubilee Hills, Hyderabad"
                        className="w-full bg-transparent border-b border-current/30 focus:border-current py-2 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.2em] opacity-60 font-sans mb-2">
                        Project Scope
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full bg-transparent border-b border-current/30 focus:border-current py-2 text-sm outline-none transition-colors cursor-pointer"
                      >
                        <option value="Full Estate Architecture" className="bg-neutral-900 text-white">Full Estate Architecture</option>
                        <option value="Bespoke Penthouse Interior" className="bg-neutral-900 text-white">Bespoke Penthouse Interior</option>
                        <option value="Heritage Restoration" className="bg-neutral-900 text-white">Heritage Restoration</option>
                        <option value="Curated FF&E Styling" className="bg-neutral-900 text-white">Curated FF&E Styling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] opacity-60 font-sans mb-2">
                      Anticipated Investment Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-b border-current/30 focus:border-current py-2 text-sm outline-none transition-colors cursor-pointer"
                    >
                      <option value="$35,000—$75,000" className="bg-neutral-900 text-white">$35,000 — $75,000</option>
                      <option value="$75,000—$150,000" className="bg-neutral-900 text-white">$75,000 — $150,000</option>
                      <option value="$150,000—$300,000+" className="bg-neutral-900 text-white">$150,000 — $300,000+</option>
                      <option value="Bespoke Sovereign Budget" className="bg-neutral-900 text-white">Bespoke Sovereign Budget</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] opacity-60 font-sans mb-2">
                      Brief & Desired Ambience
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, spatial requirements, and materials of interest..."
                      className="w-full bg-transparent border-b border-current/30 focus:border-current py-2 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans py-3.5 px-8 bg-current text-inverted hover:opacity-85 transition-opacity"
                    >
                      <span>Transmit Brief</span>
                      <ArrowUpRight size={15} />
                    </button>
                    <span className="text-[10px] tracking-wider opacity-50 font-sans">
                      Confidentiality Ensured
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
