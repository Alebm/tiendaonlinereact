import "./Item.css";


//import Button from "../button/Button";
import { Link } from "react-router-dom";





const Item = ({ product }) => {
  return (
    <li className="Products">    
      <h4>{product.Marca}</h4>
      <h4>{product.Modelo}</h4>
      <img className="imgProducts" src={product.img} alt={product.Marca}></img>
      <Link to={`/detail/${product.id}`} className="link" >Detalles</Link> 

    </li>
  );
};

export default Item;
