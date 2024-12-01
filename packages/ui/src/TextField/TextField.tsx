import { cn } from "@setaday/util";
import type { InputHTMLAttributes } from "react";
import { textFieldVariants } from "./TextField.styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  maxLength: number;
  inputSize: "desktop" | "desktop_lg" | "mobile";
  value: string;
}

const TextField = ({ isError = false, value, maxLength, inputSize, ...inputProps }: TextFieldProps) => {
  return (
    <div className={cn(textFieldVariants({ isError, inputSize }))}>
      <input
        {...inputProps}
        value={value}
        className="bg-gray-1 text-gray-6 font-body7_m_16 w-full focus:outline-none"
      />
      <span className="text-gray-2 font-body6_m_12">
        {value.length}/{maxLength}
      </span>
    </div>
  );
};

export default TextField;
