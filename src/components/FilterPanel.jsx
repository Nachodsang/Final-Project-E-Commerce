import React, { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { Link } from "react-router-dom";

function FilterPanel({
  listState,
  buttonColor,
  setListState,
  fullList,
  searchHolder,
  barColor,
  forNewPage,
  closeOverlay,
}) {
  // display list staTE

  // filter state
  const [filter, setFilter] = useState({});
  // search State
  const [searchState, setSearchState] = useState("");
  // set product type
  const [typeState, setTypeState] = useState("");
  // set price state
  const [priceState, setPriceState] = useState(2000);
  //   type button state
  const [typeButtonState, setTypeButtonState] = useState("");

  //   search click handle
  const clickSearchHandle = () => {
    filterList(fullList);

    closeOverlay && closeOverlay();
  };
  //   price from string to number
  const changePriceType = (e) => {
    const price = Number(e.target.value);
    setPriceState(price);
  };

  // filter list

  const filterList = (list) => {
    const filteredList = list?.filter((item, index) => {
      return (
        (item?.title?.toLowerCase()?.includes(filter?.search.toLowerCase()) ||
          item?.brand?.toLowerCase()?.includes(filter?.search.toLowerCase())) &&
        item?.price < filter?.price &&
        (filter.type ? item?.category === filter?.type : true)
      );
    });
    setListState(filteredList);
    setSearchState("");
    setTypeButtonState(null);
    setTypeState("");
  };
  //   handle type click
  const handleTypeClick = (item, index) => {
    setTypeState(item);
    setTypeButtonState(index);
  };

  // function to filter out repeated categories
  const getUniqueArray = (list) => {
    const categoryArray = list?.map((item) => item.category);
    const uniqueArray = Array.from(new Set(categoryArray));
    return uniqueArray;
  };
  //   assign to new array
  const typeArray = getUniqueArray(fullList);
  // set filter function
  useEffect(() => {
    setFilter({
      search: searchState,
      price: Number(priceState),
      type: typeState,
    });
  }, [priceState, searchState, typeState]);
  useEffect(() => {
    setPriceState(2000);
  }, []);
  return (
    <div className="w-full px-4 py-4 flex flex-col justify-start items-start gap-y-4 ">
      <div>
        {/* title description */}
        <h1 className="text-4xl font-semibold uppercase italic">FILTERS.</h1>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        {/* search */}
        <div className="flex flex-col">
          <label className="text-2xl font-semibold uppercase">
            Search here
          </label>
          <input
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            type="text"
            placeholder={searchHolder}
            className="border outline-none text-center focus:ring focus:ring-accent-hover border-accent rounded-sm placeholder:text-center focus:border-none"
          />
        </div>

        {/* price */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-2xl font-semibold uppercase ">price</label>
          <div className="flex flex-row justify-evenly items-center w-full">
            <span>$0</span>
            <input
              value={priceState}
              onChange={changePriceType}
              type="range"
              min="0"
              max="2000"
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                buttonColor || "bg-accent"
              } `}
            />
            <span>$2000</span>
          </div>
        </div>
        {/* subfilter */}
        {/* title */}
        <div>
          <h1 className="text-2xl font-semibold uppercase">Product type</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-4 overflow-auto md:h-[300px] h-[200px] lg:h-[250px]">
            {/* map newly assigned array to get unique categories */}
            {typeArray.map((item, index) => {
              return (
                <div
                  onClick={() => handleTypeClick(item, index)}
                  key={index}
                  className={`${
                    typeButtonState === index
                      ? " border-accent-hover "
                      : " border-accent "
                  } py-2 px-4 border-b-4 border-r-4 shadow-lg transition gap-4 flex items-center cursor-pointer hover:border-accent-hover justify-center`}
                >
                  <p className="text-center capitalize ">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex mt-2 justify-center w-full">
          {/* button */}
          {forNewPage ? (
            <Link className="w-full" to="/search">
              <button
                onClick={() => filterList(fullList)}
                className={`border-none hover:bg-accent-hover rounded-sm transition-all px-5 py-2  text-white font-semibold w-full ${
                  buttonColor || "bg-accent"
                }`}
              >
                Search
              </button>
            </Link>
          ) : (
            <button
              onClick={clickSearchHandle}
              className={`border-none hover:bg-accent-hover rounded-sm transition-all px-5 py-2 text-white font-semibold w-full ${
                buttonColor || "bg-accent"
              }`}
            >
              Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
