import "./ItemListContainer.css";
import { getProducts, getProductsByCategory } from "../../productos/listProducts";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../itemList/ItemList";


const ItemListContainer = ({ listTitle }) => {
  const [listProducts, setListProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if(!categoryId){

      getProducts().then((listProducts) => {
        setListProducts(listProducts);
      });

    }else{
      getProductsByCategory(categoryId).then((listProducts) => {
        setListProducts(listProducts);
      });
    }
    
  }, [categoryId]);

  return (
    <div>
      <h1>{listTitle}</h1>
      <ItemList listProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;
