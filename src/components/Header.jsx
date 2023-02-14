import React, { useState, useEffect, useContext } from "react";
// import Link
import { Link } from "react-router-dom";

// import contexts
import { HeaderContext } from "../context/HeaderContext";
import { CartContext } from "../context/CartContext";
import { LogInContext } from "../context/LogInContext";

// import icons
import { IoLocationSharp } from "react-icons/io5";
import { FaMountain, FaUserCircle, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

const Header = ({ closeOverlay }) => {
  // login context
  const { isLoggedIn, handleOpenLogIn } = useContext(LogInContext);
  // destruct header context
  const {
    headerTrans,
    setCategoryMenuIsShown,
    categoryMenuIsShown,
    setBasketIsShown,
    basketIsShown,
    searchIsOpen,
    setSearchIsOpen,
  } = useContext(HeaderContext);

  //   destruct cart context
  const { itemAmount } = useContext(CartContext);
  const handleOpenBasket = () => {
    setBasketIsShown(!basketIsShown);
    setCategoryMenuIsShown(false);
    setSearchIsOpen(false);
  };

  const handleOpenMenu = () => {
    setCategoryMenuIsShown(!categoryMenuIsShown);
    setBasketIsShown(false);
    setSearchIsOpen(false);
  };
  const handleOpenSearch = () => {
    setSearchIsOpen(!searchIsOpen);
    setCategoryMenuIsShown(false);
    setBasketIsShown(false);
  };
  return (
    <section className="w-full fixed top-0 flex-col z-50">
      {/* container */}
      <div className="  flex flex-col">
        {/* Upper part */}
        <div className="bg-primary">
          <div className="frame  text-white w-full flex justify-center lg:justify-between items-center text-xs py-2">
            {/* store and location container */}
            <div className="hidden lg:flex gap-x-6 items-center">
              {/* store with icon */}
              <div className="flex justify-start items-center cursor-pointer    ">
                <IoLocationSharp className="text-accent-hover hover:text-accent text-xl" />
                <span>STORE</span>
              </div>
              {/* location drop down */}
              <div className="cursor-pointer flex items-center gap-1">
                <div>LOCATION</div>
                <BsChevronDown className="text-xl text-accent-hover " />
              </div>
            </div>

            {/* membership links */}
            <div className="flex justify-center  lg:justify-between items-center gap-x-4">
              {/* log in and sign up */}
              {!isLoggedIn ? (
                <div className="gap-y-1 flex flex-col items-center justify-center md:flex-row lg:gap-x-1">
                  <div>
                    <span
                      onClick={handleOpenLogIn}
                      className="cursor-pointer decoration-dotted decoration-2 underline underline-offset-4  hover:no-underline "
                    >
                      LOG IN
                    </span>{" "}
                    or{" "}
                    <span className="cursor-pointer  decoration-dotted decoration-2 underline underline-offset-4  hover:no-underline ">
                      SIGN UP FOR FREE
                    </span>
                  </div>
                  <div>
                    <span>for membership rewards.</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* help link */}
              <div className=" hidden lg:flex border-l pl-4 cursor-pointer">
                <span>HELP</span>
              </div>
            </div>
          </div>
        </div>
        {/* Lower part */}
        <div
          className={`${headerTrans ? "bg-white/90 py-2" : "bg-white py-3"}`}
        >
          <div
            className={` frame  flex justify-between items-center transition-all duration-700`}
          >
            {/* nav menu */}
            <div
              className="text-3xl text-primary cursor-pointer hover:text-accent-hover transition-all"
              onClick={handleOpenMenu}
            >
              <GiHamburgerMenu />
            </div>
            {/*  desktop menu and logo*/}
            {/* sm & md screen logo */}
            <div className="ml-[80px] lg:ml-[100px]">
              <div className="text-5xl text-accent-hover lg:hidden">
                <Link onClick={closeOverlay} to="/">
                  <FaMountain />
                </Link>
              </div>
              {/* large screen full categorie menu */}
              <div className="hidden lg:flex items-center justify-between gap-x-10">
                <Link
                  onClick={closeOverlay}
                  to="/category/woman"
                  className="text-md font-extrabold text-primary  uppercase italic hover:text-accent-hover transition-all"
                >
                  woman
                </Link>
                <Link
                  onClick={closeOverlay}
                  to="/category/men"
                  className="text-md font-extrabold text-primary  uppercase italic hover:text-accent-hover transition-all"
                >
                  men
                </Link>
                <Link
                  onClick={closeOverlay}
                  to="/category/home"
                  className="text-md font-extrabold text-primary  uppercase italic hover:text-accent-hover transition-all"
                >
                  home
                </Link>
                {/* logo */}
                <Link
                  onClick={closeOverlay}
                  to="/"
                  className="text-5xl text-accent-hover"
                >
                  <FaMountain />
                </Link>
                <Link
                  onClick={closeOverlay}
                  to="/category/technology"
                  className="text-md font-extrabold text-primary  uppercase italic hover:text-accent-hover transition-all"
                >
                  technology
                </Link>
                <Link
                  onClick={closeOverlay}
                  to="/category/automotive"
                  className="text-md font-extrabold text-primary  uppercase italic hover:text-accent-hover transition-all"
                >
                  automotive
                </Link>
              </div>
            </div>
            {/* user basket and & search*/}
            <div className="flex justify-between gap-6 items-center text-2xl ">
              <div
                onClick={handleOpenLogIn}
                className={`${
                  isLoggedIn ? "text-accent-hover" : "text-primary"
                } hover:text-accent-hover cursor-pointer transition-all `}
              >
                <FaUserCircle />
              </div>
              <div
                className="cursor-pointer relative  text-primary hover:text-accent-hover p-4 transition-all"
                onClick={handleOpenBasket}
              >
                <div className=" flex items-center justify-center absolute top-0 right-0 p-1 rounded-full max-w-sm max-h-sm text-xs  text-primary">
                  <span>{itemAmount}</span>
                </div>
                <RiShoppingBasketFill />
              </div>
              <div
                onClick={handleOpenSearch}
                className="cursor-pointer text-primary hover:text-accent-hover transition-all"
              >
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
