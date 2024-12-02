import React from "react";
import Main from "./main";
import Header from "./header";

function FormSayfasi() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <Main />
    </div>
  );
}

export default FormSayfasi;
