import { cn } from "@setaday/util";
import type { InputHTMLAttributes } from "react";
import { textCountVariants, textFieldVariants } from "./TextField.styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
  maxLength: number;
  inputSize: "desktop" | "desktop_lg" | "mobile";
  value: string;
}

const TextField = ({ isError = false, errorMessage, value, maxLength, inputSize, ...inputProps }: TextFieldProps) => {
  return (
    <>
      <div
        className={cn(
          textFieldVariants({
            isError: isError || value.length > maxLength,
            inputSize,
          })
        )}
      >
        <input
          {...inputProps}
          value={value}
          className="bg-gray-1 text-gray-6 font-body7_m_16 w-full focus:outline-none"
        />
        <span className="text-gray-2 font-body6_m_12">
          <span
            className={cn(
              textCountVariants({
                isError: isError || value.length > maxLength,
              })
            )}
          >
            {value.length}
          </span>
          /{maxLength}
        </span>
      </div>
      <div className="h-[1.45rem]">
        {value.length > maxLength || (isError && errorMessage) ? (
          <span className="text-red font-caption1_m_12">
            {value.length > maxLength ? `${maxLength}자가 초과되었어요` : errorMessage}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default TextField;
