import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";

const Carrito = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h4>No hay elementos en el carrito</h4>
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
      <h5>Total: ${totalPrice()}</h5>
      <div className="d-grid gap-2 col col-lg-2">
        <Link to="/">
          <button className="btn btn-outline-success">Segui Comprando</button>
        </Link>
        <button className="btn btn-outline-danger" onClick={() => clearCart()}>
          Limpiar Carrito
        </button>
        <Link to="/checkout">
          <input
            type="button"
            className="btn btn-outline-primary"
            value="Iniciar compra"
          />
        </Link>
      </div>
    </div>
  );
};

export default Carrito;
