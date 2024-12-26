import React from "react";
import "./header.css";
import logo2 from ../../Assets/Iteration-1-assets/logo.svg

export default function Header() {
  return (
    <header className="header-css">
      <img src={logo2} className="baslik" />
    </header>
  );
}
