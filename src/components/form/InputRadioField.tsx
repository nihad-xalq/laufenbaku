"use client";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputRadioField extends React.ComponentProps<"input"> {
  label?: string;
  labelstyles?: string;
  inputStyles?: string;
}

export const InputRadioField: FC<IInputRadioField> = ({
  labelstyles,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="input-radio flex items-center lg:mr-8 max-[500px]:mb-2">
        <label
          htmlFor={props.label}
          className={`flex items-center cursor-pointer select-none max-[800px]:text-[14px] max-[800px]:relative ml-1 max-[800px]:top-[2px] text-sm ${labelstyles}`}
        >
          <input
            {...register(props.name!)}
            {...props}
            name={props.name}
            type="radio"
            id={props.label}
            className="hidden peer"
          />
          <div className="border border-[#D0D5DD] peer-checked:border-[#E31E24] w-4 h-4 flex items-center justify-center mr-2 rounded-full peer-checked:before:block before:hidden before:w-2 before:h-2 before:bg-[#E31E24] before:rounded-sm"></div>
          {props.label}
        </label>
      </div>

      <ErrorMessage
        errors={errors}
        name={props.name!}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">
            {message}
          </p>
        )}
      />
    </>
  );
};
