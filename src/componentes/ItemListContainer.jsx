import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const tarjeta = [
  {
    id: 1,
    titulo: "buzo",
    foto: "",
  },
  {
    id: 2,
    titulo: "buzo",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/393736-540-540/ch_ICHHS9406018.jpg?v=637847767284500000",
  },
  {
    id: 3,
    titulo: "buzo",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
];

const ItemContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tarjeta);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  const onADD = (valor) => {
    console.log(`Usted tiene ${valor} unidades en el carrito`);
  };

  return (
    <div>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} onADD={onADD} />
      <ItemList data={data} />
    </div>
  );
};

export default ItemContainer;
