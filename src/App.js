import "./App.css";
import React from "react";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import CartContainer from "./CartContext";
import Carrito from "./componentes/Cart";
import Formu from "./componentes/Formulario";

function App() {
  return (
    <div className=".container-fluid">
      <BrowserRouter>
        <CartContainer>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/formulario" element={<Formu />} />
          </Routes>
        </CartContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
