import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/NavBar";

function App() {
  return (
    <div className=".container-fluid">
      <nav>
        <Navbar />
      </nav>
      <main>
        <ItemListContainer greeting="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
      </main>
    </div>
  );
}

export default App;
