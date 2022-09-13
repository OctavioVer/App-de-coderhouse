import "../componentes/itemDetail.css";
import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const onAdd = (valor) => {
    console.log(`Usted tiene ${valor} unidades en el carrito`);
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
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
