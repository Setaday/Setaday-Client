import { cva } from "class-variance-authority";

export const buttonVariants = cva("text-white rounded-[0.8rem]", {
  variants: {
    color: {
      default: "bg-key",
      disabled: " bg-gray-3",
      cancel: " bg-gray-1.3",
    },
    size: {
      default: "",
      desktop: "w-[22.6rem] h-[5.7rem]",
      mobile: "w-[33.5rem] h-[5.6rem]",
      desktop_donate: "w-[33.5rem] h-[5.6rem]",
      mobile_donate: "w-[20.2rem] h-[3.9rem]",
    },
    font: {
      default: "font-title1_sb_16",
      mobile_donate: "font-body9_sb_14",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "default",
    font: "default",
    size: "default",
    disabled: false,
  },
});
