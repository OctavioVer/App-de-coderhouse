import "../componentes/itemDetail.css";
import React, { useState } from "react";
import { useCartContext } from "../CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const [irAlCarrito, setCarrito] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setCarrito(true);
    addProduct(data, quantity);
  };

  return (
    <div className="card mb-3 cartaDesc">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.foto}
            className="img-fluid rounded-start imagenDetalle"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{data.titulo}</h3>
            <p className="card-text">{data.descripcion}</p>
            <h6 className="card-text">{data.categoria}</h6>
            <p className="card-text">{data.precio}</p>
            {irAlCarrito ? (
              <Link className="btn btn-outline-success  btn-sm" to="/cart">
                Finalizar compra
              </Link>
            ) : (
              <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
