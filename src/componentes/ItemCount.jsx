import "../componentes/itemCount.css";
import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setcout] = useState(parseInt(initial));

  const decrease = () => {
    setcout(count - 1);
  };

  const increase = () => {
    setcout(count + 1);
  };

  useEffect(() => {
    setcout(parseInt(initial));
  }, [initial]);

  return (
    <div className="contador">
      <button disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={increase}>
        +
      </button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
