import React, { useState } from "react";

export default function QuantitySelector({ quantity, setQuantity }) {
  
  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "170px",
        height: "57px",
      }}  
    >
      <button
        onClick={decrease}
        style={{
          padding: "5px 10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#FDC913",
          width: "57px",
          height: " 56px",
          borderRadius: "5px 0 0 5px ",
          border: "none",
        }}
      >
        -
      </button>
      <span
        style={{
          fontSize: "16px",
          minWidth: "30px",
          textAlign: "center",
          border: "1px solid #D9D9D9",
          width: "56px",
          height: " 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {quantity}
      </span>
      <button
        onClick={increase}
        style={{
          padding: "5px 10px",
          fontSize: "16px",
          cursor: "pointer",
          width: "57px",
          height: " 56px",
          borderRadius: "0 5px 5px 0 ",
          border: "none",
          backgroundColor: "#FDC913",
        }}
      >
        +
      </button>
    </div>
  );
}
