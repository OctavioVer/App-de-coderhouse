import "../componentes/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="nav-link active marca__nombre" to="/">
          Centerbend
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={""}>
                Tienda
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={""}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/categoria/Hombre">
                    Hombre
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoria/Mujer">
                    Mujer
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <Link to="/carrito" className="enlace">
          <i className="fi fi-rr-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
