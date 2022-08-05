import { useState, useEffect } from "react"

import { getDetailsByid } from "../../productos/listProducts"
import ItemDetail from "../itemDetail/ItenDetail";


const ItemDetailContainer = () => {

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getDetailsByid(1).then(listProducts => {
            setListProducts(listProducts);
        })
}, []);

    return (
        <div>
            <h1>Detalles</h1>
            <ItemDetail {...listProducts} />
        </div>
    )
}

export default ItemDetailContainer