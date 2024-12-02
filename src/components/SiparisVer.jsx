import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import axios from "axios";

const SiparisVer = ({ isValid, formData }) => {
  const history = useHistory();

  const handleSiparisOnay = (event) => {
    event.preventDefault();
    if (isValid) {
      axios
        .post("https://reqres.in/api/pizza", formData)
        .then((response) => {
          console.log("API Response:", response.data);

          history.push("/siparis");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div
      className="siparisVer"
      style={{
        border: "1px solid #D9D9D9",
        borderRadius: "6px ",
        width: "350px",
        margin: "0",
        paddingTop: "42px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "49px",
        }}
      >
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            Sipariş Toplamı
          </p>
        </div>
        <div style={{ display: "flex", gap: "130px", fontSize: "18px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "max-content",
            }}
          >
            <p>Seçimler</p>
            <p style={{ color: "#CE2829" }}>Toplam</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "max-content",
              textAlign: "right",
            }}
          >
            <p>25.00₺</p>
            <p style={{ color: "#CE2829" }}>110.50₺</p>
          </div>
        </div>
      </div>

      <div>
        <button
          disabled={!isValid}
          onClick={handleSiparisOnay}
          type="button"
          style={{
            padding: "5px 10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#FDC913",
            width: "350px",
            height: " 62px",
            borderRadius: "6px ",
            border: "none",
          }}
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
};

export default SiparisVer;
