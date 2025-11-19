'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export default function Hero({ title, subtitle, backgroundImage, className = '' }: HeroProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <section
      className={`relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ${className}`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

