import { useState, useEffect } from "react"


const MercadoLibre = () => {

    const [products, setProducts ] = useState([]);

    useEffect(() =>{

        fetch('https://api.mercadolibre.com/sites/MLC/search?q=vehiculo')
            .then(Response => Response.json()
            .then(json => setProducts(json.results)))
    },[]);
    console.log(products);
    return (
        <>
            <div>
                {products.map(prod => {
                    return (
                        <div key={prod.id} >
                            <p>{prod.title}</p>
                            <img src={prod.thumbnail} alt={prod.title}  ></img>
                        </div>
                    )
                })}
            </div>
        </>
    )


}

export default MercadoLibre
