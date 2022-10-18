import "../componentes/item.css";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="card carta text-center">
      <img src={info.foto} className="rounded foto" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info.titulo}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/item/${info.id}`} className="btn btn-primary">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
