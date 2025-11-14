import Header from "./Header";
import BG_IMG from "../assets/background-img.jpg";

const Login = () => {
  return (
    <div>
      <div className="relative z-10">
        <Header />
      </div>
      <img
        src={BG_IMG}
        alt="background-img"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Login;
