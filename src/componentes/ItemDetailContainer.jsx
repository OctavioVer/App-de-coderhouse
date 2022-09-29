import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const response = doc(db, "productos", "0pisdeIqaf9ncwMUuN1d");
    getDoc(response).then((snapshot) => {
      console.log(snapshot);
    });
  }, [itemId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
