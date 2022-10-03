import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const response = collection(db, "productos");
    if (categoryId) {
      const responsefilter = query(
        response,
        where("categoria", "==", categoryId)
      );
      getDocs(responsefilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(response).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
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
