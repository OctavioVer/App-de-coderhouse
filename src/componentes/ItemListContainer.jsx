import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const tarjeta = [
  {
    id: 1,
    titulo: "Buzo",
    categoria: "Hombre ",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/383149-540-540/fi_f11l5060126577.jpg?v=637693091478770000",
  },
  {
    id: 2,
    titulo: "Buzo",
    categoria: "Hombre ",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/393736-540-540/ch_ICHHS9406018.jpg?v=637847767284500000",
  },
  {
    id: 3,
    titulo: "Buzo",
    categoria: "Hombre ",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
  {
    id: 4,
    titulo: "Buzo",
    categoria: "Hombre ",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
  {
    id: 5,
    titulo: "Buzo",
    categoria: "Mujer ",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
  {
    id: 6,
    titulo: "Buzo",
    categoria: "Mujer ",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
  {
    id: 7,
    titulo: "Buzo",
    categoria: "Mujer ",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
  {
    id: 8,
    titulo: "Buzo",
    categoria: "Mujer ",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
];

const ItemContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tarjeta);
      }, 2000);
    });
    if (categoryId) {
      getData.then((res) =>
        setData(res.filter((tarjeta) => tarjeta.categoria === categoryId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoryId]);

  return (
    <div>
      <p>{greeting}</p>
      <ItemList data={data} />
    </div>
  );
};

export default ItemContainer;
