const sizes = {
  text1:
    "3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] sm:text-[12px] text-12px font-normal leading-normal",

  text4xl: "text-[20px] font-normal lg:text-[17px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "text1",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
