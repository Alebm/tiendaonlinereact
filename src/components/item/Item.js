import './Item.css'


const Item = ({product}) => {

    return(

            <li className="Products" >
                <h2>{product.Marca}</h2>
                <h3>{product.Modelo}</h3>
                <img className='imgProducts' src={product.img} alt={product.Marca} ></img>
                <h3>tenemos en stock {product.Stock}</h3>
            </li>
    )


}

export default Item