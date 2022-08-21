import Button from "../button/Button";
import "./counter.css"
import { useState, useEffect } from "react";

const Counter = ({ initial=1, Stock , onAdd }) => {
  const[quantity, setQuantity] =useState(initial)


  useEffect(() =>{
    setQuantity(initial)
  },[initial])

  const increment = () => {
    if (quantity < Stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="counter" >
      <Button disable={quantity === initial} click={decrement} label={"-"}  />
      <h1>{quantity}</h1>
      <Button disable={quantity === Stock} click={increment} label={"+"} />
      <Button disable={quantity === 0 ? true : null} click={() => onAdd(quantity)} label={"Agregar al 🛒"} />
    </div>
  );
};

export default Counter;


