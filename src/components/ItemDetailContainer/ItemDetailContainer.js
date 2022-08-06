import { useState, useEffect } from "react"

import Counter from "../counter/counter";
import { getDetailsByid } from "../../productos/listProducts"
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [listProducts, setListProducts] = useState([]);
    const [show, setShow] = useState(true)

    //desestructuro el objeto que traigo de la ruta con el hook useParams
    const { productId } = useParams();

    useEffect(() => {
        getDetailsByid(productId).then(listProducts => {
            setListProducts(listProducts);
        })
}, []);

const handleClick = (quantity) => {
    console.log(`agrego la cantidad de : ${quantity}`);
};

    return (
        <div>
            <h1>Detalles</h1>
            <ItemDetail {...listProducts} />
            {show === true ? <Counter stock={listProducts.Stock} onAdd={handleClick} /> : null}
            <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
        </div>
    )
}

export default ItemDetailContainer