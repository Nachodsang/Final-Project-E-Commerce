import React, { useContext } from "react";
// import Link
import { Link } from "react-router-dom";
// import context
import { HeaderContext } from "../context/HeaderContext";

// import icons
import { FaMountain } from "react-icons/fa";

import { IoClose } from "react-icons/io5";

function CategoryMenu() {
  const { categoryMenuIsShown, setCategoryMenuIsShown } =
    useContext(HeaderContext);
  return (
    <div
      className={`${
        categoryMenuIsShown ? "left-0" : "-left-full"
      } w-[50%] md:w-[30%] h-full bg-primary/90 fixed buttom-0 top-0 transition-all duration-700 z-30 py-40 px-4 lg:px-10 shadow-2xl`}
    >
      <div className=" w-full h-full relative ">
        {/* close icon */}
        <IoClose
          className="absolute top-2 left-2 lg:left-4 text-xl lg:text-3xl hover:text-accent-hover hover:scale-150 cursor-pointer text-white"
          onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
        />
        {/* Logo */}

        <div className="py-10 flex flex-col justify-center px-4 h-full gap-y-20  items-start">
          <Link
            onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
            to={"/"}
            className=" flex items-center font-bold hover:scale-[110%]   transition-all text-accent text-2xl lg:text-4xl gap-1 "
          >
            <FaMountain className="lg:text-4xl text-2xl mb-2" />
            <span className="logo tracking-wide">Pokhara</span>
          </Link>

          {/* menu */}
          <div className="flex flex-col justify-start text-xl capitalize font-semibold gap-10 lg:text-4xl text-white ">
            <Link
              onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
              className="hover:text-accent-hover"
              to="/category/woman"
            >
              woman
            </Link>
            <Link
              onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
              className="hover:text-accent-hover"
              to="/category/men"
            >
              men
            </Link>
            <Link
              onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
              className="hover:text-accent-hover"
              to="/category/home"
            >
              home
            </Link>
            <Link
              onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
              className="hover:text-accent-hover"
              to="/category/technology"
            >
              technology
            </Link>
            <Link
              onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
              className="hover:text-accent-hover"
              to="/category/automotive"
            >
              automotive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
