import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal leading-none",
        "border-input placeholder:text-muted-foreground focus-visible:border-base1 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-[60px]  xl:min-h-[80px] 3xl:min-h-[120px] w-full rounded-[6px] 3xl:rounded-[10px] border bg-transparent px-[15px] py-[15px] shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
