import { useEffect, useState } from 'react';

export function Cursor({ template = 'luxury' }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseEnterInteractive = () => setHovered(true);
    const onMouseLeaveInteractive = () => setHovered(false);

    window.addEventListener('mousemove', onMouseMove);

    const attachListeners = () => {
      const interactiveEls = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor cursor-${template} ${hovered ? 'is-hovering' : ''}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }}
    />
  );
}
