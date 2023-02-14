import React, { useContext } from "react";

import { FiChevronRight } from "react-icons/fi";
import { FaMountain } from "react-icons/fa";

// import context
import { HeaderContext } from "../context/HeaderContext";

function Campaign() {
  const { setCategoryMenuIsShown, categoryMenuIsShown } =
    useContext(HeaderContext);
  return (
    <section className="h-screen ">
      {/* background pic */}
      <div className="w-full relative bg-wardrobe bg-no-repeat bg-cover bg-[15%_10%] md:bg-[0%_10%] h-full z-0">
        {/* overlay */}
        <div className="z-10 relative top-0 bottom-0 bg-black/30 h-full w-full overflow-hidden">
          {/* text & category wrapper */}
          <div className="flex-col justify-center items-center md:items-start flex relative top-[100px] md:top-[200px] frame lg:top-[100px] ">
            {/* Text */}
            <div className="flex flex-col md:justify-start items-center  z-10 text-white gap-y-4 lg:gap-y-8 ">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold italic uppercase">
                get discount everyday on our newly added items
              </h1>
              <p className="md:text-2xl text-md lg:text-4xl uppercase font-normal ">
                Shop the latest fashion, electronics, and household items at
                unbeatable prices with just a few clicks! Experience the
                convenience of online shopping from the comfort of your own
                home.
              </p>
            </div>
            {/* Categorie selection */}
            <div className="  flex items-center justify-start gap-x-[1px] mt-10 w-[100%] md:w-[60%] lg:text-2xl font-semibold uppercase shadow-xl">
              <div
                onClick={() => setCategoryMenuIsShown(!categoryMenuIsShown)}
                className=" cursor-pointer flex-1 py-4 px-2 lg:py-6 bg-white/80 text-center transition-all rounded-xl flex items-center justify-center gap-4 hover:gap-6 hover:bg-primary hover:text-white"
              >
                {/* shopping page */}
                <span>shopping</span>
                <FiChevronRight className="text-xl" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-40 md:-bottom-30 lg:-bottom-60 -right-40 md:-right-20 lg:-right-60 text-[400px] md:text-[500px] text-white/40 lg:text-[700px]">
            <FaMountain />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campaign;
