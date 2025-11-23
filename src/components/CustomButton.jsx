const CustomButton = ({
  text = "Default Button",
  width = "w-auto",
  textColor = "text-white",
  bgColor = "#C11119",
  imgSrc,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
    ${width} ${textColor} 
    py-3 px-4 rounded-lg font-semibold 
    hover:opacity-90 transition cursor-pointer 
    flex items-center justify-center gap-2
  `}
      style={{ backgroundColor: bgColor }}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}

      {/* Text will always stay centered */}
      <span className={`${imgSrc ? "" : "mx-auto"}`}>{text}</span>
    </button>
  );
};

export default CustomButton;
