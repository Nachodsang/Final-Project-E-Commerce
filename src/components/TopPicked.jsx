import React, { useContext, useEffect, useState } from "react";

// import context
import { ProductContext } from "../context/ProductContext";
import ItemSlider from "./ItemSlider";
import { SpinnerDotted, SpinnerRoundFilled } from "spinners-react";

function TopPicked() {
  const { cat, isLoading } = useContext(ProductContext);
  console.log(cat);

  return (
    <section>
      <div className="frame  block py-6 mt-6 ">
        <div>
          {/* title */}
          <div className="text-center uppercase text-4xl text-primary font-extrabold italic mb-6">
            top picked for you
          </div>
        </div>
        {isLoading ? (
          <div className="m-auto flex justify-center">
            <SpinnerRoundFilled />
          </div>
        ) : (
          <div>
            {/* slider */}
            <ItemSlider category={cat[0]} />
            <ItemSlider category={cat[1]} />
            <ItemSlider category={cat[2]} />
          </div>
        )}
      </div>
    </section>
  );
}

export default TopPicked;
