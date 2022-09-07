import "../componentes/item.css";
import React from "react";

const Item = (info) => {
  return (
    <div className="card carta">
      <img className="imagen" src={info.foto} alt="buzo" />
      <p className="card-title">{info.titulo}</p>
    </div>
  );
};

export default Item;
