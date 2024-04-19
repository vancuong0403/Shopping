import React, { useState, createContext, useEffect } from "react";
import api from "../api";

const QtyContext = createContext();

export const QtyProvider = ({ children }) => {
  const cartLocal = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState(JSON.parse(cartLocal));
  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    setQty((prev) => prev + 1);
  };

  useEffect(() => {
    api
      .post("/product/cart", JSON.stringify(cartItems))
      .then((res) => {
        res.data.data.forEach((item) => {
          if (item.qty) {
            setQty((prev) => prev + item.qty);
          } else {
            setQty(0);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <QtyContext.Provider value={{ qty, handleAdd }}>
      {children}
    </QtyContext.Provider>
  );
};

export default QtyContext;
