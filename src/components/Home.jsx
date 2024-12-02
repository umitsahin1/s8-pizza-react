import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";

const Home = () => {
  return (
    <div className="home-css">
      <img src="Assets/Iteration-1-assets/logo.svg" alt="home-png" />
      <p className="home-paragraf" style={{ marginTop: "40px" }}>
        KOD ACIKTIRIR
      </p>
      <p className="home-paragraf" style={{ marginBottom: "40px" }}>PİZZA, DOYURUR</p>
      <Link to="/form">
        <button className="home-button">ACIKTIM</button>
      </Link>
    </div>
  );
};

export default Home;
