import React from "react";
import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal";
export const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "ci", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
      ;
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>45.32</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
