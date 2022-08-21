import "./ItemDetail.css";
import Button from "../button/Button";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";


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

const ItemDetail = ({ Modelo, img, Stock, Precio, id }) => {
  const [quantity, setQuantity] = useState(0);

  const { addVehicle } = useContext(CartContext);

  
  
  const handleClick = (quantity) => {
    setQuantity(quantity);
    const productAdd = {
      id, Modelo, Precio, quantity
    }
    
    addVehicle(productAdd)
    //onsole.log(`agrego la cantidad de : ${quantity}`);
  };
  
  return (
    <div>
      <h1> {Modelo} </h1>
      <img className="img" src={img} alt={Modelo}></img>
      {quantity === 0 ? (
        <ButtonCount onAdd={handleClick} Stock={Stock} />
      ) : (
        <Link to='/cart'>Finalizar compra</Link>
      )}
    </div>
  );
};

export default ItemDetail;
