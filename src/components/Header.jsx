import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./header.css";

export default function Header() {
  return (
    <header className="header-css">
      <h1 style={{ fontFamily: "Roboto Condensed" }}>Teknolojik Yemekler</h1>
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
            to="/order"
            exact
            activeClassName="active-link"
            className="navLink-css"
          >
            Sipariş Oluştur
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
