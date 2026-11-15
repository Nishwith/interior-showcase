import { motion } from 'motion/react';

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  tag = 'div',
  direction = 'up'
}) {
  const Component = motion[tag] || motion.div;

  const yOffset = direction === 'up' ? 32 : direction === 'down' ? -32 : 0;
  const xOffset = direction === 'left' ? 32 : direction === 'right' ? -32 : 0;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
