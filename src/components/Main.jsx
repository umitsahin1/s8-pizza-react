import React from "react";
import "./main.css";
import { FormGroup, Input, Label } from "reactstrap";

export default function Main() {
  return (
    <div className="main-css">
      <h1 className="main-baslik">Position Absolute Acı Pizza</h1>
      <div className="fiyat-yorum">
        <p>85.50</p>
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
            <legend>Boyut Seç</legend>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
            </FormGroup>
          </FormGroup>
        </div>
        <div className="hamur">
          <FormGroup>
            <Label for="exampleSelect">Hamur Seç</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>İnce Hamur</option>
              <option>Normal Hamur</option>
              <option>Kalın Hamur</option>
            </Input>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
