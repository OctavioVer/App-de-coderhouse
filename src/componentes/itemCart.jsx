import React from "react";
import { useCartContext } from "../CartContext";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const { remuveProduct } = useCartContext();
  return (
    <div className="card mb-3 carritoDiv ">
      <div className="row g-0 ">
        <div className="col-md-4 text-center">
          <img
            className="img-fluid foto"
            src={product.foto}
            alt={product.titulo}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.titulo}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cantidad: {product.quantity}</li>
              <li className="list-group-item">Precio: ${product.price}</li>
              <li className="list-group-item">
                SubTotal: ${product.quantity * product.price}
              </li>
              <li className="list-group-item">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => remuveProduct(product)}
                >
                  Eliminar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
