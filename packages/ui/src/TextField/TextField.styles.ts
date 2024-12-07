import { cva } from "class-variance-authority";

export const textFieldVariants = cva(
  "rounded-[0.8rem] mb-[0.4rem] bg-gray-1 flex justify-between items-center px-[2rem] gap-[1rem]",
  {
    variants: {
      isError: {
        true: "shadow-[inset_0_0_0_1px_red]",
      },
      inputSize: {
        desktop: "w-[33.5rem] h-[5.7rem]",
        desktop_lg: "w-[51rem] h-[6.1rem]",
        mobile: "w-[100%] h-[4.8rem]",
      },
    },
  }
);

export const textCountVariants = cva("", {
  variants: {
    isError: {
      true: "text-red-100",
    },
  },
});
