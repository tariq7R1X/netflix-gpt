import Header from "./Header";
import BG_IMG from "../assets/background-img.jpg";
import CustomButton from "./CustomButton";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const validationMessage = checkValidData(
      isSignIn ? "" : fullName.current.value,
      email.current.value,
      password.current.value,
      isSignIn
    );
    setErrorMessage(validationMessage);

    if (validationMessage) return;

    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/107761006?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black/80 rounded-2xl my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full border rounded-md bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full border rounded-md bg-gray-700"
        />

        <div className="relative w-full">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-3 my-4 w-full border rounded-md bg-gray-700 pr-12"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer"
          >
            {showPassword ? (
              <EyeIcon className="w-5 h-5" />
            ) : (
              <EyeSlashIcon className="w-5 h-5" />
            )}
          </span>
        </div>

        <p className="text-red-600 mb-6">{errorMessage}</p>
        <CustomButton
          text={isSignIn ? "Sign In" : "Sign Up"}
          onClick={handleButtonClick}
          width="w-full"
          textColor="text-white"
          bgColor="#C11119"
        />
        <p className="py-2 pt-6 cursor-pointer">
          {isSignIn ? "New to Netflix? " : "Already Member? "}
          <span className="font-medium underline" onClick={toggleSignInForm}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
