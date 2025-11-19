"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputCheckboxField extends React.ComponentProps<"input"> {
  label: string;
  styles?: string;
  labelstyles?: string;
  checked?: boolean;
}

export const InputCheckboxField: FC<IInputCheckboxField> = ({
  name,
  label,
  checked,
  styles,
  labelstyles,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="checkbox-wrapper w-full flex flex-col items-start">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={`${styles} lg:mr-1 cursor-pointer appearance-none min-w-[18px] w-[18px] min-h-[18px] h-[18px] bg-[rgba(255, 255, 255, 1)] rounded-[4px] border border-[rgba(194,194,194,1)] hover:border-[rgba(227,30,36,1)] checked:bg-[rgba(227,30,36,1)] checked:border-transparent relative checked:after:content-[''] checked:after:absolute checked:after:left-[6px] checked:after:top-0 checked:after:w-[5px] checked:after:h-[13px] checked:after:border-white checked:after:border-r-2 checked:after:border-b-2 checked:after:rotate-45`}
          {...register(name!)}
          {...props}
          id={label}
          checked={checked}
        />
        <label
          htmlFor={label}
          className={`${labelstyles} text-[14px] text-gray-800 px-1.5 cursor-pointer`}
        >
          {label}
        </label>
      </div>
      <ErrorMessage
        errors={errors}
        name={name!}
        render={({ message }) => (
          <p className="text-red-500 text-sm mt-1 pl-1">{message}</p>
        )}
      />
    </div>
  );
};
