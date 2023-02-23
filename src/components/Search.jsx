import React, { useContext } from "react";
// import context
import { HeaderContext } from "../context/HeaderContext";
import { ProductContext } from "../context/ProductContext";
// import component
import FilterPanel from "./FilterPanel";

function Search({ closeOverlay }) {
  const { searchIsOpen } = useContext(HeaderContext);
  const { products, filteredProductsForSearch, setFilteredProductsForSearch } =
    useContext(ProductContext);
  return (
    <div
      className={`${
        searchIsOpen ? "top-0 right-0" : "-top-full -right-full"
      } w-[300px] bg-white transition-all h-screen duration-700 fixed z-30`}
    >
      <div className="container py-40">
        <FilterPanel
          buttonColor="bg-primary "
          barColor="dark:bg-primary"
          forNewPage={true}
          fullList={products}
          setListState={setFilteredProductsForSearch}
          closeOverlay={closeOverlay}
        />
      </div>
    </div>
  );
}

export default Search;
