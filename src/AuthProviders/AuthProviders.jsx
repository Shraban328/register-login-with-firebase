import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // google log in
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authProviders = {
    googleProvider,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authProviders}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
