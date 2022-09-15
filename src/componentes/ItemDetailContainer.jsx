import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const detalle = [
  {
    id: 1,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4200 Pesos",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/383149-540-540/fi_f11l5060126577.jpg?v=637693091478770000",
    stock: 5,
  },
  {
    id: 2,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4500 Pesos",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/393736-540-540/ch_ICHHS9406018.jpg?v=637847767284500000",
    stock: 5,
  },
  {
    id: 3,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4000 Pesos",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
    stock: 5,
  },
  {
    id: 4,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4000 Pesos",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
    stock: 5,
  },
  {
    id: 5,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4000 Pesos",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
    stock: 5,
  },
  {
    id: 6,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4000 Pesos",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
    stock: 5,
  },
  {
    id: 7,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4000 Pesos",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
    stock: 5,
  },
  {
    id: 8,
    categoria: "Indumentaria ",
    titulo: "Buzo",
    descripcion:
      "Some quick example text to build on the card title and make up the bulk of the cards content.",
    precio: "$4000 Pesos",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
    stock: 5,
  },
];

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(detalle);
      }, 2000);
    });

    getData.then((res) =>
      setData(res.find((detalle) => detalle.id === parseInt(itemId)))
    );
  }, [itemId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
