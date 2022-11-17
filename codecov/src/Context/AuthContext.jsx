import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();
const codeCovAuth = JSON.parse(localStorage.getItem('authCodecov'))||false
function AuthContextProvider({ children }) {
  const [isAuth,setIsAuth] = useState(codeCovAuth)
  function toggleAuth() {
    setIsAuth(!isAuth)
    localStorage.setItem('authCodecov',!isAuth)
  }
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;