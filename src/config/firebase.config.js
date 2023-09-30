// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97JAt41xFNHLsDTPYCZt4VnER0W-8VaU",
  authDomain: "register-login-authentic-b40d2.firebaseapp.com",
  projectId: "register-login-authentic-b40d2",
  storageBucket: "register-login-authentic-b40d2.appspot.com",
  messagingSenderId: "197671815971",
  appId: "1:197671815971:web:4fd5c24eab68c43441da96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;