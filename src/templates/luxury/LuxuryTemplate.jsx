import { LuxuryHero } from './sections/LuxuryHero';
import { LuxuryAbout } from './sections/LuxuryAbout';
import { LuxuryProjects } from './sections/LuxuryProjects';
import { LuxuryPhilosophy } from './sections/LuxuryPhilosophy';
import { LuxuryServices } from './sections/LuxuryServices';
import { LuxuryProcess } from './sections/LuxuryProcess';
import { LuxuryStats } from './sections/LuxuryStats';
import { LuxuryTestimonials } from './sections/LuxuryTestimonials';
import { LuxuryContact } from './sections/LuxuryContact';
import { LuxuryFooter } from './sections/LuxuryFooter';
import { WhatsAppButton } from '../../components/shared/WhatsAppButton';
import { ScrollProgress } from '../../components/shared/ScrollProgress';
import { Cursor } from '../../components/shared/Cursor';

export default function LuxuryTemplate({ business, theme, setTheme }) {
  return (
    <div className="luxury-experience site-luxury" id="top">
      <ScrollProgress template="luxury" />
      <Cursor template="luxury" />

      {/* 01. Hero with Cinematic Photograph & Oversized Editorial Typography */}
      <LuxuryHero business={business} theme={theme} setTheme={setTheme} />

      {/* 02. Studio Introduction Editorial Split Layout */}
      <LuxuryAbout business={business} />

      {/* 03. Featured Projects Magazine Composition */}
      <LuxuryProjects business={business} />

      {/* 04. Typographic Editorial Design Philosophy */}
      <LuxuryPhilosophy business={business} />

      {/* 05. Numbered Luxury Services List */}
      <LuxuryServices business={business} />

      {/* 06. Horizontal Luxury Process Timeline */}
      <LuxuryProcess business={business} />

      {/* 07. Minimal Oversized Statistics */}
      <LuxuryStats business={business} />

      {/* 08. Editorial Quotation Testimonials */}
      <LuxuryTestimonials business={business} />

      {/* 09. Premium Invitation & Understated Form */}
      <LuxuryContact business={business} />

      {/* 10. Multi-column Editorial Footer */}
      <LuxuryFooter business={business} />

      {/* Floating WhatsApp Concierge */}
      <WhatsAppButton business={business} template="luxury" />
    </div>
  );
}
