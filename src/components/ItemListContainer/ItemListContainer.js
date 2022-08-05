import "./ItemListContainer.css";
import { getProducts } from "../../productos/listProducts";
import { useState, useEffect } from "react";


import ItemList from "../itemList/ItemList";




const ItemListContainer = ({ listTitle }) => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then((listProducts) => {
      setListProducts(listProducts);
    });
  }, []);

  return (
    <div>
      <h1>{listTitle}</h1>
      <ItemList listProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;
