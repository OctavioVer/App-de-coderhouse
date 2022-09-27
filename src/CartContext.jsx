import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContainer = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(`carrito: `, cart);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () => {
    cart.reduce(
      (acumulador, poductoActual) => acumulador + poductoActual.quantity,
      0
    );
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const remuveProduct = (id) =>
    setCart([cart.filter((product) => product.id !== id)]);

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        remuveProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
