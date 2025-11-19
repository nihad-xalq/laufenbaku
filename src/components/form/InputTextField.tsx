"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { FC, useEffect, useState } from "react";

interface IInputTextField extends React.ComponentProps<"input"> {
  label?: string;
  styles?: string;
  name: string;
  required?: boolean;
}

export const InputTextField: FC<IInputTextField> = ({ ...props }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const isSearchInput = props.name === "search";
  const [currentValue, setCurrentValue] = useState<string>(
    props.defaultValue?.toString() || ""
  );

  useEffect(() => {
    const subscription = watch((value) => {
      const fieldValue = value[props.name];
      if (fieldValue !== undefined && fieldValue !== currentValue) {
        setCurrentValue(fieldValue.toString());
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, props.name, currentValue]);

  const inputClassName = `${props.styles} ${
    isSearchInput ? "pl-10" : "pl-6"
  } w-full py-2 border border-[rgba(229,229,229,1)] text-[16px] !bg-[#F5F5F5] !text-[#333] !font-medium placeholder:text-[rgba(179,180,186,1)] placeholder:text-[14px] placeholder:font-light font-[400] rounded-lg !outline-none !ring-none`;

  return (
    <div className="input_wrapper relative w-full">
      {props.label && (
        <label
          className="text-sm text-[rgba(112,112,112,1)] font-normal"
          htmlFor={props.label}
        >
          {props.label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          className={inputClassName}
          {...register(props.name, {
            onChange: (e) => setCurrentValue(e.target.value),
          })}
          {...props}
          id={props.label}
          placeholder={props.placeholder}
          autoFocus={isSearchInput}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-[rgba(227,30,36,1)] text-[14px] font-normal mt-1">
            {`• ${message}`}
          </p>
        )}
      />
    </div>
  );
};
