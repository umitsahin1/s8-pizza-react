import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./header.css";

export default function Header() {
  return (
    <header className="header-css">
      <img src="Assets/Iteration-1-assets/logo.svg" alt="foto" />
      <nav className="nav-css">
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            className="navLink-css"
          >
            Anasayfa-
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/form"
            exact
            activeClassName="active-link"
            className="navLink-css"
          >
            Sipariş Oluştur  
          </NavLink>
        </div>
        <div className="checkbox"></div>
      </nav>
    </header>
  );
}
