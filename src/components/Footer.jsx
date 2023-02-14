import React from "react";
// import Link
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  FaMountain,
  FaUserCircle,
  FaSearch,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  my-0  absolute bottom-0 bg-primary pt-6 z-20">
      <div className="frame flex flex-col">
        {/* top */}
        <div className="flex justify-between items-center w-full">
          {/* logo */}
          <div className="md:text-[100px] text-[60px] text-white">
            <FaMountain />
          </div>
          {/* social */}
          <div className="flex items-center gap-4 text-2xl text-white/80 cursor-pointer ">
            <FaFacebookSquare className="hover:text-accent-hover  transition-all" />
            <FaInstagram className="hover:text-accent-hover  transition-all" />
            <FaTwitterSquare className="hover:text-accent-hover  transition-all" />
            <FaTiktok className="hover:text-accent-hover  transition-all" />
          </div>
          {/* back to top */}

          <div
            onClick={() => scroll.scrollToTop()}
            className="text-white hidden md:flex items-center gap-3 hover:text-accent-hover cursor-pointer  transition-all"
          >
            <span className="uppercase">Back to top </span>
            <FaChevronUp />
          </div>
        </div>
        {/* bottom */}
        <div
          className="border-t relative  pt-4 flex items-center  w-full justify-center
         md:justify-between "
        >
          <div className="italic text-xl md:text-6xl font-black text-white/10 uppercase hidden md:flex">
            Become a member
          </div>

          <Link
            to={"/"}
            className="lg:absolute top-2 md:top-5 flex items-center font-bold hover:scale-[110%]   transition-all text-accent-hover text-2xl gap-1 "
          >
            <FaMountain className="text-3xl mb-2" />
            <span className="logo tracking-wide">Pokhara</span>
          </Link>

          <div className="hidden lg:flex">
            <p className="text-white text-xs">
              © 2023 Pokhara, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
