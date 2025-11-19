"use client";
import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"label"> {
  name: string;
  text?: string;
  required?: boolean;
}

export const Label: FC<Props> = ({ name, text, required = false }) => {
  return (
    <label htmlFor={name} className="text-sm text-[#707070] mb-[6px] block">
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
