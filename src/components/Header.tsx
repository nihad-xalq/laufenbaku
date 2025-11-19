"use client";

import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { mobileMenuOpenAtom } from "@/atoms/mobileMenuAtom";
import { motion, AnimatePresence } from "framer-motion";
import InspirationDropdown from "./InspirationDropdown";
import { InputTextField } from "./form/InputTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { CFormProvider } from "./form/CFormProvider";
import { useState, useRef, useEffect } from "react";
import ServicesDropdown from "./ServicesDropdown";
import ProductsDropdown from "./ProductsDropdown";
import AboutDropdown from "./AboutDropdown";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { useAtom } from "jotai";
import Link from "next/link";
import * as yup from "yup";

interface SearchFormData {
  search?: string;
}

const schema = yup.object().shape({
  search: yup.string().optional().default(""),
}) as yup.ObjectSchema<SearchFormData>;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(mobileMenuOpenAtom);
  const [isInspirationOpen, setIsInspirationOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const methods = useForm<SearchFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      search: "",
    },
  });
  const inspirationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInspirationEnter = () => {
    if (inspirationTimeoutRef.current) {
      clearTimeout(inspirationTimeoutRef.current);
    }
    setIsInspirationOpen(true);
  };

  const handleInspirationLeave = () => {
    inspirationTimeoutRef.current = setTimeout(() => {
      setIsInspirationOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleProductsEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200); // 200ms delay before closing
  };

  const closeInspiration = () => {
    if (inspirationTimeoutRef.current) {
      clearTimeout(inspirationTimeoutRef.current);
    }
    setIsInspirationOpen(false);
  };

  const closeProducts = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsOpen(false);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const closeServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(false);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200);
  };

  const closeAbout = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutOpen(false);
  };

  useEffect(() => {
    return () => {
      if (inspirationTimeoutRef.current) {
        clearTimeout(inspirationTimeoutRef.current);
      }
      if (productsTimeoutRef.current) {
        clearTimeout(productsTimeoutRef.current);
      }
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      if (aboutTimeoutRef.current) {
        clearTimeout(aboutTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleSubmit = (data: SearchFormData) => {
    console.log("Search:", data.search);
    // Handle search logic here
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsInspirationOpen(false);
    setIsProductsOpen(false);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  const toggleMobileDropdown = (
    dropdown: "inspiration" | "products" | "services" | "about"
  ) => {
    if (dropdown === "inspiration") {
      setIsInspirationOpen(!isInspirationOpen);
      setIsProductsOpen(false);
      setIsServicesOpen(false);
      setIsAboutOpen(false);
    } else if (dropdown === "products") {
      setIsProductsOpen(!isProductsOpen);
      setIsInspirationOpen(false);
      setIsServicesOpen(false);
      setIsAboutOpen(false);
    } else if (dropdown === "services") {
      setIsServicesOpen(!isServicesOpen);
      setIsInspirationOpen(false);
      setIsProductsOpen(false);
      setIsAboutOpen(false);
    } else if (dropdown === "about") {
      setIsAboutOpen(!isAboutOpen);
      setIsInspirationOpen(false);
      setIsProductsOpen(false);
      setIsServicesOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer"
            >
              LAUFEN
            </motion.span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Inspiration */}
            <div
              className="relative"
              onMouseEnter={handleInspirationEnter}
              onMouseLeave={handleInspirationLeave}
            >
              <Link
                href="/inspiration"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                <span>Inspiration</span>
                <FiChevronDown className="text-sm" />
              </Link>
              <AnimatePresence>
                {isInspirationOpen && (
                  <InspirationDropdown onClose={closeInspiration} />
                )}
              </AnimatePresence>
            </div>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <Link
                href="/products"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                <span>Products</span>
                <FiChevronDown className="text-sm" />
              </Link>
              <AnimatePresence>
                {isProductsOpen && <ProductsDropdown onClose={closeProducts} />}
              </AnimatePresence>
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href="/services"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                <span>Services</span>
                <FiChevronDown className="text-sm" />
              </Link>
              <AnimatePresence>
                {isServicesOpen && <ServicesDropdown onClose={closeServices} />}
              </AnimatePresence>
            </div>

            {/* About */}
            <div
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Link
                href="/about"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                <span>About</span>
                <FiChevronDown className="text-sm" />
              </Link>
              <AnimatePresence>
                {isAboutOpen && <AboutDropdown onClose={closeAbout} />}
              </AnimatePresence>
            </div>
          </nav>

          {/* Search Bar & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block w-64">
              <CFormProvider onSubmit={handleSubmit} methods={methods}>
                <InputTextField
                  name="search"
                  placeholder="Search..."
                  styles="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm !bg-white"
                />
              </CFormProvider>
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <button className="sm:hidden p-2 text-gray-700 hover:text-gray-900">
              <FiSearch className="w-5 h-5" />
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-screen w-80 bg-white shadow-xl z-50 flex flex-col md:hidden"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between py-4 px-4 border-b border-gray-200 shrink-0">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex items-center"
                >
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">
                    LAUFEN
                  </span>
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {/* Search in Mobile */}
                <div className="relative mb-4">
                  <CFormProvider onSubmit={handleSubmit} methods={methods}>
                    <InputTextField
                      name="search"
                      placeholder="Search..."
                      styles="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm !bg-white"
                    />
                  </CFormProvider>
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Inspiration */}
                <div className="border-b border-gray-200 pb-2">
                  <div className="w-full flex items-center justify-between">
                    <Link
                      href="/inspiration"
                      onClick={closeMobileMenu}
                      className="text-gray-700 hover:text-gray-900 font-medium py-3 md:flex-1"
                    >
                      Inspiration
                    </Link>
                    <button
                      onClick={() => toggleMobileDropdown("inspiration")}
                      className="p-1 text-gray-500 hover:text-gray-900 bg-gray-200 rounded-full"
                    >
                      <FiChevronDown
                        className={`text-sm transition-transform ${
                          isInspirationOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isInspirationOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          <Link
                            href="/inspiration/news"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            News
                          </Link>
                          <Link
                            href="/inspiration/ideas"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Ideas
                          </Link>
                          <Link
                            href="/inspiration/architectural-projects"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Architectural Projects
                          </Link>
                          <Link
                            href="/inspiration/collections"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Collections
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Products */}
                <div className="border-b border-gray-200 pb-2">
                  <div className="w-full flex items-center justify-between">
                    <Link
                      href="/products"
                      onClick={closeMobileMenu}
                      className="text-gray-700 hover:text-gray-900 font-medium py-3 md:flex-1"
                    >
                      Products
                    </Link>
                    <button
                      onClick={() => toggleMobileDropdown("products")}
                      className="p-1 text-gray-500 hover:text-gray-900 bg-gray-200 rounded-full"
                    >
                      <FiChevronDown
                        className={`text-sm transition-transform ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          <Link
                            href="/products/washbasins"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Washbasins
                          </Link>
                          <Link
                            href="/products/toilets"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Toilets
                          </Link>
                          <Link
                            href="/products/shower-toilets"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Shower Toilets
                          </Link>
                          <Link
                            href="/products/faucets"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Faucets
                          </Link>
                          <Link
                            href="/products/showers"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Showers
                          </Link>
                          <Link
                            href="/products/shower-trays"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Shower Trays
                          </Link>
                          <Link
                            href="/products/shower-enclosures"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Shower Enclosures
                          </Link>
                          <Link
                            href="/products/bathtubs"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Bathtubs
                          </Link>
                          <Link
                            href="/products/bathroom-furniture"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Bathroom Furniture
                          </Link>
                          <Link
                            href="/products/bidets"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Bidets
                          </Link>
                          <Link
                            href="/products/urinals"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Urinals
                          </Link>
                          <Link
                            href="/products/installation-systems"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Installation Systems
                          </Link>
                          <Link
                            href="/products/special-articles"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Special Articles
                          </Link>
                          <Link
                            href="/products/accessories"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Accessories
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services */}
                <div className="border-b border-gray-200 pb-2">
                  <div className="w-full flex items-center justify-between">
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
                      className="text-gray-700 hover:text-gray-900 font-medium py-3 md:flex-1"
                    >
                      Services
                    </Link>
                    <button
                      onClick={() => toggleMobileDropdown("services")}
                      className="p-1 text-gray-500 hover:text-gray-900 bg-gray-200 rounded-full"
                    >
                      <FiChevronDown
                        className={`text-sm transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          <Link
                            href="/services/contact"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Contact
                          </Link>
                          <Link
                            href="/services/catalogues"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Catalogues
                          </Link>
                          <Link
                            href="/services/spare-parts"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Spare Parts
                          </Link>
                          <Link
                            href="/services/certificates"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Certificates
                          </Link>
                          <Link
                            href="/services/download-centre"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Download Centre
                          </Link>
                          <Link
                            href="/services/bim"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            BIM
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About */}
                <div className="border-b border-gray-200 pb-2">
                  <div className="w-full flex items-center justify-between">
                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="text-gray-700 hover:text-gray-900 font-medium py-3 md:flex-1"
                    >
                      About
                    </Link>
                    <button
                      onClick={() => toggleMobileDropdown("about")}
                      className="p-1 text-gray-500 hover:text-gray-900 bg-gray-200 rounded-full"
                    >
                      <FiChevronDown
                        className={`text-sm transition-transform ${
                          isAboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          <Link
                            href="/about/sustainability"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Sustainability
                          </Link>
                          <Link
                            href="/about/company"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Company
                          </Link>
                          <Link
                            href="/about/press-area"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Press Area
                          </Link>
                          <Link
                            href="/about/production"
                            onClick={closeMobileMenu}
                            className="block py-2 text-gray-600 hover:text-gray-900"
                          >
                            Production
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Social Media - Fixed at Bottom */}
              <div className="border-t border-gray-200 pt-4 pb-4 px-4 shrink-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center space-x-4">
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <FiFacebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
