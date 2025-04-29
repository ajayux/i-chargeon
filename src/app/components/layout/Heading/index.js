import React from "react";

const sizes = {
  text3xl: "text-[18px] font-medium lg:text-[15px]",
  text5xl: "text-[22px] font-medium lg:text-[18px]",
  text6xl:
    "text-[25px] font-medium lg:text-[21px] md:text-[23px] sm:text-[21px]",

  heading1:
    "text-[28px] xl:text-[36px] xl:text-[43px] 2xl:text-[48px] 3xl:text-[65px] font-semibold uppercase leading-[1.2] text-white",

  heading5xl: "text-[24px] font-semibold lg:text-[20px] md:text-[22px]",
  heading6xl:
    "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  heading9xl:
    "text-[54px] font-semibold lg:text-[45px] md:text-[46px] sm:text-[40px]",
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
    <Component
      className={`text-black-900 font-baijamjuree ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
