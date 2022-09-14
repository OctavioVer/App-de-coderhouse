import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./componentes/CartWidget";

function App() {
  return (
    <div className=".container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modiquia sit incidunt dolore, sapiente, eum iste unde dolores eos hic ipsaullam ab nostrum velit possimus, qui nemo magnam."
                }
              />
            }
          />
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
