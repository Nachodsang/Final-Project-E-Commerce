import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import component
import ItemSlider from "../components/ItemSlider";
import ScrollToTop from "../components/ScrollToTop";

// import context
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { SpinnerRoundFilled } from "spinners-react";

const ProductDetails = ({ closeOverlay }) => {
  const { id } = useParams();

  //   context
  const {
    productDetailsShown,
    fetchSingleProduct,
    fetchSubCategory,
    filteredCategoryList,

    isLoading,
    setIsLoading,
  } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  // destruct product details
  const {
    brand,
    category,
    description,
    images,
    price,
    discountPercentage,
    rating,
    title,
  } = productDetailsShown;
  const finalPrice = (((100 - discountPercentage) / 100) * price).toFixed(2);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleProduct(id);

    setIsLoading(false);
  }, [id]);

  return (
    <section
      onClick={closeOverlay}
      className="min-h-screen w-full relative 
     pb-[300px] pt-[200px]"
    >
      <ScrollToTop />
      {/* container */}
      <div className="frame block">
        {/* display section */}
        {isLoading ? (
          <div className="w-full m-auto p-auto flex justify-center items-center">
            <SpinnerRoundFilled />
          </div>
        ) : (
          <div className="flex md:justify-start  md:flex-row flex-col-reverse  gap-6 mb-4 ">
            {/* image */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 flex-1">
              {images?.map((i, ind) => {
                return (
                  <img
                    className="h-[400px] w-[350px] object-cover rounded-md shadow-lg cursor-pointer hover:scale-105 transition-all"
                    key={ind}
                    src={i}
                  />
                );
              })}
            </div>

            {/* text */}
            <div className="flex flex-col gap-y-6 flex-1">
              <div className="flex flex-col gap-y-4">
                <h1 className="font-bold text-4xl italic">{title}</h1>
                <p className="text-xl font-semibold uppercase">{brand}</p>
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-xl line-through">${price}</h1>
                {productDetailsShown && (
                  <h1 className="text-4xl text-red-600">${finalPrice}</h1>
                )}
                <p className="text-gray-700">{description}</p>
              </div>
              {/* add to cart button */}
              <div className="w-full mt-4">
                <button
                  onClick={() => addToCart(productDetailsShown, id)}
                  className="w-full border-none hover:bg-accent-hover transition-all  bg-primary text-white min-h-6 py-5 uppercase font-bold italic"
                >
                  add to cart
                </button>
                <h1 className="mt-2 text-xl">Rating: {rating}</h1>
              </div>
            </div>
          </div>
        )}

        {/* Suggestion Slider */}
        <div className="block text-4xl font-bold italic text-center uppercase mt-10 mb-5">
          You may also like
        </div>
        <ItemSlider category={filteredCategoryList} />
      </div>
    </section>
  );
};

export default ProductDetails;
