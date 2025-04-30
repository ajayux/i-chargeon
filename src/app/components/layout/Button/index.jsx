import React from "react";
import PropTypes from "prop-types";

const variants = {
  fill: {
    white: "text-black bg-white border-base1",
  },
};

const sizes = {
  button1:
    "3xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-12px font-medium leading-non text-center whitespace-nowrap w-full h-[30px] sm:h-[38px] xl:h-[44px] 3xl:h-[62px] flex flex-row items-center justify-center gap-[5px] lg:gap-[10px] 3xl:gap-[14px] p-[5px] cursor-pointer rounded-[8px] border border-solid",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "button1",
  color = "white",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${size && sizes[size]} ${
        variant && variants[variant]?.[color]
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  size: PropTypes.oneOf(["button1"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white"]),
};

export { Button };
