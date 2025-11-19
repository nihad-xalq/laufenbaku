"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";

interface ProductsDropdownProps {
  onClose: () => void;
}

export default function ProductsDropdown({ onClose }: ProductsDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 pt-2 w-[800px] bg-transparent"
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-4">
        <div className="grid grid-cols-3 gap-0">
          {products.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="48px"
                    />
                  </div>
                  <span className="text-sm font-medium group-hover:underline">{item.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
