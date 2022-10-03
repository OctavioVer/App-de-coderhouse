import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";

const Carrito = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div>
        <p>No hay elementos en el carrito</p>
        <Link className="btn btn-outline-dark btn-sm" to="/">
          Tienda
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: ${totalPrice()}</p>
      <button className="btn btn-outline-danger" onClick={() => clearCart()}>
        limpiar carrito
      </button>
    </div>
  );
};

export default Carrito;
