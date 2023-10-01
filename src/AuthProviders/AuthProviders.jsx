import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../config/firebase.config";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  // google log in
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github log in
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authProviders = {
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authProviders}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
