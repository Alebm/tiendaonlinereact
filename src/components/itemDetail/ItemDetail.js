import "./ItemDetail.css";
import Button from "../button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";


const ButtonCount = ({ onAdd, Stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);
  console.log();

  const increment = () => {
    if (count < Stock) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter" >
      <Button disable={count === initial} click={decrement} label={"-"}  />
      <h1>{count}</h1>
      <Button disable={count === Stock} click={increment} label={"+"} />
      <Button disable={count === 0 ? true : null} click={() => onAdd(count)} label={"Agregar al 🛒"} />
    </div>
  );
};

const ItemDetail = ({ Modelo, img, Stock }) => {
  const handleClick = (quantity) => {
    setQuantity(quantity);
    console.log(`agrego la cantidad de : ${quantity}`);
  };

  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <h1> {Modelo} </h1>
      <img className="img" src={img} alt={Modelo}></img>
      {quantity === 0 ? (
        <ButtonCount onAdd={handleClick} Stock={Stock} />
      ) : (
        <Link to="/cart">Finalizar compra</Link>
      )}
    </div>
  );
};

export default ItemDetail;
