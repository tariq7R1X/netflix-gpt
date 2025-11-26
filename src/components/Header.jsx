import APP_LOGO from "../assets/netflix-logo.png";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubsrcibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubsrcibe();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-20 py-2 bg-gradient-to-t from-[#0A1A2F]/50 to-transparent z-20">
      {/* Logo */}
      <div>
        <img className="w-[140px]" src={APP_LOGO} alt="app-logo" />
      </div>
      {user && (
        <CustomButton
          text="Sign Out"
          onClick={handleSignOut}
          width="w-[150px]"
          textColor="text-white"
          bgColor="#C11119"
          imgSrc={user.photoURL}
        />
      )}
    </div>
  );
};

export default Header;
