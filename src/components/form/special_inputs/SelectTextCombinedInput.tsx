import { IdTextField } from "./IdTextField";
import { IdSelect } from "./IdSelect";
import { ReactElement } from "react";

interface SelectOption {
  id: number | string;
  name: string | number;
  text?: string | number;
}

interface SelectTextCombinedInputProps {
  selectFieldName?: string;
  textFieldName?: string;
  label?: string;
  required?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  defaultOptions: SelectOption[];
  textFieldPlaceholder: string;
  icon?: ReactElement;
  tooltipText?: string;
  maxLength?: number;
}

export const SelectTextCombinedInput = ({
  selectFieldName = "select_option",
  textFieldName = "text_field",
  label = "Select option...",
  required = false,
  defaultOptions,
  textFieldPlaceholder,
  onKeyDown,
  onKeyPress,
  maxLength = 7,
  icon,
  tooltipText,
}: SelectTextCombinedInputProps) => {
  return (
    <div className="w-full min-w-full relative">
      {label && (
        <label className="text-sm text-[rgba(112,112,112,1)] block mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex flex-row justify-start items-center w-full gap-0 !bg-[#F5F5F5] border border-[rgba(229,229,229,1)] rounded-[10px]">
        <div className="w-1/3 md:min-w-1/3 md:w-[27%]">
          <IdSelect
            name={selectFieldName}
            defaultOptions={defaultOptions}
            placeholder={defaultOptions[0].name as string}
          />
        </div>
        <div className="w-full relative">
          <IdTextField
            name={textFieldName}
            placeholder={textFieldPlaceholder}
            maxLength={maxLength}
            type="tel"
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectTextCombinedInput;
