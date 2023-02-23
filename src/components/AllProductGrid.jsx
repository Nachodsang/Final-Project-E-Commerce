import React from "react";

const AllProductGrid = () => {
  return (
    <div>
      {" "}
      {/* grid section */}
      <div className="w-full">
        {filteredProductsForSearch.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {filteredProductsForSearch?.map((item, index) => {
              // destructure item
              const { id, title, price, brand, discountPercentage, thumbnail } =
                item;
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
  );
};

export default AllProductGrid;
