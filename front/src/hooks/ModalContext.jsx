import React, { createContext, useContext, useState } from "react";
const ModalContext = createContext();
const CartContext = createContext();
export const useModalContext = () => useContext(ModalContext);
export const useCartContext = () => useContext(CartContext);
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProduct, setIsProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const openModal = (obj) => {
    setIsProduct(obj);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const changeCartCount = (count) => {
    setCartCount(count);
  };
  const value = {
    isProduct,
    isModalOpen,
    openModal,
    closeModal,
    cartCount,
    changeCartCount,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
