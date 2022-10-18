import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return (
    <div className="galeria">
      {data.map((card) => (
        <Item key={card.id} info={card} />
      ))}
      ;
    </div>
  );
};

export default ItemList;
