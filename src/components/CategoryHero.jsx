import { Link } from "react-router-dom";
import React, { useContext } from "react";
// import context
import { HeaderContext } from "../context/HeaderContext";

const CategoryHero = () => {
  const { searchIsOpen, setSearchIsOpen } = useContext(HeaderContext);
  return (
    <div className="  w-full py-10">
      <div className=" frame max-w-[1440px] flex flex-col">
        {/* title */}
        <h1 className="text-center uppercase text-4xl text-primary font-extrabold italic mb-6">
          categories
        </h1>

        <div className="grid grid-cols-4 gap-4 h-[300px] md:h-[500px]  lg:h-[800px] overflow-hidden">
          <div className="flex flex-col gap-y-4">
            <Link to={"/category/woman"}>
              <div className="flex gap-4">
                <img
                  className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px] object-cover"
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80"
                  alt=""
                />
              </div>
            </Link>
            <Link to={"/category/home"}>
              <div className="flex gap-4">
                <img
                  className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px] object-cover"
                  src="https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <Link to={"/category/technology"}>
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1506025883753-c77a55138eae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80"
                alt=""
                className="object-cover h-[300px] w-[150px] md:h-[500px] md:w-[250px] lg:w-[400px] lg:h-[800px] "
              />
            </div>
          </Link>
          <div className="flex flex-col flex-2 col-span-2 gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <Link to={"/category/men"}>
                  <div className="flex gap-4">
                    <img
                      className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px] object-cover"
                      src="https://images.unsplash.com/photo-1610650290670-2b8ebe2fa73b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link to={"/category/automotive"}>
                  <div className="flex gap-4">
                    <img
                      className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px] object-cover"
                      src="https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="flex gap-4 cursor-pointer"
              onClick={() => setSearchIsOpen(!searchIsOpen)}
            >
              <img
                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                className="object-cover h-[150px] w-[300px] md:h-[250px] md:w-[500px] lg:w-[800px] lg:h-[400px] object-center "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
