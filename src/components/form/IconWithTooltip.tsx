"use client";

import { ReactElement, useState } from "react";
import type { TooltipPosition } from "@/types/tooltip";
import { motion, AnimatePresence } from "framer-motion";

interface IconWithTooltipProps {
  icon: ReactElement;
  tooltipText: string;
  position?: TooltipPosition;
  customStyles?: string;
}

export const IconWithTooltip = ({
  icon,
  tooltipText,
  position = "top",
  customStyles,
}: IconWithTooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    "top-start": "bottom-full left-0 mb-2",
    "top-end": "bottom-full right-0 mb-2",
    "bottom-start": "top-full left-0 mt-2",
    "bottom-end": "top-full right-0 mt-2",
    "left-start": "right-full top-0 mr-2",
    "left-end": "right-full bottom-0 mr-2",
    "right-start": "left-full top-0 ml-2",
    "right-end": "left-full bottom-0 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap ${positionClasses[position]} ${customStyles || ""}`}
          >
            {tooltipText}
            <div
              className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
                position?.includes("top")
                  ? "top-full left-1/2 -translate-x-1/2 -mt-1"
                  : position?.includes("bottom")
                  ? "bottom-full left-1/2 -translate-x-1/2 -mb-1"
                  : position?.includes("left")
                  ? "left-full top-1/2 -translate-y-1/2 -ml-1"
                  : "right-full top-1/2 -translate-y-1/2 -mr-1"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

