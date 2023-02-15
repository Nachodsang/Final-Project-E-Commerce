import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import context
import { HeaderContext } from "../context/HeaderContext";

// import icons
import { FiChevronRight } from "react-icons/fi";
import { FaMountain } from "react-icons/fa";

const Hero = ({ closeOverlay }) => {
  const { setCategoryMenuIsShown, categoryMenuIsShown } =
    useContext(HeaderContext);
  console.log(categoryMenuIsShown);
  return (
    <section className="h-screen relative">
      Hero
      {/* background pic */}
      <div className="w-full absolute top-0 bg-trekking bg-no-repeat bg-cover bg-[55%_10%] md:bg-[40%_10%] h-full z-0"></div>
      {/* overlay */}
      <div className="z-10 absolute top-0 bottom-0 bg-black/30 h-full w-full overflow-hidden">
        {/* text & categorie wrapper */}
        <div className="flex-col flex relative top-[360px] frame lg:top-[300px] ">
          {/* Text */}
          <div className="flex flex-col justify-start  z-10 text-white gap-y-4 lg:gap-y-8 ">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold italic uppercase">
              end of season clearance
            </h1>
            <p className="text-2xl lg:text-4xl uppercase font-semibold">
              now on
            </p>
          </div>
          {/* Categorie selection */}
          <div className="  flex items-center justify-start gap-x-[1px] mt-10 w-[100%] md:w-[60%] lg:text-2xl font-semibold uppercase shadow-xl">
            <div
              onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
              className="flex-1 py-4 px-2 lg:py-6 cursor-pointer bg-white/80 text-center transition-all rounded-sm flex items-center justify-center gap-4 hover:gap-6 hover:bg-primary hover:text-white"
            >
              {/* shopping page */}
              <span>shopping</span>
              <FiChevronRight className="text-xl" />
            </div>
            <Link
              to="/category/woman"
              className="flex-1 cursor-pointer py-4 lg:py-6 px-2 bg-white/80 text-center  rounded-sm hover:bg-gray-200 hover:underline underline-offset-4  "
            >
              {/* women fashion */}
              women
            </Link>

            <Link
              to="/category/men"
              className="cursor-pointer flex-1 py-4 px-2 lg:py-6 bg-white/80 text-center rounded-sm hover:bg-gray-200 hover:underline underline-offset-4  "
            >
              {/* men fashion */}
              men
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-40 md:-bottom-30 lg:-bottom-60 -right-40 md:-right-20 lg:-right-60 text-[400px] md:text-[500px] text-white/40 lg:text-[700px]">
          <FaMountain />
        </div>
      </div>
    </section>
  );
};

export default Hero;
