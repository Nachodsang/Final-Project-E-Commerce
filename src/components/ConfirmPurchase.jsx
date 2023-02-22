import React, { useContext } from "react";
// import context
import { CartContext } from "../context/CartContext";
// import icon
import { IoClose } from "react-icons/io5";
function ConfirmPurchase() {
  const { confirmIsOpen, setConfirmIsOpen, total, clearCart } =
    useContext(CartContext);

  //   handle confirm
  const handleConfirm = () => {
    setConfirmIsOpen(!confirmIsOpen);
    clearCart();
  };

  return (
    <div
      className={`${
        confirmIsOpen ? "top-0 flex" : "-top-full hidden"
      } bg-black/80 w-screen  h-screen fixed z-50 transition-all duration-700`}
    >
      <div className="frame bg-white h-[300px] w-[400px] m-auto my-[200px] rounded-lg">
        {/* container */}
        <div className=" flex flex-col justify-center w-full relative">
          <div
            onClick={() => setConfirmIsOpen(!confirmIsOpen)}
            className="absolute top-5 right-3 hover:text-accent-hover text-primary cursor-pointer text-2xl"
          >
            <IoClose />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-6  w-full">
            {/* title */}

            <h1 className="font-semibold text-md uppercase text-center ">
              Thank you for shopping with us
            </h1>
            {/* amount */}
            <div className="flex flex-row justify-center items-center gap-5">
              <h1 className="italic font-semibold">Total Amount:</h1>
              <span className="font-bold text-2xl text-red-500"> ${total}</span>
            </div>
            {/* button */}
            <button
              onClick={handleConfirm}
              className="w-full transition-all bg-primary hover:bg-accent-hover h-8 rounded-md mt-4 font-bold text-2xl uppercase text-white"
            >
              confirm your purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPurchase;
