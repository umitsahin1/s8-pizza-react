import React from "react";
import Main from "./main";
import Header from "./header";
function FormSayfasi({
  quantity = { quantity },
  setQuantity = { setQuantity },
  formData = { formData },
  setFormData = { setFormData },
}) {
  return (
    <div
      className="formsayfasi-css"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <Main
        quantity={quantity}
        setQuantity={setQuantity}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default FormSayfasi;
