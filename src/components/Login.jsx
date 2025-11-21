import Header from "./Header";
import BG_IMG from "../assets/background-img.jpg";
import CustomButton from "./CustomButton";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
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

      <form className="w-3/12 absolute p-12 bg-black/80 rounded-2xl my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full border rounded-md bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full border rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 mb-6 w-full border rounded-md bg-gray-700"
        />
        <CustomButton
          text={isSignIn ? "Sign In" : "Sign Up"}
          width="w-full"
          textColor="text-white"
          bgColor="#C11119"
        />
        <p className="py-2 pt-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netlfix? Sign Up Now"
            : "Already Member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
