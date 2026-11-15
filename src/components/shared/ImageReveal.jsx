import { motion } from 'motion/react';

export function ImageReveal({
  src,
  alt = '',
  className = '',
  aspectRatio = '16/10',
  imgClassName = '',
  priority = false
}) {
  return (
    <div
      className={`relative overflow-hidden image-reveal-container ${className}`}
      style={{ aspectRatio }}
    >
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}
