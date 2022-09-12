import "../componentes/item.css";
import React from "react";

const Item = ({ info }) => {
  return (
    <div className="card carta ">
      <img src={info.foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{info.titulo}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Item;
