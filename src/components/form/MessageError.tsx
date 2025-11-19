"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { FC } from "react";

interface Props {
  name: string;
}

export const MessageError: FC<Props> = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <AnimatePresence>
      {errors[name] && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-[#E31E24] absolute -bottom-[25px] md:-bottom-[30px]">
                &#x2022; {message}
              </p>
            )}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
