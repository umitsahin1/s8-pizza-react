import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import FormSayfasi from "./components/FormSayfasi";
import SiparisOnay from "./components/SiparisOnay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialForm = {
  isim: "",
  boyut: "",
  onaylanmisMalzemeler: [],
  siparisNotu: "",
  hamur: "Süper İnce",
};

function App() {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState(initialForm);

  return (
    <div className="app-css">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/form">
          <FormSayfasi
            quantity={quantity}
            setQuantity={setQuantity}
            formData={formData}
            setFormData={setFormData}
          />
        </Route>
        <Route path="/siparis">
          <SiparisOnay quantity={quantity} formData={formData} />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
      />
    </div>
  );
}

export default App;
