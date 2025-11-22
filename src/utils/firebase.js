// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSxWwYNnNk8z75kfOdtQ6EeVLDFmGQZSQ",
  authDomain: "netflixgptcom.firebaseapp.com",
  projectId: "netflixgptcom",
  storageBucket: "netflixgptcom.firebasestorage.app",
  messagingSenderId: "656400165642",
  appId: "1:656400165642:web:6ffa168c1559343545e8f3",
  measurementId: "G-4ESF2LGM4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
