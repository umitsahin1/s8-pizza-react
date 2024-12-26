import React from "react";
import "./siparisOnay.css";
import { FaTwitter } from "react-icons/fa";
import logosheader from "../../Assets/Iteration-1-assets/logo.svg"
import logos1 from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg"
import logos2 from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png"
import logos3 from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png"
import logos4 from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png"
import logos5 from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png"
import logos6 from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png"
import logos7 from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png"
import logos8 from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png"
import logos9 from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png"
import logos10 from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png"

const SiparisOnay = ({ quantity, formData }) => {
  return (
    <div className="siparisOnay">
      <img
        className="onay-css"
        src={logosheader}
        alt="logo"
      />
      <div className="paragraf">
        <p
          style={{
            fontFamily: "Satisfy",
            fontSize: "32px",
            marginTop: "60.46px",
            color: "#FDC913",
            marginBottom: "0",
          }}
        >
          lezzetin yolda
        </p>
        <h1>SİPARİŞ ALINDI!</h1>
        <div
          style={{
            width: "100%",
            border: "0.5px solid #FAF7F2",
            margin: "30px 0",
          }}
        ></div>
        <p
          style={{
            fontFamily: "Barlow",
            fontSize: "22px",
            marginBottom: "40px",
            fontWeight: "600",
          }}
        >
          Position Absolute Acı Pizza
        </p>
        <div className="siparis-detay">
          <p style={{ fontWeight: "400", fontSize: "16px" }}>
            Boyut: <span>{formData.boyut}</span>
          </p>
          <p style={{ fontWeight: "400" }}>
            Hamur: <span>{formData.hamur}</span>
          </p>
          <p style={{ fontWeight: "400" }}>
            Ek Malzemeler: <span> </span>
            <span>{formData.onaylanmisMalzemeler.join(",")}</span>
          </p>
        </div>
        <div className="siparis-tutar">
          <p>Sipariş Toplamı</p>
          <div className="siparis-fiyat">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Seçimler</p>
              <p>{formData.onaylanmisMalzemeler.length * 5}₺</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Toplam</p>
              <p>
                {85.5 * quantity + formData.onaylanmisMalzemeler.length * 5}₺
              </p>
            </div>
          </div>
        </div> 
      </div>
      <div>
        <footer className="siparisOnay-footer">
          <div className="footer-information">
            <div>
              <img
                src={logos1}
                style={{ marginBottom: "50px" }}
              />
              <p style={{ marginBottom: "20px" }}>
                <img
                  src={logos2}
                  style={{ marginRight: "10px" }}
                />
                341 Londonderry Road, Istanbul Türkiye
              </p>
              <p style={{ marginBottom: "20px" }}>
                <img
                  src={logos3}
                  style={{ marginRight: "10px" }}
                />
                aciktim@teknolojikyemekler.com
              </p>
              <p>
                <img
                  src={logos4}
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
                  src={logos5}
                  style={{
                    width: "105px",
                    height: "94.5px",
                    marginRight: "16.75px",
                    marginBottom: "33px",
                  }}
                />
                <img
                  src={logos6}
                  style={{
                    width: "105px",
                    height: "94.5px",
                    marginRight: "16.75px",
                    marginBottom: "33px",
                  }}
                />
                <img
                  src={logos7}
                  style={{
                    width: "105px",
                    height: "94.5px",
                    marginBottom: "33px",
                  }}
                />
              </div>
              <div>
                <img
                  src={logos8}
                  style={{
                    width: "105px",
                    height: "94.5px",
                    marginRight: "16.75px",
                  }}
                />
                <img
                  src={logos9}
                  style={{
                    width: "105px",
                    height: "94.5px",
                    marginRight: "16.75px",
                  }}
                />
                <img
                  src={logos10}
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
    </div>
  );
};

export default SiparisOnay;
