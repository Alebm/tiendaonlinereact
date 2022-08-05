import "./Item.css";

//import Button from "../button/Button";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <li className="Products">    
      <h3>{product.Marca} {product.Modelo}</h3>
      <img className="imgProducts" src={product.img} alt={product.Marca}></img>
      <h3>tenemos en stock {product.Stock}</h3>
      <Link to={'/detail'} className="link" >Detalles</Link> 
    </li>
  );
};

export default Item;
