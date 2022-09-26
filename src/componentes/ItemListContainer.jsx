import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const tarjeta = [
  {
    id: 1,
    titulo: "Buzo Fila",
    categoria: "Hombre",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/383149-540-540/fi_f11l5060126577.jpg?v=637693091478770000",
  },
  {
    id: 2,
    titulo: "Buzo Oversize",
    categoria: "Hombre",
    foto: "https://ferreira.vteximg.com.br/arquivos/ids/393736-540-540/ch_ICHHS9406018.jpg?v=637847767284500000",
  },
  {
    id: 3,
    titulo: "Buzo Tommy Hilfiger",
    categoria: "Hombre",
    foto: "https://tommyargentina.vteximg.com.br/arquivos/ids/204391-500-667/MW0MW24594_DW5_1.jpg?v=637927178658100000",
  },
  {
    id: 4,
    titulo: "Buzo Adidas",
    categoria: "Hombre",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKyjl2uHOvqlR7TNGLfylUNSbSemMesnUFQ&usqp=CAU",
  },
  {
    id: 5,
    titulo: "Buzo Taverniti",
    categoria: "Mujer",
    foto: "https://taverniti.vteximg.com.br/arquivos/ids/247047-345-345/04711_649X1.jpg?v=637968633629100000",
  },
  {
    id: 6,
    titulo: "Buzo Koaj Verde",
    categoria: "Mujer",
    foto: "https://cdn.koaj.co/116208-home_mobile_default/buzo-con-capota-estampado.jpg",
  },
  {
    id: 7,
    titulo: "Buzo Universitario",
    categoria: "Mujer",
    foto: "https://cdn.koaj.co/104517-home_mobile_default/buzo-con-capota-estampado.jpg",
  },
  {
    id: 8,
    titulo: "Buzo Rosa Cropped",
    categoria: "Mujer",
    foto: "https://cdn.koaj.co/c/371-category_default/cropped.jpg",
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
