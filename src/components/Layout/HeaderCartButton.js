import React from "react";
import { CartIcon } from "../Cart/CartIcon";
import { Button } from "../StyledsComponents/Button";
export const HeaderCartButton = () => {
  return (
    <Button>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </Button>
  );
};
