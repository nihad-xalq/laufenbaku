'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Inspiration */}
          <div>
            <h3 className="text-white font-semibold mb-4">Inspiration</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/inspiration/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/inspiration/ideas" className="hover:text-white transition-colors">
                  Ideas
                </Link>
              </li>
              <li>
                <Link href="/inspiration/architectural-projects" className="hover:text-white transition-colors">
                  Architectural Projects
                </Link>
              </li>
              <li>
                <Link href="/inspiration/collections" className="hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/washbasins" className="hover:text-white transition-colors">
                  Washbasins
                </Link>
              </li>
              <li>
                <Link href="/products/toilets" className="hover:text-white transition-colors">
                  Toilets
                </Link>
              </li>
              <li>
                <Link href="/products/shower-toilets" className="hover:text-white transition-colors">
                  Shower Toilets
                </Link>
              </li>
              <li>
                <Link href="/products/faucets" className="hover:text-white transition-colors">
                  Faucets
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Catalogues
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Press Area
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Production
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="text-sm">
              <p>&copy; {new Date().getFullYear()} LAUFEN Bathrooms AG. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

