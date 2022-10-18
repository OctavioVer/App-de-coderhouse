import React from "react";
import { Link } from "react-router-dom";
import "../componentes/CartWidget.css";
import { useCartContext } from "../CartContext";

export const CartWidget = () => {
  const { totalProducts, cart } = useCartContext();
  const totalUnidades = totalProducts();
  return (
    <div className={cart.length !== 0 ? "" : "ocultar"}>
      <Link to="/cart">
        <i class="fa-solid fa-cart-shopping carticon"></i>
      </Link>
      <h4 className="cart__count">{totalUnidades}</h4>
    </div>
  );
};

export default CartWidget;
