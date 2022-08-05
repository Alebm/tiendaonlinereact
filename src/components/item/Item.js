import "./Item.css";

<<<<<<< HEAD
//import Button from "../button/Button";
import { Link } from "react-router-dom";
=======
import Button from "../button/Button";

>>>>>>> 66058a49899ea62a3dfd33ba856520dd35cc2201

const Item = ({ product }) => {
  return (
    <li className="Products">    
      <h3>{product.Marca} {product.Modelo}</h3>
      <img className="imgProducts" src={product.img} alt={product.Marca}></img>
      <h3>tenemos en stock {product.Stock}</h3>
<<<<<<< HEAD
      <Link to={'/detail'} className="link" >Detalles</Link> 
=======
      <Button label={"Detalles"} />
>>>>>>> 66058a49899ea62a3dfd33ba856520dd35cc2201
    </li>
  );
};

export default Item;
