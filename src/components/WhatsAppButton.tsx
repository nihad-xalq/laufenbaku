"use client";

import { mobileMenuOpenAtom } from "@/atoms/mobileMenuAtom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useAtom } from "jotai";

export default function WhatsAppButton() {
  const [isMobileMenuOpen] = useAtom(mobileMenuOpenAtom);
  const phoneNumber = "+994775371165";
  const message = "Tell me more about LAUFEN products and services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {!isMobileMenuOpen && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-24 right-8 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
