import "./ItemDetail.css";
import Counter from "../counter/counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";


const ItemDetail = ({ Modelo, img, Stock, Precio, id }) => {
  const [quantity, setQuantity] = useState(0);

  const { addVehicle, getProductQuantity } = useContext(CartContext);

  
  
  const handleClick = (quantity) => {
    setQuantity(quantity);
    const productAdd = {
      id, Modelo, Precio, quantity
    }
    
    addVehicle(productAdd)
    //onsole.log(`agrego la cantidad de : ${quantity}`);
    console.log(productAdd);
  };

  const productQuantity = getProductQuantity(id);
  console.log(productQuantity);
  
  return (
    <div>
      <h1> {Modelo} </h1>
      <img className="img" src={img} alt={Modelo}></img>
      {quantity === 0 ? (
        <Counter onAdd={handleClick} Stock={Stock} initial={productQuantity} />
      ) : (
        <Link to='/cart'>Finalizar compra</Link>
      )}
    </div>
  );
};

export default ItemDetail;
