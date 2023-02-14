import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0);
  //total price state
  const [total, setTotal] = useState(0);
  //   confirmPage state
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  //reduce method to add up all the prices in the cart
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });
  //update item amount
  useEffect(() => {
    if (cart) {
      //if cart not empty
      //.reduce to sum up amount of every item in cart
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //check if the item is already in the cart
    const cartItem = cart.find((item) => {
      //find method to find the match between item.id(from cart state) and product id from product

      return item.id == id;
    });

    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        //iterate cart if cartItem exists
        //if item in cart matches id from product
        //return the object and increment amount by 1
        if (item.id == id) {
          //...item = all props of each item
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      //if no cartItem(same item) found
      setCart([...cart, newItem]);
    }
  };
  //remove from cart
  const removeFromCart = (id) => {
    //filter to keep only not matching id
    //store in newcart and setCart to newCart
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    addToCart(cartItem, id);
  };

  //decrase amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    // if item found
    //map and decrease amount of the onne that id=== itemid
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          // return old props oof item and the updated amount
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          // those not matched
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  console.log(confirmIsOpen);
  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        decreaseAmount,
        increaseAmount,
        removeFromCart,
        addToCart,
        removeFromCart,
        clearCart,
        confirmIsOpen,
        setConfirmIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
