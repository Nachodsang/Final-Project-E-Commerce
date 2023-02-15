import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import ScrollToTop from "../components/ScrollToTop";

import { ProductContext } from "../context/ProductContext";

function SearchPage({ closeOverlay }) {
  const { products, filteredProductsForSearch, setFilteredProductsForSearch } =
    useContext(ProductContext);
  return (
    <section
      onClick={closeOverlay}
      className=" min-h-screen relative pt-[200px] pb-60"
    >
      <ScrollToTop />
      <div className="frame flex flex-col justify-center items-start gap-y-10">
        <div className=" flex flex-col justify-center items-end">
          <h1 className="text-6xl font-bold italic uppercase">Search</h1>
          {filteredProductsForSearch.length > 0 && (
            <p className="text-md font-semibold  uppercase">{`${filteredProductsForSearch.length} products`}</p>
          )}
        </div>
        {/* grid section */}
        <div className="w-full">
          {filteredProductsForSearch.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {filteredProductsForSearch?.map((item, index) => {
                // destructure item
                const {
                  id,
                  title,
                  price,
                  brand,
                  discountPercentage,
                  thumbnail,
                } = item;
                const finalPrice = (
                  ((100 - discountPercentage) / 100) *
                  price
                ).toFixed(2);

                return (
                  <Link to={`/product/${id}`}>
                    <Card
                      key={id}
                      item={item}
                      title={title}
                      subtitle={brand}
                      detail1={price}
                      detail2={finalPrice}
                      image={thumbnail}
                      textColor={"text-red-500 text-2xl "}
                    />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center items-center bg-white w-full">
              <div className="frame py-[100px] flex justify-center px-10 h-full w-full  text-center font-bold text-4xl italic uppercase">
                <h1 className="text-center text-red-500">Product not found</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
