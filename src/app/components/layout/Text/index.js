const sizes = {
  text2xl: "text-[16px] font-normal lg:text-[13px]",
  text4xl: "text-[20px] font-normal lg:text-[17px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "text4xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900_01 font-baijamjuree ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
