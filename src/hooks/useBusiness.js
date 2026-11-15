import { useMemo, useState, useEffect, useCallback } from 'react';
import { defaultBusiness } from '../data/content';

export function useBusiness() {
  const [search, setSearch] = useState(() => window.location.search);

  useEffect(() => {
    const handlePopState = () => setSearch(window.location.search);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const business = useMemo(() => {
    const p = new URLSearchParams(search);
    const clean = (v, fallback) => {
      if (!v) return fallback;
      const trimmed = v.trim();
      return trimmed.length > 0 ? trimmed : fallback;
    };

    const rawTemplate = p.get('template')?.toLowerCase().trim();
    const validTemplates = ['luxury', 'modern', 'architectural'];
    const template = validTemplates.includes(rawTemplate) ? rawTemplate : 'luxury';

    const name = clean(p.get('name'), defaultBusiness.name);
    const location = clean(p.get('location'), defaultBusiness.location);
    const phone = clean(p.get('phone'), defaultBusiness.phone);
    const email = clean(p.get('email'), defaultBusiness.email);
    const whatsapp = clean(p.get('whatsapp'), phone.replace(/[^0-9]/g, '') || defaultBusiness.whatsapp);
    const address = clean(p.get('address'), defaultBusiness.address);
    const tagline = clean(p.get('tagline'), defaultBusiness.tagline);
    const instagram = clean(p.get('instagram'), defaultBusiness.instagram);

    // Derive elegant initials
    const words = name.split(/\s+/).filter(Boolean);
    const initials = words.length >= 2 
      ? (words[0][0] + words[1][0]).toUpperCase()
      : name.slice(0, 2).toUpperCase();

    return {
      name,
      location,
      phone,
      whatsapp,
      email,
      address,
      tagline,
      instagram,
      template,
      initials
    };
  }, [search]);

  const updateBusiness = useCallback((newParams) => {
    const currentParams = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([k, v]) => {
      if (v === null || v === undefined || v === '') {
        currentParams.delete(k);
      } else {
        currentParams.set(k, v);
      }
    });
    const newRelativePathQuery = window.location.pathname + '?' + currentParams.toString() + window.location.hash;
    window.history.pushState(null, '', newRelativePathQuery);
    setSearch(window.location.search);
  }, []);

  return { business, updateBusiness };
}
