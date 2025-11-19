"use client";

// import { ErrorMessage } from "@hookform/error-message";
import { useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";
// import { IdSelectArrowIcon } from "../../../../public/icons/form";

interface Option {
  id: number | string;
  name: string | number;
  text?: string | number;
}

interface IdSelectProps {
  name: string;
  label?: string;
  defaultOptions: Option[];
  disabled?: boolean;
  placeholder?: string;
}

export const IdSelect: React.FC<IdSelectProps> = ({
  name,
  label,
  defaultOptions = [],
  disabled = false,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    setValue,
    // formState: { errors },
    watch,
  } = useFormContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const selectedValue = watch(name);
    const defaultOption = defaultOptions.find(
      (option) => option.id === selectedValue
    );

    if (defaultOption) {
      setSelectedOption(defaultOption);
    }
  }, [name, defaultOptions, watch]);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setValue(name, option.id, { shouldValidate: true });
  };

  return (
    <div className="relative h-max w-full" ref={dropdownRef}>
      <div className="input_wrapper relative">
        {label !== "unvisible" ? (
          <label className="text-sm text-[rgba(112,112,112,1)]" htmlFor={label}>
            {label}
          </label>
        ) : null}
        <button
          type="button"
          className="w-full py-2 cursor-pointer pl-4 md:pl-5 flex flex-row justify-start items-center gap-1 md:gap-3"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          {selectedOption ? (
            <p className="text-ellipsis overflow-hidden whitespace-nowrap text-left !text-[#333] !font-medium">
              {selectedOption.name}
            </p>
          ) : (
            <p className="">
              <span className="text-gray-300">
                {placeholder ? placeholder : "Select option..."}
              </span>
            </p>
          )}
          {/* <IdSelectArrowIcon isOpen={isOpen} /> */}
        </button>
      </div>
      {isOpen && !disabled && (
        <div
          className={`willFastFadeIn absolute left-0 right-0 mt-2 p-1 bg-white rounded-[10px] z-10 max-h-[170px] overflow-y-scroll ${
            defaultOptions.length > 4 ? "" : ""
          }`}
          style={{ boxShadow: "0 0 10px 1px rgba(0,0,0,0.1)" }}
        >
          {defaultOptions.length > 0 ? (
            defaultOptions.map((option: Option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer rounded-[10px]"
                onClick={() => handleSelectOption(option)}
              >
                {option.name || option?.text}
              </div>
            ))
          ) : (
            <p className="text-center text-sm text-gray-500 p-1">No Options</p>
          )}
        </div>
      )}
      <input
        type="hidden"
        // not sure if ID must be here or not
        id={name}
        value={selectedOption ? selectedOption.id : ""}
        {...register(name)}
      />
      {/* <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1 absolute">
            {`• ${message}`}
          </p>
        )}
      /> */}
    </div>
  );
};
