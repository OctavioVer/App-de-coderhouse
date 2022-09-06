import React from "react";
import ItemCount from "./ItemCount";
const ItemContainer = ({ greeting }) => {
  const onADD = (valor) => {
    console.log(`Usted tiene ${valor} unidades en el carrito`);
  };

  return (
    <div>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} onADD={onADD} />
    </div>
  );
};

export default ItemContainer;
