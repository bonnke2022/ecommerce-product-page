import { createContext, useContext, useState } from "react";
import cartItems from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(cartItems);
  const [clickCart, setClickCart] = useState(false);
  const [amount, setAmount] = useState(0);
  const [addCart, setAddCart] = useState(false);
  const [currentPic, setCurrentPic] = useState(1);
  const [overlay, setOverlay] = useState(false);

  const prevItem = () => {
    setIndex((currentIndex) => {
      const result = (currentIndex - 1 + cartItems.length) % cartItems.length;
      return result;
    });
  };
  const nextItem = () => {
    setIndex((currentIndex) => {
      const result = (currentIndex + 1) % cartItems.length;
      return result;
    });
  };
  const openSidebar = () => {
    setClick(!click);
  };
  const closeSidebar = () => {
    setClick(!click);
  };
  const openCart = () => {
    setClickCart(!clickCart);
  };
  const handleCart = () => {
    setAddCart(true);
  };

  return (
    <AppContext.Provider
      value={{
        click,
        setClick,
        openSidebar,
        closeSidebar,
        index,
        prevItem,
        nextItem,
        clickCart,
        openCart,
        items,
        amount,
        setAmount,
        addCart,
        setAddCart,
        handleCart,
        currentPic,
        setCurrentPic,
        overlay,
        setOverlay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
