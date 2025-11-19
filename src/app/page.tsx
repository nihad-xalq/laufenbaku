'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Home() {
  const cards = [
    {
      href: '/inspiration',
      title: 'Inspiration',
      description: 'Discover design ideas, architectural projects, and the latest collections.',
      cta: 'Explore →',
    },
    {
      href: '/products',
      title: 'Products',
      description: 'Browse our premium range of washbasins, toilets, faucets, and more.',
      cta: 'Shop Now →',
    },
    {
      href: '/services',
      title: 'Services',
      description: 'Get support, download catalogues, and access our professional services.',
      cta: 'Learn More →',
    },
    {
      href: '/about',
      title: 'About',
      description: 'Learn about our company, sustainability initiatives, and craftsmanship.',
      cta: 'Discover →',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Since 1892"
        subtitle="We at LAUFEN have enabled bathroom experiences for both body and soul. Today, we offer a holistic bathroom culture that emphasises sustainability, excellent design, innovation, and technological leadership."
      />

      {/* Featured Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.href}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Link href={card.href} className="group block">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 h-full transition-shadow hover:shadow-xl"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <span className="text-gray-900 font-medium group-hover:underline">
                      {card.cta}
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Premium Bathroom Culture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Our brand's personality reflects a symbiosis of design, quality, and functionality. 
            As a premium brand under the Roca umbrella, we are proud to be one of the world's 
            leading manufacturers, supported by a global distribution network.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
