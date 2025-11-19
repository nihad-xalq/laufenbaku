"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IIdTextField extends React.ComponentProps<"input"> {
  label?: string;
  styles?: string;
  name: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const IdTextField: FC<IIdTextField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const {
    label,
    styles,
    name,
    placeholder,
    onKeyDown,
    onKeyPress,
    ...inputProps
  } = props;

  const inputClassName = `${styles} w-full py-2 pr-5 pl-2 text-[16px] !text-[#333] !font-medium placeholder:text-[rgba(179,180,186,1)] placeholder:text-[14px] font-[400] rounded-lg rounded-ss-none rounded-es-none focus-visible:outline-none`;

  return (
    <div className="input_wrapper static w-full">
      {label && (
        <label
          className="text-sm text-[rgba(112,112,112,1)] font-normal"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        className={inputClassName}
        {...register(name)}
        {...inputProps}
        id={label}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        autoComplete={name === "email" ? "off" : "on"}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-[rgba(227,30,36,1)] text-[14px] font-normal mt-1 mr-auto absolute !left-22 w-max">
            {`• ${message}`}
          </p>
        )}
      />
    </div>
  );
};
