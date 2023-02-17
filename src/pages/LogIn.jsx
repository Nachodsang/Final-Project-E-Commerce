import React, { useContext, useState } from "react";

// import login context
import { LogInContext } from "../context/LogInContext";

// import icon
import { IoClose } from "react-icons/io5";

function LogIn() {
  const {
    logInIsOpen,
    handleOpenLogIn,
    isLoggedIn,
    handleLogIn,
    handleLogOut,
    isValid,
  } = useContext(LogInContext);

  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const handleEmailChange = (e) => {
    setEmailState(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPasswordState(e.target.value);
  };
  const handleFormSubmit = () => {
    handleLogIn(emailState, passwordState);
  };

  return (
    <div
      className={`${
        logInIsOpen ? "top-0  " : "-top-full"
      } bg-black/80 w-screen  h-screen fixed z-50 transition-all duration-700`}
    >
      <div className="frame bg-white h-[300px] w-[400px] m-auto my-[200px] rounded-lg">
        {/* container */}
        <div className=" flex flex-col justify-center w-full relative">
          <div
            onClick={handleOpenLogIn}
            className="absolute top-5 right-3 hover:text-accent-hover text-primary cursor-pointer text-2xl"
          >
            <IoClose />
          </div>
          {!isLoggedIn ? (
            <div className="flex flex-col items-center justify-center gap-y-6  w-full">
              {/* title */}
              {!isValid ? (
                <h1>Please enter valid email and password</h1>
              ) : (
                <h1 className="font-semibold text-md uppercase text-center ">
                  Please Log In to continue shopping with us
                </h1>
              )}

              <div className="w-full flex flex-col gap-y-2">
                {/* email */}
                <div className="flex justify-between items-center text-sm">
                  <span>E-mail</span>
                  <input
                    value={emailState}
                    onChange={handleEmailChange}
                    type="email"
                    className="border border-gray-300 w-[70%] h-fit rounded-sm outline-none focus:ring focus:ring-accent"
                  />
                </div>
                {/* password */}
                <div className="flex justify-between items-center text-sm">
                  <span>Password</span>
                  <input
                    value={passwordState}
                    onChange={handlePassWordChange}
                    type="password"
                    className="border border-gray-300 w-[70%] h-fit rounded-sm outline-none focus:ring focus:ring-accent"
                  />
                </div>
              </div>
              {/* button */}
              <button
                onClick={handleFormSubmit}
                className="w-full transition-all bg-primary hover:bg-accent-hover h-8 rounded-md mt-4 font-bold text-2xl uppercase text-white"
              >
                Log in
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-y-6  w-full">
              {/* title */}
              <h1 className="font-semibold text-md ">Enjoy shopping with us</h1>

              {/* button */}
              <button
                onClick={handleLogOut}
                className="w-full transition-all bg-primary hover:bg-accent-hover h-8 rounded-md mt-4 font-bold text-2xl uppercase text-white"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogIn;
