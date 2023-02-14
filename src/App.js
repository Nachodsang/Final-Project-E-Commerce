// import useContext
import { useContext } from "react";
// import react-router-dom

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import SearchPage from "./pages/SearchPage";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import CategoryMenu from "./components/CategoryMenu";
import Search from "./components/Search";
import LogIn from "./pages/LogIn";
import ConfirmPurchase from "./components/ConfirmPurchase";

// import context
import { HeaderContext } from "./context/HeaderContext";

function App() {
  const { setCategoryMenuIsShown, setBasketIsShown, setSearchIsOpen } =
    useContext(HeaderContext);
  const handleCloseOverlay = () => {
    setCategoryMenuIsShown(false);
    setBasketIsShown(false);
    setSearchIsOpen(false);
  };

  return (
    <div className="relative">
      {/* set route */}
      <Router>
        <Header closeOverlay={handleCloseOverlay} />

        <Routes>
          <Route
            path="/"
            element={<Home closeOverlay={handleCloseOverlay} />}
          />
          <Route
            path="/category/:id"
            element={<CategoryPage closeOverlay={handleCloseOverlay} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails closeOverlay={handleCloseOverlay} />}
          />
          <Route
            path="/search"
            element={<SearchPage closeOverlay={handleCloseOverlay} />}
          />
        </Routes>
        {/* overlay */}
        <Basket />
        <CategoryMenu />
        <Search closeOverlay={handleCloseOverlay} />
        <LogIn />
        <ConfirmPurchase />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
