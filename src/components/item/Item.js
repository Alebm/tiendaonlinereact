import "./Item.css";

import Button from "../button/Button";


const Item = ({ product }) => {
  return (
    <li className="Products">    
      <h3>{product.Marca} {product.Modelo}</h3>
      <img className="imgProducts" src={product.img} alt={product.Marca}></img>
      <h3>tenemos en stock {product.Stock}</h3>
      <Button label={"Detalles"} />
    </li>
  );
};

export default Item;
