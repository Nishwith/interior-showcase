import { ModernHero } from './sections/ModernHero';
import { ModernAbout } from './sections/ModernAbout';
import { ModernProjects } from './sections/ModernProjects';
import { ModernApproach } from './sections/ModernApproach';
import { ModernServices } from './sections/ModernServices';
import { ModernJourney } from './sections/ModernJourney';
import { ModernBenefits } from './sections/ModernBenefits';
import { ModernTestimonials } from './sections/ModernTestimonials';
import { ModernContact } from './sections/ModernContact';
import { ModernFooter } from './sections/ModernFooter';
import { WhatsAppButton } from '../../components/shared/WhatsAppButton';
import { ScrollProgress } from '../../components/shared/ScrollProgress';
import { Cursor } from '../../components/shared/Cursor';

export default function ModernTemplate({ business, theme, setTheme }) {
  return (
    <div className="modern-experience site-modern" id="top">
      <ScrollProgress template="modern" />
      <Cursor template="modern" />

      {/* 01. Split-screen Modern Hero with Floating Project Tag */}
      <ModernHero business={business} theme={theme} setTheme={setTheme} />

      {/* 02. Modern Image Collage & Lifestyle Philosophy */}
      <ModernAbout business={business} />

      {/* 03. Interactive Asymmetric Project Grid with Category Filters */}
      <ModernProjects business={business} />

      {/* 04. Three Interactive Design Approach Pillars */}
      <ModernApproach business={business} />

      {/* 05. Illustrated Turnkey Service Panels */}
      <ModernServices business={business} />

      {/* 06. Alternating Milestone Journey Timeline */}
      <ModernJourney business={business} />

      {/* 07. "Why Choose Us" Layered Benefits Section */}
      <ModernBenefits business={business} />

      {/* 08. Client Testimonials Slider with Rating Badges */}
      <ModernTestimonials business={business} />

      {/* 09. Split Contact with WhatsApp Consultation CTA */}
      <ModernContact business={business} />

      {/* 10. Structured Modern Footer with Service Links */}
      <ModernFooter business={business} />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton business={business} template="modern" />
    </div>
  );
}
