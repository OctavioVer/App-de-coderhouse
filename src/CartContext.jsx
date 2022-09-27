import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext;

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    setCart([]);
    if (isInCart(item.id)) {
      let producto = cart.find((x) => x.id === item.id);
      cart[cart.indexOf(producto)].cantidad += cantidad;
      setCart([...cart]);
      console.log(cart);
    } else {
      setCart([...cart, { ...item, cantidad: cantidad }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
