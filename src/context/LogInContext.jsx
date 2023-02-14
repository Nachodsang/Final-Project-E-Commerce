import React, { useEffect } from "react";
import { createContext, useState } from "react";

//create login context
export const LogInContext = createContext();

function LogInProvider({ children }) {
  const [logInIsOpen, setLogInIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const handleOpenLogIn = () => {
    logInIsOpen && setLogInIsOpen(false);
    !logInIsOpen && setLogInIsOpen(true);
  };

  const handleLogIn = (email, password) => {
    if (email.includes("@") && email.length > 6 && password.length > 8) {
      setIsLoggedIn(true);
      setLogInIsOpen(false);
      // save login status in local storage
      localStorage.setItem("isLoggedIn", "1");
    } else {
      console.log("please enter valid email and password");
      setIsValid(false);
    }
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    //setformValid back to true (ready for the next log in)
    setIsValid(true);
    //remove login status
    localStorage.removeItem("isLoggedIn");
  };
  //check if log in status exits in the local storage
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <LogInContext.Provider
      value={{
        logInIsOpen,
        handleOpenLogIn,
        isLoggedIn,
        handleLogIn,
        handleLogOut,
        isValid,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
}

export default LogInProvider;
