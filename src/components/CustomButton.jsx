const CustomButton = ({
  text = "Default Button",
  width = "w-auto",
  textColor = "text-white",
  bgColor = "#C11119",
  imgSrc,
  icon: Icon,
  fontSize = "text-base",
  fontWeight = "font-semibold",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${width} ${textColor} ${fontSize} ${fontWeight}
        py-3 px-4 rounded-lg 
        hover:opacity-90 transition cursor-pointer 
        flex items-center justify-center gap-2
      `}
      style={{ backgroundColor: bgColor }}
    >
      {Icon && <Icon className="w-7 h-7" />}
      {imgSrc && (
        <img
          src={imgSrc}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}

      <span className={`${imgSrc || Icon ? "" : "mx-auto"}`}>{text}</span>
    </button>
  );
};

export default CustomButton;
