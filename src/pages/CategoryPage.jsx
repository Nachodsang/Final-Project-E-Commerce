import React, { useContext, useEffect, useState } from "react";
// scroll to top
import ScrollToTop from "../components/ScrollToTop";
// import links
import { Link } from "react-router-dom";
// import useparams
import { useParams } from "react-router-dom";
// import component
import Card from "../components/Card";
import FilterPanel from "../components/FilterPanel";
import { SpinnerDotted, SpinnerRoundFilled } from "spinners-react";
// import context
import { ProductContext } from "../context/ProductContext";
import { HeaderContext } from "../context/HeaderContext";
const CategoryPage = ({ closeOverlay }) => {
  // header context

  const { filteredCategoryList, filterCategory, isLoading, setIsLoading } =
    useContext(ProductContext);
  const { id } = useParams();
  //   list to be used in filter panel
  const [listState, setListState] = useState(filteredCategoryList);
  useEffect(() => {
    filterCategory(id);
  }, [id]);

  useEffect(() => {
    setListState(filteredCategoryList);
  }, [filteredCategoryList]);

  // islodin state from the start
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <section onClick={closeOverlay} className="  pb-[500px]">
      <ScrollToTop />
      {/* container */}
      <div className="frame relative top-60 flex flex-col justify-center items-center">
        {/* title */}
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold italic uppercase">{id}</h1>
          {listState.length > 0 && (
            <p className="text-md font-semibold uppercase">{`${listState.length} products`}</p>
          )}
        </div>
        {/* display */}
        <div className="flex-col flex lg:flex-row items-center lg:items-start justify-center w-full">
          {/* filter */}
          <div className="flex flex-col w-full lg:w-[25%] ">
            <FilterPanel
              listState={listState}
              setListState={setListState}
              fullList={filteredCategoryList}
              searchHolder="Search in this Category"
            />
          </div>

          {/* product grid */}
          <div className="lg:w-[75%]">
            {isLoading ? (
              <div className="m-auto w-full flex justify-center py-[100px]">
                <SpinnerRoundFilled />
              </div>
            ) : (
              <div>
                {listState.length > 0 ? (
                  <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  ">
                    {listState.map((item) => {
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
                        <Link key={id} to={`/product/${id}`}>
                          <Card
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
                  <div className="flex justify-center items-center">
                    <div className="frame py-[200px] px-10 h-full w-full text-center font-bold text-4xl italic uppercase">
                      <h1 className="text-center text-red-500">
                        Product not found
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
