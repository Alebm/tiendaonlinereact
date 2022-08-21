import { useState, useEffect } from "react";

//import Counter from "../counter/counter";
//import { getDetailsByid } from "../../productos/listProducts"
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";



const ItemDetailContainer = ( ) => {
  const [listProducts, setListProducts] = useState([]);


  //desestructuro el objeto que traigo de la ruta con el hook useParams
  const { productId } = useParams();
  //const { Stock } = useParams();

  useEffect(() => {
    getDoc(doc(db, "listProducts", productId))
      .then((Response) => {
        const data = Response.data();
        const productConvert = { id: Response.id, ...data };
        setListProducts(productConvert);
      })
      .catch((error) => {
        console.log(error);
      });

    /* getDetailsByid(productId).then(listProducts => {
            setListProducts(listProducts);
        }) */


  }, [productId]);

 
  return (
    <div>
      <h1>Detalles</h1>
      <ItemDetail {...listProducts}  {...listProducts.Stock} />
            {/* <Counter stock={listProducts.Stock} onAdd={handleClick} /> */}
    </div>
  );
};

export default ItemDetailContainer;
