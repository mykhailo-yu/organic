import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const value = {
    cartCount,
    setCartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
