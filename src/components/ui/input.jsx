import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    (<input
      type={type}
      data-slot="input"
      className={cn(
        "3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] lg:text-[10px] text-[10px] font-normal leading-none",
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full h-[35px] xl:h-[40px] 3xl:h-[60px] min-w-0 rounded-[6px] 3xl:rounded-[10px] border bg-transparent px-[15px] py-[15px] shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-base1",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />)
  );
}

export { Input }
