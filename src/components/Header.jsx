import APP_LOGO from "../assets/netflix-logo.png";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-20 py-2 bg-gradient-to-b from-black">
      {/* Logo */}
      <div>
        <img className="w-[140px]" src={APP_LOGO} alt="app-logo" />
      </div>

      {/* Sign In Button */}
      <CustomButton
        text="Sign In"
        width="w-[102px]"
        textColor="text-white"
        bgColor="#C11119"
      />
    </div>
  );
};

export default Header;
