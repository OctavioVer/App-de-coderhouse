import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";

const Carrito = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [datos, setDatos] = useState({
    nombre: ``,
    apellido: ``,
    telefono: ``,
    direccion: ``,
  });
  const valores = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.name });
  };
  let nombre = datos.nombre;
  let apellido = datos.apellido;
  let telefono = datos.telefono;
  let direccion = datos.direccion;

  const order = {
    buyer: {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
    },
    items: cart.map((product) => ({
      id: product.id,
      titulo: product.titulo,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const hacerClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "ordenes");
    addDoc(orderCollection, order).then(({ id }) => console.log(id));
  };

  if (cart.length === 0) {
    return (
      <div>
        <p>No hay elementos en el carrito</p>
        <Link className="btn btn-outline-dark btn-sm" to="/">
          Tienda
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: ${totalPrice()}</p>
      <div className="d-grid gap-2 col col-lg-2">
        <button className="btn btn-outline-danger" onClick={() => clearCart()}>
          Limpiar Carrito
        </button>
      </div>
      <div>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            type="text"
            placeholder="Ingrese su nombre..."
            onChange={valores}
          />
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            placeholder="Ingrese su apellido"
            onChange={valores}
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            type="number"
            name="telefono"
            placeholder="Ingrese su numero de telefono"
            onChange={valores}
          />
          <label htmlFor="direccion">Direccion</label>
          <input
            type="text"
            name="direccion"
            placeholder="Ingrese su direccion"
            onChange={valores}
          />
          <button className="btn btn-outline-success" onClick={hacerClick}>
            Finalizar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default Carrito;
