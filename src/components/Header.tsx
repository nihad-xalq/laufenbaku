"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InspirationDropdown from "./InspirationDropdown";
import ProductsDropdown from "./ProductsDropdown";
import ServicesDropdown from "./ServicesDropdown";
import AboutDropdown from "./AboutDropdown";
import { CFormProvider } from "./form/CFormProvider";
import { InputTextField } from "./form/InputTextField";

interface SearchFormData {
  search?: string;
}

const schema = yup.object().shape({
  search: yup.string().optional().default(""),
}) as yup.ObjectSchema<SearchFormData>;

export default function Header() {
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

  const handleSubmit = (data: SearchFormData) => {
    console.log("Search:", data.search);
    // Handle search logic here
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
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
                <span>Inspiration</span>
                <FiChevronDown className="text-sm" />
              </button>
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
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
                <span>Products</span>
                <FiChevronDown className="text-sm" />
              </button>
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
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
                <span>Services</span>
                <FiChevronDown className="text-sm" />
              </button>
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
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2">
                <span>About</span>
                <FiChevronDown className="text-sm" />
              </button>
              <AnimatePresence>
                {isAboutOpen && <AboutDropdown onClose={closeAbout} />}
              </AnimatePresence>
            </div>
          </nav>

          {/* Search Bar */}
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
          </div>
        </div>
      </div>
    </motion.header>
  );
}
