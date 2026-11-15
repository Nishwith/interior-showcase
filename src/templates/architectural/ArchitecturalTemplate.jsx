import { ArchitecturalHero } from './sections/ArchitecturalHero';
import { ArchitecturalAbout } from './sections/ArchitecturalAbout';
import { ArchitecturalServices } from './sections/ArchitecturalServices';
import { ArchitecturalProjects } from './sections/ArchitecturalProjects';
import { ArchitecturalWhyUs } from './sections/ArchitecturalWhyUs';
import { ArchitecturalProcess } from './sections/ArchitecturalProcess';
import { ArchitecturalGallery } from './sections/ArchitecturalGallery';
import { ArchitecturalTestimonials } from './sections/ArchitecturalTestimonials';
import { ArchitecturalContact } from './sections/ArchitecturalContact';
import { ArchitecturalFooter } from './sections/ArchitecturalFooter';
import { WhatsAppButton } from '../../components/shared/WhatsAppButton';
import { ScrollProgress } from '../../components/shared/ScrollProgress';
import { Cursor } from '../../components/shared/Cursor';

export default function ArchitecturalTemplate({ business, theme, setTheme }) {
  return (
    <div className="architectural-experience site-architectural" id="top">
      <ScrollProgress template="architectural" />
      <Cursor template="architectural" />

      {/* 01 & 02. Navigation & Hero: Large interior photography, headline, 5.0 Google rating, enquiry CTAs */}
      <ArchitecturalHero business={business} theme={theme} setTheme={setTheme} />

      {/* 03. About the Company: Civil engineer-led execution, in-house factory, brand philosophy */}
      <ArchitecturalAbout business={business} />

      {/* 04. Services: Image-led modular kitchens, wardrobes, TV wall panelling, false ceilings */}
      <ArchitecturalServices business={business} />

      {/* 05. Featured Projects: Premium client home portfolio with varied proportions */}
      <ArchitecturalProjects business={business} />

      {/* 06. Why Choose Us: Civil engineer supervision, own CNC factory, transparent BOM, 45-day handover */}
      <ArchitecturalWhyUs business={business} />

      {/* 07. Work Process: 4-step execution workflow from consultation to key handover */}
      <ArchitecturalProcess business={business} />

      {/* 08. Gallery: Immersive interior photography with category filters & inspection modal */}
      <ArchitecturalGallery business={business} />

      {/* 09. Testimonials: Real verified customer reviews with Google ratings */}
      <ArchitecturalTestimonials business={business} />

      {/* 10. Contact: Detailed estimation form, service toggles, direct WhatsApp transmission, office info */}
      <ArchitecturalContact business={business} />

      {/* 11. Footer: Complete professional corporate footer */}
      <ArchitecturalFooter business={business} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton business={business} template="architectural" />
    </div>
  );
}
