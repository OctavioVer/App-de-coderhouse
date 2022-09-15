import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./componentes/CartWidget";
import Home from "./componentes/Home";

function App() {
  return (
    <div className=".container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
