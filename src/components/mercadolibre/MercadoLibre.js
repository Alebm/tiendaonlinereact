import { useState, useEffect } from "react"
import "./MercadoLibre.css"


const MercadoLibre = ({listTitle}) => {

    const [products, setProducts ] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() =>{

        /* fetch('https://api.mercadolibre.com/sites/MLC/search?q=vehiculo')
            .then(Response => Response.json()
            .then(json => setProducts(json.results))) */
    },[]);


    const handleOnSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLC/search?q= ${input} `)
            .then(Response => Response.json()
            .then(json => setProducts(json.results))
            .finally(() => setLoading(false)))

    }

    if(loading){
        return <span className="loader"></span>
    }

    
    console.log(products);
    return (
        <>
            <div>
                <h1>{listTitle}</h1>
                <form className="form" onSubmit={handleOnSubmit} >
                    <input value={input} onChange={(e) => setInput(e.target.value ) } />
                    <button type="submit" >Buscar</button>
                </form>
                {products.map(prod => {
                    return (
                        <ul className="Products" key={prod.id} >
                            <p>{prod.title}</p>
                            <img className="imgProducts" src={prod.thumbnail} alt={prod.title}  ></img>
                            <p>{prod.price}</p>
                        </ul>
                    )
                })}
            </div>
        </>
    )


}

export default MercadoLibre
