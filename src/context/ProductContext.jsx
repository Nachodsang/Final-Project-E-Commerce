import React, { createContext, useEffect, useState } from "react";
// import axios
import axios from "axios";

// create product context
export const ProductContext = createContext();

// API
const URL = "https://dummyjson.com/products?limit=0";

// category

const categories = "https://dummyjson.com/products/categories";
// const category = `https://dummyjson.com/products/category/${cat}`;
// // single Product
// const singleProduct = `https://dummyjson.com/products/${id}`;

// catagory group
const categoryGroup = {
  technology: ["smartphones", "laptops"],
  home: ["groceries", "home-decoration", "furniture", "lighting"],
  woman: [
    "tops",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
  ],
  men: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
  automotive: ["automotive", "motorcycle"],
};

function ProductContextProvider({ children }) {
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // create product list state
  const [products, setProducts] = useState([]);
  // create toppicked category state
  const [cat, setCat] = useState([]);
  // random cat state
  const [randomCategory, setRandomCategory] = useState("");
  // catagory list
  const [catList, setCatList] = useState([]);
  // filtered Category
  const [filteredCategoryList, setFilteredCategoryList] = useState([]);
  // selected Category
  const [productDetailsShown, setProductDetailShown] = useState({});
  // images for detail page
  const [imgs, setImgs] = useState([]);
  // filtered product shown in search page
  const [filteredProductsForSearch, setFilteredProductsForSearch] = useState(
    []
  );

  // fetch product function
  const fetchProduct = async (url) => {
    setIsLoading(true);
    try {
      const fetchingItem = await axios.get(url);
      const productList = fetchingItem.data.products;
      setProducts(productList);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };
  // fetch random category function
  const fetchRandomCategory = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const categoryList = await response.data;

      setCatList(categoryList);

      // set randomised category
      const randomIndex = Math.floor(Math.random() * categoryList.length);
      const randomed = categoryList[randomIndex];
      setRandomCategory(randomed);

      const randomCatResponse = await axios.get(
        `https://dummyjson.com/products/category/${randomed}?limit=0`
      );

      setCat(randomCatResponse.data.products);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };
  // filter category
  const filterCategory = (selectedCategory) => {
    setFilteredCategoryList([]);
    const subCategory = categoryGroup[selectedCategory].map((item) => {
      fetchEachCategory(item);
    });
  };

  // fetch sub category
  const fetchSubCategory = async (selectedCategory) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${selectedCategory}?limit=0`
      );
      const data = response?.data?.products;
      setFilteredCategoryList(data);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };
  // fetchEachCatagory
  const fetchEachCategory = async (selectedCategory) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${selectedCategory}?limit=0`
      );
      const data = response?.data?.products;
      // set list combining sub categories
      setFilteredCategoryList((prev) => [...prev, ...data]);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };
  // single product fetch for product details page
  const fetchSingleProduct = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response?.data;
      setProductDetailShown(data);
      fetchSubCategory(data.category);
      setImgs(data.images);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchProduct(URL);
    fetchRandomCategory(categories);
    // filterCategory("men");
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        cat,
        randomCategory,
        isLoading,
        catList,
        filteredCategoryList,
        filterCategory,
        productDetailsShown,
        fetchSingleProduct,
        fetchEachCategory,
        fetchSubCategory,
        imgs,
        filteredProductsForSearch,
        setFilteredProductsForSearch,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
