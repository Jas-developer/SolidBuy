import { PRODUCTS } from "../components/products/Items";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  //state variable for all product items
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [Amount, setAmount] = useState(0);

  // WILL CALCULATE THE TOTAL AMOUNT OF  CART ITEMS
  useEffect(() => {
    function handleAmount() {
      let amount = 0;
      for (let i = 0; i < cartItem.length; i++) {
        const sum = (amount += cartItem[i].price);
        setAmount(sum);
      }
    }
    handleAmount();
  }, [cartItem]);

  //adding items to cart
  function handleAddCart(id) {
    const product = PRODUCTS.find((item) => item.id === id);
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
    Amount,
    cartCount,
    handleRemoveCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
