import React from "react";
import { useCartContext } from "../CartContext";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const [remuveProduct] = useCartContext();
  return (
    <div className="itemCard">
      <img src={product.image} alt={product.title} />
      <div>
        <p>Titulo:{product.title}</p>
        <p>Cantidad:{product.quantity}</p>
        <p>Precio:{product.price}</p>
        <p>SubTotal: ${product.quantity * product.price}</p>
        <button onClick={() => remuveProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
