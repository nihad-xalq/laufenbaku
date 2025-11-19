'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface InspirationDropdownProps {
  onClose: () => void;
}

export default function InspirationDropdown({ onClose }: InspirationDropdownProps) {
  const items = [
    { name: 'News', href: '/inspiration/news' },
    { name: 'Ideas', href: '/inspiration/ideas' },
    { name: 'Architectural Projects', href: '/inspiration/architectural-projects' },
    { name: 'Collections', href: '/inspiration/collections' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 pt-2 w-64 bg-transparent"
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
        {items.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

