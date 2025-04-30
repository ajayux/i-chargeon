import React from "react";

const sizes = {
  heading1:
    "text-[28px] sm:text-[36px] xl:text-[43px] 2xl:text-[48px] 3xl:text-[65px] font-semibold leading-[1.2]",
  heading2:
    "text-[20px] sm:text-[26px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[54px] font-semibold leading-[1.2]",
  heading3:
    "text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[26px] 3xl:text-[30px] font-semibold leading-[1.2]",
  heading5:
    "text-[13px] sm:text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] font-semibold leading-[1.2]",

  heading6xl:
    "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
};

const Heading = ({
  children,
  className = "",
  size = "heading6xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
