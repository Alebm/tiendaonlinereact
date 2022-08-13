import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

//import { getProducts, getProductsByCategory } from "../../productos/listProducts";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../itemList/ItemList";


const ItemListContainer = ({ listTitle }) => {
  const [listProducts, setListProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const collectionProduct =  !categoryId ? collection(db,  'listProducts' ) : query( collection( db, 'listProducts'), where( 'Category', '==',  categoryId));



    getDocs(collectionProduct).then(Response => {

      const listProctsAdapter = Response.docs.map( doc => {
        const data = doc.data()
        return { id: doc.id, ...data }

      })
      setListProducts(listProctsAdapter)
    }).catch( error =>{
      console.log(error)
    }) 

  /*  if(!categoryId){

      getProducts().then((listProducts) => {
        setListProducts(listProducts);
      });

    }else{
      getProductsByCategory(categoryId).then((listProducts) => {
        setListProducts(listProducts);
      });
    } */
    
  }, [categoryId]);

  return (
    <div>
      <h1>{`${listTitle} ${categoryId}`}</h1>
      <ItemList listProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;
