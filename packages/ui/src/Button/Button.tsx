import { type ButtonHTMLAttributes } from "react";
import { cn } from "@setaday/util";
import { buttonVariants } from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "default" | "disabled" | "cancel";
  font?: "default" | "mobile_donate";
  size?: "default" | "desktop" | "mobile" | "desktop_donate" | "mobile_donate";
  disabled?: boolean;
}

const Button = ({
  color,
  size,
  font,
  disabled,
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ color, font, size, disabled }), className)}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-white">{children}</span>
    </button>
  );
};

export default Button;
