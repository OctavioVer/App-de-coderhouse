import React, { useState } from "react";
import "../componentes/check.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Formulario from "./Formulario";
import { useCartContext } from "../CartContext";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState("");
  const [estadoCompra, setEstadoCompra] = useState(false);
  const total = totalPrice();

  const sendOrders = (nombre, apellido, email) => {
    const orden = {
      buyer: { nombre, apellido, email },
      items: cart,
      total,
    };

    const db = getFirestore();
    const refOrder = collection(db, "orders");
    addDoc(refOrder, orden).then((res) => {
      setOrderId(res.id);
    });

    setEstadoCompra(true);
    clearCart();
  };

  return (
    <div className="checkout">
      {!estadoCompra ? <Formulario sendOrders={sendOrders} /> : ""}
      {!estadoCompra ? (
        <div className="cart-bg checkout__detail">
          <div className="checkout__detail--info">
            <h4>TOTAL</h4>
            <h4>$ {total}</h4>
          </div>
          {cart.map((e) => (
            <div key={e.id} className="cart__items--container">
              <div className="cart__items--img">
                <img src={e.foto} alt={e.titulo} className="img-thumbnail" />
              </div>
              <div className="cart__items--data">
                <div className="cart__items--data_nombre">
                  <h4>Nombre: {e.titulo}</h4>
                </div>
                <div className="cart__items--data_info">
                  <h4>Precio: ${e.price}</h4>
                  <h4>Cantidad: x{e.quantity}</h4>
                  <h4>SubTotal: $ {e.quantity * e.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-bg checkout__compra">
          <p>Felicitaciones tu compra fue realizada con exito</p>
          <h4>Nro. orden: {orderId} </h4>
        </div>
      )}
    </div>
  );
};

export default Checkout;
