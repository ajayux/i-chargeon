"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal leading-none",
        "border-input focus-visible:border-base1/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-[15px] 3xl:size-[18px] shrink-0 rounded-[4px] border border-base1 shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white data-[state=checked]:bg-base1 p-[2px] 3xl:p-[4px] lg:mr-[4px]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2005 0.584136C12.8281 0.219025 12.2694 0.219025 11.897 0.584136L4.91428 7.42998L2.02807 4.60036C1.65566 4.23525 1.09704 4.23525 0.724623 4.60036C0.352209 4.96548 0.352209 5.51314 0.724623 5.87825L4.26255 9.34681C4.44876 9.52937 4.63497 9.62065 4.91428 9.62065C5.19359 9.62065 5.3798 9.52937 5.566 9.34681L13.2005 1.86203C13.5729 1.49692 13.5729 0.949248 13.2005 0.584136Z"
            fill="white"
          />
        </svg>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
