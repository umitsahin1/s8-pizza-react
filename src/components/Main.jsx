import React, { useEffect } from "react";
import "./main.css";
import { FormGroup, Input, Label } from "reactstrap";
import CheckboxList from "./CheckboxList.jsx";
import SiparisAdet from "./SiparisAdet";
import SiparisVer from "./SiparisVer.jsx";
import { useState } from "react";
import { toast } from "react-toastify";

const initialForm = {
  isim: "",
  boyut: "",
  onaylanmisMalzemeler: [],
  siparisNotu: "",
};
const errorMessages = {
  isim: "İsim en az 3 karakter olmalı",
  boyut: "Boyut seçmelisiniz",
  onaylanmisMalzemeler: "En az 4, en fazla 10 malzeme seçmelisiniz",
};

export default function Main() {
  const [formData, setFormData] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    isim: false,
    onaylanmisMalzemeler: false,
    boyut: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      onMalzemeChange(value, checked);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    if (name === "isim") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        isim: value.trim().length < 3,
      }));
    }

    if (name === "boyut") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        boyut: !value,
      }));
    }
  };

  const onMalzemeChange = (value, checked) => {
    setFormData((prevState) => {
      const updatedMalzemeler = checked
        ? [...prevState.onaylanmisMalzemeler, value]
        : prevState.onaylanmisMalzemeler.filter((item) => item !== value);

      const malzemeCount = updatedMalzemeler.length;
      const malzemeHatasi = malzemeCount < 4 || malzemeCount > 10;

      setErrors((prevErrors) => ({
        ...prevErrors,
        onaylanmisMalzemeler: malzemeHatasi,
      }));
      return { ...prevState, onaylanmisMalzemeler: updatedMalzemeler };
    });
  };

  useEffect(() => {
    const isFormValid =
      formData.isim.trim().length >= 3 &&
      formData.onaylanmisMalzemeler.length >= 4 &&
      formData.onaylanmisMalzemeler.length <= 10 &&
      formData.boyut !== "";
    setIsValid(isFormValid);

    if (errors.isim) {
      toast.error(errorMessages.isim);
    } else if (errors.onaylanmisMalzemeler) {
      toast.error(errorMessages.onaylanmisMalzemeler);
    } else if (errors.boyut) {
      console.log(errorMessages.boyut);
    }
  }, [formData]);

  return (
    <div className="main-css">
      <h1 className="main-baslik">Position Absolute Acı Pizza</h1>
      <div className="fiyat-yorum">
        <p style={{ fontWeight: "bold", fontSize: "28px" }}>85.50</p>
        <div className="yorum">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>

      <div className="selectors">
        <div className="boyut">
          <FormGroup tag="fieldset">
            <legend style={{ fontSize: "20px" }}>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </legend>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="Küçük"
                checked={formData.boyut === "Küçük"}
                onChange={handleChange}
                invalid={errors.boyut}
              />{" "}
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="Orta"
                checked={formData.boyut === "Orta"}
                onChange={handleChange}
                invalid={errors.boyut}
              />{" "}
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="Büyük"
                checked={formData.boyut === "Büyük"}
                onChange={handleChange}
                invalid={errors.boyut}
              />{" "}
              <Label check>Büyük</Label>
            </FormGroup>
          </FormGroup>
        </div>
        <div className="hamur">
          <FormGroup>
            <Label for="exampleSelect" style={{ fontSize: "20px" }}>
              Hamur Seç <span style={{ color: "red" }}>*</span>
            </Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>İnce Hamur</option>
              <option>Normal Hamur</option>
              <option>Kalın Hamur</option>
            </Input>
          </FormGroup>
        </div>
      </div>
      <div>
        <h2 style={{ fontSize: "20px" }}>Ek Malzemeler</h2>
        <p style={{ marginBottom: "4rem" }}>
          En Fazla 10 malzeme seçebilirsiniz. 5₺
        </p>
        <div className="checkbox">
          <CheckboxList
            onaylanmisMalzemeler={formData.onaylanmisMalzemeler}
            onMalzemeChange={onMalzemeChange}
          />
        </div>
      </div>
      <div className="siparisNot">
        <div>
          <FormGroup>
            <Label for="isim">
              <h2 style={{ fontSize: "20px" }}>Kullanıcı Bilgileri</h2>
            </Label>
            <Input
              id="isim"
              name="isim"
              placeholder="İsminizi giriniz"
              type="text"
              value={formData.isim}
              onChange={handleChange}
              invalid={errors.isim}
              style={{ marginBottom: "50px", fontSize: "14px" }}
            />
          </FormGroup>
        </div>
        <h2 style={{ fontSize: "20px" }}>Sipariş Notu</h2>

        <div>
          <FormGroup>
            <Label for="siparisNotu"></Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.siparisNotu}
              onChange={handleChange}
              style={{
                display: "flex",
                paddingTop: "1.5rem",
                paddingLeft: "1.5rem",
                fontSize: "14px",
              }}
            />
          </FormGroup>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", gap: "10px " }}>
        <SiparisAdet />
        <SiparisVer isValid={isValid} formData={formData} />
      </div>
    </div>
  );
}
