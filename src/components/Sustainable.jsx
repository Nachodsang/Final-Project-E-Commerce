import React from "react";
import { FaMountain } from "react-icons/fa";

function Sustainable() {
  return (
    <section className="h-screen  ">
      {/* background pic */}
      <div className="w-full relative bg-sustain bg-no-repeat bg-cover bg-[50%_10%] md:bg-[50%_10%] h-full z-0">
        {/* overlay */}
        <div className="z-10 relative top-0 bottom-0 bg-black/30 h-full w-full overflow-hidden">
          {/* text & category wrapper */}
          <div className="flex-col justify-center items-center md:items-start flex relative top-[200px] md:top-[350px] frame lg:top-[400px] ">
            {/* Text */}
            <div className="flex flex-col md:justify-start items-center md:items-start  z-10 text-white gap-y-4 lg:gap-y-8 ">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold italic uppercase text-center md:text-start">
                sustainability is our goal
              </h1>
              <p className="md:text-2xl text-md lg:text-4xl uppercase font-normal text-center ">
                We strive for a more sustainable future.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-40 md:-bottom-30 lg:-bottom-60 -right-40 md:-right-200 lg:-right-60 text-[600px] md:text-[800px] text-white/30 lg:text-white/30 lg:text-[1200px]">
            <FaMountain />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Sustainable;
