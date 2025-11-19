"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputTextareaField extends React.ComponentProps<"textarea"> {
  label?: string;
  styles?: string;
  name: string;
  required?: boolean;
}

export const InputTextareaField: FC<IInputTextareaField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { required = false } = props;
  return (
    <div className="input_wrapper relative w-full">
      {props.label && (
        <label
          className="text-sm text-[rgba(112,112,112,1)] font-normal pl-1"
          htmlFor={props.label}
        >
          {props.label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        className={`min-h-[100px] max-h-[300px] !text-[14px] !bg-[#F5F5F5] !text-[#333] !font-medium placeholder:text-[rgba(179,180,186,1)] placeholder:text-[14px] placeholder:font-light w-full py-4 px-5 border border-gray-300 rounded-lg focus-visible:outline-none ${props.styles}`}
        {...register(props.name)}
        {...props}
        id={props?.label}
      />
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">
            {message}
          </p>
        )}
      />
    </div>
  );
};
