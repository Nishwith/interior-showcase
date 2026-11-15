import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ business, template = 'luxury' }) {
  const cleanPhone = (business.whatsapp || business.phone || '').replace(/[^0-9]/g, '');
  const greeting = encodeURIComponent(
    `Hello ${business.name}, I came across your interior design showcase and would like to discuss a project in ${business.location}.`
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${greeting}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float-btn wa-float-${template}`}
      aria-label="Direct WhatsApp Consultation"
      title="Direct WhatsApp Consultation"
    >
      <MessageCircle size={22} className="wa-icon" />
      <span className="wa-text">Chat on WhatsApp</span>
    </a>
  );
}
