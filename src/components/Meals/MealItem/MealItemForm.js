import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
export const MealItemForm = ({ id, initial = 1 }) => {
  const [increment, setIncrement] = useState(initial);

  const handleChangeIncrement = () => {
    setIncrement(increment + 1);
  };

  const handleChangeDecrement = () => {
    if (increment <= 1) {
      return;
    }
    setIncrement(increment - 1);
  };

  return (
    <div className={classes.form}>
      <div key={id} className={classes.flexible}>
        <button onClick={handleChangeDecrement}>-</button>
        <div>{increment}</div>
        <button onClick={handleChangeIncrement}>+</button>
      </div>
      <button>+ Add</button>
    </div>
  );
};
