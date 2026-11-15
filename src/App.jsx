import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useBusiness } from './hooks/useBusiness';
import LuxuryTemplate from './templates/luxury/LuxuryTemplate';
import ModernTemplate from './templates/modern/ModernTemplate';
import ArchitecturalTemplate from './templates/architectural/ArchitecturalTemplate';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const templateMap = {
  luxury: LuxuryTemplate,
  modern: ModernTemplate,
  architectural: ArchitecturalTemplate
};

export default function App() {
  const { business } = useBusiness();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('interior_showcase_theme') || 'light';
  });

  // Apply theme dataset to html root element
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.activeTemplate = business.template;
    localStorage.setItem('interior_showcase_theme', theme);
  }, [theme, business.template]);

  // Update browser page title dynamically with business name and template identity
  useEffect(() => {
    const titles = {
      luxury: `${business.name} | Quiet Luxury Interior Atelier`,
      modern: `${business.name} | Modern Living & Residential Interiors`,
      architectural: `${business.name} | Turnkey Home Interiors & Developers`
    };
    document.title = titles[business.template] || `${business.name} | Interior Design`;
  }, [business.name, business.template]);

  // Smooth Scrolling with Lenis and GSAP Ticker
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, [business.template]);

  // Pick active template component (safely falling back to Luxury)
  const ActiveTemplate = templateMap[business.template] || LuxuryTemplate;

  return (
    <div className={`showcase-root template-${business.template}`}>
      <ActiveTemplate
        business={business}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}
