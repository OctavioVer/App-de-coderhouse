import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const detalle = {
  id: 1,
  categoria: "Indumentaria ",
  titulo: "Buzo",
  descripcion:
    "Some quick example text to build on the card title and make up the bulk of the cards content.",
  precio: "$4000 Pesos",
  foto: "https://ferreira.vteximg.com.br/arquivos/ids/383149-540-540/fi_f11l5060126577.jpg?v=637693091478770000",
  stock: 5,
};

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(detalle);
      }, 2000);
    });

    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
