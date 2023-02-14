import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HeaderContextProvider from "./context/HeaderContext";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
import LogInProvider from "./context/LogInContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LogInProvider>
    <ProductContextProvider>
      <HeaderContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </HeaderContextProvider>
    </ProductContextProvider>
  </LogInProvider>
);
