import React, { useContext } from "react";

//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { Filtrash2, FiTrash2 } from "react-icons/fi";

//import components
import CartItem from "../components/CartItem";
//import sidebar context
import { HeaderContext } from "../context/HeaderContext";
//import cart context
import { CartContext } from "../context/CartContext";
//import logIn context
import { LogInContext } from "../context/LogInContext";
// import { LogInContext } from "../contexts/LogInContext";
const Basket = () => {
  const { basketIsShown, setBasketIsShown } = useContext(HeaderContext);
  const {
    cart,
    clearCart,
    total,
    itemAmount,
    confirmIsOpen,
    setConfirmIsOpen,
  } = useContext(CartContext);
  const { isLoggedIn, handleOpenLogIn } = useContext(LogInContext);

  //   checkout handle
  const handleCheckOut = () => {
    !isLoggedIn ? handleOpenLogIn() : setConfirmIsOpen(!confirmIsOpen);
  };

  return (
    <div
      className={`
      ${
        basketIsShown ? "right-0" : "-right-full"
      } w-full  bg-white/90 fixed top-32 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-40 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-sm font-semibold">
          Shopping Basket ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={() => setBasketIsShown(!basketIsShown)}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[400px] md:h-[550px] lg:h-[300px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        {/* buttom */}
        <div className=" flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span>Total: </span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center text-primary w-full hover:bg-accent-hover transiition-all hover:text-white font-medium"
          onClick={() => setBasketIsShown(!basketIsShown)}
        >
          HOME
        </Link>
        <Link
          to="/"
          className="bg-primary flex p-4 justify-center hover:bg-accent-hover transition-all text-white w-full font-medium"
          onClick={handleCheckOut}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Basket;
