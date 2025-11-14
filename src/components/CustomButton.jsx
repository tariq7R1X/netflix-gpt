const CustomButton = ({
  text = "Default Button",
  width = "w-auto",
  textColor = "text-white",
  bgColor = "#C11119",
}) => {
  return (
    <button
      className={`${width} ${textColor} py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
