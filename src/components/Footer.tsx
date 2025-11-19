"use client";

import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  ariaLabel: string;
}

const inspirationLinks: FooterLink[] = [
  { name: "News", href: "/inspiration/news" },
  { name: "Ideas", href: "/inspiration/ideas" },
  {
    name: "Architectural Projects",
    href: "/inspiration/architectural-projects",
  },
  { name: "Collections", href: "/inspiration/collections" },
];

const productLinks: FooterLink[] = [
  { name: "Washbasins", href: "/products/washbasins" },
  { name: "Shower Toilets", href: "/products/shower-toilets" },
  { name: "Toilets", href: "/products/toilets" },
  { name: "Faucets", href: "/products/faucets" },
  { name: "Shower Trays", href: "/products/shower-trays" },
  { name: "Showers", href: "/products/showers" },
  { name: "Shower Enclosures", href: "/products/shower-enclosures" },
  { name: "Bathroom Furniture", href: "/products/bathroom-furniture" },
  { name: "Bathtubs", href: "/products/bathtubs" },
  { name: "Bidets", href: "/products/bidets" },
  { name: "Installation Systems", href: "/products/installation-systems" },
  { name: "Urinals", href: "/products/urinals" },
  { name: "Special Articles", href: "/products/special-articles" },
  { name: "Accessories", href: "/products/accessories" },
];

const serviceLinks: FooterLink[] = [
  { name: "Contact", href: "/services/contact" },
  { name: "Catalogues", href: "/services/catalogues" },
  { name: "Spare Parts", href: "/services/spare-parts" },
  { name: "Certificates", href: "/services/certificates" },
  { name: "Download Centre", href: "/services/download-centre" },
  { name: "BIM", href: "/services/bim" },
];

const aboutLinks: FooterLink[] = [
  { name: "Sustainability", href: "/about/sustainability" },
  { name: "Company", href: "/about/company" },
  { name: "Press Area", href: "/about/press-area" },
  { name: "Production", href: "/about/production" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FiFacebook,
    ariaLabel: "Facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FiInstagram,
    ariaLabel: "Instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FiLinkedin,
    ariaLabel: "LinkedIn",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FiTwitter,
    ariaLabel: "Twitter",
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Inspiration */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Inspiration
            </h3>
            <ul className="space-y-2">
              {inspirationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors w-max"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-4">Products</h3>
            <ul className="flex flex-col md:flex-row flex-wrap gap-x-2 gap-y-2">
              {productLinks.map((link) => (
                <li key={link.href} className="md:w-[calc((100%-2rem)/3)]">
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors w-max"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors w-max"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors w-max"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:text-white transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <div className="text-sm">
              <p>
                &copy; {new Date().getFullYear()} LAUFEN Bathrooms AG. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
