import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";
import { FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#faf7f2" }}>
      <header className="home-css">
        <img src="Assets/Iteration-1-assets/logo.svg" alt="home-png" />
        <p className="fırsat-css">fırsatı kaçırma</p>
        <p className="home-paragraf">KOD ACIKTIRIR</p>
        <p className="home-paragraf">PİZZA, DOYURUR</p>
        <Link to="/form">
          <button data-cy="home-button" className="home-button">
            ACIKTIM
          </button>
        </Link>
      </header>
      <div className="mainMenu-css">
        <div className="menu-css">
          <div className="menu-icons">
            <img src="Assets/Iteration-2-aseets/icons/1.svg" alt="" />
            <p>YENİ! Kore</p>
          </div>
          <div className="menu-icons">
            <img src="Assets/Iteration-2-aseets/icons/2.svg" alt="" />
            <p>Pizza</p>
          </div>
          <div className="menu-icons">
            <img src="Assets/Iteration-2-aseets/icons/3.svg" alt="" />
            <p>Burger</p>
          </div>
          <div className="menu-icons">
            <img src="Assets/Iteration-2-aseets/icons/4.svg" alt="" />
            <p>Kızartmalar</p>
          </div>
          <div className="menu-icons">
            <img src="Assets/Iteration-2-aseets/icons/5.svg" alt="" />
            <p>Fast Food</p>
          </div>
          <div className="menu-icons">
            <img src="Assets/Iteration-2-aseets/icons/6.svg" alt="" />
            <p>Gazlı İçecek</p>
          </div>
        </div>
      </div>
      <div className="siparis-Ver">
        <div className="siparisVer-1">
          <p
            style={{
              fontFamily: "Quattrocento",
              fontSize: "58px",
              width: "58px",
              lineHeight: "80px",
              marginBottom: "-1px",
              fontWeight: "700",
            }}
          >
            ÖZEL LEZZETUS
          </p>
          <p style={{ fontSize: "20px" }}>Position:Absolute Acı Burger</p>
          <Link to="/form">
            <button className="siparisVer-button">SİPARİŞ VER</button>
          </Link>
        </div>
        <div className="siparisVer-2">
          <div className="siparisVer-2-1">
            <p
              style={{
                width: "200px",
                fontWeight: "600",
              }}
            >
              Hackathlon Burger Menü
            </p>
            <Link to="/form">
              <button className="siparisVer-button">SİPARİŞ VER</button>
            </Link>
          </div>
          <div className="siparisVer-2-2">
            <p
              style={{
                width: "240px",
                color: "#292929",
                fontWeight: "600",
              }}
            >
              <span style={{ color: "#D80027" }}>Çoooook</span> hızlı npm gibi
              kurye
            </p>
            <Link to="/form">
              <button className="siparisVer-button">SİPARİŞ VER</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="paragraflar">
        <p
          style={{
            color: "#CE2829",
            fontFamily: "Satisfy",
            fontWeight: "400",
            fontSize: "32px",
          }}
        >
          en çok paketlenen menüler
        </p>
        <p
          style={{
            color: "#292929",
            fontFamily: "Barlow",
            fontWeight: "600",
            fontSize: "42px",
          }}
        >
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </div>
      <div className="mainMenu-css-2">
        <div className="menu-css">
          <div
            className="menu-icons"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "146px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            <img src="Assets/Iteration-2-aseets/icons/1.svg" alt="" />
            <p>Ramen</p>
          </div>
          <div
            className="menu-icons"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "133px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            <img src="Assets/Iteration-2-aseets/icons/2.svg" alt="" />
            <p>Pizza</p>
          </div>
          <div
            className="menu-icons"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "145px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            <img src="Assets/Iteration-2-aseets/icons/3.svg" alt="" />
            <p>Burger</p>
          </div>
          <div
            className="menu-icons"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "186px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            <img src="Assets/Iteration-2-aseets/icons/4.svg" alt="" />
            <p>French fries</p>
          </div>
          <div
            className="menu-icons"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "165px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            <img src="Assets/Iteration-2-aseets/icons/5.svg" alt="" />
            <p>Fast Food</p>
          </div>
          <div
            className="menu-icons"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "186px",
              height: "66px",
              borderRadius: "50px",
            }}
          >
            <img src="Assets/Iteration-2-aseets/icons/6.svg" alt="" />
            <p>Soft Drinks</p>
          </div>
        </div>
      </div>
      <div className="fotograflı-menu">
        <div className="cards">
          <img src="Assets/Iteration-2-aseets/pictures/food-1.png" />
          <p
            style={{
              fontSize: "22px",
              fontWeight: "600",
              paddingTop: "20px",
            }}
          >
            Terminal Pizza
          </p>
          <div>
            <p>4.9</p>
            <p style={{ position: "relative", left: "60px" }}>(200)</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>60₺</p>
          </div>
        </div>
        <div className="cards">
          <img src="Assets/Iteration-2-aseets/pictures/food-2.png" />
          <p
            style={{
              fontSize: "22px",
              fontWeight: "600",
              paddingTop: "20px",
            }}
          >
            Position Absolute Acı Pizza
          </p>
          <div>
            <p>4.9</p>
            <p style={{ position: "relative", left: "60px" }}>(200)</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>60₺</p>
          </div>
        </div>
        <div className="cards">
          <img src="Assets/Iteration-2-aseets/pictures/food-3.png" />
          <p
            style={{
              fontSize: "22px",
              fontWeight: "600",
              paddingTop: "20px",
            }}
          >
            useEffect Tavuklu Burger
          </p>
          <div>
            <p>4.9</p>
            <p style={{ position: "relative", left: "60px" }}>(200)</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>60₺</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-information">
          <div>
            <img
              src="Assets/Iteration-2-aseets/footer/logo-footer.svg"
              style={{ marginBottom: "50px" }}
            />
            <p style={{ marginBottom: "20px" }}>
              <img
                src="Assets/Iteration-2-aseets/footer/icons/icon-1.png"
                style={{ marginRight: "10px" }}
              />
              341 Londonderry Road, Istanbul Türkiye
            </p>
            <p style={{ marginBottom: "20px" }}>
              <img
                src="Assets/Iteration-2-aseets/footer/icons/icon-2.png"
                style={{ marginRight: "10px" }}
              />
              aciktim@teknolojikyemekler.com
            </p>
            <p>
              <img
                src="Assets/Iteration-2-aseets/footer/icons/icon-3.png"
                style={{ marginRight: "10px" }}
              />
              +90 216 123 45 67
            </p>
          </div>
          <div style={{ marginTop: "68.91px" }}>
            <p style={{ marginBottom: "30px", fontSize: "24px" }}>Hot Menu</p>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
          <div>
            <p style={{ fontSize: "24px", margin: "68.91px 0 40px 0" }}>
              Instagram
            </p>
            <div>
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-0.png"
                style={{
                  width: "105px",
                  height: "94.5px",
                  marginRight: "16.75px",
                  marginBottom: "33px",
                }}
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-1.png"
                style={{
                  width: "105px",
                  height: "94.5px",
                  marginRight: "16.75px",
                  marginBottom: "33px",
                }}
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-2.png"
                style={{
                  width: "105px",
                  height: "94.5px",
                  marginBottom: "33px",
                }}
              />
            </div>
            <div>
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-3.png"
                style={{
                  width: "105px",
                  height: "94.5px",
                  marginRight: "16.75px",
                }}
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-4.png"
                style={{
                  width: "105px",
                  height: "94.5px",
                  marginRight: "16.75px",
                }}
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-5.png"
                style={{ width: "105px", height: "94.5px" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            bottom: "-41px",
            border: "1px solid #FFFFFF26",
            width: "1680px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1066px",
              height: "89.8px",
              alignItems: "center",
            }}
          >
            <p>© 2023 Teknolojik Yemekler. </p>
            <FaTwitter
              style={{ borderTopColor: "black", color: "white" }}
            />{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
