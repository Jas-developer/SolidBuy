import { PRODUCTS } from "../components/products/Items";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  //state variable for all product items
  const [cartItem, setCartItem] = useState([]);
  // visual state for cart content
  const [cartCount, setCartCount] = useState(0);

  //adding items to cart
  function handleAddCart(id) {
    //checking exact base info of the product
    const product = PRODUCTS.find((item) => item.id === id);
    // checking the amount of added items
    setCartItem((prev) => [...prev, product]);
  }

  // Removing cart existing Items
  function handleRemoveCart(id) {
    const newItem = cartItem.filter((item) => item.id !== id);

    setCartItem(newItem);
  }

  //cartCount
  useEffect(() => {
    setCartCount(cartItem.length);
  }, [cartItem]);

  const contextValue = {
    cartItem,
    setCartItem,
    handleAddCart,

    cartCount,
    handleRemoveCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
