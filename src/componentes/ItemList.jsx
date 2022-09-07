import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return data.map((card) => <Item key={card.id} info={card} />);
};

export default ItemList;
