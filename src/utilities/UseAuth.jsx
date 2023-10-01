import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

const UseAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuth;
