import "../componentes/itemDetail.css";
import React from "react";

const ItemDetail = ({ data }) => {
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
            <h5 className="card-title">{data.titulo}</h5>
            <p className="card-text">{data.descripcion}</p>
            <p className="card-text">{data.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
