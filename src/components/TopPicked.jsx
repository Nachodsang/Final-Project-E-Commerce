import React, { useContext, useEffect, useState } from "react";

// import context
import { ProductContext } from "../context/ProductContext";
import ItemSlider from "./ItemSlider";

function TopPicked() {
  const { cat } = useContext(ProductContext);

  useEffect(() => {}, []);
  return (
    <section>
      <div className="frame  block py-2 mt-6 ">
        <div>
          {/* title */}
          <div className="text-center uppercase text-4xl font-extrabold italic mb-6">
            top picked for you
          </div>
        </div>

        {/* slider */}
        <ItemSlider category={cat} />
      </div>
    </section>
  );
}

export default TopPicked;
