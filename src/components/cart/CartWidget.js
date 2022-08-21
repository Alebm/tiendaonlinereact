import "./CartWidget.css";
//import ItemDetail from "../itemDetail/ItemDetail";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";


const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity() 

  return (
    <Link to='/cart' >
      <img src="/img/cart.svg" alt="" />
      <span>{quantity}</span>
    </Link>
  );
};

export default CartWidget;
