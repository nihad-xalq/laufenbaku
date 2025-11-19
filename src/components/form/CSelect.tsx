"use client";

import type {
  ContainerProps,
  ControlProps,
  DropdownIndicatorProps,
  InputProps,
  MenuProps,
  ValueContainerProps,
} from "react-select";
// import { DropdownIndicatorIcon } from "../../../public/icons/form";
// Note: DropdownIndicatorIcon needs to be imported from your icons directory
import { Controller, useFormContext } from "react-hook-form";
import { ComponentProps, FC, ReactElement } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useTranslations } from "next-intl";
import { components } from "react-select";
import { motion } from "framer-motion";
import Select from "react-select";
import { Label } from "./Label";
import { cn } from "@/lib/cn";

const createDropdownIndicator = (icon?: ReactElement) => {
  const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => (
    <components.DropdownIndicator
      {...props}
      className="!pr-[14px] !flex !items-center"
    >
      <motion.div
        animate={{ rotate: props.selectProps.menuIsOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-4 h-4"
      >
        {/* <DropdownIndicatorIcon /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </components.DropdownIndicator>
  );
  return DropdownIndicator;
};

const Control: FC<ControlProps> = (props) => {
  return (
    <components.Control
      {...props}
      className={cn(
        "!bg-[#F5F5F5] !text-[#A6A6A6] !flex !w-full pl-[14px] !border-none !h-10 !disabled:cursor-not-allowed !disabled:text-[#B3B4BA] !rounded-[10px] !relative !outline-none !cursor-pointer group  ",
        props.isFocused &&
          "!duration-300 !ease-in-out border !border-[#E31E24] !animate-removeShadow"
      )}
    >
      {props.children}
    </components.Control>
  );
};

const Input: FC<InputProps> = (props) => (
  <components.Input {...props} className=" !h-full  !m-0 pl-0 " />
);

const SelectContainer: FC<ContainerProps> = (props) => (
  <components.SelectContainer {...props}>
    {props.children}
  </components.SelectContainer>
);

const ValueContainer: FC<ValueContainerProps> = (props) => (
  <components.ValueContainer
    {...props}
    className=" !h-full  !m-0 !p-0 !pl-2 !text-[#333] !font-medium"
  >
    {props.children}
  </components.ValueContainer>
);

const Menu: FC<MenuProps> = (props) => (
  <components.Menu
    {...props}
    className="!bg-[#F5F5F5] !rounded-[10px] !border !p-0 !overflow-y-auto !border-[#E5E5E5] !border-none shadow-lg"
  >
    {props.selectProps.menuIsOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {props.children}
      </motion.div>
    )}
  </components.Menu>
);

// const Option: FC<OptionProps> = (props) => {
//   return (
//     <components.Option
//       {...props}
//       className={cn(
//         "!cursor-pointer !hover:bg-[#F7F7F9] !hover:text-[#E31E24] !pl-[14px] !h-[40px] !flex !items-center !justify-between !pr-[14px]",
//         props.isSelected && "!bg-[#F7F7F9] !text-[#E31E24]"
//       )}
//     >
//       {props.children}
//       <FaChevronDown className="fill-[#E31E24] w-[24px] h-[24px]" />
//     </components.Option>
//   );
// };

interface SelectOption {
  readonly label: string;
  readonly value: string;
}

interface Props<T extends SelectOption> extends ComponentProps<"input"> {
  readonly name: string;
  readonly label?: string;
  readonly required?: boolean;
  readonly defaultOptions: T[];
  cOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactElement;
}

export const CSelect = <T extends SelectOption>({
  name,
  cOnChange,
  label,
  required = false,
  disabled,
  placeholder,
  defaultOptions,
  icon,
}: Props<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const t = useTranslations("CSelect");
  return (
    <div className="relative flex flex-col">
      <Label name={name} text={label} required={required} />
      <div
        className={cn(
          "w-full !border !border-[#E5E5E5] rounded-[10px]",
          errors[name]?.message && "!border-[#FDA29B]",
          disabled && "!cursor-not-allowed !text-[#B3B4BA]"
        )}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Select
              onChange={(e) => {
                onChange(e);
                if (cOnChange) {
                  cOnChange(e as React.ChangeEvent<HTMLInputElement>);
                }
              }}
              onBlur={onBlur}
              value={value}
              isDisabled={disabled}
              isSearchable={false}
              instanceId={name}
              options={defaultOptions}
              components={{
                MenuList: (props) => (
                  <components.MenuList {...props} className="!p-0" />
                ),
                IndicatorSeparator: () => null,
                DropdownIndicator: createDropdownIndicator(icon),
                SelectContainer,
                ValueContainer,
                Control,
                // Option,
                Input,
                Menu,
              }}
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary25: "#F7F7F9",
                  primary50: "#F7F7F9",
                },
              })}
              loadingMessage={() => "Məlumat axtarılır..."}
              noOptionsMessage={() => "Məlumat yoxdur"}
              placeholder={placeholder}
              styles={{
                placeholder: (base) => ({
                  ...base,
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "rgba(179,180,186,1)",
                }),
              }}
            />
          )}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => {
          return (
            <p className="willSimplyFadeIn text-[rgba(227,30,36,1)] text-[14px] font-normal mt-1">
              {`• ${message || errors[name]?.message || t("requiredText")}`}
            </p>
          );
        }}
      />
    </div>
  );
};
