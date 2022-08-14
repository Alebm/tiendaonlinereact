import Button from "../button/Button";
import "./counter.css"
import { useState } from "react";

const Counter = ({ initial, stock, onAdd }) => {
  //useEffect(() => {}); se utilizo para pruebas
  initial = 1;

  const [count, setCount] = useState(initial);


  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter" >
      <Button disable={count === initial} click={decrement} label={"-"}  />
      <h1>{count}</h1>
      <Button disable={count === stock} click={increment} label={"+"} />
      <Button disable={count === 0 ? true : null} click={() => onAdd(count)} label={"Agregar al 🛒"} />
      <div>
        <Button label={"Finalizar compra"} />
      </div>
    </div>
  );
};

export default Counter;


