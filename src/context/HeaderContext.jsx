import React, { createContext, useEffect, useState } from "react";

// create context
export const HeaderContext = createContext();

const HeaderContextProvider = ({ children }) => {
  // transparent header state
  const [headerTrans, setHeaderTrans] = useState(false);
  // location dropdown start

  //   category menu
  const [categoryMenuIsShown, setCategoryMenuIsShown] = useState(false);
  //   basket sidebar
  const [basketIsShown, setBasketIsShown] = useState(false);
  // search bar
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  //   scroll effect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setHeaderTrans(true) : setHeaderTrans(false);
    });
  });
  return (
    <HeaderContext.Provider
      value={{
        headerTrans,
        categoryMenuIsShown,
        setCategoryMenuIsShown,
        basketIsShown,
        setBasketIsShown,
        searchIsOpen,
        setSearchIsOpen,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
